Page({
  data:{},
  onLoad:function(params){
    let that = this
    // 页面初始化 params为页面跳转所带来的参数
    let  typeId = params.type
    wx.request({
      url: 'https://api.wxappclub.com/get',
      data: {
        "appkey": "e8aukil676kq5fncqsi29u3a6tldicgq",
        "key": typeId,
        "type": "qlaw-getLawsByType"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/json'
      }, // 设置请求的 header
      success: function(res){
        // success
        let laws = res.data.result.value.laws
        that.setData({list: laws})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})