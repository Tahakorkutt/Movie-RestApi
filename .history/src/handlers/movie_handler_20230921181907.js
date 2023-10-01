
const Response = require("../../lib/services");
const Error = require("../lib/Error");
const Enum = require("../config/Enum")
const CustomError = require("../lib/Error");
const MoviesService = require("../lib/services/movie_service.js");

const createMovie = async (req, res, next) => {
  const { film_name, film_director, film_genre, film_rating,film_userId } = req.body;

  try {
    const films = await MoviesService.createMovie(film_name, film_director, film_genre, film_rating,film_userId);

    res.json(Response.successResponse({ success: true }));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(Response.errorResponse(err));
  }
};

module.exports = { createMovie };