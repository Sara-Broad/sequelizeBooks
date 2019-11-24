const db = require('../models')

const booksController = {
  getAllBooks(req, res) {
    db.Book.findAll({})
    .then(function (books) {
      res.json(books)
    })
  }
}

module.exports = booksController