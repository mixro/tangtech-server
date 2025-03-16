import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        category: {
            type: String,
        },
        technicians: {
            type: Number,
        },
        price: {
            type: Number,
        },
        duration: {
            type: String,
        },
        availability: {
            type: Boolean,
            default: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);