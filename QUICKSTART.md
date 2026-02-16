# 🚀 Quick Start Guide - CodeCanvas

## Get Running in 2 Minutes

### Step 1: Install Node.js
Download from [nodejs.org](https://nodejs.org/) (version 18 or higher)

### Step 2: Open Terminal
- **Mac:** Press `Cmd + Space`, type "Terminal"
- **Windows:** Press `Win + R`, type "cmd"
- **Linux:** Press `Ctrl + Alt + T`

### Step 3: Navigate to Project
```bash
cd path/to/codecanvas
```

### Step 4: Install Dependencies
```bash
npm install
```
⏱️ This takes 1-2 minutes

### Step 5: Start Development Server
```bash
npm run dev
```

### Step 6: Open Browser
Go to: **http://localhost:3000**

**🎉 Done! You should see your 3D portfolio!**

---

## Customize It (5 Minutes)

### Add Your Own Projects

1. Open `lib/sampleProjects.ts`
2. Replace the example projects with yours:

```typescript
{
  id: '1',
  title: 'My Awesome App',
  description: 'What it does in one sentence',
  technologies: ['React', 'Node.js', 'MongoDB'],
  language: 'typescript',
  codeSnippet: `
    // Paste your best code here
    const myCode = 'amazing';
  `,
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://myproject.com',
  color: '#00d9ff',
}
```

3. Save the file
4. The browser auto-refreshes! ✨

### Change Colors

1. Open `tailwind.config.js`
2. Change the `cyber` colors:

```javascript
colors: {
  cyber: {
    blue: '#00d9ff',    // Change this
    purple: '#bd00ff',  // And this
    pink: '#ff006e',    // And this
  }
}
```

3. Save and see instant changes!

---

## Deploy It (1 Minute)

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"

**Done!** Your site is live. 🚀

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Drag your project folder
4. Click "Deploy"

**Live in 30 seconds!** ⚡

---

## Common Issues

### "npm: command not found"
→ Install Node.js from [nodejs.org](https://nodejs.org/)

### Port 3000 already in use
→ Run: `npm run dev -- -p 3001`

### 3D scene not loading
→ Make sure you're using a modern browser (Chrome, Firefox, Safari)

---

## Next Steps

✅ Customize projects in `lib/sampleProjects.ts`  
✅ Change colors in `tailwind.config.js`  
✅ Deploy to Vercel or Netlify  
✅ Share your portfolio!  

**Need help?** Check the full [README.md](README.md)

**Want to go deeper?** Read [SHOWCASE.md](SHOWCASE.md)

---

🎯 **Pro Tip:** Update your GitHub, LinkedIn, and resume with your new portfolio link!
