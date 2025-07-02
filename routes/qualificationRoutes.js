const express = require('express');
const router = express.Router();
const qualificationController = require('../controllers/qualificationController');

// GET all
router.get('/', qualificationController.getAllQualifications);

// GET one
router.get('/:id', qualificationController.getQualificationById);

// POST create
router.post('/', qualificationController.createQualification);

// PUT update
router.put('/:id', qualificationController.updateQualification);

// DELETE one
router.delete('/:id', qualificationController.deleteQualification);

// DELETE all
router.delete('/', qualificationController.deleteAllQualifications);

module.exports = router;
