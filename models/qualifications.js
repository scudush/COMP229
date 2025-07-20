const mongoose = require('mongoose');

const qualificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  institution: String,
  year: String,
  description: String
});

module.exports = mongoose.model('Qualification', qualificationSchema);
