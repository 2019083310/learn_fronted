# 邂逅react框架

### **一、React介绍**

#### **1.React起源与发展**

React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决

定自己写一套，用来架设Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源

了。

#### **2.React统MVC的关系**

轻量级的视图层**库**！*A JavaScript library for building user interfaces*

React不是一个完整的MVC框架，最多可以认为是MVC中的V（View），甚至React并不非常认可MVC开

发模式；React 构建页面 UI 的库。可以简单地理解为，React 将界面分成了各个独立的小块，每一个块

就是组件，这些组件之间可以组合、嵌套，就成了我们的页面。

#### **3.React的特性**

![image-20220511130626200](D:\截图\25_邂逅react与react基础\image-20220511130626200.png)

**4.虚拟DOM**

![image-20220511131234173](D:\截图\25_邂逅react与react基础\image-20220511131234173.png)

![image-20220511131249482](D:\截图\25_邂逅react与react基础\image-20220511131249482.png)

### 二、react环境搭建

**全局安装create-react-app**

```jsx
npm i -g create-react-app
```

**创建一个项目**

```jsx
create-react-app myProjectName
```

如果不想全局安装，可以直接使用npx

```jsx
$ npx create-react-app myapp 也可以实现相同的效果
```

**这需要等待一段时间，这个过程实际上会安装三个东西**

- react: react的顶级库
- react-dom: 因为react有很多的运行环境，比如app端的react-native, 我们要在web上运行就使用react-dom
- react-scripts: 包含运行和打包react应用程序的所有脚本及配置

出现下面的界面，表示创建项目成功: 

```jsx
Success! Created your-app at /dir/your-app Inside that directory, you can run several commands:
npm start Starts the development server.
npm run build Bundles the app into static files for production.
npm test Starts the test runner. 
npm run eject Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back! We suggest that you begin by typing: cd your-app 
npm start 
Happy hacking
```

**生成项目的目录结构如下：**

```jsx
├── README.md 使用方法的文档 
├── node_modules 所有的依赖安装的目录 
├── package-lock.json 锁定安装时的包的版本号,保证团队的依赖能保证一致。 
├── package.json 
├── public 静态公共目录 
└── src 开发用的源代码目录
```

### 三、编写第一个react应用程序

```jsx
// 从 react 的包当中引入了 React。只要你要写 React.js 组件就必须引入React, 因为react里有 一种语法叫JSX，稍后会讲到JSX，要写JSX，就必须引入React 
import React from 'react' 
// ReactDOM 可以帮助我们把 React 组件渲染到页面上去，没有其它的作用了。它是从 react-dom 中 引入的，而不是从 react 引入。 
import ReactDOM from 'react-dom' 
// ReactDOM里有一个render方法，功能就是把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的 元素上 
// 这里就比较奇怪了，它并不是一个字符串，看起来像是纯 HTML 代码写在 JavaScript 代码里面。语 法错误吗？这并不是合法的 JavaScript 代码, “在 JavaScript 写的标签的”语法叫 JSX- JavaScript XML。
ReactDOM.render( 
    <h1>欢迎进入React的世界</h1>, 
	// 渲染到哪里
    document.getElementById('root') )
```

