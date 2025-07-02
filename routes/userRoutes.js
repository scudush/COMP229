const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/', userController.getAllUsers);

// GET one user by ID
router.get('/:id', userController.getUserById);

// POST create user
router.post('/', userController.createUser);

// PUT update user
router.put('/:id', userController.updateUser);

// DELETE one user
router.delete('/:id', userController.deleteUser);

// DELETE all users
router.delete('/', userController.deleteAllUsers);

// POST sign in
router.post('/signin', userController.signIn);

module.exports = router;
