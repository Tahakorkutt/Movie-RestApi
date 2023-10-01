const FılmService = require('../../services/fılım/fılm.service');
const Response = require("../../lib/Response");
const Error = require("../../lib/Error");
const Enum = require("../../config/Enum");
const CustomError = require("../../lib/Error");

const createFılms= async (req, res, next) => {
  const {fılm_ad,fılm_yonetmen,} = req.body
  
  try {
    const Villas = await VillasService.createVillas()
  
    res.json(Response.succesResponse({succes: true}));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(Response.errorResponse(err));
  }
}