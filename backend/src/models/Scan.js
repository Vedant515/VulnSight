const mongoose =require("mongoose");

const scanSchema = new mongoose.Schema(
    {
        target: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            enum: ["pending","running","completed","failed"],
            default: "pending"
        },
        startedAt: {
            type: Date
        },
        completedAt: {
            type: Date
        },
        securityScore: {
            type: Number,
            default: 0
        }

    },
    {
        timestamps: true
    } 
);

module.exports = mongoose.model("Scan",scanSchema)