module.exports = class extends think.Controller {
  async __before() {
    // 根据token值获取用户id
    think.token = this.ctx.header['x-nideshop-token'] || '';
    const tokenSerivce = think.service('token', 'admin');
    think.userId = await tokenSerivce.getUserId();

    // 只允许登录操作
    if (this.ctx.controller !== 'auth') {
      if (think.userId <= 0) {
        return this.fail(401, '请先登录');
      }
    }
  }

  
  /**
   * 获取当前登录用户的id
   * @returns {*}
   */
  getLoginUserId() {
    return think.userId;
  }

  /**
   * 获取period
   * @returns {*}
   */
  getPeriodNum() {
    return think.period;
  }

   /**
   * 获取当前期的状态
   * @returns {*}
   */

  getPeriodApplyEnable() {
    return think.applyEnable;

  }

  getPeriodViewUserEnable() {
    return think.viewUserEnable;
  }

  getPeriodFocusEnable() {
    return think.focusEnable;
  }
  getPeriodViewResultEnable() {
    return think.viewResultEnable;
  }
  getPeriodWaitting() {
    return think.waitting;
  }

};
