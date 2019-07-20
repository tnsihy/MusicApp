import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  // 如果传入的url没有?时添加一个?
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

// 处理拼接参数
function param(data) {
  let url = ''
  for (var i in data) {
    let value = data[i] !== undefined ? data[i] : ''
    // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
    url += `&${i}=${encodeURIComponent(value)}`
  }
  // 把第一个&删掉
  //   http://baidu.com? 拼接上 &name=tnsihy 把第一个$删掉
  //   http://baidu.com?key=001 拼接上 &&name=tnsihy 把第一$删掉
  return url ? url.substring(1) : ''
}