var jquery = require("jquery");
var $ = require("jquery");

// var help = document.querySelector("#help");
// var fields = document.querySelectorAll("input");
// for (var i = 0; i < fields.length; i++) {
//     fields[i].addEventListener("focus", function(event) {
//         var text = event.target.getAttribute("data-help");
//         help.textContent = text;
//     });
//     fields[i].addEventListener("blur", function(event) {
//         help.textContent = "";
//     });
// }


// var text = document.querySelector("input");
// var output = document.querySelector("#length");
// text.addEventListener("input",function(){
//   output.textContent = text.value.length;
// });


// localStorage.setItem("username","marijn");
// console.log(localStorage.getItem("username"));//marijn
// localStorage.removeItem("username")

// var list = document.querySelector("#list");
// // textarea.value = "最多能输入200字";
// // textarea.style.color = "gray";
//
// function addTolist(name) {
//     var option = document.createElement("option");
//     option.textContent = name;
//     list.appendChild(option);
// }
// <span style="font-size:14px;">$("#list").val("最多能输入200字");
// </span>

// var garble = require("./garble");
// var argument = process.argv[2];
// console.log(garble(argument));
//
// var figlet = require("figlet");
// figlet.text("LoveYou , RubbishYang",function(error,data){
//   if (error)
//   console.log(error);
//   else
//   console.log(data);
// });


// var http = require("http");
// var server = http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("<h1>Hello!</h1> + <p>You asked for <code>" + request.url + "</code></p>");
//     response.end();
//
// });
// server.listen(8000);

// var http = require("http");
// var request= http.request({
//   hostname:"eloquentjavascript.net",
//   path:"/20_node.html",
//   method:"GET",
//   headers:{Accept:"text/html"}
// },function  (response) {
//   // body...
//   console.log("Server responded with status code","response.statusCode");
// });
// request.end();

// var search = $('#search').val();
// $('div:not(:contains("' + search + '"))').hide();

// var items = [ 1, 2, 3, 4, 5, 6 ];
// var results = [];
// function series(item) {
//   if(item) {
//     async( item, function(result) {
//       results.push(result);
//       return series(items.shift());
//     });
//   } else {
//     return final(results);
//   }
// }
// series(items.shift());

//
// if(window.Promise){
//     console.log('Promise found');
//
//     var promise = new Promise(function(resolve,reject){
//         var request = new XMLHttpRequest();
//
//         request.open('GET','http://api.icndb.com/jokes/random');
//
//         request.onload = fucntion(){
//             if(request.status == 200){
//                 resolve(request.response); //我们在此处获得了数据，因此解析Promise
//             }else{
//                 reject(Error(request.statusText));//状态码不是200，因此调用reject
//             }
//         };
//
//         request.onerror = function(){
//             reject(Error('Error fetching data'));//错误发生，拒绝Promise
//         };
//         request.send(); //发送请求
//     });
//
//     console.log('Asynchronous request made.');
//
//     promise.then(function(data){
//         console.log('Got data! Promise fulfilled.');
//         document.getElementByTagName('body')[0].textContent = JSON.parse(data).value.joke;
//     },function(error){
//         console.log('Promise rejected');
//         console.log(error.message);
//     });
// } else {
//     console.log('Promise not available');
// }


// var showMsg = function() {
//     setTimeout(function() {
//         console.log("a");
//     }, 3000);
// };
// showMsg();


// var showMsg = function(callback) {
//     setTimeout(function() {
//         console.log('hello');
//         // 此处添加回调
//         callback();
//    }, 1000 );
// };
//
// showMsg();

//
// var showMsg = function(){
//     // 构造promise实例
//     var promise = new Promise();
//     setTimeout(function(){
//       console.log("hello");
//         // 改变promise的状态
//         promise.resolve( 'done' );
//     }, 5000 );
//     // 返回promise实例
//     return promise;
// };
// showMsg().then(function( str ){
//     // 回调添加到这里来了
//     callback( str );
// });

var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
});
