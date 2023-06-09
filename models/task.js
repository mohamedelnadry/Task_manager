const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'name is required'],
        trim:true,
        maxlength: [20,'name must be more than 20']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Tasks',taskSchema)