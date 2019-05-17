// pages/hDDetail/hDActive/hDActive.js
let app = getApp();
Page({
  data: {
    items:[],
    index:NaN,
    nowIndex:NaN,
    fromMine:false,
    pIndex:null,
    modalPrompt:true
  },
  addItem:function(){
    let a = this.data
    if(!(a.index==a.nowIndex)){
      wx.getStorage({
        key: 'planlist',
        success: (res) => {
          let data = [...res.data, this.data.items]
          wx.setStorage({
            key: 'planlist',
            data
          })
        },
        fail: () => {
          let data = [this.data.items]
          wx.setStorage({
            key: 'planlist',
            data
          })
        }
      })
      wx.getStorage({
        key: 'nowIndex',
        success: (res)=> {
          let data = [...res.data, this.data.index]
          wx.setStorage({
            key: 'nowIndex',
            data
          })
        },
        fail:()=>{
          let data = [this.data.index]
          wx.setStorage({
            key: 'nowIndex',
            data
          })
        }
      })
    }else{
      wx.switchTab({
        url: '../../logs/logs',
      })
    }
    this.setData({
      nowIndex: this.data.index
    })
  },
  sureRemove:function(){
    this.setData({
      modalPrompt:false
    })
  },
  noRemove:function(){
    this.setData({
      modalPrompt: true
    })
  },
removePlan: function() {
    let pIndex = this.data.pIndex
    wx.getStorage({
      key: 'planlist',
      success: (res) => {
        console.log(res.data, pIndex)
        res.data.splice(pIndex, 1)
        let data = res.data
        let index = this.data.index
        console.log()
        wx.getStorage({
          key: 'nowIndex',
          success: (res) => {
            let arr = res.data
            arr.map((item, i) => {
              if (item == index) {
                arr.splice(i, 1)
                wx.setStorage({
                  key: 'nowIndex',
                  data: arr
                })
              }
            })
          }
        })
        wx.setStorage({
          key: 'planlist',
          data,
          success: () => {
            this.noRemove()
            wx.navigateBack({
              delta: 1
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.mine){
      this.setData({
        fromMine:true,
        pIndex: options.pIndex
      })
    }
    let index = options.index
    // let index = 0
    let items = app.globalData.active[index]
    this.setData({
      items,
      index
    })
    wx.getStorage({
      key: 'nowIndex',
      success: (res)=> {
        res.data.map(item=>{
          if(item==index){
            let nowIndex = item
            this.setData({
              nowIndex
            })
          }
        })
      }
    })
    // console.log(this.data.index)
  },
})