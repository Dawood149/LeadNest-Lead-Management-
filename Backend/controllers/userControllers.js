import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

async function handleAgentSignUp(req, res) {
  //  console.log(req.body)

  const password = req.body.password;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    // console.log("Request Body:", req.body);

    // Validate required fields
    /*  if (!req.body.fullName || !req.body.workEmail || !req.body.password || !req.body.role) {
      return res.status(400).json({ 
        error: "Missing required fields",
        required: ["fullName", "workEmail", "password", "role"]
      });

    } */

    const newUser = await userModel.create({
      fullName: req.body.fullName,
      workEmail: req.body.workEmail,
      password: hashedPassword,
      role: "agent",
    });

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        workEmail: newUser.workEmail,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);

    // Handle validation errors specifically
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        error: "Validation failed",
        details: errors,
      });
    }

    return res.status(500).json({ error: "Internal server error" });
  }
}

export const handleLoginForm = async (req, res) => {
  const incomingEmail = req.body.email;
  const incomingPassword = req.body.password;

 // console.log("Incoming Password is: ", incomingPassword);

  const user = await userModel.findOne({ workEmail: incomingEmail });

  //console.log("user is: ", user);

  if (!user.workEmail) {
    return res.status(404).json({ message: "Email not found" });
  }

  const isMatch = await bcrypt.compare(incomingPassword, user.password); // will store true if password is matched, else false
  //console.log(isMatch);

  if (!isMatch) {
    return res.status(401).json({ message: "Wrong Password" });
  }

  if (user.workEmail || isMatch) {
    const token = generateToken(user._id, user.role);
    //console.log(token);
    res.cookie("token", token);
    
    return res.status(200).json({
      message: "Login Successful",
      role: user.role, // Assuming you have user object
      name:user.fullName,
    });
  } else return res.status(404).json({ message: "Something Went Wrong" });
};

export const handleLogout = async (req, res) =>
  {
      res.clearCookie('token')
    return res.json({message:"Logged out"})
  }

export default handleAgentSignUp;
