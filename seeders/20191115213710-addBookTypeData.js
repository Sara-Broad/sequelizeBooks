const { Book } = require('../models')

module.exports = {
  up: async function () {
    return Promise.all(bookTypeAdditions.map(({ title, bookType }) => 
      Book.update({ bookType }, { where: { title }, fields: ['bookType'] })
    ))
  },

  down: async function () {
    return Promise.all(bookTypeAdditions.map(({ title }) => 
      Book.destory({ bookType: null }, { where: { title }, fields: ['bookType'] })
    ))
  }
};

const bookTypeAdditions = [
  {
    title: 'Heavy',
    bookType: 'nonfiction'
  },
  {
    title: 'Boy Swallows Universe',
    bookType: 'fiction'
  },
  {
    title: 'The Buried',
    bookType: 'nonfiction'
  },
  {
    title: 'The Body Papers',
    bookType: 'nonfiction'
  },
  {
    title: 'Daisy Jones & The Six',
    bookType: 'fiction'
  },
  {
    title: 'Small Fry',
    bookType: 'nonfiction'
  },
  {
    title: 'Boom Town',
    bookType: 'nonfiction'
  },
  {
    title: 'Flights',
    bookType: 'fiction'
  },
  {
    title: 'The Hearts Invisble Furies',
    bookType: 'fiction'
  },
  {
    title: 'The Great Believers',
    bookType: 'fiction'
  }
]