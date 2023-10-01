const BaseService = require('../base_service');
const MovieService = require('../../models/movie/movie_service_model');
const UserModel = require('../../models/user/user_model')

class MovieServiceService extends BaseService {
  // Yeni bir film oluşturmak için kullanılır
  createMovie(film_name, film_director, film_genre, film_rating,movie_id) {
    return this.create({ film_name, film_director, film_genre, film_rating,movie_id});
  }

  // Belirtilen filmi güncellemek için kullanılır
  updateMovie(id, obj) {
    return this.update(id, obj);
  }
  // kullanıcı filmi listeleme

  getAllMovies() {
    return this.findAll();
  }

  // Belirtilen filmi silmek için kullanılır
  deleteMovie(id) {
    return this.delete(id);
  }

  // Tüm filmleri getirmek için kullanılır
  findAllMovie() {
    return this.findAll();
  }

  // Belirtilen id'ye sahip filmi getirir
  findByIdMovie(id) {
    return this.findById(id);
  }

  // Belirtilen _id'ye sahip filmi getirir
  findMovieById(id) {
    return this.findOneByProperty("_id", id);
  }

 

  // Belirtilen film_userId'ye sahip filmi getirir
  findMovieByUserId(userId) {
    return this.findOneByProperty("film_userId", userId);
  }

  // Filmleri genre ve year parametrelerine göre filtreler

  filterMovies(genre, year) {
    return this.findAll().filter(movie => movie.film_genre === genre && movie.film_year === year);
  }
  findmovieById(movieId){
    return this.findMovieById(movieId)
  }
  findById(userId) {
    return this.findOneByProperty("userId", userId);
  } 
  getPopularMovies() {
    const movies = this.movieService.findAll();

    // Filmleri rating'e göre azalan şekilde sıralama
    const sortedMovies = movies.sort((a, b) => b.film_rating - a.film_rating);

    // En yüksek 5 filmi seçme
    const popularMovies = sortedMovies.slice(0, 5);

    return popularMovies;
  }
  
}

module.exports = new MovieServiceService(MovieService);
