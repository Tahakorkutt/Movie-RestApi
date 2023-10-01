
const MovieService = require('../../services/movie_service');
const Response = require("../../lib/services");
const Error = require("../../lib/Error");
const Enum = require("../../config/Enum")
const CustomError = require("../../lib/Error");

const createMovie = async (req, res, next) => {
  const { film_name, fılm_yonetmen, fılm_tur, fılm_derecelendirme } = req.body;

  try {
    const films = await MovieService.createFılm(fılm_ad, fılm_yonetmen, fılm_tur, fılm_derecelendirme);

    res.json(Response.successResponse({ success: true }));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(Response.errorResponse(err));
  }
};

module.exports = { createMovie };