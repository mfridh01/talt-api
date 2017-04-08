var mongoose = require('mongoose');

var Artikel = mongoose.model('Artikel', {
  namn: {
    type: String,
    required: true,
    minlength: 1
  },
  grupp: {
    type: Number,
    required: false,
    default: null
  },
  antal: {
    type: Number,
    required: true
  },
  pris: {
    type: Number,
    required: false,
    default: null
  },
  artikelnr: {
    type: Number,
    required: true
  }
});

module.exports = { Artikel };
