// 编程规范
// 1.命令式编程：原生操作dom
// 2.声明式编程：vue/React/...

// app.json配置
// 1.window配置
// enablePullDownRefresh: 是否下拉
// backgroundColor: 是下拉后的留出的那部分的bgc
// navigationBarTextStyle：状态栏的样式，只能是white或者black
// navigationBarBackgroundColor：整个导航栏的bgc,只能是16进制
// backgroundTextStyle：下拉后的三个点的闪动，只有light和dark

// 获取用户信息Api
// 1.传统的getUserInfo方法，但是以后可能会被弃用；
// 2.在页面中设置一个按钮，设置open-type="getUserInfo";绑定事件改为bindgetuserinfo="事件名";然后在js中事件里传入参数event，用户信息在event对象里

// 注册page时候做的事情；页面中也有生命周期
// 1.在生命周期中发送请求，获取数据
