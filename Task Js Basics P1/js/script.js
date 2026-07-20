
alert('good morning');


let person = " it's yara gamal";
console.log(person);


/**
 * 
let fname = "Yara";
let age = 21;

console.log(`name is  ${fname} , age  ${age}`);

age += 10;
console.log("updated age is " + age);

let isStudent = true;
console.log(`name: ${fname} \nage: ${age} \nstudent: ${isStudent}`);

 */


//JS Logical Operators
var age = 20;
var hasLicense = true;
var isBanned = false;

console.log(age >= 18 && hasLicense);
console.log(age < 18 || hasLicense);
console.log(!isBanned);




var username = "yara";
var password = "1234";
var isAdmin = false;

if ((username === "yara" && password === "1234") || isAdmin) {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}

//messages
console.log("General Message hello ");

console.info("Information Message it is 2026")

console.warn("Warn Message")

var x = "Response Sever"
console.error(`Error Message: ${x}`)

console.debug(`Debug Message`)

console.trace(`Trace Message`)

console.assert(`IF Message`)


//loops

var i = 0;
var r = 0;
do {
    i++;
    r += i;
} while (i < 4);
console.log(r);


i = 1;
while (i <= 5) {
    console.log("hi while");
    i++;
}


for (i = 0; i < 5; i++) {
    console.log("hi for");
}


// if
let grade = 85;
if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 80) {
    console.log("Good");
} else if (grade >= 70) {
    console.log("Average");
} else if (grade >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
    console.warn("Warn Message");
}



// declaration function
var fname = "declaration";
var age = 21;

function calHi(fname, age) {
    var person = fname + " " + age;
    console.log(person);
}

calHi(fname, age);


// Expression function
var fname = "Expression";
var age = 21;

var getPerson = function calHi(fname, age) {
    var person = fname + " " + age;
    console.log(person);
}

calHi(fname, age);

// arrow functtion
var fname = "arrow";
var age = 21;

var getPerson = () => {
    function calHi(fname, age) {
        var person = fname + " " + age;
        console.log(person);
    }

    calHi(fname, age);
};

getPerson();


//Callback Function

var fname = "Callback";
var age = 21;

function calHi(fname, age) {
    console.log(fname + " " + age);
}

function getPerson(callback) {
    callback(fname, age);
}

getPerson(calHi);

// Invoked Function
(function () {
    console.log("Hello Invoked");
})();




//object
var student = {
    fname: "Yara",
    age: 21,
    gender: "female",
    add: {
        ctry: "Eg"
    },
    eat: function(meal){
        console.log(`i love ${meal}`)
    }
};

console.log(student.fname);
console.log(student.age);
console.log(student.gender);
console.log(student.add.ctry);
student.eat("cake");
console.table(student);