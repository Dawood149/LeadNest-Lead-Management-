import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: true
    },
    workEmail:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    role: {
        type:String,
        enum:["admin", "agent"],
        default: "agent",
    }

},

);

const userModel=mongoose.model("users", userSchema)

export default userModel;