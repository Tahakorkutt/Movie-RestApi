const BaseService = require('../base_service');
const Movie = require('../../models/movie/movie_model');

class MovieService extends BaseService{
  createMovie(film_name, film_director, film_genre, film_rating,film_userId) {
    return this.create({fılm_ad,fılm_yonetmen,fılm_tur,fılm_derecelendirme,fılm_userId })
  }
  updateMovie(id, obj) {
    return this.update(id, obj)
  }
  deleteMovie(id){
    return this.delete(id)
  }
  findAllMovie(){
    return this.findAll()
  }
  findByIdMovie(id){
    return this.findById(id)
  }
  findMovieById(id) {
    return this.findOneByProperty("_id", id)
  }
  findMovieByUserId(userId) {
    return this.findOneByProperty("fılm_userId", userId);
  }


}
module.exports = new MovieService(Movie);
