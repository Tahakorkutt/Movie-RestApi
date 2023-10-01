const BaseService = require('../base_service');
const Villa = require('../../models/fılm/fılm_model');

class fılmService extends BaseService{
  createFılm(fılm_ad,fılm_yonetmen,fılm_tur,fılm_derecelendirme,fılm_userId) {
    return this.create({fılm_ad,fılm_yonetmen,fılm_tur,fılm_derecelendirme,fılm_userId })
  }
  updateFılm(id, obj) {
    return this.update(id, obj)
  }
  deleteFılm(id){
    return this.delete(id)
  }
  findAllFılm(){
    return this.findAll()
  }
  findByIdFılm(id){
    return this.findById(id)
  }
  findVillasById(id) {
    return this.findOneByProperty("_id", id)
  }


}
module.exports = new fılmService(Villa);
