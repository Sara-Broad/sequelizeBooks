const db = require('../models')

module.exports = function (app) {

    const getAllBooks = (req, res) => {
        db.Books.findAll({})
            .then(function (books) {
                res.json(book)
            })
    }
}