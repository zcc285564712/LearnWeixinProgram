// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: false,
    date: new Date().toLocaleString(),
    isShow: true,
    moveList: ['特叔服务','精油开背','泰式按摩']
  },

  // 按钮开始请求
  startRequest(){
    this.setData({
      isLoading: true
    })
  },
  // 按钮停止请求
  endRequest(){
    this.setData({
      isLoading: false
    })
  },

  // 切换显示
  switchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },






  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        date: new Date().toLocaleString()
      },1000)
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