const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8000;
const routes = require('./routes/booksRoutes')
const db = require('./models')

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res, next) {
  res.send('database connection')
})

app.use('/', routes)

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

// app.listen(PORT, function() {
//   console.log(`App listening on port ${PORT}`)
// })

module.exports = app;
