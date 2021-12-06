# leetcode第二周十道题目题解

#### [剑指 Offer 04. 二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

代码题解：

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    for(let item of matrix){
        for(let item2 of item){
            if(item2===target){
                return true
            }
        }
    }
    return false
};
```

#### [剑指 Offer 10- I. 斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)

代码题解：

```javascript
let fib = function(n) {
    if(n===0){
        return 0
    }else if(n===1){
        return 1
    }else if(n>1){
        return fib(n-1)+fib(n-2)%1000000007
    }

};
这种递归的方法就效率太低了，会出现浏览器假死现象，毕竟递归需要堆栈，数字过大内存不够。
```

```javascript
/**
 * @param {number} n
 * @return {number}
 */
let fib = function(n, current = 0, next = 1) {
    let a = 0
    let b = 1
    let sum = 0
    if(n === 1) return 1
    for(let i = 0;i<n-1;i++) {
        sum = (a + b)% 1000000007
        a = b
        b = sum
    }
    return sum
}
```

#### [剑指 Offer 50. 第一个只出现一次的字符](https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

代码题解：

```javascript
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
        const k=s.indexOf(s[i])
        const p=s.indexOf(s[i],k+1)
        if(p===-1){
            return s[i]
        }
    }
    return ' '
}
```

#### [剑指 Offer 11. 旋转数组的最小数字](https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/)

代码题解：

```javascript
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    const array=numbers.sort((a,b)=>a-b)
    return array[0]
};
```

#### [剑指 Offer 27. 二叉树的镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

代码题解：

```javascript

```

#### [剑指 Offer 28. 对称的二叉树](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

代码题解：

```javascript

```

#### [剑指 Offer 26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)

代码题解：

```javascript

```

#### [剑指 Offer 32 - I. 从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

代码题解：

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    let queue = [root]
    let res = []
    while(queue.length) {
        let node = queue.shift()
        res.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return res
};
```

#### [剑指 Offer 32 - II. 从上到下打印二叉树 II](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

代码题解：

```javascript

```

#### [剑指 Offer 32 - III. 从上到下打印二叉树 III](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

代码题解：

```javascript
```

