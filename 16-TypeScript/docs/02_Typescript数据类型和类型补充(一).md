# Typescript中的数据类型和类型补充(一)

## 变量的声明

我们已经强调过很多次，在TypeScript中定义变量需要指定 **标识符** 的类型。 

所以完整的声明格式如下： 

- 声明了类型后TypeScript就会进行类型检测，声明的类型可以称之为**类型注解**；
- var/let/const 标识符: 数据类型 = 赋值; 

比如我们声明一个message，完整的写法如下：

- 注意：这里的string是小写的，和String是有区别的 
- string是TypeScript中定义的字符串类型，String是ECMAScript中定义的一个类

![image-20220301112934790](D:\截图\12_Typescript(一)\image-20220301112934790.png)

- 如果我们给message赋值其他类型的值，那么就会报错：

![image-20220301112946960](D:\截图\12_Typescript(一)\image-20220301112946960.png)

在TypeScript定义变量（标识符）和ES6之后一致，可以使用var、let、const来定义。

![image-20220301113221498](D:\截图\12_Typescript(一)\image-20220301113221498.png)



### 变量的类型推导（推断）

在开发中，有时候为了方便起见我们并不会在声明每一个变量时都写上对应的数据类型，我们更希望可以通过TypeScript本身的特性帮助我们推断出对应的变量类型： 

![image-20220301113117807](D:\截图\12_Typescript(一)\image-20220301113117807.png)

如果我们给message赋值123： 

![image-20220301113129685](D:\截图\12_Typescript(一)\image-20220301113129685.png)

这是因为在一个变量第一次赋值时，会根据后面的赋值内容的类型，来推断出变量的类型：

- 上面的message就是因为后面赋值的是一个string类型，所以message虽然没有明确的说明，但是依然是一个string类型；

![image-20220301113155114](D:\截图\12_Typescript(一)\image-20220301113155114.png)



## JavaScript和TypeScript的数据类型

我们经常说TypeScript是JavaScript的一个超级：

![image-20220301163736582](D:\截图\12_Typescript(一)\image-20220301163736582.png)



### JavaScript类型 – number类型

数字类型是我们开发中经常使用的类型，TypeScript和JavaScript一样，不区分整数类型（int）和浮点(double），统一为number类型。

![image-20220301163859160](D:\截图\12_Typescript(一)\image-20220301163859160.png)

如果你学习过ES6应该知道，ES6新增了二进制和八进制的表示方法，而TypeScript也是支持二进制、八进制、十

六进制的表示：

![image-20220301163921393](D:\截图\12_Typescript(一)\image-20220301163921393.png)



### JavaScript类型 – boolean类型

boolean类型只有两个取值：true和false，非常简单

![image-20220301163959423](D:\截图\12_Typescript(一)\image-20220301163959423.png)



### JavaScript类型 – string类型

string类型是字符串类型，可以使用单引号或者双引号表示：

![image-20220301164043204](D:\截图\12_Typescript(一)\image-20220301164043204.png)

同时也支持ES6的模板字符串来拼接变量和字符串：

![image-20220301164054295](D:\截图\12_Typescript(一)\image-20220301164054295.png)



### JavaScript类型 – Array类型

数组类型的定义也非常简单，有两种方式：

![image-20220301164144972](D:\截图\12_Typescript(一)\image-20220301164144972.png)

如果添加其他类型到数组中，那么会报错：

![image-20220301164154753](D:\截图\12_Typescript(一)\image-20220301164154753.png)



### JavaScript类型 – Object类型

object对象类型可以用于描述一个对象：

![image-20220301164240494](D:\截图\12_Typescript(一)\image-20220301164240494.png)

但是从myinfo中我们不能获取数据，也不能设置数据：

![image-20220301164306758](D:\截图\12_Typescript(一)\image-20220301164306758.png)



### JavaScript类型 – Symbol类型

在ES5中，如果我们是不可以在对象中添加相同的属性名称的，比如下面的做法：

![image-20220301164345489](D:\截图\12_Typescript(一)\image-20220301164345489.png)

通常我们的做法是定义两个不同的属性名字：比如identity1和identity2。 

但是我们也可以通过symbol来定义相同的名称，因为Symbol函数返回的是不同的值：

![image-20220301164405586](D:\截图\12_Typescript(一)\image-20220301164405586.png)



### JavaScript类型 – null和undefined类型

在 JavaScript 中，undefined 和 null 是两个基本数据类型。

在TypeScript中，它们各自的类型也是undefined和null，也就意味着它们既是实际的值，也是自己的类型：

![image-20220301164438372](D:\截图\12_Typescript(一)\image-20220301164438372.png)



## Typescript数据类型

### TypeScript类型 - any类型

在某些情况下，我们确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候我们可以使用any类型（类似于Dart语言中的dynamic类型）。

any类型有点像一种讨巧的TypeScript手段：

- 我们可以对any类型的变量进行任何的操作，包括获取不存在的属性、方法；
- 我们给一个any类型的变量赋值任何的值，比如数字、字符串的值；

![image-20220301170830304](D:\截图\12_Typescript(一)\image-20220301170830304.png)

如果对于某些情况的处理过于繁琐不希望添加规定的类型注解，或者在引入一些第三方库时，缺失了类型注解，这个时候我们可以使用any： 包括在Vue源码中，也会使用到any来进行某些类型的适配；



### TypeScript类型 - unknown类型

unknown是TypeScript中比较特殊的一种类型，它用于描述类型不确定的变量。

什么意思呢？我们来看下面的场景：

![image-20220301171326049](D:\截图\12_Typescript(一)\image-20220301171326049.png)



### TypeScript类型 - void类型

void通常用来指定一个函数是没有返回值的，那么它的返回值就是void类型：

我们可以将null和undefined赋值给void类型，也就是函数可以返回null或者undefined

![image-20220301172124269](D:\截图\12_Typescript(一)\image-20220301172124269.png)

这个函数我们没有写任何类型，那么它默认返回值的类型就是void的，我们也可以显示的来指定返回值是void：

![image-20220301172135806](D:\截图\12_Typescript(一)\image-20220301172135806.png)



### TypeScript类型 - never类型

never 表示永远不会返回值的类型，比如一个函数：

- 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数会返回东西吗？
- 不会，那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型；

![image-20220301172641301](D:\截图\12_Typescript(一)\image-20220301172641301.png)



### TypeScript类型 - tuple类型

tuple是元组类型，很多语言中也有这种数据类型，比如Python、Swift等。 

![image-20220301173304779](D:\截图\12_Typescript(一)\image-20220301173304779.png)

那么tuple和数组有什么区别呢？

- 首先，数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。（可以放在对象或者元组

  中）

- 其次，元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型；

![image-20220301173322186](D:\截图\12_Typescript(一)\image-20220301173322186.png)

