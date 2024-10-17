const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true, // Ensures no duplicate category names
            trim: true, // Removes leading/trailing whitespace
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
