const router = require('express').Router()
const {
  handleInputErrors,
  userRegisterValidationRules,
  userLoginValidationRules,
  userPasswordChangeValidationRules,
  
 
} = require('./modules/middleware');

const {updatePasswordUser, userDetail, updateUserDetail,registerUser, loginUser, logoutUser, deleteUser} = require('./handlers/user/user_handler');
 
//reister
router.post('/user-register', userRegisterValidationRules, handleInputErrors, registerUser);

//login
router.post('/user-login', userLoginValidationRules, handleInputErrors, loginUser);

router.post('/user-logout/:id', handleInputErrors, logoutUser);


router.delete('/user-delete/:id', handleInputErrors, deleteUser);
router.post('/user-update-password/:id', userPasswordChangeValidationRules, handleInputErrors, updatePasswordUser);
//User Detail
router.post('/user_detail' , handleInputErrors, userDetail)
router.post('/user_detail/:userId' , handleInputErrors, updateUserDetail)





module.exports = router