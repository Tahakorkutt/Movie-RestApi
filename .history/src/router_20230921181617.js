const router = require('express').Router()
const {
  handleInputErrors,
  userRegisterValidationRules,
  userLoginValidationRules,
  userPasswordChangeValidationRules,
  movieValidationRules
  
 
} = require('./modules/middleware');

const {updatePasswordUser, userDetail, updateUserDetail,registerUser, loginUser, logoutUser, deleteUser} = require('./handlers/user/user_handler');
const {createMovie} = require('./'); 

//register
router.post('/user-register', userRegisterValidationRules, handleInputErrors, registerUser);

//login
router.post('/user-login', userLoginValidationRules, handleInputErrors, loginUser);

//logout
router.post('/user-logout/:id', handleInputErrors, logoutUser);

//user delete
router.delete('/user-delete/:id', handleInputErrors, deleteUser);

//user update password
router.post('/user-update-password/:id', userPasswordChangeValidationRules, handleInputErrors, updatePasswordUser);

//User Detail
router.post('/user_detail' , handleInputErrors, userDetail)
router.post('/user_detail/:userId' , handleInputErrors, updateUserDetail)

//create fılm

router.post('/create-movie',movieValidationRules,handleInputErrors,createMovie)



module.exports = router