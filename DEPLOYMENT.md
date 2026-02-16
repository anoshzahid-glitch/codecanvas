# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

The easiest way to deploy CodeCanvas is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/codecanvas)

1. Click the button above
2. Connect your GitHub account
3. Configure your project (default settings work great)
4. Deploy! 🎉

Your site will be live at `https://your-project.vercel.app`

## Manual Deployment

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git

### Build for Production

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test the production build locally
npm start
```

## Deploy to Other Platforms

### Netlify

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy!

### AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t codecanvas .
docker run -p 3000:3000 codecanvas
```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: OpenAI API for AI features
OPENAI_API_KEY=your_openai_key_here

# Optional: GitHub token for API integration
GITHUB_TOKEN=your_github_token_here

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Performance Optimization

### Image Optimization
- Use WebP format for images
- Compress images before uploading
- Use Next.js Image component

### Code Splitting
- Already handled by Next.js
- Lazy load 3D components (already implemented)

### Caching
- Set up CDN (Vercel handles this automatically)
- Enable static optimization where possible

## Monitoring

### Set Up Error Tracking

Add Sentry (optional):

```bash
npm install @sentry/nextjs
```

### Performance Monitoring

Use Vercel Analytics or Google Analytics for tracking.

## Custom Domain

### On Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records
4. Done! SSL is automatic

### DNS Configuration
```
Type: CNAME
Name: www (or @)
Value: cname.vercel-dns.com
```

## Troubleshooting

### Build Fails
- Check Node.js version (needs 18+)
- Clear `.next` folder and rebuild
- Verify all dependencies are installed

### 3D Scene Not Loading
- Check browser console for errors
- Ensure WebGL is supported
- Try disabling browser extensions

### Performance Issues
- Enable production mode
- Check Network tab for large assets
- Optimize images and code splitting

## Security Checklist

- [ ] Never commit `.env` files
- [ ] Use environment variables for API keys
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Set up proper CORS if using external APIs
- [ ] Regularly update dependencies

## Post-Deployment

1. Test all features in production
2. Check mobile responsiveness
3. Run Lighthouse audit
4. Set up monitoring/analytics
5. Share your awesome portfolio! 🎉

---

**Need Help?**
- Check [GitHub Issues](https://github.com/yourusername/codecanvas/issues)
- Join our [Discussions](https://github.com/yourusername/codecanvas/discussions)
