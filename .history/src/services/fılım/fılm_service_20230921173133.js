const BaseService = require('../base_service');
const Villa = require('../../models/fılm/fılm_model');

class fılmService extends BaseService{
  createFılm(fılm_ad,fılm_yonetmen,fılm_turfılm_derecelendirme) {
    return this.create({ })
  }

}
module.exports = new fılmService(Villa);
