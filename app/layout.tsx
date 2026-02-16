import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CodeCanvas - 3D Portfolio Gallery',
  description: 'Transform your GitHub projects into an interactive, immersive 3D experience. AI-powered code showcase platform.',
  keywords: ['portfolio', '3D', 'developer', 'code', 'showcase', 'AI', 'interactive'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'CodeCanvas - 3D Portfolio Gallery',
    description: 'Showcase your code in stunning 3D with AI-powered insights',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
