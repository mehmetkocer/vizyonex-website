# Vizyonex Website Deployment Guide

## Repository Setup ✅
- Repository: `git@github.com:mehmetkocer/vizyonex-website.git`
- Code successfully pushed to main branch

## GitHub Pages Configuration Required

To complete the deployment setup, you need to enable GitHub Pages in the repository settings:

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/mehmetkocer/vizyonex-website
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 2: Verify Deployment
1. The GitHub Actions workflow will automatically trigger on push to main branch
2. Check the **Actions** tab to monitor deployment progress
3. Once deployed, your site will be available at: `https://mehmetkocer.github.io/vizyonex-website/`

## GitHub Actions Workflow
The deployment is handled by `.github/workflows/deploy.yml` which:
- ✅ Builds the Next.js application with static export
- ✅ Runs linting and type checking
- ✅ Generates static files in `/out` directory
- ✅ Deploys to GitHub Pages automatically

## Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Serve production build locally
npm run serve
```

## Environment Variables
For contact form functionality, you'll need to set up Formspree:
1. See `FORMSPREE_SETUP.md` for detailed instructions
2. Copy `.env.local.example` to `.env.local`
3. Add your Formspree endpoint URL

## Build Status
- ✅ Static export configured
- ✅ GitHub Actions workflow created
- ✅ Code pushed to repository
- 🔄 Awaiting GitHub Pages activation

## Next Steps
1. Enable GitHub Pages in repository settings (source: GitHub Actions)
2. Monitor first deployment in Actions tab
3. Configure custom domain (optional)
4. Set up Formspree for contact form functionality