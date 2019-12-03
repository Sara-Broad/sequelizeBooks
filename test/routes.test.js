require('dotenv').config()
process.env.NODE_ENV = "test"
const test = require('tape')
// const app = require('../server')
const modulePath = '../server'
const db = require('../models')
const Promise = require('promise');
var proxyquire = require('proxyquire').noCallThru()
var assert = require('assert');
const Book = require('../models/book')
// const {
//     getBookById,
//     getAllBooks
// } = require('../controllers/booksController')
// const controllers = require('../controllers/booksController')
const sinon = require('sinon');
var httpMocks = require('node-mocks-http');

const express = require('express');


const app = express();

// test('get books by id', function (assert) {
//     const bookMock = {
//         id: 10,
//         title: 'The Believers',
//         author: 'Rebecca Mekkai', 
//         dateFinished: '01-01-2019',
//         pages: 350,
//         rating: 5,
//         bookType: 'fiction'
//     }
// })

const getBookById = app.get('/books/:id', function (req, res) {
    const bookId = req.params.id
    db.Book.findOne({
            where: {
                id: bookId
            }
        }).then(function (book) {
            if (!book) {
                return res.status(404).json({
                    message: 'book not found'
                })
            } else {
                res.status(200).json(book)
            }
        })
        .catch(err => {
            res.status(500).sendStatus('DATABASE ERROR: ' + err.message)
        })
})


test.only('get book by id', function (test) {
    const mockRequest = httpMocks.createRequest({
        method: 'GET',
        url: '/books/:id',
        params: {
            id: 10
        }
    });

    const mockResponse = httpMocks.createResponse({
        eventEmitter: require('events').EventEmitter
    });

    // console.log(mockResponse)
    // getBookById(mockRequest, mockResponse)
    // const data = response._getJSONData();
    // var data = mockResponse._getJSONData();
    // console.log(data)
    // var data = mockResponse._getJSONData();
    // console.log('data', data)
    // return getBookById(mockRequest, mockResponse).then((res) => {
    //     test.equal(typeof res.message, 'string');
    //     test.end()
    // });
});

// test('booksController.getAllBooks returns the entire list of books', (assert) => {
// test('get all books', function (assert) {
//     const books = {
//         Book: {
//             getAllBooks: () => {}
//         }
//     }
//     const func = proxyquire(modulePath, { '../models/index': books })

//     assert.equal(typeof func.params, 'object', 'get all books contains a params object')
//     assert.end()
// })
// })

// test('booksController.addBook returns a newly added book', (assert) => {

//     assert.end()
// })

// test('booksController.changeRating returns a book with a new rating', (assert) => {

//     assert.end()
// })

// test('booksController.deleteBook deletes the book from the database', (assert) => {

//     assert.end()
// })