
const mongoose = require('mongoose')
const codexSchema = new mongoose.Schema({
    title: {
        type:String,
        require:false, 
     author: {
        type: String,
        require: false, 
    added-to-collection: 
     { type: Date, default: Date.now },

});
const Codex = mongoose.model("Codex", codexSchema)







module.exports = Codex
