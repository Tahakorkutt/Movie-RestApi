const Response = require("../../lib/Response");
const Error = require("../../lib/Error");
const Enum = require("../../config/Enum");
const CustomError = require("../../lib/Error");
const MoviesService = require("../services/movie_service");

const createMovie = async (req, res, next) => {
  const { film_name, film_director, film_genre, film_rating, film_userId } = req.body;

  try {
    const films = await MoviesService.createMovie(film_name, film_director, film_genre, film_rating, film_userId);

    res.json(successResponse({ success: true }));
  } catch (err) {
    let errorResponseObj = errorResponse(err);
    res.status(errorResponseObj.code).json(errorResponseObj);
  }
};

module.exports = { createMovie };
const MoviesService = require("../services/movie_service");

const createMovie = async (req, res, next) => {
  const { film_name, film_director, film_genre, film_rating, film_userId } = req.body;

  try {
    const films = await MoviesService.createMovie(film_name, film_director, film_genre, film_rating, film_userId);

    res.json(successResponse({ success: true }));
  } catch (err) {
    let errorResponseObj = errorResponse(err);
    res.status(errorResponseObj.code).json(errorResponseObj);
  }
};

module.exports = { createMovie };