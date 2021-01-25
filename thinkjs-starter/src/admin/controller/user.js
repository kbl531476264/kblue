const Base = require('./base.js');

module.exports = class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const name = this.get('name') || '';

    const model = this.model('user');
    const data = await model.where({username: ['like', `%${name}%`]}).order(['id DESC']).page(page, size).countSelect();

    return this.success(data);
  }

  async infoAction() {
    const id = this.get('id');
    const model = this.model('user');
    const data = await model.where({id: id}).find();

    return this.success(data);
  }

  async storeAction() {
    if (!this.isPost) {
      return false;
    }

    const values = this.post();
    const id = this.post('id');

    const model = this.model('user');
    values.is_show = values.is_show ? 1 : 0;
    values.is_new = values.is_new ? 1 : 0;
    if (id > 0) {
      await model.where({id: id}).update(values);
    } else {
      delete values.id;
      await model.add(values);
    }
    return this.success(values);
  }

  async destoryAction() {
    const id = this.post('id');
    await this.model('user').where({id: id}).limit(1).delete();
    // TODO 删除图片

    return this.success();
  }

  async getListAction(){
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const nickname = this.get('nickname') || '';

    const model = await this.model('user');
    const data = await model.where({nickname: ['like', `%${nickname}%`]}).order(['id DESC']).page(page, size).countSelect();
    return this.success(data);
    
  }
  
  async getUserInfoListAction(){
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const username = this.get('name') || '';
    
    const model = await this.model('userinfo');
    model._pk = "user_id"
    const data = await model.where({username: ['like', `%${username}%`]}).order(['user_id DESC']).page(page, size).countSelect();

    return this.success(data);
    
  }

  async updateFocusDataAction(){
    const period = this.getPeriodNum();
    await this.model('beselect').where({period:period}).delete()
    const selectData = await this.model('selectinfo').where({period:period}).select();
    for (let j=0;j<selectData.length;j++){
      let singleData = selectData[j]
      for (let i= 0;i<15;i++){
        if (singleData["select_"+ i] && singleData["select_"+ i] != 0 ) {
          let userId = singleData["select_"+ i]
          const beFocuserFocusInfo = await this.model('selectinfo').where({ user_id: userId,period:period}).find();
          let isFocusEachOther = 0
          if( !think.isEmpty(beFocuserFocusInfo)){
            for (let k= 0;k<15;k++){
              if (beFocuserFocusInfo["select_"+ k] && beFocuserFocusInfo["select_"+ k] == singleData.user_id ) {
                isFocusEachOther = 1;
                break;
              }
            }
          }
          await this.model('beselect').add({user_id:userId,period:period,selecter:singleData.user_id,isFocusEach:isFocusEachOther})
        }
      }
    }
  }
  async pickUserToPoolAction(){
    const period = this.getPeriodNum();
    const needBoy = this.post('needBoy');
    const needGirl = this.post('needGirl');
    const applyUsers = await this.model('user').where({apply:true}).order(['apply_date DESC']).select();
    let insertGirl = 0
    let insertBoy = 0
    for (let i = 0;i<applyUsers.length;i++)
    {
      let userSingle = applyUsers[i]
      if (userSingle.gender == 1 )
      {
        if (insertBoy >= needBoy){
          continue;
        } 
        insertBoy ++;
      }
      else
      {
        if (insertGirl >= needGirl){
          continue;
        } 
        insertGirl ++;
      }
      const selectUser = await this.model('selectinfo').where({ user_id: userSingle.id,period:period}).find();
      if( !think.isEmpty(selectUser)){
        await this.model('selectinfo').where({ user_id: userSingle.id,period:period}).update({user_no:userSingle.user_no});
      }
      else{
        await this.model('selectinfo').add({ user_id: userSingle.id,period:period,user_no:userSingle.user_no});

      }
    }
    return this.success();
  }
  async getUserSelectInfoListAction(){
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const period = this.get('period') || '';

    const model = await this.model('user');
    const dataList = await model.where({period: period}).order(['user_id DESC']).page(page, size).countSelect();
    for (let i = 0;i<dataList.length;i++)
    {
      let data = dataList[i]
      let userData = await this.model('user').where({id: data.user_id}).find();
      data.name = userData.username
    }
    return this.success(dataList);
  }
};
