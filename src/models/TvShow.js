import { Schema, model } from "mongoose";

const tvShowSchema = new Schema({
    title: String,
    category: String,
    description: String,
    budget: Number,
    imgUrl: String,
    actors: Array,
    director : String,
    seasons: Number,
    episodesNames: Array 
},{
    timestamp: true,
    versionKey: false
})

export default model("tvShow", tvShowSchema)