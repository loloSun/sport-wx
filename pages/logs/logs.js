Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImg:"",
    userName:"",
    num:0,
    planList:[]
  },
  toRuPlan:function(){
    wx.navigateTo({
      url: './lRumen/lRumen'
    })
  },
  toDuan:function(e){
    let pIndex = e.currentTarget.dataset.index
    let index = this.data.planList[pIndex].index
    console.log(index)
    wx.navigateTo({
      url: '../hDDetail/hDActive/hDActive?mine=true&index=' + index + '&pIndex=' + pIndex,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res)=> {
        // console.log(res.data)
        this.setData({
          userImg: res.data.userImg,
          userName: res.data.userName
        })
      },
    })
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
    let planList = wx.getStorageSync("planlist");
    this.setData({
      planList
    })
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