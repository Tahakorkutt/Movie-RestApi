const BaseService = require('../base_service');
const MovieDetailsService = require('../../models/movie_details_service');

class MovieDetailsService extends BaseService {
  // Yeni bir film oluşturmak için kullanılır
  createMovie(title, description, producer, language,country) {
    return this.create({ title, description, producer, language,country});
  }

  // Belirtilen filmi güncellemek için kullanılır
  updateDetailsMovie(id, obj) {
    return this.update(id, obj);
  }
  // kullanıcı filmi listeleme

  getAllDetailsMovies() {
    return this.findAll();
  }

  // Belirtilen filmi silmek için kullanılır
  deleteDetailsMovie(id) {
    return this.delete(id);
  }

  // Tüm filmleri getirmek için kullanılır
  findAllDetailsMovie() {
    return this.findAll();
  }

  // Belirtilen id'ye sahip filmi getirir
  findByIdDetailsMovie(id) {
    return this.findById(id);
  }

  // Belirtilen _id'ye sahip filmi getirir
  findMovieDetailsById(id) {
    return this.findOneByProperty("_id", id);
  }
 

  // Belirtilen film_userId'ye sahip filmi getirir
  findMovieDetailsByUserId(userId) {
    return this.findOneByProperty("film_userId", userId);
  }

  // Filmleri genre ve year parametrelerine göre filtreler

  filterDetailsMovies(genre, year) {
    return this.findAll().filter(movie => movie.film_genre === genre && movie.film_year === year);
  }
  findmDetailsById(movieId){
    return this.findMovieById(movieId)
  }
 
  
}

module.exports = new MovieDetailsService(MovieDetailsService);
