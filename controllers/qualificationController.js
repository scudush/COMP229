const Qualification = require('../models/qualifications');

// Get all qualifications
exports.getAllQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single qualification by ID
exports.getQualificationById = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ error: 'Qualification not found' });
    res.json(qualification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new qualification
exports.createQualification = async (req, res) => {
  try {
    const newQualification = new Qualification(req.body);
    await newQualification.save();
    res.status(201).json(newQualification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a qualification
exports.updateQualification = async (req, res) => {
  try {
    const updated = await Qualification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Qualification not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a qualification
exports.deleteQualification = async (req, res) => {
  try {
    const deleted = await Qualification.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Qualification not found' });
    res.json({ message: 'Qualification deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete all qualifications
exports.deleteAllQualifications = async (req, res) => {
  try {
    await Qualification.deleteMany();
    res.json({ message: 'All qualifications deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
