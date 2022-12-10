const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
    unique: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  secondName: {
    type: String,
    trim: true,
  },
  location: {
    country: {
      type: mongoose.Schema.ObjectId,
      ref: 'Country',
    },
    city: {
      type: String,
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
  avatarUrl: {
    type: String,
  },
  coverUrl: {
    type: String,
  },
  userRole: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user',
  },
});
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
