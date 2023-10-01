const BaseService = require('../base_service');
const Fılm = require('../../models/fılm/fılm_model');

class FılmService extends BaseService{
  createFılms(fılm_ad,fılm_yonetmen,fılm_tur,fılm_derecelendirme,fılm_userId) {
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
  findFılmById(id) {
    return this.findOneByProperty("_id", id)
  }
  findFılmByUserId(userId) {
    return this.findOneByProperty("fılm_userId", userId);
  }


}
module.exports = new FılmService(Fılm);
