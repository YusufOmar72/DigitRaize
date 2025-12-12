import * as React from 'react';

interface UserConfirmationEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  preview?: boolean;
}

export const UserConfirmationEmail = ({
  name,
  email,
  subject,
  message,
  preview = false,
}: UserConfirmationEmailProps) => {
  const responsiveStyles = (
    <style>{`
      @media only screen and (max-width: 600px) {
        .email-container { 
          width: 100% !important; 
          max-width: 100% !important;
          margin: 0 !important;
        }
        .content { 
          padding: 32px 20px 40px !important; 
        }
        .heading { 
          font-size: 32px !important; 
          line-height: 1.2 !important;
        }
        .subheading { 
          font-size: 16px !important; 
        }
        .paragraph { 
          font-size: 15px !important; 
        }
        .summary-section { 
          margin: 48px 0 !important;
        }
        .summary-title, .next-title { 
          font-size: 11px !important; 
          margin-bottom: 24px !important;
        }
        .summary-card { 
          padding: 20px !important; 
          margin-bottom: 20px !important;
        }
        .summary-card-value {
          font-size: 14px !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        .next-section {
          margin: 48px 0 !important;
        }
        .next-title {
          margin-bottom: 28px !important;
        }
        .next-card { 
          padding: 24px 20px !important; 
          margin-bottom: 20px !important;
        }
        .next-number {
          font-size: 28px !important;
        }
        .next-card-title {
          font-size: 15px !important;
        }
        .next-card-text {
          font-size: 13px !important;
        }
        .contact-section {
          margin: 48px 0 !important;
        }
        .signature-divider-spacer {
          height: 8px !important;
          line-height: 8px !important;
        }
        .contact-item {
          width: 100% !important;
          margin-bottom: 24px !important;
        }
        .contact-link {
          font-size: 15px !important;
          word-break: break-all !important;
        }
        .signature {
          margin-top: 48px !important;
          padding-top: 28px !important;
        }
        .signature-text {
          font-size: 15px !important;
        }
        .signature-name {
          font-size: 16px !important;
        }
        .signature-tagline {
          font-size: 12px !important;
        }
        .footer { 
          padding: 32px 20px !important; 
        }
        .footer-text {
          font-size: 13px !important;
        }
        .footer-copyright {
          font-size: 11px !important;
        }
        .badge { 
          padding: 6px 16px !important; 
          font-size: 11px !important;
        }
        .badge-icon {
          font-size: 12px !important;
        }
      }
      @media only screen and (max-width: 480px) {
        .content { 
          padding: 28px 16px 36px !important; 
        }
        .heading { 
          font-size: 28px !important; 
        }
        .summary-card { 
          padding: 18px !important; 
        }
        .next-card { 
          padding: 20px 18px !important; 
        }
      }
    `}</style>
  );

  const emailContent = (
    <table
      role="presentation"
      cellSpacing="0"
      cellPadding="0"
      border={0}
      width="100%"
      style={containerTable}
    >
      <tr>
        <td align="center" style={containerCell}>
          <table
            role="presentation"
            cellSpacing="0"
            cellPadding="0"
            border={0}
            width="100%"
            style={contentTable}
          >
            <tr>
              <td align="center" style={contentCell} className="content">
                {/* Badge */}
                <table
                  role="presentation"
                  cellSpacing="0"
                  cellPadding="0"
                  border={0}
                  width="100%"
                >
                  <tr>
                    <td align="center" style={badgeContainer}>
                      <table
                        role="presentation"
                        cellSpacing="0"
                        cellPadding="0"
                        border={0}
                      >
                        <tr>
                          <td style={badge}>
                            <span style={badgeIcon}>✨</span>
                            <span style={{ paddingLeft: '8px' }}></span>
                            <span style={badgeText}>Premium Web Development</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                {/* Main Heading */}
                <table
                  role="presentation"
                  cellSpacing="0"
                  cellPadding="0"
                  border={0}
                  width="100%"
                >
                  <tr>
                    <td align="center" style={headingContainer}>
                      <h1 style={heading} className="heading">
                        <span style={headingGradient}>Thank You</span>
                        <br />
                        <span style={headingGradient}>For Reaching Out</span>
                      </h1>
                    </td>
                  </tr>
                </table>

                <p style={subheading}>
                  Hello {name}, we've received your inquiry and we're excited to explore how we can bring your vision to life.
                </p>

                <p style={paragraph}>
                  Your message has been received and our team will review it carefully. We'll get back to you <strong>within 24-48 hours</strong> with next steps.
                </p>

                {/* Inquiry Summary */}
                <table
                  role="presentation"
                  cellSpacing="0"
                  cellPadding="0"
                  border={0}
                  width="100%"
                  style={summarySection}
                  className="summary-section"
                >
                  <tr>
                    <td align="center">
                      <p style={summaryTitle} className="summary-title">Your Inquiry</p>
                      
                      {/* Subject Card */}
                      <table
                        role="presentation"
                        cellSpacing="0"
                        cellPadding="0"
                        border={0}
                        width="100%"
                        style={{ marginBottom: '24px', maxWidth: '520px' }}
                      >
                        <tr>
                          <td style={summaryCard} className="summary-card">
                            <p style={summaryCardLabel}>Subject</p>
                            <p style={summaryCardValue} className="summary-card-value">{subject}</p>
                          </td>
                        </tr>
                      </table>

                      {/* Message Card */}
                      <table
                        role="presentation"
                        cellSpacing="0"
                        cellPadding="0"
                        border={0}
                        width="100%"
                        style={{ maxWidth: '520px' }}
                      >
                        <tr>
                          <td style={summaryCard} className="summary-card">
                            <p style={summaryCardLabel}>Message</p>
                            <p style={summaryCardValue} className="summary-card-value">{message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                {/* What's Next */}
                <table
                  role="presentation"
                  cellSpacing="0"
                  cellPadding="0"
                  border={0}
                  width="100%"
                  style={nextSection}
                  className="next-section"
                >
                  <tr>
                    <td align="center">
                      <p style={nextTitle} className="next-title">What Happens Next</p>
                      
                      {/* Card 01 */}
                      <table
                        role="presentation"
                        cellSpacing="0"
                        cellPadding="0"
                        border={0}
                        width="100%"
                        style={{ marginBottom: '24px', maxWidth: '520px' }}
                      >
                        <tr>
                          <td align="center" style={nextCard} className="next-card">
                            <div style={nextNumber} className="next-number">01</div>
                            <p style={nextCardTitle} className="next-card-title">Review</p>
                            <p style={nextCardText} className="next-card-text">We review your project requirements</p>
                          </td>
                        </tr>
                      </table>

                      {/* Card 02 */}
                      <table
                        role="presentation"
                        cellSpacing="0"
                        cellPadding="0"
                        border={0}
                        width="100%"
                        style={{ marginBottom: '24px', maxWidth: '520px' }}
                      >
                        <tr>
                          <td align="center" style={nextCard} className="next-card">
                            <div style={nextNumber} className="next-number">02</div>
                            <p style={nextCardTitle} className="next-card-title">Connect</p>
                            <p style={nextCardText} className="next-card-text">We'll reach out to discuss your vision and requirements</p>
                          </td>
                        </tr>
                      </table>

                      {/* Card 03 */}
                      <table
                        role="presentation"
                        cellSpacing="0"
                        cellPadding="0"
                        border={0}
                        width="100%"
                        style={{ maxWidth: '520px' }}
                      >
                        <tr>
                          <td align="center" style={nextCard} className="next-card">
                            <div style={nextNumber} className="next-number">03</div>
                            <p style={nextCardTitle} className="next-card-title">Propose</p>
                            <p style={nextCardText} className="next-card-text">Create a tailored proposal for your project</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <table
                  role="presentation"
                  cellSpacing="0"
                  cellPadding="0"
                  border={0}
                  width="100%"
                >
                  <tr>
                    <td align="center" style={{ paddingBottom: '40px' }}>
                      <p style={paragraph}>
                        If you have any urgent questions, feel free to reply to this email or contact us directly.
                      </p>
                    </td>
                  </tr>
                </table>

                {/* Contact Info */}
                <table
                  role="presentation"
                  cellSpacing="0"
                  cellPadding="0"
                  border={0}
                  width="100%"
                  style={contactSection}
                  className="contact-section"
                >
                  <tr>
                    <td align="center">
                      <table
                        role="presentation"
                        cellSpacing="0"
                        cellPadding="0"
                        border={0}
                        style={{ maxWidth: '520px' }}
                      >
                        <tr>
                          <td align="center" style={contactItem} className="contact-item">
                            <p style={contactLabel}>Email</p>
                            <a href="mailto:info@digitraize.com" style={contactLink} className="contact-link">info@digitraize.com</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ height: '32px', lineHeight: '32px', fontSize: '1px' }}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td align="center" style={contactItem} className="contact-item">
                            <p style={contactLabel}>Phone</p>
                            <a href="tel:+447405282896" style={contactLink} className="contact-link">+44 7405 282896</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                {/* Signature */}
                <table
                  role="presentation"
                  cellSpacing="0"
                  cellPadding="0"
                  border={0}
                  width="100%"
                  style={signature}
                  className="signature"
                >
                  <tr>
                    <td align="center" style={{ maxWidth: '520px', margin: '0 auto' }}>
                      <p style={signatureText} className="signature-text">
                        We're looking forward to partnering with you to create something exceptional.
                      </p>
                      <table
                        role="presentation"
                        cellSpacing="0"
                        cellPadding="0"
                        border={0}
                        width="100%"
                      >
                        <tr>
                          <td align="center" style={signatureDivider}></td>
                        </tr>
                        <tr>
                          <td style={{ height: '24px', lineHeight: '24px', fontSize: '1px' }} className="signature-divider-spacer">&nbsp;</td>
                        </tr>
                      </table>
                      <p style={signatureName} className="signature-name">The Digitraize Team</p>
                      <p style={signatureTagline} className="signature-tagline">Crafting Digital Excellence</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          {/* Footer */}
          <table
            role="presentation"
            cellSpacing="0"
            cellPadding="0"
            border={0}
            width="100%"
            style={footer}
            className="footer"
          >
            <tr>
              <td align="center" style={footerCell}>
                <p style={footerText} className="footer-text">
                  Digitraize<br />
                  Remote, Worldwide
                </p>
                <p style={footerCopyright} className="footer-copyright">
                  © {new Date().getFullYear()} Digitraize. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );

  if (preview) {
    return (
      <div style={main}>
        {responsiveStyles}
        {emailContent}
      </div>
    );
  }

  return (
    <html>
      <head>
        <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          .preheader {
            display: none !important;
            visibility: hidden;
            opacity: 0;
            color: transparent;
            height: 0;
            width: 0;
            line-height: 0;
            overflow: hidden;
          }
        `}</style>
        {responsiveStyles}
      </head>
      <body style={main}>
        <div className="preheader">
          Thank you for reaching out! We've received your inquiry and will get back to you within 24-48 hours.
        </div>
        {emailContent}
      </body>
    </html>
  );
};

// Email-safe styles
const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: '0',
  margin: '0',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};

const containerTable: React.CSSProperties = {
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
};

const containerCell: React.CSSProperties = {
  padding: '0',
};

const contentTable: React.CSSProperties = {
  width: '100%',
};

const contentCell: React.CSSProperties = {
  padding: '72px 40px 64px',
  textAlign: 'center',
};

const badgeContainer: React.CSSProperties = {
  paddingBottom: '40px',
};

const badge: React.CSSProperties = {
  display: 'inline-block',
  padding: '8px 20px',
  borderRadius: '9999px',
  border: '1px solid #e4e4e7',
  backgroundColor: '#fafafa',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  whiteSpace: 'nowrap',
};

const badgeIcon: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '1',
  verticalAlign: 'middle',
};

const badgeText: React.CSSProperties = {
  fontSize: '12px',
  fontWeight: '500',
  color: '#71717a',
  letterSpacing: '0',
  verticalAlign: 'middle',
};

const headingContainer: React.CSSProperties = {
  paddingBottom: '24px',
};

const heading: React.CSSProperties = {
  fontSize: '48px',
  fontWeight: '700',
  lineHeight: '1.1',
  margin: '0',
  letterSpacing: '-0.02em',
  textAlign: 'center',
};

const headingGradient: React.CSSProperties = {
  color: '#18181b',
  display: 'inline-block',
};

const subheading: React.CSSProperties = {
  fontSize: '18px',
  lineHeight: '1.6',
  color: '#71717a',
  margin: '0 0 40px 0',
  fontWeight: '300',
  textAlign: 'center',
};

const paragraph: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '1.7',
  color: '#52525b',
  margin: '0 0 40px 0',
  textAlign: 'center',
};

const summarySection: React.CSSProperties = {
  margin: '64px 0',
  width: '100%',
};

const summaryTitle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#71717a',
  margin: '0 0 28px 0',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  textAlign: 'center',
};

const summaryCard: React.CSSProperties = {
  padding: '24px',
  backgroundColor: '#ffffff',
  border: '1px solid #e4e4e7',
  borderRadius: '12px',
  textAlign: 'left',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
};

const summaryCardLabel: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: '600',
  color: '#a1a1aa',
  margin: '0 0 12px 0',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const summaryCardValue: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '1.6',
  color: '#18181b',
  margin: '0',
  fontWeight: '500',
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
};

const nextSection: React.CSSProperties = {
  margin: '64px 0',
  width: '100%',
};

const nextTitle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#71717a',
  margin: '0 0 32px 0',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  textAlign: 'center',
};

const nextCard: React.CSSProperties = {
  padding: '28px 24px',
  backgroundColor: '#fafafa',
  border: '1px solid #e4e4e7',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
};

const nextNumber: React.CSSProperties = {
  fontSize: '32px',
  fontWeight: '700',
  color: '#18181b',
  margin: '0 0 12px 0',
  lineHeight: '1',
  opacity: '0.15',
  letterSpacing: '-0.02em',
};

const nextCardTitle: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#18181b',
  margin: '0 0 8px 0',
  letterSpacing: '-0.01em',
};

const nextCardText: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#52525b',
  margin: '0',
};

const contactSection: React.CSSProperties = {
  margin: '64px 0',
  width: '100%',
};

const contactItem: React.CSSProperties = {
  textAlign: 'center',
  padding: '0',
};

const contactLabel: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: '600',
  color: '#a1a1aa',
  margin: '0 0 6px 0',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const contactLink: React.CSSProperties = {
  fontSize: '16px',
  color: '#18181b',
  textDecoration: 'none',
  fontWeight: '500',
  letterSpacing: '-0.01em',
  wordBreak: 'break-all',
};

const signature: React.CSSProperties = {
  marginTop: '72px',
  paddingTop: '40px',
  borderTop: '1px solid #e4e4e7',
  width: '100%',
};

const signatureText: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '1.7',
  color: '#52525b',
  margin: '0 0 24px 0',
  fontStyle: 'italic',
  textAlign: 'center',
};

const signatureDivider: React.CSSProperties = {
  width: '32px',
  height: '1px',
  backgroundColor: '#d4d4d8',
  margin: '0 auto 0',
};

const signatureName: React.CSSProperties = {
  fontSize: '17px',
  fontWeight: '600',
  color: '#18181b',
  margin: '0 0 6px 0',
  textAlign: 'center',
};

const signatureTagline: React.CSSProperties = {
  fontSize: '13px',
  color: '#71717a',
  margin: '0',
  textAlign: 'center',
  fontStyle: 'italic',
};

const footer: React.CSSProperties = {
  padding: '48px 40px',
  borderTop: '1px solid #e4e4e7',
  backgroundColor: '#fafafa',
  width: '100%',
};

const footerCell: React.CSSProperties = {
  textAlign: 'center',
  padding: '0',
};

const footerText: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#71717a',
  margin: '0 0 8px 0',
};

const footerCopyright: React.CSSProperties = {
  fontSize: '12px',
  color: '#a1a1aa',
  margin: '0',
};

export default UserConfirmationEmail;
