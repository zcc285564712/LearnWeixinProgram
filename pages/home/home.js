// pages/home/home.js
import request from "../../service/netWork.js"  // 引入封装的接口
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.原始的调用接口
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:function (res) {
    //     console.log(res)
    //   }
    // }),
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data:{
    //     name : 'codewhy',
    //     age: 16,
    //   },
    //   success:function (res) {
    //     console.log(res)
    //   }
    // })
    // 2.封装后的接口调用
    request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {age: 1},
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
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
   * 生命周期函数--监页面隐藏
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