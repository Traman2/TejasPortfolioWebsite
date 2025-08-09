import ClickRecord from "../models/clickRecord.js";
import Analytics from "../models/analytics.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Basic HTML escaping for safe rendering inside emails
const escapeHtml = (unsafe = "") =>
  String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

const generateClickEmailHtml = (ip, deviceType, details = {}) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>New Portfolio Click</title>
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
    New click recorded on your portfolio
  </div>
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f4f5f7;">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" class="container" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden;">
          <tr>
            <td style="background-color:#0F3462; padding:24px 32px; text-align:center;">
              <h1 style="margin:0; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:22px; line-height:28px; color:#ffffff;">New Portfolio Click</h1>
              <p style="margin:8px 0 0; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#cfe7ff; font-size:14px;">Analytics Snapshot</p>
            </td>
          </tr>
          <tr>
            <td class="px-24" style="padding:28px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate; border-spacing:0 8px;">
                <tr>
                  <td style="background:#f3f4f6; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#374151; width:140px;">Device Type</td>
                  <td style="background:#f9fafb; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#111827;">${escapeHtml(deviceType)}</td>
                </tr>
                <tr>
                  <td style="background:#f3f4f6; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#374151;">Server IP</td>
                  <td style="background:#f9fafb; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#111827;">${escapeHtml(ip || "Unknown")}</td>
                </tr>
                <tr>
                  <td style="background:#f3f4f6; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#374151;">Client IP</td>
                  <td style="background:#f9fafb; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#111827;">${escapeHtml(details.clientIp || "Unknown")}</td>
                </tr>
                <tr>
                  <td style="background:#f3f4f6; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#374151;">Browser</td>
                  <td style="background:#f9fafb; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#111827;">${escapeHtml(details.browserName || "Unknown")} ${escapeHtml(details.browserVersion || "")}</td>
                </tr>
                <tr>
                  <td style="background:#f3f4f6; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#374151;">OS</td>
                  <td style="background:#f9fafb; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#111827;">${escapeHtml(details.osName || "Unknown")} ${escapeHtml(details.osVersion || "")}</td>
                </tr>
                <tr>
                  <td style="background:#f3f4f6; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#374151;">Platform</td>
                  <td style="background:#f9fafb; border-radius:10px; padding:12px 14px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; font-size:14px; color:#111827;">${escapeHtml(details.platformType || "Unknown")}</td>
                </tr>
              </table>
              <p style="margin:16px 0 0; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#6b7280; font-size:13px;">This metric was automatically logged in your database.</p>
            </td>
          </tr>
          <tr>
            <td class="py-16" style="padding:16px 24px; background-color:#0F3462; text-align:center;">
              <p style="margin:0; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#cfe7ff; font-size:12px;">Notification from your portfolio analytics.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <img src="https://ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif" width="1" height="1" style="border:0; display:block; outline:none; text-decoration:none;" alt="" />
</body>
</html>`;

const sendClickMailHandler = async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const { deviceType, clientIp, browserName, browserVersion, osName, osVersion, platformType } = req.body;
  if (!deviceType) {
    return res.status(400).json({ error: "Missing fields" });
  }

  await Analytics.findOneAndUpdate(
    {},
    { $inc: { clickMeter: 1 } },
    { upsert: true, new: true }
  );

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
      subject: `New Personal Web Portfolio Click`,
      html: generateClickEmailHtml(ip, deviceType, { clientIp, browserName, browserVersion, osName, osVersion, platformType }),
    });

    const newRecord = new ClickRecord({
      deviceType,
      ip,
      clientIp,
      browserName,
      browserVersion,
      osName,
      osVersion,
      platformType,
    });
    const savedRecord = await newRecord.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Email sent successfully",
        object: savedRecord,
      });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};

const getViewsHandler = async (req, res) => {
  try {
    const analytics = await Analytics.findOne({});
    if (!analytics) {
      return res.status(404).json({ error: "Analytics record not found" });
    }
    res.status(200).json({ success: true, data: analytics.clickMeter });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { sendClickMailHandler, getViewsHandler };

