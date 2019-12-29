require('dotenv').config()
process.env.NODE_ENV = "test"
const test = require('tape')
const request = require('request');
const db = require('../models')
const {
    deleteBook,
    addBook,
    getAllBooks
} = require('../controllers/booksController')
const sinon = require('sinon')
const httpMocks = require('node-mocks-http');



// works but using Sinon
// test('get all books resolves with a success message', (assert) => {
//     const req = httpMocks.createRequest({
//         method: 'GET',
//         url: '/books',
//     });

//     const res = httpMocks.createResponse();

//     getAllBooks(req, res).then((response) => {
//         const data = response._getJSONData();
//         assert.equal(typeof response.statusMessage, 'string');
//         assert.ok(data.length > 1, 'There should be more than one entry')
//         assert.equal('Boy Swallows Universe', data[0].title)
//         assert.strictEqual(response.statusCode, 200, 'Expect 200 HTTP status code')
//         assert.end()
//     });
// });

test('get all books should return a list of movies', (assert) => {
 
    const responseObject = {
        statusCode: 200,
        headers: {
            'content-type': 'application/json'
        }
    };
    const bookMock = {
        status: 'success',
        data: [{
                id: 1,
                title: 'Heavy',
                author: 'Kiese Laymon',
                dateFinished: '2019-01-21',
                pages: 256,
                rating: 5,
                createdAt: '2019-11-24T01:21:17.532Z',
                updatedAt: '2019-11-24T01:21:17.532Z'
            },
            {
                id: 2,
                title: 'Boy Swallows Universe',
                author: 'Trent Dalton',
                dateFinished: '2019-04-27',
                pages: 464,
                rating: 5,
                createdAt: '2019-11-24T01:21:17.532Z',
                updatedAt: '2019-11-24T01:21:17.532Z'
            }
        ]
    }

    this.get = sinon.stub(request, 'get');
    this.get.yields(null, responseObject, JSON.stringify(bookMock))
    request.get('/books', (err, res, body) => {
        // console.log(JSON.parse(body))
        body = JSON.parse(body);
        assert.equal(body.data.length, 2, 'there are two objects in the mock data')
        assert.strictEqual(body.status, 'success', 'expect a success message')
        assert.strictEqual(res.statusCode, 200, 'Expect 200 HTTP status code')
        assert.end()
    })

});

test('addBooks is called', (assert) => {
    const book = {
        addBook: (book) => {
            this.book = book;
        }
    }

    const bookMock = [{
        "id": 2,
        "title": "Boy Swallows Universe",
        "author": "Trent Dalton",
        "dateFinished": "2019-04-27T00:00:00.000Z",
        "pages": 464,
        "rating": 5,
        "bookType": "fiction",
        "createdAt": "2019-11-24T01:21:17.532Z",
        "updatedAt": "2019-11-24T01:21:17.689Z"
    }]

    sinon.spy(book, "addBook")
    book.addBook(bookMock)
    assert.ok(book.addBook.calledOnce, 'should be called once')
    assert.end()
});

test('Delete books is called and removes a book from the list', (assert) => {
    const responseObject = {
        statusCode: 200,
        headers: {
            'content-type': 'application/json'
        }
    };

    const requestObject = {
        status: 'success',
        params: [
            {
                "id": 1
            }
        ]
    }

    this.delete = sinon.stub(request, 'delete')
    this.delete.yields(null, responseObject, JSON.stringify(requestObject));
    const bookId = requestObject.params[0].id

    request.delete(`/books/${bookId}`, (err, res, body) => {
        assert.strictEqual(responseObject.statusCode, 200, 'status code is a 200')
        assert.strictEqual(requestObject.params[0].id, 1, `The request object has the bookId of ${bookId}`)
        assert.end()
    })
});