const BaseService = require('../base_service');
const Villa = require('../../models/fılm/fılm_model');

class fılmService extends BaseService{
  createFılm() {
    return this.create({ villa_location, villa_adress, villa_rooms, villa_user_id, villa_type, villa_attribute, villa_img, villa_furniture, villa_info, villa_service, villa_pool_detail, villa_check_info, villa_popular, villa_description,villa_comission,villa_fixed_price, top_att_name, top_att_color, villa_province, villa_person })
  }

}
