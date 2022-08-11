console.log("======== var ==========");
var myName = "sujata";
console.log(myName);
myName = "menu";
console.log(myName);

console.log("==================    let   ===========");
let myName1 = "sujata";
console.log(myName1);
myName1 = "menu";
console.log(myName1);

console.log("=========== const ==========");
// const myName2="sujata";
// console.log(myName2)
// myName2="menu";
// console.log(myName2)

console.log("=========== normal function ============");
function printMyName(name) {
  console.log(name);
}
printMyName("sujata");

console.log("========== arrow function ==============");
const printMyName1 = (name) => {
  console.log(name);
};
printMyName("sujata singh");

const multiply = (number) => {
  return number * 2;
};
console.log(multiply(2));

const nums = [1, 2, 3, 4];
const doubleNumArray = nums.map((num) => {
  return num * 2;
});
console.log(nums);
console.log(doubleNumArray);
//classes
// class Person{
//     name='Sujata'// properties
//     call=()=>{}//methods
// }

// const myPerson=new Person();
// myPerson.call();
// console.log(myPerson.name)

class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Sujata";
    this.gender = "Female";
  }
  printMyname() {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyname();
person.printGender();

console.log("==================== spread operator ==================");
// used to split up array elements OR object properties
const oldArray = [1, 2, 3, 4];
const newArray = [...oldArray, 6, 7];
console.log(newArray);

const oldObj = { name: "sujata", age: 22 };
const newObj = { ...oldObj, role: "developer" };
console.log(newObj);

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const personObj = {
  name1: "Max",
};

const personNew = {
  ...personObj,
  age: 28,
};
console.log(personNew);

console.log("======= rest ===============");
// used to merge a list of function argumnets into an arrray
// rest operator basically used for functions
// function sortArgs(...args) {
//   return args.sort();
// }

const filter1 = (...args) => {
  return args.filter((e1) => {
    e1 === 1;
  });
};
console.log(filter1(1, 2, 3));

function sum(...inputs) {
  console.log(inputs);
  console.log(...inputs);
  let total = 0;
  for (i of inputs) {
    total += i;
  }
  console.log(total);
}
sum(1, 2, 3, 4, 5);

function fun(a, b, ...c) {
  console.log(`${a} ${b}`); //ab,cd
  console.log(c); //ef,gh,ij
  console.log(c[0]); //ef
  console.log(c.length); //3
  console.log(c.indexOf("ij")); //2
}
fun("ab", "cd", "ef", "gh", "ij");

// destructuring
// easily extract array elements or object properties and store them in variables.

//Array Destructuring
[a, b] = ["Hello", "Max"];
console.log(a);
console.log(b);

//Object Destructuring
const { name2, age, role } = { name2: "Max", age: 22, role: "developer" };
console.log(name2);
console.log(age);
console.log(role);

const personSujata = {
  nameSujata: "sujata singh",
  roleSujata: "Software Developer",
};
const { nameSujata, roleSujata } = personSujata;
console.log("nameSujata", nameSujata);
console.log("roleSujata", roleSujata);


function printDetailsSujata({nameSujata,roleSujata}){
console.log(`name is ${nameSujata} and role is ${roleSujata}`)
}
printDetailsSujata(personSujata)
// JS Array Functions
// Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc.

// You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

// The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Particularly important in this course are:

// map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


// for of and for in loop