const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(PORT, function() {
//     console.log(`App listening on port ${PORT}`)
// })

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });