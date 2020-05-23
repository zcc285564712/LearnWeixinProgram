// 自定义组件
// 1.创建components文件夹，组件包含wxml;wxss;wxjs;wxjson四个文件
// 2.在wxml里写dom，在wxjs中做逻辑处理；在要使用组件的page里的json文件中的  "usingComponents"；配置组件名，值是相对路径
// 3.设置组件名称的时候，不能是大写字母，只能以中划线、下划线；当然了，也可以在app.json里的usingComponents全局注册自定义组件
// 4.可以在自定义组件内引入其他自定义组件


// 组件传递类名
// 1.父组件在子组件标签上用变量名传递类名，并在父组件内定义该类名的样式，然后在子组件的js中使用externalClasses是个数组，
// 来接收传递的类名的变量名称，然后在子组件内部的标签上绑定类名，类名就是接收的变量名