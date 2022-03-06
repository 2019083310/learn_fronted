function Promise(executor) {
    //添加状态属性与结果值属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //定义callback属性，保存Pending状态的回调函数
    this.callbacks = [];
    //保存实例化对象的this值
    const self = this;
    //自定义reslove函数,名字不一定拥resolve
    function resolve(data) {
        if (self.PromiseState !== 'pending') {
            return;
        }
        //改变状态属性
        self.PromiseState = 'fulfilled';
        self.PromiseResult = data;
        //异步任务成功后执行回调函数
        setTimeout(() => {
            self.callbacks.forEach(item => {
                item.onResolved(data);
            })
        })
    }
    //自定义reject函数
    function reject(data) {
        //判断状态是否修改过，改过就直接返回
        if (self.PromiseState !== 'pending') {
            return;
        }
        //改变状态属性
        self.PromiseState = 'rejected';
        self.PromiseResult = data;
        //异步任务失败后执行回调函数
        setTimeout(() => {
            self.callbacks.forEach(item => {
                item.onRejected(data);
            })
        })
    }
    try {
        //同步调用【执行器函数】
        executor(resolve, reject);
    } catch (e) {
        //更改Promise对象为失败
        reject(e);
    }
}
//添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
    const that = this;
    //判断回调函数是否存在
    if (typeof onRejected !== 'function') {
        onRejected = reason => {
            throw reason;
        }
    }
    if (typeof onResolved !== 'function') {
        onResolved = value => value;
    }
    return new Promise((resolve, reject) => {
        //封装重复部分
        function callback(type) {
            try {
                //获取回调函数执行结果
                let result = type(that.PromiseResult);
                //判断
                if (result instanceof Promise) {
                    //如果是Promise对象
                    result.then(v => {
                        resolve(v);
                    }, r => {
                        reject(r)
                    })
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        }
        //如果Promise状态为fulfilled回调这个函数
        if (this.PromiseState === 'fulfilled') {
           setTimeout(()=>{
               callback(onResolved);
           })
        }
        //如果Promise状态为rejected回调这个函数
        if (this.PromiseState === 'rejected') {
            //将结果值传入
            setTimeout(()=>{
                callback(onRejected);
            })
        }
        //如果Promise状态为pending，保存回调函数
        if (this.PromiseState === 'pending') {
            this.callbacks.push({
                onResolved: function () {
                    callback(onResolved);
                },
                onRejected: function () {
                    callback(onRejected);
                }
            })
        }
    })
}
//添加catch方法
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
}

//添加resolve方法
Promise.resolve = function (value) {
    //返回Promise对象
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(v => {
                resolve(v);
            }, r => {
                reject(r);
            })
        } else {
            resolve(value);
        }
    })
}

//添加reject方法
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    })
}

//添加all方法
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        //添加变量
        let count = 0;
        //存放成功结果数组
        let arr = [];
        //遍历全部
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                //能进到证明为成功
                count++;
                //保存成功结果
                arr[i] = v;
                //如果全部成功
                if (count === promises.length) {
                    resolve(arr);
                }
            }, r => {
                //能进到证明为失败
                reject(r);
            });
        }
    })
}

//添加race方法
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        //遍历全部
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                //能进到为成功
                resolve(v);
            }, r => {
                //能进到就失败
                reject(r);
            })
        }
    })
}