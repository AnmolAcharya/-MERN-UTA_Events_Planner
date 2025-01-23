import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name Required"],
        minLength: [3, "Atleast 3 characters required!"]
    },
    email:{
        type: String,
        required: [true, "Email Required"],
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    subject:{
        type: String,
        required: [true, "Subject Required"],
        minLength: [3, "Atleast 5 characters required!"]
    },
    message:{
        type: String,
        required: [true, "Message Required"],
        minLength: [3, "Atleast 10 characters required!"]
    },
});


export const Message = mongoose.model("Message", messageSchema);
