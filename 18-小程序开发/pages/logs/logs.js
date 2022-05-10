// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad(options) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      }),
      params:options
    })
  },
  switchToList(){
      wx.switchTab({
          url:'/pages/list/list'
      })
  },
  switchToStyle(){
      wx.navigateTo({
          url:'/pages/style/style'
      })
  },
  switchBackPage(){
      wx.navigateBack({
          delta:1
      })
  },
  onReachBottom(){
      console.log('触发底部刷新')
  }
})
