const router = require('express').Router()
const {

  handleInputErrors,
  userRegisterValidationRules,
  userLoginValidationRules,
  userPasswordChangeValidationRules,
 

 
} = require('./modules/middleware');

const {updatePasswordUser, userDetail, updateUserDetail ,registerUser, loginUser, logoutUser, deleteUser} = require('./handlers/user/user_handler');

const {addMovieToFavorites,createMovies,deleteMovie,updateMovie,filterSearchMovies}=require('./handlers/movie/movie_service_handlers.js');



router.post('/movies',  handleInputErrors,createMovies)
router.delete('/movies/:id', handleInputErrors, deleteMovie)
router.patch('/movies/:id', handleInputErrors, updateMovie)
router.get('/movies-filter',handleInputErrors, filterSearchMovies);
router.post('/add_to_favorites/:userId/:movieId', handleInputErrors,addMovieToFavorites)


router.post('/user-register', userRegisterValidationRules, handleInputErrors, registerUser)
router.post('/user-login', userLoginValidationRules, handleInputErrors, loginUser)
router.post('/user-logout/:id', handleInputErrors, logoutUser)
router.delete('/user-delete/:id', handleInputErrors, deleteUser)
router.post('/user-update-password/:id', userPasswordChangeValidationRules, handleInputErrors, updatePasswordUser)
router.post('/user-logout/:id', handleInputErrors, logoutUser)
router.delete('/user-delete/:id', handleInputErrors, deleteUser)

//User Detail

router.post('/user_detail' , handleInputErrors, userDetail)
router.post('/user_detail/:userId' , handleInputErrors, updateUserDetail)



module.exports = router