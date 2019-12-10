require('dotenv').config()
process.env.NODE_ENV = "test"
const test = require('tape')
const apps = require('../server')
const modulePath = '../server'
const db = require('../models')
const Promise = require('promise');
// var proxyquire = require('proxyquire').noCallThru()
var proxyquire = require('proxyquire')

// const {
//     getBookById,
//     getAllBooks
// } = require('../controllers/booksController')
const booksController = require('../controllers/booksController')
const sinon = require('sinon');
var httpMocks = require('node-mocks-http');

const express = require('express');


const app = express();

const bookMock = {
    id: 10,
    title: 'The Believers',
    author: 'Rebecca Mekkai',
    dateFinished: '01-01-2019',
    pages: 350,
    rating: 5,
    bookType: 'fiction'
}

const bookModel = {
    Book: {}
}


// test('get book by id', function (test) {
//     const mockRequest = httpMocks.createRequest({
//         method: 'GET',
//         url: '/books/:id',
//         params: {
//             id: 10
//         }
//     });

//     const mockResponse = httpMocks.createResponse({
//         eventEmitter: require('events').EventEmitter
//     });

//     console.log('mockRequest', mockRequest)
//     console.log('mockResponse', mockResponse)
//     test.doesNotThrow(function () {
//         booksController.getBookById(mockRequest, mockResponse);
//         // test.equal(bookMock, mockResponse)
//         test.equal(mockResponse.statusCode, 200)
//     });
//     test.end();
    // booksController.getBookById(mockRequest, mockResponse)
    // getBookById(mockRequest, mockResponse)

    // const data = mockResponse._getJSONData();
    // var data = mockResponse._getJSONData();
    // console.log(data)
    // var data = mockResponse._getJSONData();
    // console.log('data', data)
    // return getBookById(mockRequest, mockResponse).then((res) => {
    //     // test.equal(typeof res.message, 'string');
    //     // test.done()
    //     console.log(res)
    // });
    // test.end()


// });

// test.only('get all books', function (test) {

//     test.end()
// })

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

test.only('get all books', function (test) {
    const bookMock = {
        id: 1,
        title: 'Heavy',
        author: 'Kiese Laymon',
        dateFinished: '01-16-2019',
        pages: 200,
        rating: 5,
        bookType: 'nonfiction'
    }


    const bookListMock = [{
        get: () => bookMock
    }]

    const getAllMock = sinon.stub().returns(bookListMock)

    const models = {
        Book: {
            getAllBooks: getAllMock
        }
    }

    const func = proxyquire(booksController, { '../models': models})
    const actual = func.getAllBooks()
    // console.log(actual)
    test.ok(getAllMock.calledWith(), 'find stuff')
    test.end()

})