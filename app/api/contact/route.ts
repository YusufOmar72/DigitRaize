import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { UserConfirmationEmail } from '@/app/components/emails/user-confirmation';
import { AdminNotificationEmail } from '@/app/components/emails/admin-notification';
import { supabase } from '@/lib/supabase/server';

// Lazy initialization of Resend client to prevent build-time errors
let resendClient: Resend | null = null;

function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('Missing RESEND_API_KEY environment variable');
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

// Admin email addresses - must be set via environment variable in production
function getAdminEmails(): string[] {
  const adminEmails = process.env.ADMIN_EMAILS;
  if (adminEmails) {
    return adminEmails.split(',').map(email => email.trim());
  }
  // Only use default emails in development
  if (process.env.NODE_ENV === 'development') {
    return [
      'yusufomar840@gmail.com',
      'digitraize@gmail.com',
      'info@digitraize.com',
    ];
  }
  return [];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const submittedAt = new Date();

    // Save to Supabase
    const { data: submissionData, error: supabaseError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          subject,
          message,
          submitted_at: submittedAt.toISOString(),
        },
      ])
      .select()
      .single();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to save submission. Please try again.' },
        { status: 500 }
      );
    }

    // Get Resend client and admin emails (lazy initialization)
    const resend = getResendClient();
    const ADMIN_EMAILS = getAdminEmails();

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: 'Digitraize <info@digitraize.com>', // Must be your verified domain
      to: [email],
      subject: `We received your message - ${subject}`,
      react: UserConfirmationEmail({ name, email, subject, message }),
    });

    // Send notification emails to all admin addresses
    const adminEmailPromises = ADMIN_EMAILS.map((adminEmail) =>
      resend.emails.send({
        from: 'Digitraize Contact Form <info@digitraize.com>', // Must be your verified domain
        to: [adminEmail],
        subject: `New Contact Form Submission from ${name}`,
        react: AdminNotificationEmail({ name, email, subject, message, submittedAt }),
      })
    );

    const adminEmailResponses = await Promise.all(adminEmailPromises);

    // Check if emails were sent successfully
    const userEmailError = userEmailResponse.error;
    const adminEmailErrors = adminEmailResponses
      .map((response, index) => ({
        email: ADMIN_EMAILS[index],
        error: response.error,
      }))
      .filter((item) => item.error);

    if (userEmailError || adminEmailErrors.length > 0) {
      console.error('Email sending error:', {
        userError: userEmailError,
        adminErrors: adminEmailErrors,
      });
      // Don't fail the request if emails fail - submission is already saved
      // Just log the error
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
      submissionId: submissionData?.id,
      // Only return user email ID, admin email IDs are kept server-side for privacy
      emailId: userEmailResponse.data?.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

