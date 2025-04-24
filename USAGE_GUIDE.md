# AFFILIFY - Usage Guide

This guide will help you deploy your AFFILIFY website to Vercel and connect it to your custom domain "Affilify.eu".

## Table of Contents
1. [Repository Structure](#repository-structure)
2. [Local Development](#local-development)
3. [Deploying to Vercel](#deploying-to-vercel)
4. [Connecting Your Custom Domain](#connecting-your-custom-domain)
5. [Customizing Your Website](#customizing-your-website)
6. [Troubleshooting](#troubleshooting)

## Repository Structure

The AFFILIFY repository follows the Next.js App Router structure:

```
affilify-repo/
├── app/                    # Main application pages
│   ├── checkout/           # Checkout page with PayPal integration
│   ├── login/              # Login page with demo credentials
│   ├── pricing/            # Pricing page with Free, $10, $50 tiers
│   ├── signup/             # Signup page
│   ├── globals.css         # Global CSS styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── ui/                 # UI components like buttons
│   ├── footer.tsx          # Footer component
│   ├── header.tsx          # Header component
│   └── paypal-integration.tsx # PayPal integration component
├── lib/                    # Utility functions and libraries
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── vercel.json             # Vercel deployment configuration
```

## Local Development

To run the website locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to Vercel

### Prerequisites
- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com))

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "affilify-website")
4. Choose "Public" or "Private" visibility
5. Click "Create repository"

### Step 2: Upload Files to GitHub
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/affilify-website.git
   ```

2. Copy all files from the AFFILIFY repository to your cloned repository folder

3. Commit and push the files:
   ```bash
   cd affilify-website
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and suggest optimal settings
5. Click "Deploy"

Vercel will build and deploy your website. Once completed, you'll receive a URL like `https://affilify-website.vercel.app`.

## Connecting Your Custom Domain

### Step 1: Add Your Domain in Vercel
1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Enter your domain: `affilify.eu`
3. Click "Add"

### Step 2: Configure DNS at GoDaddy
1. Log in to your GoDaddy account
2. Go to "My Products" > "DNS"
3. Find your domain (`affilify.eu`) and click "Manage DNS"
4. Add the following DNS records as instructed by Vercel:

   For an apex domain (affilify.eu):
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - TTL: 600 seconds

   For the www subdomain:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
   - TTL: 600 seconds

5. Save your changes

### Step 3: Verify Domain Connection
1. Return to Vercel and wait for domain verification
2. Once verified, your website will be accessible at `https://affilify.eu`

## Customizing Your Website

### Updating Content
- Edit page files in the `app` directory to update content
- Modify components in the `components` directory

### Changing Styles
- Update global styles in `app/globals.css`
- Modify Tailwind configuration in `tailwind.config.js`

### Updating Pricing
- Edit the pricing plans in `app/pricing/page.tsx`

### PayPal Integration
- Replace the test client ID in `components/paypal-integration.tsx` with your actual PayPal client ID

## Troubleshooting

### Build Errors
If you encounter build errors during deployment:

1. Check the Vercel build logs for specific error messages
2. Ensure all dependencies are correctly listed in `package.json`
3. Verify that your Next.js configuration is correct

### Domain Connection Issues
If your domain isn't connecting properly:

1. Verify DNS records are correctly set up at GoDaddy
2. Check for any DNS propagation delays (can take up to 48 hours)
3. Ensure SSL/TLS certificates are properly configured in Vercel

### Authentication Issues
For the demo version, use these credentials:
- Email: demo@affilify.eu
- Password: password123

For a production version, you'll need to implement a proper authentication system.

---

For additional help, please contact support at support@affilify.eu
