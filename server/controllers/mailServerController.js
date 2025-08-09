import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
import FormRecord from "../models/formRecord.js";

// Basic HTML escaping to prevent markup injection in emails
const escapeHtml = (unsafe = "") =>
  String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

const generateContactEmailHtml = (name, email, message) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>New Contact Message</title>
  <style>
    @media (max-width:600px){
      .container{ width:100% !important; }
      .px-24{ padding-left:24px !important; padding-right:24px !important; }
      .py-16{ padding-top:16px !important; padding-bottom:16px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f4f5f7;">
  <div style="display:none; overflow:hidden; line-height:1px; opacity:0; max-height:0; max-width:0;">
    New message from your portfolio contact form
  </div>
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f4f5f7;">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" class="container" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden;">
          <tr>
            <td style="background-color:#0F3462; padding:24px 32px; text-align:center;">
              <h1 style="margin:0; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:22px; line-height:28px; color:#ffffff;">New Contact Form Submission</h1>
              <p style="margin:8px 0 0; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#cfe7ff; font-size:14px;">Personal Portfolio</p>
            </td>
          </tr>
          <tr>
            <td class="px-24" style="padding:28px 32px;">
              <p style="margin:0 0 16px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#111827; font-size:16px;">You received a new message:</p>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate; border-spacing:0 8px;">
                <tr>
                  <td style="background:#f3f4f6; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#374151; width:140px;">Name</td>
                  <td style="background:#f9fafb; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#111827;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="background:#f3f4f6; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#374151;">Email</td>
                  <td style="background:#f9fafb; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#0F3462;">
                    <a href="mailto:${escapeHtml(email)}" style="color:#0F3462; text-decoration:none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
              </table>
              <div style="margin-top:16px; background:#f9fafb; border:1px solid #e5e7eb; border-radius:12px; padding:16px;">
                <div style="font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:13px; color:#6b7280; margin-bottom:8px;">Message</div>
                <div style="font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:16px; color:#111827; white-space:pre-wrap; line-height:1.6;">${escapeHtml(message)}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="py-16" style="padding:16px 24px; background-color:#0F3462; text-align:center;">
              <p style="margin:0; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#cfe7ff; font-size:12px;">This email was sent from your portfolio contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <img src="https://ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif" width="1" height="1" style="border:0; display:block; outline:none; text-decoration:none;" alt="" />
  </body>
  </html>`;

const getMailStatus = async (req, res) => {
  res.send("Mail Server running successfully");
};

const sendMailHandler = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form from ${name} - ${email}`,
      replyTo: email,
      html: generateContactEmailHtml(name, email, message),
    });
    
    const newRecord = new FormRecord({name, email, message})
    const savedRecord = await newRecord.save();

    res.status(200).json({ success: true, message: "Email sent successfully", object: savedRecord });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
}

export {
    getMailStatus,
    sendMailHandler
}