// var factorial = function fact(n) {
//     var ans = 1;

//     for(var i=1; i<=n; i++){
//         ans = ans * i;
//         console.log(ans);
//     }
//     return ans;
// }

// console.log(factorial);

// var factorial2 = function (n) {
//     var ans = 1;

//     for(var i=1; i<=n; i++){
//         ans = ans * i;
//         console.log(ans);
//     }
//     return ans;
// }

// console.log(factorial2);

// function a() {
//     console.log("a");

//     function b() {
//         console.log("b");
//     }
// }

// var arr = [1,2,3,4,5];

// arr

// var name = {};

// console.log(typeof(name));

// var names = {
//     "name" : "abc",
//     roll : 25,
//     marks : 99
// };

// console.log(names.roll);

// var arr = [1,2,3,4,5,6]
// console.log(arr)

// var sec = 10;

// function tik(){
//   console.log("second", sec);
//   sec--;
//   if(sec == 0){
// 	clearInterval(tik);
//   }
// }

//  var id = setInterval(tik, 1000);


// setInterval(tik,1000);



// function abc(arr) {
//     var arr2;
//     for(i in arr) {
//         arr2[i] = i;
//     }
//     return arr2;
// }

// var arr = [12, 56, 48, "hello"];
// console.log(abc(arr)[1]);

var obj1 = {};
var obj2 = new Object();
var obj3 = {};
console.log(obj1==obj2, obj1 == obj3);

let list = [4, 5, 6];
for (let i in list) {
   console.log(i); 
}

for (let i of list) {
   console.log(i); 
}

function change1(obj) {
    obj.name = "ninjas"
  }
  function change2(obj) {
    obj = {name: "changed"}
  }
  
  var obj = {name:"coding"}
  
  change1(obj)
  change2(obj)
  console.log(obj.name)  