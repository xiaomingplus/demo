// function init() {
//   var name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();
//
//
//
//
// function makeFunc() {
//   var name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
//
// var myFunc = makeFunc();
// myFunc();
//



// function outside(x){
//   function inside(y){
//     return x+y;
//   }
// return inside ;
// }
// fn_inside = outside(3);
// result = fn_inside(5);
// console.log(result);
//


var a=1;
eval('a=2');
console.log(a);


var o = {a:1};
var b = Object.create(o);
var a = function(){
  this.x = 2;
}
var c = Object.create(a);
var d = new a ();
console.log(b);
console.log(b.hasOwnProperty('a'));
console.log(c);
console.log(d);
