import userModel from "../models/userModel.js";

async function handleAgentSignUp(req, res) {
  try {
   // console.log("Request Body:", req.body);
    
    // Validate required fields
    if (!req.body.fullName || !req.body.workEmail || !req.body.password || !req.body.role) {
      return res.status(400).json({ 
        error: "Missing required fields",
        required: ["fullName", "workEmail", "password", "role"]
      });
    }

    const newUser = await userModel.create({
      fullName: req.body.fullName,
      workEmail: req.body.workEmail,
      password: req.body.password,
      role: "agent"
    });

    return res.status(201).json({ 
      message: "User created successfully",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        workEmail: newUser.workEmail,
        role: newUser.role
      }
    });
  } 
  
  catch (error) {
    console.error("Error creating user:", error);
    
    // Handle validation errors specifically
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        error: "Validation failed",
        details: errors 
      });
    }
    
    return res.status(500).json({ error: "Internal server error" });
  }
}

export default handleAgentSignUp;