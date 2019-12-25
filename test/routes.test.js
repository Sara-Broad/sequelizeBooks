require('dotenv').config()
process.env.NODE_ENV = "test"
const test = require('tape')
const db = require('../models')
const {
    // getBookById,
    addBook,
    getAllBooks
} = require('../controllers/booksController')
const sinon = require('sinon')
const httpMocks = require('node-mocks-http');




test('get all books resolves with a success message', (assert) => {
    const req = httpMocks.createRequest({
        method: 'GET',
        url: '/books',
    });

    const res = httpMocks.createResponse();

    getAllBooks(req, res).then((response) => {
        const data = response._getJSONData();
        console.log(data.length)
        assert.equal(typeof response.statusMessage, 'string');
        assert.equal('Boy Swallows Universe', data[0].title)
        assert.strictEqual(response.statusCode, 200, 'Expect 200 HTTP status code')
        assert.end()
    });
});

test.only('get all books resolves with a success message', (assert) => {
    const bookMock = [
        {
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
    // const bookStub = sinon.stub().returns({})
    // const req = {}
    // const sendMock = sinon.spy()
    // const res = {
    //     send: sendMock
    // }
    
    const req = {};
    const res = {
      status() {},
      json() {}
    };

    // sinon.stub(res, 'json').returns({bookMock});



    getAllBooks(req, res)
    assert.ok(res.json.calledOnce, 'should be called once')
    assert.end()
});

test('addBooks is called', (assert) => {
    const book = {
        addBook: (book) => {
          this.book = book;
        }
      }
    
    const bookMock = [
        {
            "id": 2,
            "title": "Boy Swallows Universe",
            "author": "Trent Dalton",
            "dateFinished": "2019-04-27T00:00:00.000Z",
            "pages": 464,
            "rating": 5,
            "bookType": "fiction",
            "createdAt": "2019-11-24T01:21:17.532Z",
            "updatedAt": "2019-11-24T01:21:17.689Z"
          }
    ]

    sinon.spy(book, "addBook")
    book.addBook(bookMock)
    assert.ok(book.addBook.calledOnce, 'should be called once')
    assert.end()
});