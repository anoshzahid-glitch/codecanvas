'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodePreviewProps {
  code: string;
  language: string;
}

export function CodePreview({ code, language }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting for demo
  const highlightCode = (code: string, lang: string) => {
    const keywords: { [key: string]: string[] } = {
      javascript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'async', 'await'],
      typescript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'interface', 'type', 'async', 'await'],
      swift: ['import', 'struct', 'class', 'func', 'var', 'let', 'if', 'else', 'for', 'while', 'return', 'async', 'await', 'Task'],
    };

    const langKeywords = keywords[lang] || keywords.javascript;
    let highlighted = code;

    // Highlight keywords
    langKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="text-cyber-pink font-semibold">${keyword}</span>`);
    });

    // Highlight strings
    highlighted = highlighted.replace(
      /(['"`])(.*?)\1/g,
      '<span class="text-cyber-green">$1$2$1</span>'
    );

    // Highlight comments
    highlighted = highlighted.replace(
      /\/\/(.*?)$/gm,
      '<span class="text-gray-500 italic">//$1</span>'
    );
    highlighted = highlighted.replace(
      /\/\*([\s\S]*?)\*\//g,
      '<span class="text-gray-500 italic">/*$1*/</span>'
    );

    // Highlight numbers
    highlighted = highlighted.replace(
      /\b(\d+)\b/g,
      '<span class="text-cyber-purple">$1</span>'
    );

    return highlighted;
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-black/30 border-b border-white/10 rounded-t-lg">
        <span className="text-xs text-gray-400 uppercase font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-cyber-blue transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code Block */}
      <div className="relative overflow-x-auto bg-black/40 rounded-b-lg">
        <pre className="p-4 text-sm font-mono leading-relaxed">
          <code
            className="text-gray-300"
            dangerouslySetInnerHTML={{
              __html: highlightCode(code, language)
            }}
          />
        </pre>
        
        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/10 to-transparent animate-scan" />
        </div>
      </div>
    </div>
  );
}
