
function ajax (
  options
) {
  options = {
    type: options.type || 'get',
    url: options.url || '',
    data: options.data || {},
    header: options.header || { 'Content-Type': 'application/json', Authorization: '' },
    success: options.success || function (data) { console.log(data) },
    error: options.error || function (data) { console.log(data) }
  }
  // 创建ajax对象
  const xhr = new XMLHttpRequest()
  xhr.withCredenticals = true
  // 拼接请求参数的变量
  let params = ''
  for (const attr in options.data) {
    params += attr + '=' + options.data[attr] + '&'
  }
  // 将参数最后的&截取掉
  params = params.substr(0, params.length - 1)
  if (options.type === 'get') {
    options.url = options.url + '?' + params
  }
  // 配置ajax对象
  xhr.open(options.type, options.url)
  xhr.setRequestHeader('Authorization', options.header.Authorization)
  if (options.type === 'post') {
    const contentType = options.header['Content-Type']
    // 设置请求类型格式
    // console.log(contentType)
    xhr.setRequestHeader('Content-Type', contentType)
    if (contentType === 'application/json') {
      // console.log("yes",options.data)
      xhr.send(JSON.stringify(options.data))
    } else {
      xhr.send(params)
    }
  } else {
    // 发送请求
    xhr.send()
  }

  // 监听xhr对象下面的onload事件
  // 当xhr对象接收完响应数据后触发
  xhr.onload = function () {
    console.log(xhr.status)
    if (xhr.status === 200) {
      options.success(xhr.responseText)
    } else {
      options.error(xhr.responseText, xhr)
    }
  }
}

export default ajax
