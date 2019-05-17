let list = [
  {
    src: "../../img/home.png",
    title: "首页"
  },
  {
    src: "../../img/nikerun.png",
    title: "下载"
  },
  {
    src: "../../img/mine.png",
    title: "我的"
  }
]
let toHome = function(){
  wx.switchTab({
    url: '../home/home'
  })
}
let toXiazai = function () {
  wx.switchTab({
    url: '../download/download'
  })
}
let toMine = function () {
  wx.switchTab({
    url: '../logs/logs'
  })
}
let navtab = function(e){
  let id = e.currentTarget.dataset.id
  switch (id) {
    case 0:
      toHome();
      break;
    case 1:
      toXiazai();
      break;
    case 2:
      toMine();
      break;
  }
}
module.exports = {
  list, navtab
}