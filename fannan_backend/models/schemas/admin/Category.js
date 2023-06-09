import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    title: { type: String, required: true },
    discription: { type: String, required: false },
    status: { type: Number, required: true, default: 0 },
    image: { type: String, required: true }
})



export const category_model = mongoose.model("category", categorySchema)