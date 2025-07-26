import ClickRecord from "../models/clickRecord.js";
import Analytics from "../models/analytics.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendClickMailHandler = async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const { deviceType } = req.body;
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
      html: `
        <div style="max-width: 600px; margin: 0 auto; background-color: #174259; padding: 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <div style="background-color: #0F3462; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">New Click from Personal Web Portfolio</h1>
        </div>
        
        <div style="padding: 30px; background-color: #174259;">
            <h3 style="color: white; margin-top: 0; margin-bottom: 20px; font-size: 20px;">Device Information</h3>
            
            <div style="background-color: rgba(255, 255, 255, 0.25); padding: 20px; border-radius: 6px; margin-bottom: 15px;">
                <p style="color: white; margin: 0; font-size: 16px;">
                    <strong style="color: #e0e0e0;">Device Type:</strong> ${deviceType}
                </p>
            </div>

            <div style="background-color: rgba(255, 255, 255, 0.25); padding: 20px; border-radius: 6px; margin-bottom: 15px;">
                <p style="color: white; margin: 0; font-size: 16px;">
                    <strong style="color: #e0e0e0;">Device IP:</strong> ${ip}
                </p>
            </div>
        </div>
        
        <div style="background-color: #0F3462; padding: 15px; text-align: center;">
            <p style="color: #b0b0b0; margin: 0; font-size: 12px;">This message was sent from your personal web portfolio contact form.</p>
        </div>
        
    </div>
      `,
    });

    const newRecord = new ClickRecord({ deviceType, ip });
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

