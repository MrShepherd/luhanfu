// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    top10Items:[
      { "icon": "/images/icons/home.png", "text": "全部", "link":"pages/home/home"}
      , { "icon": "/images/icons/home.png", "text": "LPL", "link": "pages/home/home"}
      , { "icon": "/images/icons/home.png", "text": "国人", "link": "pages/home/home"}
      , { "icon": "/images/icons/home.png", "text": "主播", "link": "pages/home/home"}
    ],
    teamItems: [
        { "icon": "/images/icons/home.png", "text": "RNG", "link": "pages/home/home" }
        , { "icon": "/images/icons/home.png", "text": "EDG", "link": "pages/home/home" }
        , { "icon": "/images/icons/home.png", "text": "WE", "link": "pages/home/home" }
        , { "icon": "/images/icons/home.png", "text": "IG", "link": "pages/home/home" }
        ,{ "icon": "/images/icons/home.png", "text": "SKT", "link": "pages/home/home" }
        , { "icon": "/images/icons/home.png", "text": "SSG", "link": "pages/home/home" }
        , { "icon": "/images/icons/home.png", "text": "LZ", "link": "pages/home/home" }
        , { "icon": "/images/icons/home.png", "text": "更多", "link": "pages/home/home" }
    ],
    placeItems: [
        { "icon": "/images/icons/home.png", "text": "上单", "link": "pages/home/home" }
        , { "icon": "/images/icons/home.png", "text": "中单", "link": "pages/home/home" }
        , { "icon": "/images/icons/home.png", "text": "打野", "link": "pages/home/home" }
        , { "icon": "/images/icons/home.png", "text": "ADC", "link": "pages/home/home" }
        , { "icon": "/images/icons/home.png", "text": "辅助", "link": "pages/home/home" }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})