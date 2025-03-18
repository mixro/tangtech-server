import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true},
        img: { type: String, required: true },
        price: { type: Number, required: true },
        categories: { type: Array },
        type: {type: String, required: true },
        brand: {type: String},
        rating: { type: Number, default: 4.0 },
        status: { type: Boolean, default: true },
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true}
);

export default mongoose.model("Product", productSchema);