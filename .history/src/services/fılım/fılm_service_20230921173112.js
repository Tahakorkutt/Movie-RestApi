const BaseService = require('../base_service');
const Villa = require('../../models/fılm/fılm_model');

class fılmService extends BaseService{
  createFılm(fılm_ad) {
    return this.create({ })
  }

}
module.exports = new fılmService(Villa);
