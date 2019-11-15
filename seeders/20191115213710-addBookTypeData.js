const { Books } = require('../models/book')

module.exports = {
  // up: (queryInterface, Sequelize) => {

  // },

  up: async function () {
    return Promise.all(bookTypeAdditions.map(({ id, bookType}) => 
      Books.update({})
    ))
  },

  down: (queryInterface, Sequelize) => {
 
  }
};

const bookTypeAdditions = [
  {
    id: 1,
    bookType: 'nonfiction'
  },
  {
    id: 2,
    bookType: 'fiction'
  },
  {
    id: 3,
    bookType: 'nonfiction'
  },
  {
    id: 4,
    bookType: 'nonfiction'
  },
  {
    id: 5,
    bookType: 'fiction'
  },
  {
    id: 6,
    bookType: 'nonfiction'
  },
  {
    id: 7,
    bookType: 'nonfiction'
  },
  {
    id: 8,
    bookType: 'fiction'
  },
  {
    id: 9,
    bookType: 'fiction'
  },
  {
    id: 10,
    bookType: 'fiction'
  }
]