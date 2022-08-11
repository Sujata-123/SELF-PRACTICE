console.log("higher order functions");
// functions that operate on other functions , either by talking them as arguments or by returning them, are called higher-order functions

function hello(msg) {
  console.log("hello " + msg);
}

var nums = [1, 2, 3, 4, 5];
var names = ["A", "B", "C", "D", "E"];
nums.forEach(function (e1) {
  console.log(e1 * 2);
});

names.forEach(hello);

var nums = [1, 2, 3, 4];
var square = function (e1) {
  return e1 * e1;
};

var sqrs = nums.map(square);
console.log(sqrs);

const beautiText = ["A", "B", "C", "D"];
var beauty = function (e1) {
  return "** " + e1 + " **";
};
var beautNames = beautiText.map(beauty);
console.log(beautNames);

// filter
var nums1 = [1, 2, 3, 4, 5];
var isOdd = function (e1) {
  return e1 % 2 == 1;
};
var oddNums = nums1.filter(isOdd);
console.log(oddNums);

// reduce
// create a single output
// it executes a reducer function one each element of the array
var sum = function (ac, e1) {
  console.log("AC", ac);
  console.log("E1", e1);
  return ac + e1;
};
var nums1 = [1, 2, 3, 4, 5];
var total = nums1.reduce(sum);
console.log(total);
// if not providing initial ac value it will take first element as first ac. and element will start will 2.
// but if we provided some initial value of ac then it will take that initial value then e1 value would we our first value

var sqNums = nums1.map(square).filter(isOdd).reduce(sum);
console.log(sqNums);
