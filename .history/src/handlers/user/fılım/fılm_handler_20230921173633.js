const FılmService = require('../../services/fılım/fılm.service');
const Response = require("../../lib/Response");
const Error = require("../../lib/Error");
const Enum = require("../../config/Enum");
const CustomError = require("../../lib/Error");

const createFılm= async (req, res, next) => {
  const {} = req.body
  
  try {
    const Villas = await VillasService.createVillas()
  
    res.json(Response.succesResponse({succes: true}));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(Response.errorResponse(err));
  }
}