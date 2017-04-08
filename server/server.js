// Imports.
var express    = require('express');
var bodyParser = require('body-parser');

// Egna imports.
var { mongoose }  = require('./db/mongoose');
var { Uthyrning } = require('./models/uthyrning');
var { Artikel }   = require('./models/artikel');

// Server ---
var APP_PORT = 3000;
var app = express();

app.use(bodyParser.json());

app.post('/uthyrningar', (req, res) => {
  var uthyrning = new Uthyrning({
    artiklar: [req.body.text]
  });

  uthyrning.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/uthyrningar', (req, res) => {
  Uthyrning.find().then((uthyrningar) => {
    res.send({uthyrningar});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(APP_PORT, () => {
  console.log('Server started on port ' + APP_PORT);
});
