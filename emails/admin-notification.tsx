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

interface AdminNotificationEmailProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  submittedAt?: Date;
}

export const AdminNotificationEmail = ({
  name = 'Jane Smith',
  email = 'jane@company.com',
  subject = 'E-commerce Website Development',
  message = 'Hi, I'm looking to build a complete e-commerce platform for my fashion brand. We need product catalog, shopping cart, secure checkout, and integration with payment gateways. Looking for a modern, mobile-first design.',
  submittedAt = new Date(),
}: AdminNotificationEmailProps) => {
  const formattedDate = submittedAt.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <div style={headerContent}>
              <Heading style={logo}>Digitraize</Heading>
              <span style={badge}>New Inquiry</span>
            </div>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={timestamp}>{formattedDate}</Text>

            <table style={infoTable}>
              <tbody>
                <tr>
                  <td style={labelCell}>Name</td>
                  <td style={valueCell}>{name}</td>
                </tr>
                <tr>
                  <td style={labelCell}>Email</td>
                  <td style={valueCell}>
                    <Link href={`mailto:${email}`} style={emailLink}>{email}</Link>
                  </td>
                </tr>
                <tr>
                  <td style={labelCell}>Subject</td>
                  <td style={valueCell}>{subject}</td>
                </tr>
                <tr>
                  <td style={labelCell}>Message</td>
                  <td style={valueCell}>{message}</td>
                </tr>
              </tbody>
            </table>

            <Section style={actionContainer}>
              <Link href={`mailto:${email}?subject=Re: ${subject}`} style={replyButton}>
                Reply to {name}
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Contact form submission from digitraize.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Clean, minimal styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: '0',
  margin: '0',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
};

const header = {
  borderBottom: '1px solid #e4e4e7',
  padding: '32px 40px',
};

const headerContent = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logo = {
  fontSize: '24px',
  fontWeight: '700',
  color: '#18181b',
  margin: '0',
  letterSpacing: '-0.5px',
};

const badge = {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: '600',
  color: '#18181b',
  padding: '4px 12px',
  backgroundColor: '#fafafa',
  border: '1px solid #e4e4e7',
  borderRadius: '6px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const content = {
  padding: '40px 40px 32px',
};

const timestamp = {
  fontSize: '13px',
  color: '#71717a',
  margin: '0 0 24px 0',
};

const infoTable = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  margin: '0 0 32px 0',
  border: '1px solid #e4e4e7',
};

const labelCell = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#71717a',
  padding: '16px',
  verticalAlign: 'top' as const,
  width: '100px',
  borderBottom: '1px solid #e4e4e7',
  backgroundColor: '#fafafa',
};

const valueCell = {
  fontSize: '15px',
  color: '#18181b',
  padding: '16px',
  verticalAlign: 'top' as const,
  borderBottom: '1px solid #e4e4e7',
  lineHeight: '1.6',
};

const emailLink = {
  color: '#18181b',
  textDecoration: 'underline',
};

const actionContainer = {
  textAlign: 'center' as const,
  margin: '0',
};

const replyButton = {
  display: 'inline-block',
  fontSize: '15px',
  fontWeight: '600',
  color: '#ffffff',
  backgroundColor: '#18181b',
  padding: '12px 32px',
  borderRadius: '6px',
  textDecoration: 'none',
};

const footer = {
  borderTop: '1px solid #e4e4e7',
  padding: '32px 40px',
  backgroundColor: '#fafafa',
};

const footerText = {
  fontSize: '13px',
  lineHeight: '1.6',
  color: '#71717a',
  margin: '0',
  textAlign: 'center' as const,
};

export default AdminNotificationEmail;
