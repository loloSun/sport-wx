// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:"入门计划",
        info:"由教练指导的4周均衡训练",
        bgimg:"http://cdn.quncrm.com/ntc/images/fit-introduction.png?v=1.1",
        right:"../../img/right.png"
      },
      {
        name: "短时训练",
        info: "5-15分钟针对性基础训练",
        bgimg: "http://cdn.quncrm.com/ntc/images/short-training.png?v=1.1",
        right: "../../img/right.png"
      },
      {
        name: "耐克私教专区",
        info: "专业教练的自创训练及指导",
        bgimg: "http://cdn.quncrm.com/ntc/images/costum-training-select.png",
        right: "../../img/right.png"
      }
    ]
  },
  toDetail:function(e){
    let id = e.currentTarget.dataset.id
    switch (id){
      case 0:
        wx.navigateTo({
          url: '../hRDetail/hRDetail',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '../hDDetail/hDDetail',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '../hNDetail/hNDetail',
        })
        break;
    }
  },
})