require('dotenv').config()
process.env.NODE_ENV = "test"
const test = require('tape')
const db = require('../models')
const {
    // getBookById,
    getAllBooks
} = require('../controllers/booksController')
var httpMocks = require('node-mocks-http');





test.only('get all books resolves with a success message', (assert) => {
    const req = httpMocks.createRequest({
        method: 'GET',
        url: '/books',
    });

    const res = httpMocks.createResponse();

    getAllBooks(req, res).then((response) => {
        const data = response._getJSONData();
        // console.log('data', data[0].title)
        // console.log('response', response)
        assert.equal(typeof response.statusMessage, 'string');
        assert.equal('Boy Swallows Universe', data[0].title)
        assert.end()
    });
});

