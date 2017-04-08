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
    type: Boolean
  },
  kund: {
    type: Number
  },
  handpenning: {
    type: Boolean
  },
  ok: {
    type: Boolean
  }
});

module.exports = { Uthyrning };
