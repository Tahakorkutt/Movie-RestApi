const mongoose = require('mongoose');


const filmSchema = new mongoose.Schema({
  ad: {
    type: String,
    required: true,
  },
  yonetmen: {
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
  kullaniciId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kullanici', // Kullanıcı koleksiyonuyla ilişkilendirilecek
    required: true,
  },
});

module.exports = mongoose.model('Film', filmSchema)

