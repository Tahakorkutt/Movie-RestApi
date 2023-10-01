const { body, validationResult, param } = require('express-validator');

const handleInputErrors = (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    res.status(400)
    res.json({ errors: errors.array() })
  } else {
    next()
  }
}


const userRegisterValidationRules =  [
  body('email', "Geçersiz Email!").notEmpty().trim().isLength({ min: 1 }).exists().isEmail(),
  body('phone').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('password').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('first_name').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('last_name').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('address').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('age').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('gender').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('user_type').notEmpty().trim().isLength({ min: 1 }).exists()
]

const userLoginValidationRules =  [
  body('email', "Geçersiz Email!").notEmpty().trim().isLength({ min: 1 }).exists().isEmail(),
  body('password').notEmpty().trim().isLength({ min: 1 }).exists()
]

const userPasswordChangeValidationRules =  [
  param('id').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('old_password').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('new_password').notEmpty().trim().isLength({ min: 1 }).exists()
]

const movieValidationRules = [
  body('film_name').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('film_director').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('film_genre').notEmpty().trim().isLength({ min: 1 }).exists(),
  body('film_rating').notEmpty().trim().isLength({ min: 1 }).exists(),



]


//! add user validation
module.exports = {
  handleInputErrors,
  userRegisterValidationRules,
  userLoginValidationRules,
  userPasswordChangeValidationRules,
  movieValidationRules
  
}