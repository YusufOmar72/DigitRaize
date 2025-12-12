import * as React from 'react';

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt?: Date;
  preview?: boolean;
}

export const AdminNotificationEmail = ({
  name,
  email,
  subject,
  message,
  submittedAt = new Date(),
  preview = false,
}: AdminNotificationEmailProps) => {
  const formattedDate = submittedAt.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const responsiveStyles = (
    <style>{`
      @media only screen and (max-width: 600px) {
        .admin-content { padding: 32px 24px 24px !important; }
        .admin-header { padding: 24px !important; }
        .admin-footer { padding: 24px !important; }
        .admin-table { font-size: 14px !important; }
        .admin-label-cell { width: 80px !important; padding: 12px !important; }
        .admin-value-cell { padding: 12px !important; }
        .admin-header-content { flex-direction: column !important; gap: 12px !important; align-items: flex-start !important; }
        .admin-button { padding: 14px 24px !important; font-size: 14px !important; }
      }
    `}</style>
  );

  const emailContent = (
    <div style={container}>
          {/* Header */}
          <div style={header} className="admin-header">
            <div style={headerContent} className="admin-header-content">
              <h1 style={logo}>Digitraize</h1>
              <span style={badge}>New Inquiry</span>
            </div>
          </div>

          {/* Content */}
          <div style={content} className="admin-content">
            <p style={timestamp}>{formattedDate}</p>

            <table style={infoTable} className="admin-table">
              <tbody>
                <tr>
                  <td style={labelCell} className="admin-label-cell">Name</td>
                  <td style={valueCell} className="admin-value-cell">{name}</td>
                </tr>
                <tr>
                  <td style={labelCell} className="admin-label-cell">Email</td>
                  <td style={valueCell} className="admin-value-cell">
                    <a href={`mailto:${email}`} style={emailLink}>{email}</a>
                  </td>
                </tr>
                <tr>
                  <td style={labelCell} className="admin-label-cell">Subject</td>
                  <td style={valueCell} className="admin-value-cell">{subject}</td>
                </tr>
                <tr>
                  <td style={labelCell} className="admin-label-cell">Message</td>
                  <td style={valueCell} className="admin-value-cell">{message}</td>
                </tr>
              </tbody>
            </table>

            <div style={actionContainer}>
              <a href={`mailto:${email}?subject=Re: ${subject}`} style={replyButton} className="admin-button">
                Reply to {name}
              </a>
            </div>
          </div>

          {/* Footer */}
          <div style={footer} className="admin-footer">
            <p style={footerText}>
              Contact form submission from digitraize.com
            </p>
          </div>
        </div>
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
        {responsiveStyles}
      </head>
      <body style={main}>
        {emailContent}
      </body>
    </html>
  );
};

// Clean, minimal styles
const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: '0',
  margin: '0',
};

const container: React.CSSProperties = {
  maxWidth: '600px',
  width: '100%',
  margin: '0 auto',
  backgroundColor: '#ffffff',
};

const header: React.CSSProperties = {
  borderBottom: '1px solid #e4e4e7',
  padding: '32px 40px',
  backgroundColor: '#ffffff',
};

const headerContent: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logo: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: '700',
  color: '#18181b',
  margin: '0',
  letterSpacing: '-0.5px',
};

const badge: React.CSSProperties = {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: '600',
  color: '#18181b',
  padding: '4px 12px',
  backgroundColor: '#fafafa',
  border: '1px solid #e4e4e7',
  borderRadius: '6px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const content: React.CSSProperties = {
  padding: '40px 40px 32px',
  backgroundColor: '#ffffff',
};

const timestamp: React.CSSProperties = {
  fontSize: '13px',
  color: '#71717a',
  margin: '0 0 24px 0',
};

const infoTable: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '0 0 32px 0',
  border: '1px solid #e4e4e7',
  borderRadius: '8px',
  overflow: 'hidden',
};

const labelCell: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#71717a',
  padding: '16px',
  verticalAlign: 'top',
  width: '100px',
  borderBottom: '1px solid #e4e4e7',
  backgroundColor: '#fafafa',
};

const valueCell: React.CSSProperties = {
  fontSize: '15px',
  color: '#18181b',
  padding: '16px',
  verticalAlign: 'top',
  borderBottom: '1px solid #e4e4e7',
  lineHeight: '1.6',
};

const emailLink: React.CSSProperties = {
  color: '#18181b',
  textDecoration: 'underline',
  textDecorationColor: '#a1a1aa',
  textUnderlineOffset: '2px',
};

const actionContainer: React.CSSProperties = {
  textAlign: 'center',
  margin: '0',
};

const replyButton: React.CSSProperties = {
  display: 'inline-block',
  fontSize: '15px',
  fontWeight: '600',
  color: '#ffffff',
  backgroundColor: '#18181b',
  padding: '14px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  letterSpacing: '-0.01em',
  transition: 'background-color 0.2s',
};

const footer: React.CSSProperties = {
  borderTop: '1px solid #e4e4e7',
  padding: '32px 40px',
  backgroundColor: '#fafafa',
  textAlign: 'center',
};

const footerText: React.CSSProperties = {
  fontSize: '13px',
  lineHeight: '1.6',
  color: '#71717a',
  margin: '0',
  textAlign: 'center',
};

export default AdminNotificationEmail;

