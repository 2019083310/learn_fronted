# Typescript中函数详解

### TypeScript函数类型

在JavaScript开发中，函数是重要的组成部分，并且函数可以作为一等公民（可以作为参数，也可以作为返回值进

行传递）。 

那么在使用函数的过程中，函数是否也可以有自己的类型呢？

- 我们可以编写函数类型的表达式（Function Type Expressions），来表示函数类型；

![image-20220303151454840](D:\截图\13_Typescript(二)\image-20220303151454840.png)

### TypeScript函数类型解析

在上面的语法中 (num1: number, num2: number) => void，代表的就是一个函数类型：

- 接收两个参数的函数：num1和num2，并且都是number类型；
- 并且这个函数是没有返回值的，所以是void； 

在某些语言中，可能参数名称num1和num2是可以省略，但是TypeScript是不可以的：

![image-20220303151631209](D:\截图\13_Typescript(二)\image-20220303151631209.png)



### 参数的可选类型

我们可以指定某个参数是可选的： 

![image-20220303152838592](D:\截图\13_Typescript(二)\image-20220303152838592.png)

这个时候这个参数x依然是有类型的，它是什么类型呢？ number | undefined

![image-20220303152911846](D:\截图\13_Typescript(二)\image-20220303152911846.png)

另外可选类型需要在必传参数的后面：

![image-20220303152926603](D:\截图\13_Typescript(二)\image-20220303152926603.png)



### 默认参数

从ES6开始，JavaScript是支持默认参数的，TypeScript也是支持默认参数的： 

![image-20220303153013479](D:\截图\13_Typescript(二)\image-20220303153013479.png)

这个时候y的类型其实是 undefined 和 number 类型的联合。



### 剩余参数

从ES6开始，JavaScript也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中。

![image-20220303153640338](D:\截图\13_Typescript(二)\image-20220303153640338.png)



### 可推导的this类型

this是JavaScript中一个比较难以理解和把握的知识点： 因为this在不同的情况下会绑定不同的值，所以对于它的类型就更难把握了； 

那么，TypeScript是如何处理this呢？我们先来看一个例子： 

![image-20220303154504750](D:\截图\13_Typescript(二)\image-20220303154504750.png)

上面的代码是可以正常运行的，也就是TypeScript在编译时，认为我们的this是可以正确去使用的：

- TypeScript认为函数 sayHello 有一个对应的this的外部对象 info，所以在使用时，就会把this当做该对象。



### 不确定的this类型

但是对于某些情况来说，我们并不知道this到底是什么？ 

![image-20220303154922729](D:\截图\13_Typescript(二)\image-20220303154922729.png)

这段代码运行会报错的：

- 这里我们再次强调一下，TypeScript进行类型检测的目的是让我们的代码更加的安全；
- 所以这里对于 sayHello 的调用来说，我们虽然将其放到了info中，通过info去调用，this依然是指向info对象的；
- 但是对于TypeScript编译器来说，这个代码是非常不安全的，因为我们也有可能直接调用函数，或者通过别的对象来调用函数；

这个时候，通常TypeScript会要求我们明确的指定this的类型：

![image-20220303155030429](D:\截图\13_Typescript(二)\image-20220303155030429.png)



### 函数的重载

在TypeScript中，如果我们编写了一个add函数，希望可以对字符串和数字类型进行相加，应该如何编写呢？

我们可能会这样来编写，但是其实是错误的：

![image-20220303164659920](D:\截图\13_Typescript(二)\image-20220303164659920.png)

那么这个代码应该如何去编写呢？

- 在TypeScript中，我们可以去编写不同的重载签名（*overload signatures*）来表示函数可以以不同的方式进行

  调用；

- 一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现；

#### sum函数的重载

比如我们对sum函数进行重构：在我们调用sum的时候，它会根据我们传入的参数类型来决定执行函数体时，到底执行哪一个函数的重载签名；

![image-20220303165230275](D:\截图\13_Typescript(二)\image-20220303165230275.png)

**但是注意，有实现函数，是不能直接被调用的：**

![image-20220303165149058](D:\截图\13_Typescript(二)\image-20220303165149058.png)



### 联合类型和重载

我们现在有一个需求：定义一个函数，可以传入字符串或者数组，获取它们的长度。

这里有两种实现方案：

- 方案一：使用联合类型来实现；

- 方案二：实现函数重载来实现；

  ![image-20220303165321828](D:\截图\13_Typescript(二)\image-20220303165321828.png)

在开发中我们选择使用哪一种呢？在可能的情况下，尽量选择使用联合类型来实现；