# leetcode剑指offer第一周十道题题解

### **第一题：剑指 offer 09. 用两个栈实现队列**

**链接：**https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/

代码题解：

```javascript
var CQueue = function() {
    this.items=[]//用数组实现数据的存储
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.items.push(value)//进栈，对应数组的push()方法
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.items.length===0){//判断数组的长度是否为0
        return -1
    }else{
        return this.items.shift()//出栈，对应数组的shift()方法
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```

### **第二题：剑指 offer 05. 替换空格**

**链接：**https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/

代码题解：

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/ /g,'%20')//直接使用字符串的replace(//,'')方法
};
```

### **第三题：剑指 offer 58. 左旋转字符串**

**链接：** https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

代码题解：

```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
   return  s.split('').slice(n,s.length).concat(s.split('').splice(0,n)).join('');
}
使用字符串的split('')转为数组，再通过数组的slice()方法提取出需要的内容，在进行数组合并cancat(),再通过数组的join('')方法转为字符串
```

### **第四题：剑指 offer 03. 数组中重复的数字**

**链接：**https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/submissions/

代码题解：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                return nums[j]
            }
        }
    }
};
```

### **第五题：剑指 offer 53. 在排序数组中查找数字**

**链接：**https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/

代码题解：

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let count=0
    for(let i of nums){
        if(i===target){
            count++
        }
    }
    return count
};
```

### **第六题：剑指 offer 53. 0 - n - 1 缺失的数字**

**链接：**https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/

代码题解：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === m) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return l;
}
这种数组的排序是有序的，首先就要想到二分法实现。
```

**第七题：剑指 offer 06. 从尾到头打印链表**

**链接：**https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/

代码题解：

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let arr=[]
    while(head){
        arr.unshift(head.val)
        head=head.next
    }
    return arr
};
```

### **第八题：剑指 offer 35. 复制复杂链表**

**链接：**https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/

代码实现：

```javascript
var copyRandomList = function(head, cachedNode = new Map()) {
    if (head === null) {
        return null;
    }
    if (!cachedNode.has(head)) {
        cachedNode.set(head, {val: head.val}), Object.assign(cachedNode.get(head), {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)})
    }
    return cachedNode.get(head);
}
```

### **第九题：剑指 offer 30. 包含min函数的栈**

**链接：**https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/submissions/

代码题解：

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    // 栈
    this.stack = []
    // 最小值栈
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    // 新增值小于最小值时，最小值栈入栈
    const min = this.minStack[this.minStack.length - 1] ?? Infinity
    if (x <= min) {
        this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const tail = this.stack.pop()
    // 最小值出栈时，最小值栈同步出栈
    if (tail === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }
    return tail
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```

### **第十题：剑指 offer 24. 反转链表**

**链接：**https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/

代码题解：

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head

    while(curr) { 
        // 暂存当前节点 的下一段链表
        const temp = curr.next
        // 将 当前节点 指向 前一个元素
        curr.next = prev 
        // 带着当前节点，更新 前一个链表
        prev = curr
        // 当前节点 指向下一段链表
        curr = temp 
    }      
    return prev 
};
```

