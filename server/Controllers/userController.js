const userModal = require("../Models/userModels");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await userModal.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exists" });

    if (!email || !password || !name) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }
    if (!validator.isStrongPassword(password)) {
      return res
        .status(400)
        .json({ message: "Please enter a strong password" });
    }

    user = new userModal({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userModal.findOne({ email });

    if (!user)
      return res.status(400).json({ message: "Invalid email or password..." });

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword)
      return res.status(400).json({ message: "Invalid email or password..." });

    const token = createToken(user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email,
      token,
      message: "User logged in successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// find user
const findUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await userModal.findById(userId);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// getusers
const getUsers = async (req, res) => {
  try {
    const users = await userModal.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = { registerUser, loginUser, findUser, getUsers };
