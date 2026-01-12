# EmailJS Setup Guide

## Steps to Configure EmailJS for Contact Form

1. **Sign up for EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account (200 emails/month on free tier)

2. **Add Email Service**
   - Go to https://dashboard.emailjs.com/admin/integration
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - **Note your Service ID** (e.g., `service_xxxxx`)

3. **Create Email Template**
   - Go to https://dashboard.emailjs.com/admin/template
   - Click "Create New Template"
   - Set up your template with these variables:
     - `{{name}}` - Sender's name
     - `{{email}}` - Sender's email
     - `{{company}}` - Sender's company (optional)
     - `{{subject}}` - Selected subject
     - `{{message}}` - Message content
   - Set "To Email" to: `dannyrongda@gmail.com`
   - Set "From Name" to: `{{name}}`
   - Set "Reply To" to: `{{email}}`
   - **Note your Template ID** (e.g., `template_xxxxx`)

4. **Get Your Public Key**
   - Go to https://dashboard.emailjs.com/admin/integration
   - Find your "Public Key" (e.g., `xxxxxxxxxxxxx`)

5. **Update the Code**
   - Open `src/main.js`
   - Find the `initContactForm()` function
   - Replace these placeholders:
     - `YOUR_PUBLIC_KEY` → Your EmailJS public key
     - `YOUR_SERVICE_ID` → Your EmailJS service ID
     - `YOUR_TEMPLATE_ID` → Your EmailJS template ID

## Example Configuration

After setup, your code should look like this:

```javascript
const result = await emailjs.sendForm(
  'service_abc123',      // Your service ID
  'template_xyz789',     // Your template ID
  form,
  'your-public-key-here' // Your public key
);
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check `dannyrongda@gmail.com` for the email
4. Check the browser console for any errors

## Troubleshooting

- **"EmailJS is not loaded"**: Make sure the EmailJS script is loaded in `index.html`
- **"Invalid service ID"**: Double-check your service ID in the EmailJS dashboard
- **"Invalid template ID"**: Verify your template ID matches the one in the dashboard
- **Emails not arriving**: Check spam folder, verify email service configuration in EmailJS dashboard

