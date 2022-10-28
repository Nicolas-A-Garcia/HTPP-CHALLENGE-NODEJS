import { Schema, model } from "mongoose";

const directorSchema = new Schema({
    name: String,
    genre: String,
    dateOfBirth: Number,
    imgUrl: String,
    directedFilms: Array,
    nationality : String
},{
    timestamp: true,
    versionKey: false
})

export default model("Director", directorSchema)