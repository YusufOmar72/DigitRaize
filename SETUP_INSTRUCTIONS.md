# Contact Form Setup Instructions

## ✅ What's Been Set Up

1. **Supabase Client** - Server-side client configured
2. **Database Migration** - SQL file created for contact_submissions table
3. **API Route** - `/api/contact` handles form submissions
4. **Contact Form** - Updated with submission handling
5. **Email Templates** - User confirmation and admin notification ready

## 📋 Required Environment Variables

Add these to your `.env.local` file:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend
RESEND_API_KEY=your_resend_api_key

# Admin Emails (comma-separated)
ADMIN_EMAILS=info@digitraize.com,admin@digitraize.com,another@email.com
```

## 🗄️ Database Setup

### Option 1: Using Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `supabase/migrations/001_create_contact_submissions.sql`
4. Paste and run it in the SQL Editor

### Option 2: Using Supabase CLI

If you have Supabase CLI installed:

```bash
supabase db push
```

## 📧 Admin Email Configuration

The admin notification emails will be sent to all addresses listed in `ADMIN_EMAILS` environment variable.

**To update admin emails:**
1. Open `.env.local`
2. Update `ADMIN_EMAILS` with comma-separated email addresses:
   ```env
   ADMIN_EMAILS=email1@example.com,email2@example.com,email3@example.com
   ```
3. Restart your dev server

## 🧪 Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check:
   - ✅ Form submission saved to Supabase
   - ✅ User receives confirmation email
   - ✅ All admin emails receive notification

## 📊 Viewing Submissions

You can view all contact form submissions in your Supabase dashboard:
1. Go to **Table Editor**
2. Select `contact_submissions` table
3. View all submissions with timestamps

## 🔒 Security Notes

- The `SUPABASE_SERVICE_ROLE_KEY` should **NEVER** be exposed to the client
- Row Level Security (RLS) is enabled - only server-side code can read submissions
- All form inputs are validated before saving
- Email addresses are validated before sending

## 🐛 Troubleshooting

### Emails not sending?
- Check Resend API key is correct
- Verify your domain is verified in Resend
- Check Resend dashboard for delivery status

### Database errors?
- Verify Supabase URL and service role key
- Ensure migration has been run
- Check Supabase logs for errors

### Form not submitting?
- Check browser console for errors
- Verify API route is accessible
- Check network tab for failed requests

