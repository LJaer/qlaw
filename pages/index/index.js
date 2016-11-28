// pages/index/index.js
Page({
  data:{

  },
  //options是传递过来的参数
  onLoad:function(options){
    let that = this
    wx.request({
      url: 'https://api.wxappclub.com/get',
      data: {
        "appkey": "e8aukil676kq5fncqsi29u3a6tldicgq",
        "key": "types",
        "type": "qlaw-getLawTypes"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
         'Content-Type': 'application/json'
      }, // 设置请求的 header
      success: function(res){
        let lawTypes = res.data.result.value
        that.setData({lawTypes: lawTypes})
      }
    })
  }
})