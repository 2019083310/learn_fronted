// pages/basic/basic.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mes: "hello curry",
    urlStr: "/images/common/code-wallpaper-15.jpg",
    randomNumber: Math.random() * 10,
    friends: {
      name: "gelin",
    },
    counter: 0,
    num: 5,
    name: "curry",
    isShow: false,
    movies: [
      { name: "唐人街探案2", prices: 98 },
      { name: "猩球崛起", prices: 108 },
      { name: "战狼2", prices: 78 },
      { name: "变形金刚", prices: 88 },
    ],
    obj1:{
        name:'kobe',
        age:40
    }
  },

  //   事件绑定
  increment(event) {
    this.setData({
      counter: this.data.counter + 1,
    });
    console.log(event);
  },
  incrementN(event) {
    this.setData({
      counter: this.data.counter + event.target.dataset.num,
    });
  },
  //   事件冒泡
  incrementEvent(event) {
    // console.log(event);
  },
  incrementF(event) {
    // console.log(event);
  },
  handleTap1() {
    console.log(1);
  },
  handleTap2() {
    console.log(2);
  },
  handleTap3() {
    console.log(3);
  },
  handleTap4() {
    console.log(4);
  },
  //   event.detail在表单提交时携带表示的数据信息
  modelInput(event) {
    // console.log(event.detail);
    this.setData({
      name: event.detail.value,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
