function append(s) {
  let script = document.createElement("script");
  script.src = s;
  document.head.append(script);
  // hello();//hello is dependent on script to get completely loaded
//   console.log("document:", document)

//   setTimeout(function(){
//     hello();
//   },2000)
// script.onload
// script.onload=function myFun(){
//     hello();
// }
hello();
}
append("./myScript.js");

// why promises.

// Sometimes a piece of code will take 'x' seconds to execute . depending on it we have other piece
// of code.
// this other piece of code is dependent on first piece of code.
// this the example above we can see that script code will take time to execute, because of
// that when we are trying to execute hello() its throwing reference error.
// so we can handle this by using setTimeOut.


// Promises have consequences
// 1. They will be fullfilled.
// 2. They will not be fullfilled
// 3. They will be in the process.