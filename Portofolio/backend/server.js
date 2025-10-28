const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Updated CORS for production
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Contact Form API is running!',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Health check for deployment platforms
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please fill in all fields' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please enter a valid email address' 
    });
  }

  // Email to you (receiving the contact form)
  const mailOptionsToYou = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact: Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #cc0000; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #cc0000; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #666; font-size: 12px; text-align: center;">
            This message was sent from your portfolio contact form
          </p>
        </div>
      </div>
    `,
  };

  // Auto-reply email to sender
  const mailOptionsToSender = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thanks for reaching out! - Jeremy Joseph Pohar',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
          <h2 style="color: #333;">Hi ${name}! 👋</h2>
          
          <p style="line-height: 1.6; color: #555;">
            Thank you for reaching out through my portfolio! I've received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #cc0000; margin: 20px 0;">
            <p style="margin: 0; color: #666;"><strong>Your message:</strong></p>
            <p style="margin-top: 10px; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            In the meantime, feel free to connect with me on:
          </p>
          
          <div style="margin: 20px 0;">
            <a href="https://www.linkedin.com/in/jeremy-joseph-pohar" style="display: inline-block; margin-right: 15px; color: #0077b5; text-decoration: none;">LinkedIn</a>
            <a href="https://github.com/CaffeinatedR4t" style="display: inline-block; margin-right: 15px; color: #333; text-decoration: none;">GitHub</a>
            <a href="https://instagram.com/jrmy.jp" style="display: inline-block; color: #e4405f; text-decoration: none;">Instagram</a>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            Best regards,<br>
            <strong>Jeremy Joseph Pohar</strong><br>
            Computer Science Student | AI Trainer | Developer
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #999; font-size: 12px; text-align: center;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      </div>
    `,
  };

  try {
    // Send email to you
    await transporter.sendMail(mailOptionsToYou);
    
    // Send auto-reply to sender
    await transporter.sendMail(mailOptionsToSender);
    
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! Check your email for confirmation.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📧 Email service configured with: ${process.env.EMAIL_USER}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});