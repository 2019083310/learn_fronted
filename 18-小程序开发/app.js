// app.js

//实现promiseify，把wx宿主环境提供给我们所有的回调函数转成promise的形式，解决回到地狱
// import { promisify } from "miniprogram-api-promise";

// const wxp = (wx.p = {});
// promisify(wx, wxp);

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
  },
  globalData: {
    userInfo: null,
  },
  onShow() {
    // console.log("小程序初始化完成");
  },
  onHide() {
    // console.log("小程序切换到后台");
  },
});
