const fılmService = require('');
const Response = require("../../lib/Response");
const Error = require("../../lib/Error");
const Enum = require("../../config/Enum");
const CustomError = require("../../lib/Error");

const createFılms= async (req, res, next) => {
  const {fılm_ad,fılm_yonetmen,fılm_tur,fılm_derecelendirme,} = req.body
  
  try {
    const Fılms = await VillasService.createVillas()
  
    res.json(Response.succesResponse({succes: true}));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(Response.errorResponse(err));
  }
}

module.exports = {createFılms}