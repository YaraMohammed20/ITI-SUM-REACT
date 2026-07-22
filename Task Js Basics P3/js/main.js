//-----------------P1-----------------


//1
//array with same length.

//2
//find()

//3
// new array with elements which met the condithions.

//4
//new array

//5
//arrays


//--------------------P2-----------------


//1
//no

//2
//yes

//3
//yes

//4
//yes

//5
//no


//--------------------P3-----------------

// 1

const numbers = [1,2,3,4];
numbers.map((num)=>{
    console.log(num * 2);
});

console.log("--------------------");

//2

const nums = [10,25,5,30,15,40];
const result = nums.filter((num)=>{
    return num > 20;
});
console.log(result);
console.log("--------------------");

//3


const users = [
    {name:"Ali", age:20},
    {name:"Sara", age:28},
    {name:"Omar", age:30}
];

const user = users.find((item)=>{
    return item.age > 25;
});


console.log(user);
console.log("--------------------");



//4

const names = ["ali","mona","ahmed"];
const result4 = names.map((name)=>{
    return name.toUpperCase();
});

console.log(result4);
console.log("--------------------");


//-----------------P4-------------------

//1

const fruits = ["Apple","Banana","Orange"];
for (const fruit of fruits) {
    console.log(fruit);
}
console.log("--------------------");

//2

for (const fruit in fruits) {
    console.log(fruit);
}
console.log("--------------------");


//3

fruits.forEach((fruit, i) => {
    console.log(`${i} -> ${fruit}`);
});
console.log("--------------------");


//-----------------P4-------------------

//1
const sum = (a, b) => a + b;
console.log(sum(2, 3)); 
console.log("--------------------");

//2
const user5 = {
    fname: "Mostafa",
    age: 20
};
let { fname, age } = user5;
console.log(`Full Name: ${fname}, Age: ${age}`);
console.log("--------------------");

//3

console.log(`Hello ${fname}`);
console.log("--------------------");

//4

const arr1 = [1,2,3];
const arr2 = [4,5,6];
let allArr = [ , ];
allArr = [...arr1, ...arr2];
console.log(allArr);
console.log("--------------------");


//6

const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];
/**1 */
const result6 = students.map((students)=>{
    return students.name;
});
console.log(result6);
console.log("--------------------");

/**2 */

const allStudents = students.filter((student) => {
    return student.degree >= 60;
});

console.log(allStudents);
console.log("--------------------");

/**3 */
const grade = students.find((student)=>{
    return student.degree > 90;
});
console.log(grade);
console.log("--------------------");

/**4 */
students.forEach((student) => {
    console.log(`${student.name}`);
});
console.log("--------------------");

//bonus

const numbersb = [5, 10, 15, 20];
const sumb = numbersb.reduce((total, num) => {
    return total + num;
}, 0);
console.log(sumb);
console.log("--------------------");








