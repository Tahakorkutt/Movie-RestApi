const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
  film_name: {
    type: String,
    required: true,
  },
  film_director: {
    type: String,
    required: true,
  },
  film_genre: {
    type: String,
    required: true,
  },
  film_rating: {
    type: Number,
    required: true,
  },
  film_userId: { // User identifier
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users'
  }
});

module.exports = mongoose.model('Film', movieSchema)

