const MovieServiceService = require('../../services/movie/movie_service_service.js');
const Response = require("../../lib/Response");
const Error = require("../../lib/Error");
const Enum = require("../../config/Enum");
const UserService = require('../../services/user/user_service')
const CustomError = require("../../lib/Error");


// film oluşturma

const createMovies= async (req, res, next) => {
  const {film_name, film_director, film_genre, film_rating,film_poster} = req.body
  
  try {
    const Fılms = await MovieServiceService.createMovie(film_name, film_director, film_genre, film_rating,film_poster)
     
    res.json(Response.succesResponse({success: true}));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(Response.errorResponse(err));
  }
}
// kullanıcların kendi ekledikleri filmi listeleme
const getMovies = async (req, res, next) => {
  try {
    // Filmleri al ve döndür
    const movies = await MovieServiceService.getAllMovies();
    const formattedMovies = movies.map(movie => {
      return {
        film_name: movie.film_name,
        film_director: movie.film_director,
        film_genre: movie.film_genre,
        film_rating: movie.film_rating
      };
    });

    // Döndürülecek cevabı oluştur
    const response = {
      success: true,
      movies: formattedMovies
    };

    res.json(response);
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(Response.errorResponse(err));
  }
};

// kullanıcının olusturdugu filmi silme

const deleteMovie = async (req, res, next) => {
  const _id = req.params.id

  try {
    const films = await MovieServiceService.deleteMovie(_id)

    res.json(Response.succesResponse({succes: true}));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(Response.errorResponse(err));
  }
  
}
// kullanıcının olusturdugu filmi güncelleme
const updateMovie = async (req, res, next) => {
  const obj = req.body
  const _id = req.params.id
  
  try {
    const Films = await base_service.updateMovie(_id, obj)
  
    res.json(Response.succesResponse({succes: true}));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(Response.errorResponse(err));
  }
}

//// kullanıcının olusturdugu filmi yılına ve türüne göre filtreleme

const filterSearchMovies = async (req, res, next) => {
  try {
    const { genre, year } = req.query;

    const filteredMovies = await MovieServiceService.filterMovies(genre, year);

    if (!filteredMovies || filteredMovies.length === 0) {
      return res.status(404).json({ success: false, message: 'Belirtilen kriterlere uygun film bulunamadı.' });
    }

    res.json({ success: true, movies: filteredMovies });
  } catch (err) {
    let errorResponseObj = errorResponse(err);
    res.status(errorResponseObj.code).json(errorResponseObj);
  }
};

 //kullanıcının oluşturduğu filmi favorilere ekleme

 const addMovieToFavorites = async (req, res) => {
  const userId = req.params.userId;
  const movieId = req.body.movieId;

  try {
    // Kullanıcıyı bul
    const user = await UserService.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'Kullanıcı bulunamadı' });
    }

    // Filmı bul
    const movie = await MovieServiceService.findByIdMovie(movieId);
    if (!movie) {
      return res.status(404).json({ success: false, message: 'Belirtilen ID ile film bulunamadı' });
    }

    // Kullanıcının favorilerini kontrol et
    if (!user.favorites || !user.favorites.includes(movieId)) {
      // Favorilerde yoksa ekle
      user.favorites = user.favorites || [];
      user.favorites.push(movieId);
      await user.save();
      res.json({ success: true, message: 'Film başarıyla favorilere eklendi' });
    } else {
      res.json({ success: false, message: 'Film zaten favorilerinizde bulunuyor' });
    }
  } catch (error) {
    console.error('Film favorilere eklenirken hata oluştu:', error);
    res.status(500).json({ success: false, message: 'Film favorilere eklenirken bir hata oluştu', error: error.message });
  }
};

// populer film
const getPopularMovie = async (req, res, next) => {
  try {

    const popularMovies = await MovieServiceService.getPopularMovies();

    res.status(200).json({
      success: true,
      message: 'Popüler filmler getirildi',
      popularMovies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Popüler filmler getirilirken bir hata oluştu',
      error: error.message,
    });
  }
};



module.exports = {addMovieToFavorites,getPopularMovie,createMovies,getMovies,deleteMovie,updateMovie,filterSearchMovies}