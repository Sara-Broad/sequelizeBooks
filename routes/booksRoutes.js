// const router = require('express').Router();
var express = require('express');
var router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/books', booksController.getAllBooks)
router.get('/books/:id', booksController.getBookById)
router.post('/books', booksController.addBook)
router.put('/books/:id', booksController.changeRating)
router.delete('/books/:id', booksController.deleteBook)


module.exports = router;