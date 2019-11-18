// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Book = sequelize.define('Book', {
//     title: DataTypes.STRING,
//     author: DataTypes.STRING,
//     dateFinished: DataTypes.DATE,
//     pages: DataTypes.INTEGER,
//     rating: DataTypes.INTEGER
//   }, {});
//   Book.associate = function(models) {
//     // associations can be defined here
//   };
//   return Book;
// };

module.exports = (sequelize, Type) => {
  const Book = sequelize.define('Book', {
    title: {
      type: Type.STRING,
      allowNull: false
    },
    author: {
      type: Type.STRING,
      allowNull: false
    },
    dateFinished: {
      type: Type.DATE,
      allowNull: false
    },
    pages: {
      type: Type.INTEGER,
      allowNull: false
    }, 
    rating: {
      type: Type.INTEGER,
      allowNull: false
    },
    bookType: {
      type: Type.STRING,
      allowNull: false
    }
  })
  return Book
}