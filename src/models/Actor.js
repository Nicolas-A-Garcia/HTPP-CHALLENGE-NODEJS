import { Schema, model } from "mongoose";

const actorSchema = new Schema({
    name: String,
    genre: String,
    dateOfBirth: Number,
    imgUrl: String,
    actuedFilms: Array,
    nationality : String
},{
    timestamp: true,
    versionKey: false
})

export default model("Actor", actorSchema)