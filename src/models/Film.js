import { Schema, model } from "mongoose";

const filmSchema = new Schema({
    title: String,
    category: String,
    description: String,
    budget: Number,
    imgUrl: String,
    actors: Array,
    director : String
},{
    timestamp: true,
    versionKey: false
})

export default model("Film", filmSchema)