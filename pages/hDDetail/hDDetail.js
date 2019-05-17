// pages/hNDetail/hNDetail.js
let { list, navtab } = require('../../utils/nav.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    trueImg:"http://cdn.quncrm.com/ntc/images/short/has-selected.png",
    activeList:[
      {
        time:"15",
        img:"http://cdn.quncrm.com/ntc/assets/workouts_basic_burner_image_feed_db9cee51098f5f888d993ea91d5156b9.jpg",
        title:"基本燃脂",
        classOne:"初级-耐力",
        isChoose: true
      },
      {
        time: "15",
        img: "http://cdn.quncrm.com/ntc/assets/workouts_core_crunch_image_feed_1c848bfc8ced3803ed30473a05d5142f.jpg",
        title: "核心缩腹",
        classOne: "初级-灵活性",
        isChoose: true
      },
      {
        time: "15",
        img: "http://cdn.quncrm.com/ntc/assets/workouts_extend_your_range_image_feed_ed55a08c0b4a366f22c971a58ae29eb7.jpg",
        title: "拓展空间",
        classOne: "初级-灵活性",
        isChoose: true
      },
      {
        time: "15",
        img: "http://cdn.quncrm.com/ntc/assets/workouts_ignition_points_image_feed_7fb174f2ae8de7b9d0789ffb77ad2551.jpg",
        title: "燃烧点",
        classOne: "初级-耐力",
        isChoose: true
      },
      {
        time: "15",
        img: "http://cdn.quncrm.com/ntc/assets/workouts_fresh_on_the_circuit_image_feed_edf8c0e45164578015270a75ba8b037c.jpg",
        title: "循环刺激",
        classOne: "初级-灵活性",
        isChoose: true
      },
      {
        time: "15",
        img: "http://cdn.quncrm.com/ntc/assets/workouts_opening_time_image_feed_1694e7434358dbe762b2877fb3658636.jpg",
        title: "开启时间",
        classOne: "初级-灵活性",
        isChoose: true
      }
    ],
    modalPrompt:true
  },
  getmore:function(){
    this.setData({
      modalPrompt: false
    })
  },
  closeModal: function () {
    this.setData({
      modalPrompt: true
    })
  },
  click: function (e) {
    navtab(e)
  },
  toActive:function(e){
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: './hDActive/hDActive?index='+index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list
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
    wx.getStorage({
      key: 'nowIndex',
      success: (res) => {
        res.data.map(item => {
          this.data.activeList[item].isChoose = false
        })
        this.setData({
          activeList: this.data.activeList
        })
      }
    })
  },
})