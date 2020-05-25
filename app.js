App({
  // 定义全局数据
  globalData: {

  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 先从storage里取出token
    const token = wx.getStorageSync('token');
    if(token && token.length !== 0){
      // 已经有token验证是否过期
      this.check_token(token);
    }else{
      this.login()
    }
  },
  // 验证token
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {token},
      success: (res) =>{
        // 如果token有效，就将token存到全局数据
        if(!res.data.errCode){
          this.globalData.token = token;
        }else{
          this.login()
        }
      },
      fail:(err) => {
        console.log('失败')
      }
    })
  },
  // 登录操作
  login() {
    // 登录功能
    wx.login({
      // code 只有5分钟有限期
      success: (res) => {
        console.log(res.code)
        const code = res.code;
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: "post",
          data: {
            code: code
          },
          success: (res) => {
            // 获取token存到全局
            this.globalData.token = res.data.token

            // 将token存到storage里面 setStorageSync
            wx.setStorageSync('token', this.globalData.token)
          }
        })
      },
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})