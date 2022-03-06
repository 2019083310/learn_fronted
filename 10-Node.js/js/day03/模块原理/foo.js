// let exports=module.exports;
//let module={
//     exports:{

//     }
// }
exports.foo='hello';
exports.foa='haha';
module.exports.fob='world';
exports={
    foo:'hahaha'
};
module.exports={
    foo:'hahahhahah',
    add:function(a,b){
        return a+b;
    }
}
exports=module.exports;
exports.foo='hello';
// return module.exports;