import dotenv from 'dotenv';
import express, { type Request, type Response } from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'thecodespark3464@gmail.com';

interface CallbackPayload {
  name?: string;
  email?: string;
  phone?: string;
  enquiryFor?: string;
  message?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function sendViaSmtp(payload: Required<CallbackPayload>) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  if (!smtpUser || !smtpPass) {
    return null;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  await transporter.sendMail({
    from: `"TheCodeSpark Callback" <${smtpUser}>`,
    to: NOTIFY_EMAIL,
    replyTo: payload.email,
    subject: `New Callback Request: ${payload.name} (+91 ${payload.phone})`,
    text: [
      'New Student Callback Request — TheCodeSpark Technologies Private Limited',
      '--------------------------------------------------------------------',
      `Name        : ${payload.name}`,
      `Email       : ${payload.email}`,
      `Phone No.   : +91 ${payload.phone}`,
      `Enquiry For : ${payload.enquiryFor}`,
      `Submitted   : ${submittedAt} IST`,
      '',
      'Message:',
      payload.message || '(No additional message provided)',
    ].join('\n'),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
        <div style="background: #ea580c; color: #ffffff; padding: 18px 24px;">
          <h2 style="margin: 0; font-size: 18px;">New Student Callback Request</h2>
          <p style="margin: 4px 0 0; font-size: 12px; opacity: 0.9;">TheCodeSpark Technologies Private Limited</p>
        </div>
        <div style="padding: 20px 24px; color: #111827; font-size: 14px; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 130px;"><strong>Name:</strong></td><td>${escapeHtml(payload.name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td><td><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Phone No.:</strong></td><td>+91 ${escapeHtml(payload.phone)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Enquiry For:</strong></td><td>${escapeHtml(payload.enquiryFor)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Time (IST):</strong></td><td>${escapeHtml(submittedAt)}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 14px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
            <div style="font-size: 12px; color: #6b7280; margin-bottom: 6px;"><strong>How can we help?</strong></div>
            <div style="white-space: pre-wrap;">${escapeHtml(payload.message || 'No additional message provided.')}</div>
          </div>
        </div>
      </div>
    `,
  });

  return 'smtp';
}

const FORMSUBMIT_ORIGIN = process.env.FORMSUBMIT_ORIGIN || 'http://localhost:3000';

async function sendViaFormSubmit(payload: Required<CallbackPayload>) {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(NOTIFY_EMAIL)}`;
  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const response = await fetch(endpoint, {
    method: 'POST',
    signal: AbortSignal.timeout(180000),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: FORMSUBMIT_ORIGIN,
      Referer: `${FORMSUBMIT_ORIGIN}/`,
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: `+91 ${payload.phone}`,
      enquiry_for: payload.enquiryFor,
      message: payload.message || 'Please call me back regarding course details.',
      submitted_at_ist: `${submittedAt} IST`,
      _subject: `New Callback Request: ${payload.name} (+91 ${payload.phone})`,
      _replyto: payload.email,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(typeof data?.message === 'string' ? data.message : `HTTP ${response.status}`);
  }
  return data;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '256kb' }));

  app.post('/api/callback', async (req: Request, res: Response) => {
    try {
      const body = (req.body || {}) as CallbackPayload;
      const name = String(body.name || '').trim();
      const email = String(body.email || '').trim();
      const phone = String(body.phone || '').replace(/\D/g, '');
      const enquiryFor = String(body.enquiryFor || 'Online Course (Website)').trim();
      const message = String(body.message || '').trim();

      if (!name || !email) {
        res.status(400).json({
          ok: false,
          error: 'Please enter your Name and Email address.',
        });
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        res.status(400).json({
          ok: false,
          error: 'Please enter a valid 10-digit mobile number.',
        });
        return;
      }

      const payload: Required<CallbackPayload> = {
        name,
        email,
        phone,
        enquiryFor,
        message,
      };

      const smtpUsed = await sendViaSmtp(payload);
      if (smtpUsed) {
        res.json({
          ok: true,
          channel: 'smtp',
          recipient: NOTIFY_EMAIL,
          message: 'Callback details delivered to our team inbox.',
        });
        return;
      }

      console.info(
        `[Callback] Dispatching to ${NOTIFY_EMAIL}: ${payload.name} | +91 ${payload.phone} | ${payload.email} | ${payload.enquiryFor}`
      );

      // Fire in background using the activated localhost:3000 origin so UI responds immediately
      void sendViaFormSubmit(payload).catch((err) => {
        console.error('FormSubmit background relay warning:', err instanceof Error ? err.message : err);
      });

      res.json({
        ok: true,
        channel: 'formsubmit',
        recipient: NOTIFY_EMAIL,
        message: 'Callback request submitted.',
      });
    } catch (error) {
      const errMessage = error instanceof Error ? error.message : 'Unable to process callback.';
      console.error('Callback submission error:', errMessage);
      res.status(502).json({
        ok: false,
        recipient: NOTIFY_EMAIL,
        error: errMessage,
      });
    }
  });

  if (process.env.NODE_ENV === 'production') {
    const distDir = path.join(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`TheCodeSpark server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
