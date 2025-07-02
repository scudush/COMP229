const mongoose = require('mongoose');

const qualificationSchema = new mongoose.Schema({
  school: { type: String, required: true },
  degree: String,
  fieldOfStudy: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

module.exports = mongoose.model('Qualification', qualificationSchema);
