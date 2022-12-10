const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    maxLenght: 40,
    minLenght: 2,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  shortDescription: {
    type: String,
    required: true,
    maxLenght: 280,
    minLenght: 10,
  },
  longDescription: {
    type: String,
    required: true,
    maxLenght: 600,
    minLenght: 10,
  },
  investments: {
    type: Number,
    required: true,
    default: 0,
  },
  webSite: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
  coverUrl: {
    type: String,
    required: true,
  },
  presentationUrl: {
    type: String,
    required: true,
  },
  screenShotsUrl: [
    {
      type: String,
      required: true,
    },
  ],
  teamMembers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  ],
  moderated: {
    type: Boolean,
    default: false,
    required: true,
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  demoUrl: {
    type: String,
    required: true,
  },
});
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
