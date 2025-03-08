import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        pnoneNumber: { type: String},
        message: { type: String, required: true },
        status: { type: String, default: "pending" },
    },
    
    { timestamps: true }
);

export default mongoose.model("Message", messageSchema);