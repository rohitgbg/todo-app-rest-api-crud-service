const mongoose = require('mongoose');

TodoSchema = new mongoose.Schema({
    title: String,
    content: String
},{
    timestamps:true
})


module.exports = mongoose.model('Todo', TodoSchema);