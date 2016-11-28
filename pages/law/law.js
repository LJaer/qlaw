Page({
  data:{},
  onLoad:function(params){
    let that = this;
    wx.request({
      url: 'https://api.wxappclub.com/get',
      data: {
        "appkey": "e8aukil676kq5fncqsi29u3a6tldicgq",
        "key": params.id,
        "type": "qlaw-getLawById"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/json'
      }, // 设置请求的 header
      success: function(res){
        // success
        let law = res.data.result.value
        that.setData({law:law})
      }
    })
  }
})