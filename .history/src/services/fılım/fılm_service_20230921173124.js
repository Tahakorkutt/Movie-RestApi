const BaseService = require('../base_service');
const Villa = require('../../models/fılm/fılm_model');

class fılmService extends BaseService{
  createFılm(fılm_ad,fılm_yonetmen) {
    return this.create({ })
  }

}
module.exports = new fılmService(Villa);
