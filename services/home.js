import request from './network.js'
// 请求轮播图和推荐数据
export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
} 

export function getProduct(type, page) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}
