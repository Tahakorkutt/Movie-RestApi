
const mongoose = require('mongoose');


const MovieDetailsSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  description: { type: String },
  cast: [{ type: String }], // Oyuncu kadrosu
  
});

module.exports = mongoose.model('MovieDetailsService', MovieDetailsSchema);
