Page({
  data: {
    imgs: [
      {
        url: "http://cdn.quncrm.com/ntc/images/introduction/bk1.jpg?v=1.3",
        title: "",
        content: ""
      }, {
        url: "http://cdn.quncrm.com/ntc/images/introduction/bk2.png",
        title: "恰当的训练",
        content: "让我们的身体先动起来、灵活起来，能够完成最基本的训练动作。按照这样的训练安排，你会越来越棒!"
      }, {
        url: "http://cdn.quncrm.com/ntc/images/introduction/bk3.png",
        title: "恰当的强度",
        content: "选择适当的训练动作、适当的重复时间和重复次数，从每周2-3次的训练频率慢慢增加到更高的训练频率。"
      }, {
        url: "http://cdn.quncrm.com/ntc/images/introduction/bk4.png",
        title: "恰当的恢复",
        content: "每次训练结束后, 也要做好积极的休息和放松, 这样, 下一次的训练我们会表现得更好!"
      }
    ]
  },
  getUser:function(e){
    if(e.detail.userInfo){
      console.log(e.detail.userInfo)
      this.setData({
        textShow:true,
        userName: e.detail.userInfo.nickName,
        userImg: e.detail.userInfo.avatarUrl
      })
      wx.setStorage({
        key: 'userInfo',
        data: {
          userName: e.detail.userInfo.nickName,
          userImg: e.detail.userInfo.avatarUrl
        },
      })
      wx.switchTab({
        url: '../home/home'
      })
    }else{
      console.log("授权失败！")
      wx.showToast({
        title: '授权失败！',
      })
    }
  },
  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success(res){
        // console.log(res)
        that.setData({
          textShow: true,
          userName: res.userInfo.nickName,
          userImg: res.userInfo.avatarUrl
        })
      },
      fail(){
        console.log("fail")
      }
    })
    wx.getSetting({
      success(res){
        console.log(res)
      }
    })
  }
})