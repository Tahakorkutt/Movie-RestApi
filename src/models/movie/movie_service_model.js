
const mongoose = require('mongoose');


const MovieServiceSchema = new mongoose.Schema({
  film_name:{
    type: String,
    required: true,
  },
  film_director : {
    type: String,
    required: true,
  },
  film_rating :{
    type:Number,
    required: false,
  },  
  movie_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'Users' }


  
  
  
  
});

module.exports = mongoose.model('MovieService', MovieServiceSchema);
