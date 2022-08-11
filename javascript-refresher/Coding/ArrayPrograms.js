console.log("Without Reverse");
const arr = [1, 2, 3, 4];
var line = "";
for (var i = 0; i < arr.length; i++) {
  line = line + " " + arr[i];
}
console.log(line.trim());

console.log("Reverse An Array");

const arr1 = [1, 2, 3, 4];
for (var i = arr1.length - 1; i >= 0; i--) {
  console.log(arr1[i]);
}
console.log("Reverse array using function");
function arrayRevers(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
arrayRevers([1, 2, 3, 4, 5]);
console.log("function expression");
const functionName = function (arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};
functionName([1, 2, 3, 4, 5, 6]);

// String
console.log("string");
var str = "sujata";
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// reverse string
console.log("reverse of string");
var line = "";
for (var i = str.length - 1; i >= 0; i--) {
  line = line + " " + str[i];
}
console.log(line.trim());


// Find the maximum and minimum element in an array

console.log("Min and Max of an array")
var minMaxArr=[-2,1,-4,5,3]
for(var i=1;i<minMaxArr.length-1;i++){
    var max=minMaxArr[0]
   if(minMaxArr[i]>max){
    max=minMaxArr[i];
   }
}
console.log(max)

// nested loop
console.log("array nested")
var arrnest=[[1,2,3,4],[5,6,7,9]]
for(var i=0;i<arrnest.length;i++){
    for(var j=0;j<arrnest[i].length;j++){
        console.log(arrnest[i][j])
    }
}

