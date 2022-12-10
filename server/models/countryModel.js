const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;
