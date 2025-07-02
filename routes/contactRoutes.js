const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// GET all contacts
router.get('/', contactController.getAllContacts);

// GET one by ID
router.get('/:id', contactController.getContactById);

// POST create
router.post('/', contactController.createContact);

// PUT update
router.put('/:id', contactController.updateContact);

// DELETE one
router.delete('/:id', contactController.deleteContact);

// DELETE all
router.delete('/', contactController.deleteAllContacts);

module.exports = router;
