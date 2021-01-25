const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  async getInfoAction() {
    const model = await this.model('user');
    const selectData = await model.where({apply:1}).order(['id DESC']).select();
    let countGirl = 0
    let countBoy = 0
    for (let i=0;i<selectData.length;i++){
      const singleData = selectData[i]
      if (selectData.gender==1){
        countBoy ++;
      }
      else{
        countGirl ++;
      }
    }
    let info = {}
    info.countBoy = countBoy
    info.countGirl = countGirl
    info.period = this.getPeriodNum()
    info.applyEnable = this.getPeriodApplyEnable()
    info.viewUserEnable = this.getPeriodViewUserEnable()
    info.focusEnable = this.getPeriodFocusEnable()
    info.viewResultEnable = this.getPeriodViewResultEnable()
    info.waitting = this.getPeriodWaitting()
    return this.success(info);

  }
  async updatePeriodInfoAction() {
    const period = this.post('period');
    const applyEnable = this.post('applyEnable');
    const viewUserEnable = this.post('viewUserEnable');
    const focusEnable = this.post('focusEnable');
    const viewResultEnable = this.post('viewResultEnable');
    const waitting = this.post('waitting');

    let data = {}
    data.period = period
    data.apply_enable = applyEnable?1:0
    data.view_user_enable = viewUserEnable?1:0
    data.focus_enable = focusEnable?1:0
    data.view_result_enable = viewResultEnable?1:0
    data.waitting = waitting?1:0
    await this.model('period').where({ id: 1 }).update(data);
    return this.success();
  }
  async sendSubscribeViewResultAction(){
    const sendOptions = {
      method: 'POST',
      url: think.config('messageSubscribe'),
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      qs: {
      
      }
    };

    try {
      const requestResult = await rp(sendOptions);
      if (think.isEmpty(requestResult)) {
        return expressInfo;
      }
      expressInfo = this.parseExpressResult(requestResult);
      expressInfo.shipperCode = shipperCode;
      expressInfo.logisticCode = logisticCode;
      return expressInfo;
    } catch (err) {
      return expressInfo;
    }
  } 

};
