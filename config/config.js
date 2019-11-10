require('dotenv').config()

// module.exports = {
//   development: {
//     url: process.env.DEV_DATABASE_URL,
//     dialect: 'postgres',
//   },
//   test: {
//     url: process.env.TEST_DATABASE_URL,
//     dialect: 'postgres',
//   },
//   production: {
//     url: process.env.DATABASE_URL,
//     dialect: 'postgres',
//   }
// }

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    seederStorage: 'sequelize'
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    seederStorage: 'sequelize'
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    seederStorage: 'sequelize'
  }
}