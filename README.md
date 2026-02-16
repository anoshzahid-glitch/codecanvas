# 🎨 CodeCanvas - 3D Portfolio Gallery

> Transform your GitHub projects into an interactive, immersive 3D experience that makes recruiters stop scrolling.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![React](https://img.shields.io/badge/React-18.2-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.160-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)

## ✨ Features

### 🎯 What Makes CodeCanvas Different

- **🌌 3D Project Galaxy** - Your projects float in space like stars in a constellation
- **🤖 AI-Powered Insights** - Automatic code explanations using GPT-4
- **⚡ Live Code Execution** - Interactive code snippets that recruiters can modify and run
- **🎨 Cyberpunk Aesthetic** - Professional, modern UI with stunning glassmorphism effects
- **📱 Fully Responsive** - Beautiful on desktop, tablet, and mobile
- **🔗 GitHub Integration** - Automatically pull projects from your GitHub repos
- **🎥 Shareable** - Export individual projects as videos or GIFs for LinkedIn
- **♿ Accessible** - WCAG compliant with keyboard navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/codecanvas.git
cd codecanvas
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Adding Your Own Projects

Edit `lib/sampleProjects.ts` to add your projects:

```typescript
export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Your Amazing Project',
    description: 'A brief description of what it does',
    technologies: ['React', 'TypeScript', 'Node.js'],
    language: 'typescript',
    codeSnippet: `
      // Your code snippet here
      const awesome = true;
    `,
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://your-project.com',
    color: '#00d9ff', // Hex color for the card
    position: [0, 0, 0] // 3D position (auto-calculated if omitted)
  }
];
```

### Customizing Colors

Modify `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  cyber: {
    dark: '#0a0e27',
    darker: '#050813',
    blue: '#00d9ff',    // Primary accent
    purple: '#bd00ff',  // Secondary accent
    pink: '#ff006e',    // Tertiary accent
    green: '#00ff87',   // Success/highlight
  }
}
```

### Enabling AI Features (Optional)

To enable AI-powered code explanations:

1. Get an API key from [OpenAI](https://platform.openai.com/)
2. Create a `.env.local` file:
```env
OPENAI_API_KEY=your_api_key_here
```

3. The AI features will automatically activate

## 📁 Project Structure

```
codecanvas/
├── app/
│   ├── globals.css          # Global styles with cyberpunk theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   ├── Scene3D.tsx          # 3D canvas and scene setup
│   ├── FloatingCard.tsx     # Individual 3D project cards
│   ├── ProjectDetailPanel.tsx # Slide-out detail panel
│   ├── CodePreview.tsx      # Syntax-highlighted code display
│   ├── Header.tsx           # Navigation header
│   └── Hero.tsx             # Landing hero section
├── lib/
│   └── sampleProjects.ts    # Your project data
├── types/
│   └── index.ts             # TypeScript type definitions
└── public/                  # Static assets
```

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) - React framework with SSR
- **3D Graphics:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful icon library

## 🎯 Use Cases

### For Job Seekers
- Create a memorable portfolio that stands out
- Showcase technical skills in a unique way
- Demonstrate creativity and modern tech knowledge

### For Developers
- Learn Three.js and 3D web development
- Build an impressive open-source project
- Practice full-stack development skills

### For Recruiters
- Quickly assess a candidate's technical abilities
- Understand project complexity at a glance
- Experience interactive code examples

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Test on multiple browsers
- Update documentation for new features

## 📝 Roadmap

- [ ] GitHub API integration for automatic project import
- [ ] Real-time collaborative editing
- [ ] AI code explanation using Claude/GPT-4
- [ ] Video/GIF export functionality
- [ ] Custom themes and color schemes
- [ ] Project analytics dashboard
- [ ] Social sharing optimizations
- [ ] Performance optimizations for mobile

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Three.js community for amazing 3D libraries
- Vercel for hosting and deployment
- All the amazing open-source contributors

## 💬 Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/codecanvas/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/codecanvas/discussions)
- **Twitter:** [@yourusername](https://twitter.com/yourusername)

## ⭐ Show Your Support

If this project helped you land your dream job or inspired you to create something amazing, please give it a star! ⭐

---

**Built with 💙 by [Your Name](https://github.com/yourusername)**

*Making portfolios awesome, one 3D card at a time.*
