function chainStore()
{
    var store1='Nike China';
    var store2=store1;
    store1='Nike U.S.A.';
    console.log(store2); //Nike China
}
chainStore();

function chainStore()
{
    var store1=['Nike China'];
    var store2=store1;
    console.log(store2[0]); //Nike China
    store1[0]='Nike U.S.A.';
    console.log(store2[0]); //Nike U.S.A.
}
chainStore();




Object.getPrototypeOf(f) === F.prototype;

F.prototype.construct === F




var o = {a: 1};

// o这个对象继承了Object.prototype上面的所有属性
// 所以可以这样使用 o.hasOwnProperty('a').
// hasOwnProperty 是Object.prototype的自身属性。
// Object.prototype的原型为null。
// 原型链如下:
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// 数组都继承于Array.prototype
// (indexOf, forEach等方法都是从它继承而来).
// 原型链如下:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// 函数都继承于Function.prototype
// (call, bind等方法都是从它继承而来):
// f ---> Function.prototype ---> Object.prototype ---> null
