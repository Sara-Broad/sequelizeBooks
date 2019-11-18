module.exports = {
  up: function (queryInterface, Type) {
     return queryInterface.addColumn('Books', 'bookType', { type: Type.STRING, allowNull: true })
  },

  down: function (queryInterface, Type) {
    return queryInterface.removeColumn('Books', 'bookType', { type: Type.STRING })
  }
}
