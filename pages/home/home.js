// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 处理handleClickToast
  handleClickToast(){
    wx.showToast({
      title: '加载中',
      duration:5000,
      icon: 'loading',
      mask: true,
    })
  },
  // 处理handleClickModal
  handleClickModal(){
    wx.showModal({
      title:"提示",
      content: '确定删除吗',
      // showCancel:false, // 是否显示取消按钮
      success: function (res) {
        if(res.cancel){
          console.log('点击取消了')
        }
        if(res.confirm){
          console.log('点击了确定')
        }
      }
    })
  },
  handleLoading(){
    // 这个不能设置自动停止加载，如果要停止，要调用wx.hideLoading
    wx.showLoading({
      title: 'hh',
    })
  },
  handleActionSheet(){
    wx.showActionSheet({
      itemList: ['拍照','录像'],
      success:function (res) {
        console.log(res)
      }
    })
  },
  // 分享功能
  onShareAppMessage(){
    return {
      title: '你好',
      path: '', // 如果不设置，默认点击后进入首页
      imageUrl: '', // 分享时候显示的图片，不填默认是当前页面的截图
    }
  }
  
})