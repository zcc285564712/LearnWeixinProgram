// pages/home/home.js
import {
  getMultiData,
  getProduct
} from "../../services/home.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [], // 轮播图数据
    recommends: [], // 推荐数据
    titles: ['流行', '新款', '潮牌'], // 首页tab
  },

  handleClick(event) {
    // console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载--页面加载完成发送请求
   */
  onLoad: function (options) {
    this._getMultiData();
    // this._getProduct()
    
  },
  // ---轮播图数据/推荐数据
  _getMultiData() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },
  // 获取tab数据
  _getProduct(){
    getProduct('pop',1).then(res=>{
      console.log(res)
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