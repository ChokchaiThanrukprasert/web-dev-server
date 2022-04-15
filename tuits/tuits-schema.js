import mongoose from 'mongoose';

// Tuits Schema for MongoDB
const schema = mongoose.Schema({
  tuit: String,
  handle: String,
  verified: Boolean,
  postedBy: {
    username: String
  },
  "avatar-image": String,
  stats: {
    comments: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number
  },
  attachments: {
    image: String,
    video: String
  }
}, {collection: 'tuits'});

export default schema;
