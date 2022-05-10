// components/test02/test02.js
const behavor = require("../../behavior/behavior");

import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "../../store/index";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: String,
      value: "kobe",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    increment() {
      this.setData({
        count: this.data.count + 1,
      });
      this.triggerEvent("myevent", { num: this.data.count });
    },
  },
  options: {
    multipleSlots: true,
  },
  behaviors: [behavor, storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      numA: () => store.numA,
      numB: () => store.numB,
      sum: "sum",
    },
    actions: {
      updateNumA: "updateNumA",
    },
  },
});
