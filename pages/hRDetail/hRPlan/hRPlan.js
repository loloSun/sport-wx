// pages/hRDetail/hRPlan/hRPlan.js
const date = new Date()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: date.getFullYear(),
    month: 2,
    day: 2,
    value: [9999, 1, 1],
    one:"http://cdn.quncrm.com/ntc/images/startup/index1.png",
    two:"http://cdn.quncrm.com/ntc/images/startup/index2.png",
    three:"http://cdn.quncrm.com/ntc/images/startup/index3.png",
    yes:"http://cdn.quncrm.com/ntc/images/startup/finished.png",
    up:"http://cdn.quncrm.com/ntc/images/startup/icon-open.png?v=1.1",
    donw:"http://cdn.quncrm.com/ntc/images/startup/icon-close.png?v=1.1",
    list:[
      {
        xhSrc: "http://cdn.quncrm.com/ntc/images/startup/index1.png",
        title:"每周训练次数",
        info:"你每周有多少天可以进行训练？",
        inner:[
          "2-3天",
          "3-4天",
          "4-5天",
          "5-6天"
        ],
        tu: "http://cdn.quncrm.com/ntc/images/startup/icon-open.png?v=1.1",
        cloose:"",
        hasVal:false,
        clooseIn: null
      },
      {
        xhSrc: "http://cdn.quncrm.com/ntc/images/startup/index2.png",
        title: "你的活跃度",
        info: "告诉我们你目前每周训练多少小时。",
        inner: [
          "每周0-1小时",
          "每周2-4小时",
          "每周5-8小时",
          "每周9+小时"
        ],
        tu: "http://cdn.quncrm.com/ntc/images/startup/icon-open.png?v=1.1",
        cloose: "",
        hasVal: false,
        clooseIn: null
      },
      {
        xhSrc: "http://cdn.quncrm.com/ntc/images/startup/index3.png",
        title: "开始日期",
        info: "你希望计划在何时开始?",
        tu: "http://cdn.quncrm.com/ntc/images/startup/icon-open.png?v=1.1",
        cloose: "",
        hasVal: false
      }
    ],
    tip: "不确定从何时开始？从今天开始，助你一路坚持到底。",
    nowIndex:null,
    isShow:false,
    hasValObj:[],
    goPlan:false
  },
  toShow: function (e) {
    let indexs = e.currentTarget.dataset.id
    let show
    if (indexs == this.data.nowIndex && this.data.nowIndex!==null){
      show = !this.data.isShow
    }else{
      show = true
    }
    this.setData({
      nowIndex: indexs,
      isShow: show
    })
    // console.log(this.data.nowIndex)
  },
  cloose:function(e){
    let a = this.data
    let ins = e.currentTarget.dataset.id
    let index = e.currentTarget.dataset.index
    let obj = a.list;
    obj[index].xhSrc = a.yes
    obj[index].cloose = ':'+obj[index].inner[ins]
    obj[index].hasVal = true
    obj[index].clooseIn = ins
    if (obj[index].hasVal){
      a.hasValObj.push(obj[index].hasVal)
    }
    if (index != 0 && !obj[0].hasVal) {
      index = 0
    }else if (index >= 0 && index <= a.list.length){
      if (!obj[index + 1].hasVal){
        index++
      } else if (index + 2 < a.list.length&&!obj[index + 2].hasVal){
        index+=2
      }
    }
    if (a.hasValObj.length == a.list.length) {
      a.goPlan = true
      this.setData({
        goPlan: true
      })
    }
    // console.log(this.data.hasValObj,this.data.list.length)
    this.setData({
      list:obj,
      nowIndex: index,
      isShow: !a.goPlan
    })
    // console.log(index)
  },
  clooseDate:function(e){
    let index = e.currentTarget.dataset.index
    let obj = this.data.list;
    let a = this.data
    obj[2].cloose = `:${a.year}年${a.month}月${a.day}日`
    obj[2].xhSrc = this.data.yes
    obj[2].hasVal = true
    if (obj[index].hasVal) {
      this.data.hasValObj.push(obj[index].hasVal)
    }
    if (a.hasValObj.length == a.list.length) {
      a.goPlan = true
      this.setData({
        goPlan:true
      })
    }
    if (index != 0 && !obj[0].hasVal) {
      index = 0
    }
    this.setData({
      list: obj,
      nowIndex: index,
      isShow: !a.goPlan
    })
  },
  bindDateChange:function(val){
    let arr = val.detail.value.split("-")
    this.setData({
      year: arr[0],
      month: arr[1],
      day: arr[2]
    })
  },
  goMine:function(){
    let a = this.data
    let old = wx.getStorageSync("planlist")
    if (old){
      wx.setStorageSync("planlist", [
        ...old,
        {
        title: "入门计划",
        year: a.year,
        month: a.month,
        day: a.day,
        bgimg:"http://cdn.quncrm.com/ntc/images/mine-startup-img.jpg"
      }])
    }else{
      wx.setStorageSync("planlist", [{
        title: "入门计划",
        year: a.year,
        month: a.month,
        day: a.day,
        bgimg: "http://cdn.quncrm.com/ntc/images/mine-startup-img.jpg"
      }])
    }
    
    wx.switchTab({
      url: '../../logs/logs',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let day = date.getDate()
    let month = date.getMonth()+1
    month = month < 10 ? "0" + month : month
    this.setData({
      month,
      day
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