// pages/hDetail/hDetail.js

let { list, navtab} = require('../../utils/nav.js');

Page({
  data: {
    list:[],
    isPlan:false
  },
  click:function(e){
    navtab(e)
  },
  toPlan:function(){
    if (!this.data.isPlan){
      wx.navigateTo({
        url: './hRPlan/hRPlan',
      })
    }
  },
  onLoad: function (options) {
    this.setData({
      list
    })
    wx.getStorage({
      key: 'planlist',
      success: (res)=> {
        let isPlan = res.data.find(item => item.title == "入门计划")
        if(isPlan){
          this.setData({
            isPlan:true
          })
        }
      }
    })
  }
})