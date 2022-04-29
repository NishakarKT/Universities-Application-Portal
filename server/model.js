import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    universities: {
        type: Array,
        required: true
    }
});

const universitySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: [true, "University already exists."]
    },
    country: {
        type: String,
        required: true
    },
    expenses: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    }
});

const User = new mongoose.model("users", userSchema);
const University = new mongoose.model("universities", universitySchema);

export { User, University };