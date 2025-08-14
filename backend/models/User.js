const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
