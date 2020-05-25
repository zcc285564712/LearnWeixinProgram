// components/my-slots/my-slots.js
Component({
  // 组件内部的配置选项
  options:{
    multipleSlots:true, //多个插槽的时候配置options
    // styleIsolation: true, // 设置样式的隔离方式
  },
  // 组件的接收的数据
  properties: {
    title: {
      type: String,
      value: '', // 默认值
      // 监听传入值的变化
      observer: function (newVal, oldval) {
      
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    info:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 外界传来的组件的样式----是一个数组！！！里面传入对应的类名
  // externalClasses: [],

  // -------------- 监听properties和data值de改变，注意这里只能监听新的值 -----------
  observers: {
    title: function (newVal) {
      console.log(newVal)
    }
  },

  // -------------- 监听组件的生命周期和所在页面的生命周期 ---------
  // 1.监听组件所在页面的生命周期函数
    pageLifetimes: {
      show(){
        console.log('监听组件所在页面显示出来时候')
      },
      hide(){
        console.log('监听组件所在页面隐藏时候')
      },
      resize(){
        console.log('监听组件所在页面大小改变时候')
      }
    },

  // 2.监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log('监听组件被创建')
    },
    attached(){
      console.log('监听组件被添加到页面中')
    },
    ready(){
      console.log('监听组件被渲染出来')
    },
    // 不常用
    moved(){
      console.log('组件被移动到节点树的另一个位置')
    },
    detached(){
      console.log('组件被移除')
    }
  }
})
