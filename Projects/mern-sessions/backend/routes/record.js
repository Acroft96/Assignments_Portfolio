const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const bcrypt = require("bcrypt");
const ObjectId = require("mongodb").ObjectId;

// Registration route
recordRoutes.post("/register", async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    const existingUser = await db_connect.collection("users").findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
      savings: 0.00,  // Initialize savings
      checking: 0.00 // Initialize checking
    };

    const result = await db_connect.collection("users").insertOne(newUser);
    req.session.userId = result.insertedId; // Store user ID in session
    res.json({ message: "Registration successful", userId: req.session.userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login route
recordRoutes.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let db_connect = dbo.getDb();
  const user = await db_connect.collection("users").findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user._id;
    res.json({ success: true, userId: user._id });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Logout route
recordRoutes.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Failed to log out');
    }
    res.clearCookie('connect.sid');
    res.json({ success: true });
  });
});

// Account summary route
recordRoutes.get('/account-summary', async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  let db_connect = dbo.getDb();
  const user = await db_connect.collection("users").findOne({ _id: new ObjectId(req.session.userId) });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
  });
});

// Account balances
recordRoutes.get('/account-balances', async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  let db_connect = dbo.getDb();
  const user = await db_connect.collection("users").findOne({ _id: new ObjectId(req.session.userId) });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({
    savings: user.savings ?? 0.00,  // Ensure savings is not null
    checking: user.checking ?? 0.00 // Ensure checking is not null
  });
});

// Transaction route
recordRoutes.post('/transaction', async (req, res) => {
  if (!req.session.userId) {
    console.log('Unauthorized access attempt');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { type, amount, account } = req.body;
  const parsedAmount = parseFloat(amount);

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    console.log('Invalid amount:', amount);
    return res.status(400).json({ message: 'Amount must be a positive number' });
  }

  if (account !== 'savings' && account !== 'checking') {
    console.log('Invalid account type:', account);
    return res.status(400).json({ message: 'Invalid account type' });
  }

  let db_connect = dbo.getDb();
  console.log('Database connection established');

  const user = await db_connect.collection("users").findOne({ _id: new ObjectId(req.session.userId) });
  if (!user) {
    console.log('User not found:', req.session.userId);
    return res.status(404).json({ message: 'User not found' });
  }

  // Ensure numeric values
  user.savings = parseFloat(user.savings) || 0.00;
  user.checking = parseFloat(user.checking) || 0.00;

  console.log("Before transaction - Savings:", user.savings, "Checking:", user.checking);

  if (type === 'deposit') {
    user[account] = user[account] + parsedAmount;
  } else if (type === 'withdraw') {
    if (user[account] < parsedAmount) {
      console.log('Insufficient funds for withdrawal');
      return res.status(400).json({ message: 'Insufficient funds' });
    }
    user[account] = user[account] - parsedAmount;
  } else {
    console.log('Invalid transaction type:', type);
    return res.status(400).json({ message: 'Invalid transaction type' });
  }

  console.log("After transaction - Savings:", user.savings, "Checking:", user.checking);

  const updateResult = await db_connect.collection("users").updateOne(
    { _id: new ObjectId(req.session.userId) },
    { $set: { savings: user.savings, checking: user.checking } }
  );

  console.log("Update result:", updateResult);

  if (updateResult.modifiedCount === 0) {
    console.log("Database update failed");
    return res.status(500).json({ message: 'Failed to update account balances' });
  }

  const updatedUser = await db_connect.collection("users").findOne({ _id: new ObjectId(req.session.userId) });
  console.log("Updated user - Savings:", updatedUser.savings, "Checking:", updatedUser.checking);

  res.json({ success: true, savings: updatedUser.savings, checking: updatedUser.checking });
});



module.exports = recordRoutes;