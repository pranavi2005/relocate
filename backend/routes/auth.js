require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const nodemailer = require("nodemailer");

const router = express.Router();

let otpStore = {}; // Temporary store for OTPs

// Configure transporter for Gmail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});


// Generate and send OTP
router.post("/send-otp", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  otpStore[email] = otp;

  // Expire OTP after 5 minutes
  setTimeout(() => delete otpStore[email], 5 * 60 * 1000);

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).json({ message: error.message });
    console.log(`✅ OTP for ${email}: ${otp}`);
    res.json({ message: "OTP sent successfully!" });
  });
});

// Verify OTP
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  if (otpStore[email] && otpStore[email] == otp) {
    delete otpStore[email]; // OTP is valid only once
    return res.json({ message: "OTP verified successfully!" });
  }

  res.status(400).json({ message: "Invalid or expired OTP" });
});

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, dob, city, pincode, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      dob,
      city,
      pincode,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
