// pages/home/home.js
// 获取app.js中的app对象，包括生命周期和所有实例对象
const newData = getApp();
// console.log(newData)

// 注册一个页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "陈辰",
    player: [
      {name: '詹姆斯',number: 23},
      {name: '科比',number: 24},
      {name: '乔丹',number: 23},
      {name: '哈登',number: 13},
      {name: '库里',number: 30},
    ],
    counter: 0
  },
  // 处理点击事件
  handleAdd(){
    // 小程序不是数据双向绑定，所以下面的代码是错误的，要先通过this.setData获取数据层的data
    // this.data.counter += 1;
    this.setData({
      counter: this.data.counter + 1
    })
  },
  // 点击减少
  handleDecrease(){
    this.setData({
     counter: this.data.counter - 1
    })
  },
  handleUserInfo(event){
    console.log(event)
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    // wx.request({
    //   url: '',
    //   success(res){
    //     console.log(res)
    //   }
    // })
  },

 // 生命周期函数--监听页面初次渲染完成;存活期间只会调用一次
  onReady: function () {

  },

  // 生命周期函数--监听页面显示
  onShow: function () {

  },

  // 生命周期函数--监听页面隐藏
  onHide: function () {

  },

  // 生命周期函数--监听页面跳转返回，销毁页面
  onUnload: function () {

  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {

  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {

  },

  // 用户点击右上角分享
  onShareAppMessage: function () {

  },

  
  /* 其他事件监听 */

  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj)
  },

  // 监听页面滚动到底部
  onReachBottom(){
    // console.log('滚动到底部了')
  },

  // 监听下拉刷新---前提是该页面配置了可下拉
  onPullDownRefresh(){

  }
})