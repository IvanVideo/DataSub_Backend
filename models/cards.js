const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  CardNumber: {
    type: Number,
    minlength: 16,
    maxlength: 16,
    required: true,
  },
  ExpDate: {
    type: String,
    minlength: 7,
    maxlength: 7,
    required: true,
  },
  Cvv: {
    type: Number,
    minlength: 3,
    maxlength: 3,
    required: true,
  },
  Amount: {
    type: Number,
    minlength: 1,
    maxlength: 100,
    required: true,
  },
});

module.exports = mongoose.model('cards', itemSchema);