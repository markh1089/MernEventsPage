const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    min: 3,
    max: 160,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    index: true,
    lowercase: true,
  },
  location:{    
    type: String,
    trim: true,
    min: 3,
    max: 160,
    required: true,
  },
  content: {
      type:{},
      required:true,
      min:20,
      max:200000,
  },
  eventDate:{
    type: String,
    trim: true,
    min: 3,
    max: 160,
    required: true,
  },
  user: {
      type: String,
      default: 'Admin',
  }
}, {timestamps:true});

module.exports = mongoose.model('Post', postSchema)
