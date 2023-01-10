import mongoose from "mongoose";
import dateCreated from "../getDate";

const schema= mongoose.Schema({
    title: String,
    content: String,
    image: String,
    comments: [{
        name: String,
        email: String,
        message: String
    }], 
    likes:{
        userLike: {type: Number, default: 0} ,
        userValue: {type: Boolean, default: false},
    },
    date: {type: String, default: dateCreated}
});

module.exports = mongoose.model("Blog", schema);
