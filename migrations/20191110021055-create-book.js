module.exports = {
  up: (queryInterface, Type) => {
    return queryInterface.createTable('Books', {
      id: {
        type: Type.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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
      // bookType: {
      //   type: Type.STRING,
      //   allowNull: false
      // },
      createdAt: {
        type: Type.DATE
      },
      updatedAt: {
        type: Type.DATE
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};