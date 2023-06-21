var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    }
})

const search = mongoose.model("products",ProductSchema)
module.exports = search