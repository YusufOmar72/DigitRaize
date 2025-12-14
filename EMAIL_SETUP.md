# Email Setup Guide for Digitraize Contact Form

## Overview
This guide will help you set up the contact form emails using Resend.

## What's Included
- ✅ **User Confirmation Email** - Sent to customers who fill out the form
- ✅ **Admin Notification Email** - Sent to you with all form details
- ✅ **API Route** - Ready-to-use Next.js API endpoint

## Setup Steps

### 1. Install Resend
```bash
pnpm add resend
```

### 2. Get Your Resend API Key
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your domain (or use their testing domain for development)
4. Copy your API key from the dashboard

### 3. Add Environment Variable
Create or update your `.env.local` file:

```env
RESEND_API_KEY=re_your_api_key_here
```

### 4. Configure Your Domain
In the API route (`app/api/contact/route.ts`), update the `from` field:

**For production (after domain verification):**
```typescript
from: 'Digitraize <info@digitraize.com>'
```

**For testing (using Resend's test domain):**
```typescript
from: 'onboarding@resend.dev'
```

### 5. Update Contact Form Component
Update `app/components/sections/contact.tsx` to handle form submission:

```typescript
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitStatus('success');
      e.currentTarget.reset();
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    console.error('Error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

// Then update your form:
<form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
  {/* Add name attribute to all inputs */}
  <Input name="name" id="name" type="text" placeholder="Your name" required />
  <Input name="email" id="email" type="email" placeholder="your@email.com" required />
  <Input name="subject" id="subject" type="text" placeholder="Project inquiry" required />
  <Textarea name="message" id="message" placeholder="Tell us about your project..." required />
  
  <Button type="submit" disabled={isSubmitting}>
    {isSubmitting ? 'Sending...' : 'Send Message'}
  </Button>
  
  {submitStatus === 'success' && <p className="text-green-600">Message sent successfully!</p>}
  {submitStatus === 'error' && <p className="text-red-600">Failed to send. Please try again.</p>}
</form>
```

## Email Templates Location
- **User Confirmation:** `app/components/emails/user-confirmation.tsx`
- **Admin Notification:** `app/components/emails/admin-notification.tsx`

## Features

### User Confirmation Email
- Personalized greeting with their name
- Confirmation of their inquiry
- Expected response time (24-48 hours)
- "What happens next" section
- Your contact information
- Matches your website's zinc/monochrome design

### Admin Notification Email
- Instant alert badge
- All contact details in a clean table
- Full message displayed
- Quick action button to reply directly
- Timestamp of submission
- Eye-catching red theme for visibility

## Testing

### Development Testing
Use Resend's testing domain and send to your own email:

```typescript
from: 'onboarding@resend.dev',
to: ['your-test-email@gmail.com'],
```

### Preview Emails Locally (Optional)
If you want to preview emails during development:

```bash
pnpm add react-email @react-email/components
npx email dev
```

Then view at `http://localhost:3000`

## Resend Pricing
- **Free Tier:** 100 emails/day, 3,000/month
- **Pro:** $20/month for 50,000 emails/month
- More info: [resend.com/pricing](https://resend.com/pricing)

## Next Steps
1. Set up Supabase to store form submissions
2. Add spam protection (e.g., rate limiting, honeypot)
3. Set up email notifications on your phone
4. Monitor email delivery in Resend dashboard

## Support
- Resend Docs: [resend.com/docs](https://resend.com/docs)
- React Email: [react.email](https://react.email)

---

**Note:** Remember to never commit your `.env.local` file to version control!


