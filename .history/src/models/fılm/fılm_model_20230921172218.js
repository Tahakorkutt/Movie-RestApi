const mongoose = require('mongoose');

// Film Şemasını Tanımla
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

// Film Modelini Oluştur
const Film = mongoose.model('Film', filmSchema);

module.exports = Film;
