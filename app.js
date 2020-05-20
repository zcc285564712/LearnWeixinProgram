// 注册小程序示例 
App({

  /**
   * 当关闭小程序，会在后台存活大约两个小时，在2小时内再打开小程序是不会执行onLaunch函数的，只会执行onShow，超过两个小时才会重新执行onLaunch函数
   * 当小程序初始化完成时，会最先触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 但是下面这个函数是异步的
    wx.getUserInfo({
     success: function(res){
       console.log(res)
     }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 小程序界面显示出来时候执行
   */
  onShow: function (options) {
    // console.log(options)
    // options里有很多值，可以通过scene场景值判断小程序是怎么打开的
    switch (options.scene){
      case 1001: 
        break;
      case 1005:
        break;
    }
  },

  /**
   * 小程序关闭
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  // 可以自己设置全局数据，然后在其他页面js中用getApp()方法获取到当前的App实例对象
  newData: {
    name: 'cc',
    age: '16'
  }
})
