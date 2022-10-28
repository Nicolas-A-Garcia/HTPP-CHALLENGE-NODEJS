import mongoose from "mongoose";

mongoose.connect("mongodb://Localhost/apiDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("DB is connected"))
    .catch(e => console.log(e))