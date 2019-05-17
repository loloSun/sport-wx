// pages/hNDetail/hNDetail.js
let { list, navtab } = require('../../utils/nav.js');
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    modalPrompt:true,
    trainInfo:[]
  },
  click: function (e) {
    navtab(e)
  },
  know:function(){
    this.setData({
      modalPrompt: true
    })
  },
  toDetail:function(e){
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: './hNInfo/hNInfo?index='+index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let trainInfo = app.globalData.trainInfo
    this.setData({
      list,
      trainInfo
    })
    console.log(trainInfo)
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