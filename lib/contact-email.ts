import nodemailer from "nodemailer";

const CONTACT_TO = "zeeshantariq707@gmail.com";

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function validateContactPayload(body: unknown):
  | { ok: true; data: ContactFormPayload }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return { ok: false, error: "All fields are required." };
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  };

  if (!trimmed.name || !trimmed.email || !trimmed.subject || !trimmed.message) {
    return { ok: false, error: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  return { ok: true, data: trimmed };
}

export async function sendContactEmail(data: ContactFormPayload) {
  const smtpUser = process.env.SMTP_USER?.trim();
  // Gmail app passwords are often copied with spaces — strip them.
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, "");

  if (!smtpUser || !smtpPass) {
    throw new Error("SMTP credentials are not configured.");
  }

  const port = Number(process.env.SMTP_PORT || 465);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${smtpUser}>`,
    to: CONTACT_TO,
    replyTo: data.email,
    subject: `[Portfolio Contact] ${data.subject}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Subject: ${data.subject}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
    html: `
      <h2>New contact form message</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
    `,
  });
}
