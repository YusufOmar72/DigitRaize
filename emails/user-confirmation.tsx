import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Heading,
} from '@react-email/components';

interface UserConfirmationEmailProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const UserConfirmationEmail = ({
  name = 'John Doe',
  email = 'john@example.com',
  subject = 'Website Development Project',
  message = 'I would like to discuss building a new website for my business. We need a modern, responsive design with e-commerce capabilities.',
}: UserConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Content */}
          <Section style={content}>
            {/* Badge */}
            <div style={badgeContainer}>
              <div style={badge}>
                <Text style={badgeText}>Premium Web Development</Text>
              </div>
            </div>

            {/* Main Heading */}
            <Heading as="h1" style={heading}>
              <span style={headingGradient}>Thank You</span>
              <br />
              <span style={headingGradient}>For Reaching Out</span>
            </Heading>

            <Text style={subheading}>
              Hello {name}, we've received your inquiry and we're excited to explore how we can bring your vision to life.
            </Text>

            <Text style={paragraph}>
              Your message has been received and our team will review it carefully. We'll get back to you <strong>within 24-48 hours</strong> with next steps.
            </Text>

            {/* Inquiry Summary */}
            <Section style={summarySection}>
              <Text style={summaryLabel}>Your Inquiry</Text>
              <div style={summaryContent}>
                <Text style={summarySubject}>{subject}</Text>
                <Text style={summaryMessage}>{message}</Text>
              </div>
            </Section>

            {/* What's Next */}
            <Section style={nextSection}>
              <Text style={sectionTitle}>What Happens Next</Text>
              <div style={stepsList}>
                <Text style={stepText}>We review your project requirements</Text>
                <Text style={stepText}>Schedule a discovery call to discuss your vision</Text>
                <Text style={stepText}>Create a tailored proposal for your project</Text>
              </div>
            </Section>

            <Text style={paragraph}>
              If you have any urgent questions, feel free to reply to this email or contact us directly.
            </Text>

            {/* Contact Info */}
            <div style={contactSection}>
              <Link href="mailto:info@digitraize.com" style={contactLink}>info@digitraize.com</Link>
              <Text style={contactSeparator}>•</Text>
              <Link href="tel:+447405282896" style={contactLink}>+44 7405 282896</Link>
            </div>

            {/* Signature */}
            <Section style={signature}>
              <Text style={signatureText}>
                We're looking forward to partnering with you to create something exceptional.
              </Text>
              <Text style={signatureName}>The Digitraize Team</Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Digitraize<br />
              Remote, Worldwide
            </Text>
            <Text style={footerCopyright}>
              © {new Date().getFullYear()} Digitraize. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Hero section aesthetic - simple, premium, clean
const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: '0',
  margin: '0',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
};

const content = {
  padding: '64px 40px',
  textAlign: 'center' as const,
};

const badgeContainer = {
  marginBottom: '32px',
  display: 'flex',
  justifyContent: 'center' as const,
};

const badge = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 16px',
  borderRadius: '9999px',
  border: '1px solid #e4e4e7',
  backgroundColor: '#fafafa',
};

const badgeText = {
  fontSize: '12px',
  fontWeight: '500',
  color: '#71717a',
  letterSpacing: '0',
  margin: '0',
};

const heading = {
  fontSize: '48px',
  fontWeight: '700',
  lineHeight: '1.1',
  margin: '0 0 24px 0',
  letterSpacing: '-0.02em',
};

const headingGradient = {
  background: 'linear-gradient(to right, #18181b, #3f3f46, #18181b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'inline-block',
};

const subheading = {
  fontSize: '18px',
  lineHeight: '1.6',
  color: '#71717a',
  margin: '0 0 32px 0',
  fontWeight: '300',
  maxWidth: '520px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.7',
  color: '#52525b',
  margin: '0 0 24px 0',
  maxWidth: '520px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const summarySection = {
  margin: '48px 0',
  padding: '32px',
  backgroundColor: '#fafafa',
  border: '1px solid #e4e4e7',
  borderRadius: '8px',
  textAlign: 'left' as const,
  maxWidth: '520px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const summaryLabel = {
  fontSize: '12px',
  fontWeight: '600',
  color: '#71717a',
  margin: '0 0 16px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const summaryContent = {
  display: 'block',
};

const summarySubject = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#18181b',
  margin: '0 0 12px 0',
};

const summaryMessage = {
  fontSize: '15px',
  lineHeight: '1.6',
  color: '#52525b',
  margin: '0',
};

const nextSection = {
  margin: '48px 0',
  textAlign: 'left' as const,
  maxWidth: '520px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const sectionTitle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#18181b',
  margin: '0 0 20px 0',
  letterSpacing: '-0.01em',
};

const stepsList = {
  display: 'block',
  padding: '0',
  margin: '0',
};

const stepText = {
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#52525b',
  margin: '0 0 12px 0',
  paddingLeft: '0',
};

const contactSection = {
  margin: '40px 0',
  display: 'flex',
  justifyContent: 'center' as const,
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap' as const,
};

const contactLink = {
  fontSize: '15px',
  color: '#18181b',
  textDecoration: 'none',
  fontWeight: '500',
};

const contactSeparator = {
  fontSize: '15px',
  color: '#a1a1aa',
  margin: '0',
};

const signature = {
  marginTop: '56px',
  paddingTop: '32px',
  borderTop: '1px solid #e4e4e7',
  maxWidth: '520px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const signatureText = {
  fontSize: '16px',
  lineHeight: '1.7',
  color: '#52525b',
  margin: '0 0 20px 0',
  fontStyle: 'italic',
};

const signatureName = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#18181b',
  margin: '0',
};

const footer = {
  padding: '40px',
  borderTop: '1px solid #e4e4e7',
  backgroundColor: '#fafafa',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#71717a',
  margin: '0 0 8px 0',
};

const footerCopyright = {
  fontSize: '12px',
  color: '#a1a1aa',
  margin: '0',
};

export default UserConfirmationEmail;
