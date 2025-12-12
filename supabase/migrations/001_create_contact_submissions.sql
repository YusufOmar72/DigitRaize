-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Create index on submitted_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (idempotent)
DROP POLICY IF EXISTS "Allow public insert" ON contact_submissions;
DROP POLICY IF EXISTS "Service role can read" ON contact_submissions;

-- Policy: Allow anyone to insert (for contact form submissions)
CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only service role can read (for admin access via API)
-- This ensures only server-side code can read submissions
CREATE POLICY "Service role can read" ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

