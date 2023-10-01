const mongoose = require('mongoose');


const MovieSchema = new mongoose.Schema({
  fılm_ad: {
    type: String,
    required: true,
  },
  fılm_yonetmen: {
    type: String,
    required: true,
  },
  fılm_tur: {
    type: String,
    required: true,
  },
  fılm_derecelendirme: {
    type: Number,
    required: true,
  },
  fılm_userId: { // Kullanıcı kimlik bilgisi
    type: mongoose.Schema.Types.ObjectId,
    required: true, 
    ref:'Users'
  }
});

module.exports = mongoose.model('Film', filmSchema)

