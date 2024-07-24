const express = require('express');
const router = express.Router();

//import createTodo controller
const {createTodo} = require('../controllers/createTodo');

//define api routes

//you path has been mapped to our controller
router.post('/createTodo', createTodo);

module.exports = router;