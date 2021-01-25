// default config
module.exports = {
  default_module: 'api',
  weixin: {
    appid: 'wx75b4cf1a47007bb4', // 小程序 appid
    secret: '3a8c59acea2e8b1132721cb00a168d76', // 小程序密钥
    mch_id: '1500981661', // 商户帐号ID
    partner_key: 'TJ1B3I3EdoB6Ey6PjOtIOJOslYTTvKmh', // 微信支付密钥
    notify_url: '' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
  },
  express: {
    // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    appid: '', // 对应快递鸟用户后台 用户ID
    appkey: '', // 对应快递鸟用户后台 API key
    request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
  },
  port: '8363',
};
