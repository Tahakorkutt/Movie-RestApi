const MovieDetailsService = require('../../services/movie/movie_service_service.service');
const Response = require("../../lib/Response");
const Error = require("../../lib/Error");
const Enum = require("../../config/Enum");
const UserService = require('../../services/user/user_service')

const CustomError = require("../../lib/Error");

const MovieServiceService = require('../../services/movie/movie_service_service.js');

const createMovieWithDetails = async (req, res, next) => {
  const { film_name, film_director, film_genre, film_rating, film_poster, description, cast } = req.body;

  try {
    const movie = await MovieServiceService.createMovie(film_name, film_director, film_genre, film_rating, film_poster);
    await MovieServiceService.addMovieDetail(movie._id, description, cast);
    
    res.json(Response.successResponse({ success: true }));
  } catch (err) {
    res.status(500).json(Response.errorResponse(err.message));
  }
};
const addMovieDetail = async (movieId, description, cast) => {
  try {
    const movieDetail = new MovieDetail({
      movieId,
      description,
      cast,
     
    });
    await movieDetail.save();
    return movieDetail;
  } catch (error) {
    throw new Error('Film detayı eklenirken bir hata oluştu.');
  }
};


module.exports = {createMovieWithDetails,addMovieDetail}