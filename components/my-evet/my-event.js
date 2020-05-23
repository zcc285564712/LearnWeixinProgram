// components/my-evet/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 子组件的点击事件
    handleClick(){
      this.triggerEvent('toClick',{name: 'cc',age: '19'})
    }
  }
})
