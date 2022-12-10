const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'Email address is required'],
    validate: [validator.isEmail, 'Invalid email'],
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'provide password'],
    minlenght: 8,
    select: false,
  },
  username: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'username is empty'],
    unique: true,
  },
  firstName: {
    type: String,
    trim: true,
    required: [true, 'firstName is empty'],
  },
  secondName: {
    type: String,
    trim: true,
    required: [true, 'secondName is empty'],
  },
  location: {
    country: {
      type: mongoose.Schema.ObjectId,
      ref: 'Country',
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  bio: {
    type: String,
    trim: true,
    minlenght: 10,
    maxlengh: 140,
  },
  roles: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Role',
      required: true,
    },
  ],
  skills: [
    {
      type: String,
      trim: true,
      minlenght: 1,
      maxlengh: 40,
    },
  ],
  socials: {
    twitter: {
      type: String,
      trim: true,
    },
    telegram: {
      type: String,
      trim: true,
    },
    github: {
      type: String,
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
    },
  },
  cvUrl: {
    type: String,
    unique: true,
  },
  favorite: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Project',
    },
  ],
  userRole: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user',
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
