# Formspree Contact Form Setup

This guide explains how to configure the Formspree contact form for the Vizyonex website.

## Step 1: Create a Formspree Account

1. Visit [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account (allows 50 submissions per month)
3. Verify your email address

## Step 2: Create a New Form

1. Log in to your Formspree dashboard
2. Click "New Form" or "Add Form"
3. Choose "React/Ajax" form type
4. Name your form: "Vizyonex Contact Form"
5. Set the email where you want to receive form submissions
6. Copy the form endpoint URL (e.g., `https://formspree.io/f/xpzgkdvr`)

## Step 3: Configure Environment Variables

1. Create a `.env.local` file in the project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Replace `YOUR_FORM_ID` with your actual Formspree endpoint:
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_actual_form_id
   ```

## Step 4: Form Configuration (Optional)

In your Formspree dashboard, you can configure:

- **Redirect URL**: Where users go after successful submission
- **Email Templates**: Customize notification emails
- **Spam Protection**: Enable reCAPTCHA
- **File Uploads**: Allow attachments (if needed)

## Step 5: Testing the Form

1. Make sure your environment variables are set
2. Start the development server: `npm run dev`
3. Navigate to the contact section
4. Fill out and submit the form
5. Check your email for the form submission

## Form Fields

The form captures the following information:

- **Name** (`name`): User's full name
- **Email** (`email`): Contact email address
- **Subject** (`subject`): Pre-defined subject categories
- **Message** (`message`): Detailed message content

## Additional Formspree Features

- **Reply-To**: Automatically set to sender's email
- **Custom Subject**: Prefixed with "Vizyonex İletişim:"
- **Spam Protection**: Built-in spam filtering
- **Email Notifications**: Instant notifications to your inbox

## Troubleshooting

- **Form not submitting**: Check environment variables
- **Email not received**: Check spam folder
- **CORS errors**: Ensure domain is added to Formspree settings
- **Submission limit reached**: Upgrade plan or wait for monthly reset

## Production Deployment

For production deployment, set the environment variable in your hosting platform:

- **Vercel**: Add in project settings → Environment Variables
- **Netlify**: Add in site settings → Environment Variables  
- **GitHub Pages**: Use GitHub Secrets for Actions

## Security Notes

- Environment variables starting with `NEXT_PUBLIC_` are exposed to the browser
- This is safe for Formspree endpoints as they're meant to be public
- Never commit `.env.local` files to version control