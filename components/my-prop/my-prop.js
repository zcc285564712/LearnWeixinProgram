// components/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  // 传递过来的数据
  properties: {
    // 接收传来的值
    title:{
      type:String,
      value: 'zcc',
      // 监听传递值的变化
      observer:function (newVal,old) {
        console.log(newVal,old)
      }
    },
    food:{
      type:String,
      value: '草莓'
    }
  },
  externalClasses:['titleclass'],











  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
