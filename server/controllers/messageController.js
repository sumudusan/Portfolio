import nodemailer from "nodemailer";
import Message from "../models/Message.js";
import dotenv from "dotenv";
dotenv.config();
// Configure your SMTP transport (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,       // Your admin email
    pass: process.env.ADMIN_EMAIL_PASS,  // Your email app password or SMTP password
  },
});

export async function sendMessage(req, res) {
  try {
    const newMsg = new Message(req.body);
    await newMsg.save();

    // Prepare email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL, // send to yourself (admin)
      subject: `New Message from ${newMsg.name}`,
      text: `You have a new message from your portfolio contact form:

Name: ${newMsg.name}
Email: ${newMsg.email}
Message: ${newMsg.message}
`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(201).json({ success: true, message: "Message sent", data: newMsg });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function getMessages(req, res) {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function deleteMessage(req, res) {
  try {
    const deleted = await Message.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Message not found" });
    res.json({ message: "Message deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
