
const mongoose = require('mongoose')
const kindleSchema = new mongoose.Schema({
    title: {
        type: String,
        require: false,
    },
        date: { type: Date, default: Date.now },
        link: {
            type: String,
            require: true, 
        }
        author: {
            type: String,
            require: false,
            }
        });

const Kindle = mongoose.model("Kindle", kindleSchema)

module.exports = Kindle
