// components/my-tab/my-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 处理点击事件，获取当前点击的元素的下标
    itemClick(e){
      const index = e.currentTarget.dataset.index;
      const title = this.properties.title[index];
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('handleTabClick',{index,title})
    }
  }
})
