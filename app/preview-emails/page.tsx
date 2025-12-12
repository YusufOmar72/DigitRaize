"use client";

import { useState } from "react";
import UserConfirmationEmail from "@/app/components/emails/user-confirmation";
import AdminNotificationEmail from "@/app/components/emails/admin-notification";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/Input";
import { Textarea } from "@/app/components/ui/Textarea";

export default function EmailPreviewPage() {
  const [emailType, setEmailType] = useState<"user" | "admin">("user");
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    subject: "Website Development Project",
    message: "I would like to discuss building a new website for my business. We need a modern, responsive design with e-commerce capabilities.",
  });

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Email Template <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">Preview</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Preview and test your email designs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Control Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border-2 border-zinc-200 dark:border-zinc-800 sticky top-8">
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">
                Controls
              </h2>

              {/* Email Type Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-3">
                  Email Type
                </label>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setEmailType("user")}
                    variant={emailType === "user" ? "default" : "outline"}
                    className="flex-1"
                  >
                    User Confirmation
                  </Button>
                  <Button
                    onClick={() => setEmailType("admin")}
                    variant={emailType === "admin" ? "default" : "outline"}
                    className="flex-1"
                  >
                    Admin Notification
                  </Button>
                </div>
              </div>

              {/* Sample Data Editor */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    Email
                  </label>
                  <Input
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    Subject
                  </label>
                  <Input
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Website Development Project"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Your message..."
                    rows={6}
                  />
                </div>

                <Button
                  onClick={() =>
                    setFormData({
                      name: "Jane Smith",
                      email: "jane@company.com",
                      subject: "E-commerce Platform",
                      message:
                        "Looking to build a complete e-commerce platform for my fashion brand.",
                    })
                  }
                  variant="outline"
                  className="w-full"
                >
                  Load Sample Data
                </Button>
              </div>
            </div>
          </div>

          {/* Email Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border-2 border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {emailType === "user"
                    ? "User Confirmation Email"
                    : "Admin Notification Email"}
                </h2>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Live Preview
                </div>
              </div>

              {/* Email Preview Container */}
              <div className="border-2 border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
                <div className="bg-zinc-50 dark:bg-zinc-950 p-3 border-b-2 border-zinc-200 dark:border-zinc-800">
                  <div className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
                    <div>
                      <strong>From:</strong> Digitraize &lt;info@digitraize.com&gt;
                    </div>
                    <div>
                      <strong>To:</strong>{" "}
                      {emailType === "user"
                        ? formData.email
                        : "info@digitraize.com"}
                    </div>
                    <div>
                      <strong>Subject:</strong>{" "}
                      {emailType === "user"
                        ? `We received your message - ${formData.subject}`
                        : `New Contact Form Submission from ${formData.name}`}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-zinc-900 overflow-auto max-h-[800px]">
                  <div className="email-preview-wrapper" style={{ 
                    backgroundColor: '#ffffff',
                    maxWidth: '600px',
                    margin: '0 auto'
                  }}>
                    {emailType === "user" ? (
                      <UserConfirmationEmail {...formData} preview={true} />
                    ) : (
                      <AdminNotificationEmail
                        {...formData}
                        submittedAt={new Date()}
                        preview={true}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                  💡 Tip
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {emailType === "user"
                    ? "This email is sent to customers after they submit the contact form. It confirms receipt and sets expectations for response time."
                    : "This email is sent to you (admin) whenever a new inquiry comes in. It includes all the details so you can respond quickly without checking Supabase."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Navigate to{" "}
            <code className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded">
              http://localhost:3000/preview-emails
            </code>{" "}
            to view this page
          </p>
        </div>
      </div>
    </div>
  );
}

