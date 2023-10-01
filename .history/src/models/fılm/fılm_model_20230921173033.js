const mongoose = require('mongoose');


const filmSchema = new mongoose.Schema({
  fılm_ad: {
    type: String,
    required: true,
  },
  fılm_yonetmen: {
    type: String,
    required: true,
  },
  tur: {
    type: String,
    required: true,
  },
  derecelendirme: {
    type: Number,
    required: true,
  },
  userId: { // Kullanıcı kimlik bilgisi
    type: mongoose.Schema.Types.ObjectId,
    required: true, 
    ref:'Users'
  }
});

module.exports = mongoose.model('Film', filmSchema)

