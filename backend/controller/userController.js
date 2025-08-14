require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/UserModel");

module.exports.register = async (req, res) => {
  try {
    console.log("Incoming request body:",req.body);
    
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      console.log("Email already exists", req.body.email);
      return res.status(400).json({ error: "Email already exists" });
    }

    console.log("Hashing password... ");
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log("Hashed password: ", hashedPassword);

    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log("User saved successfully");

    const token = jwt.sign({ email: newUser.email }, process.env.SECRET_KEY);
    console.log("Token generated:", token);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};