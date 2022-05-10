// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: String,
      value: "你好啊,李银河",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    friends: {
      name: "kobe",
    },
    rgb: {
      r: 0,
      g: 0,
      b: 0,
    },
    fullColor: "0,0,0",
    _a: true,
    b: true,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    increment() {
      this.setData({
        count: this.data.count + 1,
      });
      this._showToast();
    },
    decrement() {
      this.setData({
        count: this.data.count - 1,
        msg: this.data.msg + "kobe",
      });
      this._showToast();
      //   console.log(this.data);
    },
    _showToast() {
      wx.showToast({
        title: "当前计数:" + this.data.count,
        icon: "none",
      });
      this.setData({
        "friends.name": "curry",
      });
    },
    changeR() {
      this.setData({
        "rgb.r": this.data.rgb.r + 5 > 255 ? 255 : this.data.rgb.r + 5,
      });
    },
    changeG() {
      this.setData({
        "rgb.g": this.data.rgb.g + 5 > 255 ? 255 : this.data.rgb.g + 5,
      });
    },
    changeB() {
      this.setData({
        "rgb.b": this.data.rgb.b + 5 > 255 ? 255 : this.data.rgb.b + 5,
      });
    },
  },
  options: {
    //   控制样式隔离效果
    //   styleIsolation:"shared"
    pureDataPattern: /^_/,
  },
  observers: {
    count: function (newValue) {
      this.setData({
        msg: this.data.msg + newValue,
      });
    },
    "friends.name": function (newValue) {
      console.log(newValue);
    },
    "rgb.r,rgb.g,rgb.b": function (r, g, b) {
      console.log(b);
      this.setData({
        fullColor: `${r},${g},${b}`,
      });
    },
  },
  lifetimes: {
    // attached() {
    //   console.log("....");
    // },
    // detached() {
    //   console.log("----");
    // },
  },
  //   组件的生命周期只会执行一次，新的生命周期定义方式是推荐的，优先级高
  //   attached() {
  //     console.log("====");
  //   },
  //   组件坐在页面的生命周期
  pageLifetimes: {
    // show() {
    //   console.log("-----++++++");
    // },
    // hide() {
    //   console.log("------*****");
    // },
    // resize() {
    //   console.log("------/////");
    // },
  },
});
