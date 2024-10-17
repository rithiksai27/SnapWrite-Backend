const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true, // Clean up whitespace
        },
        desc: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
            default: "", // Provide a default if necessary
        },
        username: {
            type: String,
            required: true,
        },
        categories: {
            type: [String], // Specify array of strings for better clarity
            required: false,
        },
        status: {
            type: String,
            enum: ["draft", "published"], // Manage visibility
            default: "draft",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
