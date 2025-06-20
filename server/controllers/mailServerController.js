import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
import FormRecord from "../models/formRecord.js";

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
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form from ${name} - ${email}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; background-color: #174259; padding: 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <div style="background-color: #0F3462; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">New Message From Personal Web Portfolio</h1>
        </div>
        
        <div style="padding: 30px; background-color: #174259;">
            <h3 style="color: white; margin-top: 0; margin-bottom: 20px; font-size: 20px;">Contact Form Submission</h3>
            
            <div style="background-color: rgba(255, 255, 255, 0.25); padding: 20px; border-radius: 6px; margin-bottom: 15px;">
                <p style="color: white; margin: 0; font-size: 16px;">
                    <strong style="color: #e0e0e0;">Name:</strong> ${name}
                </p>
            </div>
            
            <div style="background-color: rgba(255, 255, 255, 0.25); padding: 20px; border-radius: 6px; margin-bottom: 15px;">
                <p style="color: white; margin: 0; font-size: 16px;">
                    <strong style="color: #e0e0e0;">Email:</strong> <span style="color: #ADE8F4; text-decoration: none !important;">${email}</span>
                </p>
            </div>
            
            <div style="background-color: rgba(255, 255, 255, 0.25); padding: 20px; border-radius: 6px;">
                <p style="color: white; margin: 0 0 10px 0; font-size: 16px;">
                    <strong style="color: #e0e0e0;">Message:</strong>
                </p>
                <div style="color: white; font-size: 16px; line-height: 1.5; white-space: pre-wrap;">${message}</div>
            </div>
        </div>
        
        <div style="background-color: #0F3462; padding: 15px; text-align: center;">
            <p style="color: #b0b0b0; margin: 0; font-size: 12px;">This message was sent from your personal web portfolio contact form.</p>
        </div>
        
    </div>
      `,
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