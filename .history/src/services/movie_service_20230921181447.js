const BaseService = require('./base_service');
const Movie = require('../models/movie/movie_model');

class MoviesService extends BaseService {
  createMovie(film_name, film_director, film_genre, film_rating, film_userId) {
    return this.create({ film_name, film_director, film_genre, film_rating, film_userId });
  }

  updateMovie(id, obj) {
    return this.update(id, obj);
  }

  deleteMovie(id) {
    return this.delete(id);
  }

  findAllMovie() {
    return this.findAll();
  }

  findByIdMovie(id) {
    return this.findById(id);
  }

  findMovieById(id) {
    return this.findOneByProperty("_id", id);
  }

  findMovieByUserId(userId) {
    return this.findOneByProperty("film_userId", userId);
  }
}

module.exports = new MoviesService(Movie);