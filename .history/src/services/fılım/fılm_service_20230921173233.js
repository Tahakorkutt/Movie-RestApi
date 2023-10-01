const BaseService = require('../base_service');
const Villa = require('../../models/fılm/fılm_model');

class fılmService extends BaseService{
  createFılm(fılm_ad,fılm_yonetmen,fılm_tur,fılm_derecelendirme,fılm_userId) {
    return this.create({fılm_ad,fılm_yonetmen,fılm_tur,fılm_derecelendirme,fılm_userId })
  }
  updateFılm(id, obj) {
    return this.update(id, obj)
  }
  deleteVillas(id){
    return this.delete(id)
  }
  findAllVillas(){
    return this.findAll()
  }
  findByIdVillas(id){
    return this.findById(id)
  }
  findByQueryVillas(query){
    return this.findByQuery(query)
  }
  findMostPopularVillasAll(){
    return this.findAllPopularVillas()
  }
  findVillasById(id) {
    return this.findOneByProperty("_id", id)
  }


}
module.exports = new fılmService(Villa);
