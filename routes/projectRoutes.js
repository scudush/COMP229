const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// GET all
router.get('/', projectController.getAllProjects);

// GET one
router.get('/:id', projectController.getProjectById);

// POST create
router.post('/', projectController.createProject);

// PUT update
router.put('/:id', projectController.updateProject);

// DELETE one
router.delete('/:id', projectController.deleteProject);

// DELETE all
router.delete('/', projectController.deleteAllProjects);

module.exports = router;
