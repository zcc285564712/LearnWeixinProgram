// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 点击按钮用js实现返回
  handleBack(){
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取页面跳转过来携带的值
    console.log(options)
  },
  // 监听页面卸载
  onUnload(){
   const pages = getCurrentPages(); // 获取所有活跃的页面对象，当前页面和目标页面
   console.log(pages)
   const home = pages[pages.length - 2]; // 获取跳回的页面对象
   home.setData({
     title: '篮球'
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