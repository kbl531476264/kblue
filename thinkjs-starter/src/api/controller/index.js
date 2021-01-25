const Base = require('./base.js');
const fs = require('fs')
module.exports = class extends Base {

  async index2Action() {
    const banner = await this.model('ad').where({ad_position_id: 1}).select();
    const channel = await this.model('channel').order({sort_order: 'asc'}).select();
    const newGoods = await this.model('goods').field(['id', 'name', 'list_pic_url', 'retail_price']).where({is_new: 1}).limit(4).select();
    const hotGoods = await this.model('goods').field(['id', 'name', 'list_pic_url', 'retail_price', 'goods_brief']).where({is_hot: 1}).limit(3).select();
    const brandList = await this.model('brand').where({is_new: 1}).order({new_sort_order: 'asc'}).limit(4).select();
    const topicList = await this.model('topic').limit(3).select();

    const categoryList = await this.model('category').where({parent_id: 0, name: ['<>', '推荐']}).select();
    const newCategoryList = [];
    for (const categoryItem of categoryList) {
      const childCategoryIds = await this.model('category').where({parent_id: categoryItem.id}).getField('id', 100);
      const categoryGoods = await this.model('goods').field(['id', 'name', 'list_pic_url', 'retail_price']).where({category_id: ['IN', childCategoryIds]}).limit(7).select();
      newCategoryList.push({
        id: categoryItem.id,
        name: categoryItem.name,
        goodsList: categoryGoods
      });
    }

    return this.success({
      banner: banner,
      channel: channel,
      newGoodsList: newGoods,
      hotGoodsList: hotGoods,
      brandList: brandList,
      topicList: topicList,
      categoryList: newCategoryList
    });
  }
  async indexAction() {
    return this.success({
      info: "hello world",
    });
  }
  async submitUserInfoAction() {
    const tData = this.post('data');
    
    const model = this.model('userinfo');

    let id = this.getLoginUserId();
    const userSql = await model.where({ user_id: id }).find();
    // let userData = await model.where({ id: id });
    const userData = {}
    userData.user_id = id
    this.setPropertyReverse(userData,tData,"gender","gender")
    this.setPropertyReverse(userData,tData,"constellation","constellation")
    this.setPropertyReverse(userData,tData,"birthday","birthday")
    this.setPropertyReverse(userData,tData,"height","height")
    this.setPropertyReverse(userData,tData,"weight","weight")
    this.setPropertyReverse(userData,tData,"mobile","mobile")
    this.setPropertyReverse(userData,tData,"expect_age","expectAge")
    this.setPropertyReverse(userData,tData,"native_place","nativePlace")
    this.setPropertyReverse(userData,tData,"address","address")
    this.setPropertyReverse(userData,tData,"education","education")
    this.setPropertyReverse(userData,tData,"schoolinfo","schoolInfo")
    this.setPropertyReverse(userData,tData,"marry","marry")
    this.setPropertyReverse(userData,tData,"occupation","occupation")
    this.setPropertyReverse(userData,tData,"organization","organization")
    this.setPropertyReverse(userData,tData,"authorized","authorized")
    this.setPropertyReverse(userData,tData,"username","userName")
    this.setPropertyReverse(userData,tData,"wechat","wetChatNo")
    this.setPropertyReverse(userData,tData,"belief","belief")
    this.setPropertyReverse(userData,tData,"income_string","incomeString")
    this.setPropertyReverse(userData,tData,"nickname","nickname")
    this.setPropertyReverse(userData,tData,"password","password")
    this.setPropertyReverse(userData,tData,"publicData","publicData") 
    this.setPropertyReverse(userData,tData,"meet","meet")
    this.setPropertyReverse(userData,tData,"one_child","oneChild")
    this.setPropertyReverse(userData,tData,"housecardesc","houseCarDesc")
    this.setPropertyReverse(userData,tData,"housecarinfo","houseCarInfo")
    this.setPropertyReverse(userData,tData,"public_school","publicShcool")
    this.setPropertyReverse(userData,tData,"family","family")
    this.setPropertyReverse(userData,tData,"manifesto","manifesto")
    this.setPropertyReverse(userData,tData,"join_databank","joinDataBank")
    this.setPropertyReverse(userData,tData,"public_data","publicData")
    this.setPropertyReverse(userData,tData,"public_shcool","publicShcool")
    this.setPropertyReverse(userData,tData,"image_url","imageUrl")
    this.setPropertyReverse(userData,tData,"qq","qq")
    if (Object.keys(userSql).length != 0) {
      await model.where({ user_id: id }).update(userData)
    }
    
    else {
      let user  = this.model('user').field(['user_no']).where({user_id:id}).find();
      if( !think.isEmpty(user)){
        userData.user_no = user.user_no
        await model.add(userData);
      }

    }
    await this.model('user').where({ id: id }).update({gender:userData.gender})
    // TODO 删除图片

    return this.success();
  }
  async getSelectListEnableInfoAction() {
    let period = this.getPeriodNum()
    const selectData = await this.model('user').field(['id', 'user_no']).where({period:period}).select();
    const dataList = []
    for (const userData of selectData) {
    const user = await this.model('userinfo').field(['user_id', 'user_no',"occupation","height" , 'birthday',"image_url"]).where({user_id:userData.id}).find();
    // for (const user of userData) {
        if( !think.isEmpty(user)){
          const singleData = {}
        singleData.id = user.user_id;
        singleData.userNo = user.user_no;
        singleData.occupation = user.occupation;
        singleData.height = user.height;
        singleData.birthday = user.birthday;
        singleData.imageUrl = user.image_url;
        dataList.push(singleData);
        }
    }
    return this.success({
      list: dataList,
    });

    return this.success();
  }

  async getUserInfoAction() {
    let id = this.post('id');
    if (id==undefined || id==""){
      id = this.getLoginUserId();
    }
    let isGetSelfInfo = id==this.getLoginUserId()

    // const model = this.model('userinfo');
    const userData = await this.model('userinfo').where({ user_id: id }).find();
    const data = {}
    this.setProperty(userData,data,"user_id","id")
    this.setProperty(userData,data,"user_no","userNo")
    this.setProperty(userData,data,"gender","gender")
    this.setProperty(userData,data,"constellation","constellation")
    this.setProperty(userData,data,"birthday","birthday")
    this.setProperty(userData,data,"height","height")
    this.setProperty(userData,data,"weight","weight")
    this.setProperty(userData,data,"mobile","mobile")
    this.setProperty(userData,data,"expect_age","expectAge")
    this.setProperty(userData,data,"native_place","nativePlace")
    this.setProperty(userData,data,"address","address")
    this.setProperty(userData,data,"education","education")
    this.setProperty(userData,data,"schoolinfo","schoolInfo")
    this.setProperty(userData,data,"marry","marry")
    this.setProperty(userData,data,"occupation","occupation")
    this.setProperty(userData,data,"organization","organization")
    this.setProperty(userData,data,"authorized","authorized")
    this.setProperty(userData,data,"username","userName")
    this.setProperty(userData,data,"wechat","wetChatNo")
    this.setProperty(userData,data,"belief","belief")
    this.setProperty(userData,data,"income_string","incomeString")
    this.setProperty(userData,data,"nickname","nickname")
    this.setProperty(userData,data,"password","password")
    this.setProperty(userData,data,"publicData","publicData")
    this.setProperty(userData,data,"meet","meet")
    this.setProperty(userData,data,"public_school","publicShcool")
    this.setProperty(userData,data,"housecardesc","houseCarDesc")
    this.setProperty(userData,data,"housecarinfo","houseCarInfo")
    this.setProperty(userData,data,"one_child","oneChild")
    this.setProperty(userData,data,"family","family")
    this.setProperty(userData,data,"manifesto","manifesto")
    this.setProperty(userData,data,"join_databank","joinDataBank")
    this.setProperty(userData,data,"public_data","publicData")
    this.setProperty(userData,data,"public_shcool","publicShcool")
    this.setProperty(userData,data,"image_url","imageUrl")
    this.setProperty(userData,data,"qq","qq")


    // tData.school_primary = data.school_primary?data.school_primary:undefined
    // tData.school_junior_heigh = data.school_junior_heigh?data.school_junior_heigh:undefined
    // tData.school_height = data.school_height?data.school_height:undefined
    // tData.school_college = data.school_college?data.school_college:undefined
    // tData.school_graduate = data.school_graduate?data.school_graduate:undefined
    // tData.school_doctoral = data.school_doctoral?data.school_doctoral:undefined
  

    return this.success({
      userData: data,
    });

  }

  async addImageAction() {
    // const img = this.post('img');
    // var multer=require('multer');
    // var upload=multer({dest:'uploads/'})
    // upload.single(img)
    // const express=require('express');
    // const router=express.Router();
    // //上传图片的模板
    // //生成的图片放入uploads文件夹下
    // //图片上传必须用post方法
    // router.post('/img',upload.single(img),(req,res)=>{
    //     console.log(req.file);
    //     res.send('upload img')
    // })
    const file = this.file('fileImage') 
    console.log("addImageAction ： " + file.path)
    const reader = fs.createReadStream(file.path);
    let filePath ='./www/static/'+file.name;//建议使用绝对路径
    const upStream = fs.createWriteStream(filePath);

    reader.pipe(upStream);
    return this.success({
      file: "static/"+file.name,
    });
  }

  async focusAction(){
    const focusList = this.post('focusList');
    const userId = this.getLoginUserId()
    const period = this.getPeriodNum()
    const selectData = await this.model('selectinfo').where({ user_id: userId,period:period}).getField('period', true);
    const data = {}
    data.user_id = this.getLoginUserId()
    data.period = this.getPeriodNum()
    for (let i= 0;i<15;i++){
      if (focusList[i]) {
        data["select_"+ i] = focusList[i]
      }
      else
      {
        data["select_"+ i] = 0
      }
    }

    if (think.isEmpty(selectData)) {
      await this.model('selectinfo').add(data)
    }
    else{
      await this.model('selectinfo').where({ user_id: this.getLoginUserId(),period:this.getPeriodNum()}).update(data)
    }
    return this.success({
    });
  }

  async getFocusListAction(){
    const userId = this.getLoginUserId()
    const period = this.getPeriodNum()
    const selectData = await this.model('selectinfo').where({ user_id: userId,period:period}).find();
    let data = {}
    data.focusList = []
    for (let i= 0;i<15;i++){
      if (selectData["select_"+ i] && selectData["select_"+ i] != 0 ) {
        data.focusList.push(selectData["select_"+ i])
      }
    }
    data.userId = selectData.user_id
    data.period = selectData.period
    
    return this.success(data);
  }

  async getFocusListInfoAction(){
    const userId = this.getLoginUserId()
    const period = this.getPeriodNum()
    const selectData = await this.model('selectinfo').where({ user_id: userId,period:period}).find();
    let data = {}
    data.focusList = []
    for (let i= 0;i<15;i++){
      if (selectData["select_"+ i] && selectData["select_"+ i] != 0 ) {
        const user = await this.model('userinfo').field(['user_id',"occupation","height" ,'user_no', 'birthday',"image_url"]).where({user_id:selectData["select_"+ i]}).find();
        if( !think.isEmpty(user)){
        let singleData = {}
            singleData.id = user.user_id;
            singleData.userNo = user.user_no;
            singleData.birthday = user.birthday;
            singleData.height = user.height;
            singleData.occupation = user.occupation;
            singleData.imageUrl = user.image_url;
            data.focusList.push(singleData);
        }
      }
    }
    data.userId = selectData.user_id
    data.period = selectData.period
    
    return this.success(data);
  }
  async getFocusMeListInfoAction(){
    const userId = this.getLoginUserId()
    const period = this.getPeriodNum()
    const selectData = await this.model('beselect').where({ user_id: userId,period:period}).select();
    let data = {}
    data.focusList = []
    for (let i=0;i<selectData.length;i++){
        let focuser = selectData[i].selecter
        const user = await this.model('userinfo').field(['user_id', 'user_no',"occupation","height", 'birthday',"image_url"]).where({user_id:focuser}).find();
        if( !think.isEmpty(user)){
        let singleData = {}
            singleData.id = user.user_id;
            singleData.userNo = user.user_no;
            singleData.birthday = user.birthday;
            singleData.height = user.height;
            singleData.occupation = user.occupation;
            singleData.imageUrl = user.image_url;
            data.focusList.push(singleData);
        }
    }
    data.userId = selectData.user_id
    data.period = selectData.period
    return this.success(data);
  }

  async getFocusEachOtherListAction(){
    const userId = this.getLoginUserId()
    const period = this.getPeriodNum()
    const focusEachList = await this.model('beselect').where({ user_id: userId,period:period,isFocusEach:true}).select();
    let data = {}
    data.focusList = []
    for (let i=0;i<focusEachList.length;i++){
        let focuser = focusEachList[i].selecter
        const user = await this.model('userinfo').field(['user_id', 'user_no',"occupation","height", 'birthday',"image_url"]).where({user_id:focuser}).find();
        if( !think.isEmpty(user)){
        let singleData = {}
            singleData.id = user.user_id;
            singleData.userNo = user.user_no;
            singleData.birthday = user.birthday;
            singleData.height = user.height;
            singleData.occupation = user.occupation;
            singleData.imageUrl = user.image_url;
            data.focusList.push(singleData);
        }
    }
    data.userId = userId
    data.period = period
    return this.success(data);
  }

  async applyAction(){
    const userId = this.getLoginUserId()
    const period = this.getPeriodNum()
    const userdata =  await this.model('user').where({id:userId}).field(['apply']).find();
    if( think.isEmpty(userdata)){
      return this.fail("100",'用户不存在');
    }
    if (userdata.apply) {
      return this.fail("200",'用户已报名');

    }
    let userNo   
    const selectData = await this.model('selectinfo').where({ user_id: userId,period:period}).find();
    if( !think.isEmpty(selectData)){
      // await this.model('selectinfo').update({ user_id: userId,period:period,user_no:userNo}).where({ user_id: userId,period:period});
    }
    else
    {
      const userList = await this.model('selectinfo').where({ period:period}).select();
      userNo = userList.length + 1;
      await this.model('selectinfo').add({ user_id: userId,period:period,user_no:userNo});
    }

    await this.model('user').where({id:userId}).update({period:period,user_no:userNo,
      apply_date: parseInt(Date.now() / 1000),
      apply:true});
    const user = await this.model('userinfo').where({ user_id: userId}).find();
    if( !think.isEmpty(user)){
      this.model('userinfo').where({user_id:userId}).update({user_no:userNo})

    }else{
      // this.model('userinfo').add({user_id:userId,user_no:userNo})
    }
    // think.period = period
    // think.period = period
    let data = {
      userId:userId,
      period:period,
      userNo:userNo,
      apply:true,
    }
    return this.success(data);
  }
}
