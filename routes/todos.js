const express = require('express');
const router = express.Router();

//import createTodo controller
const {createTodo} = require('../controllers/createTodo');
const {getTodo, getTodoById} = require('../controllers/getTodo');

//define api routes

//you path has been mapped to our controller
router.post('/createTodo', createTodo);
router.get('/getTodos', getTodo);
router.get('/getTodos/:id', getTodoById);
module.exports = router;