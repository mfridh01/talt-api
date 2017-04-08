var mongoose = require('mongoose');

var Uthyrning = mongoose.model('Uthyrning', {
  artiklar: {
    type: Array
  },
  hamtas: {
    type: Date,
    default: Date.now
  },
  lamnas: {
    type: Date,
    default: Date.now
  },
  anvandas: {
    type: Date,
    default: Date.now
  },
  slap: {
    type: Boolean,
    default: false
  },
  kund: {
    type: Number
  },
  handpenning: {
    type: Boolean,
    default: false
  },
  ok: {
    type: Boolean,
    default: true
  }
});

module.exports = { Uthyrning };
