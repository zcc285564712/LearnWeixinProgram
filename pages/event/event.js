// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList: ['篮球','乒乓球','台球']
  },
  handleClick(){
    console.log('我是bindtap')
  },

  // 点击当前元素获取当前元素的内容
  handleInfo(e){
    let dataset = e.currentTarget.dataset
    console.log(dataset);
    let item = dataset.item;
    let index = dataset.index;
  },

  // 事件捕获和冒泡
  handleCapture1(){
    console.log('捕获1')
  },
  handleBind1(){
    console.log('冒泡1')
  },
  handleCapture2(){
    console.log('捕获2')
  },
  handleBind2(){
    console.log('冒泡2')
  },
  handleCapture3(){
    console.log('捕获3')
  },
  handleBind3(){
    console.log('冒泡3')
  },


















  handleTouchStart(){
    console.log('我是bind:touchstart')
  },
  handleTouchMove(){
    console.log('我是bind:touchmove')
  },
  handleTouchEnd(){
    console.log('我是bind:touchend')
  },
  handleLongPress(){
    console.log('我是长按')
  },
  handleTouchCancel(){
    console.log('我是取消触摸')
  },

















  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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