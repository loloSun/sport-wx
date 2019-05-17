// pages/logs/lRumen/lRumen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOver:true
  },
  trueOver: function (){
    wx.getStorage({
      key: 'planlist',
      success: (res) => {
        let data = res.data.filter(item => item.title != "入门计划")
        wx.setStorage({
          key: 'planlist',
          data
        })
        wx.switchTab({
          url: '../logs',
        })
      }
    })
  },
  noOver: function (){
    this.setData({
      isOver: true
    })
  },
  overPlan:function(){
    this.setData({
      isOver: false
    })
    console.log(this.data.isOver)
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