
let students = [
  {
    id: 1,
    name: "Mostafa Mohamed",
    age: 28,
    city: "Cairo",
    grade: 95,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    name: "Ali Hassan",
    age: 17,
    city: "Alex",
    grade: 60,
    isGraduated: false,
    skills: ["HTML"],
  },
  {
    id: 3,
    name: "Sara Ali",
    age: 24,
    city: "Mansoura",
    grade: 88,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS", "React"],
  },
];


/** 1 */
console.log(students.length);
console.log("----");

/** 2 */
console.log(students[0].name);
console.log("----");


/** 3 */
console.log(students[2].name);
console.log("----");


/** 4 */
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
console.log("----");


/** 5 */
for (let i = 0; i < students.length; i++) {
  console.log(`name:`, students[i].name);
  console.log(`age:`, students[i].age);
  console.log(`city:`, students[i].city);
  console.log(`grade:`, students[i].grade);
}
console.log("----");


/** 6 */
for( let i = 0 ; i< students.length ; i++){
    if(students[i].age > 18){
    console.log(students[i].name);
}}
console.log("----");

/** 7 */
for( let i = 0 ; i< students.length ; i++){
    if(students[i].grade > 90){
    console.log(students[i].name);
}}
console.log("----");


/** 8 */
for( let i = 0 ; i< students.length ; i++){
    if(students[i].isGraduated){
    console.log(students[i].name);
}}
console.log("----");


/** 9 */
for( let i = 0 ; i< students.length ; i++){
    if(!students[i].isGraduated){
    console.log(students[i].name);
}}
console.log("----");


/** 10*/
let sum = 0;
for (let i = 0; i < students.length; i++) {
  sum += students[i].grade;
}
console.log(`grade:`, sum);
console.log("----");


/** 11 */
let avg = 0;
for (let i = 0; i < students.length; i++) {
    sum += students[i].grade;
    avg = sum/students.length;
}
console.log(`avg grades:`, avg);
console.log("----");


/** 12 */
let h = students[0].grade;
for (let i = 0; i < students.length; i++) {
    if (students[i].grade > h) {
        h = students[i].grade;
    }
}
console.log(h);
console.log("----");


/** 13 */
let l = students[1].grade;
for (let i = 0; i < students.length; i++) {
    if (students[i].grade < l) {
        l = students[i].grade;
    }
}
console.log(l);
console.log("----");



/** 14 */
console.log(students[1].name);
console.log(students[0].name);
console.log(students[2].name);
console.log("----");


/** 15 */
console.log(students[2].name);
console.log(students[0].name);
console.log(students[1].name);
console.log("----");


/** 16 */
for (let i = 0; i<students.length; i++) {
    let name = students[i].name;
    console.log("Length:", name.length);
    console.log("First char:", name[0]);
    console.log("Last char:", name[name.length -1]);
}
console.log("----");


/** 17 */
for (let i = 0; i <students.length; i++) {
  console.log( students[i].name.toUpperCase());
}
console.log("----");


/** 18 */
for (let i = 0; i <students.length; i++) {
  console.log( students[i].name.toLowerCase());
}
console.log("----");

/** 19 */
for (let i= 0; i< students.length; i++) {
    if (students[i].name.includes("Ali")) {
        console.log(students[i].name);
    }
}
console.log("----");



/** 20 */
for (let i = 0; i < students.length; i++) {
    let oneName = students[i].name.split(" ");
    console.log(oneName);
}
console.log("----");


/** 21 */
for (let i = 0; i < students.length; i++) {
    let oneName = students[i].name.split(" ");
    let fullName = oneName.join(" ");
    console.log(fullName);
}
console.log("----");

/** 22 */
for (let i = 0; i < students.length; i++) {
    let stName = students[i].name.replaceAll(" ", "");
    console.log(stName);
}
console.log("----");

/** 23 */
let allSkills = 0;
for (let i = 0; i < students.length; i++) {
  allSkills= students[i].skills;
}
console.log(allSkills);
console.log("----");

/** 24 */
for (let i = 0; i < students.length; i++) {
 console.log(students[i].skills);} 
console.log("----");

/** 25 */
for (let i = 0; i < students.length; i++) {
    students[i].skills.push("drawing");
}
console.log(students);
console.log("----");


/** 26 */
for (let i = 0; i < students.length; i++) {
    students[i].skills.pop();
}
console.log(students);
console.log("----");


/** 27 */
for (let i = 0; i<students.length; i++) {
    if (students[i].skills.includes("JS")) {
        console.log(students[i].name +" knows js");
    } else {
        console.log(students[i].name +" doesn't know js");
    }
}
console.log("----");


/** 28 */
for (let i = 0; i <students.length; i++) {
    students[i].skills.reverse();
    console.log(students[i].skills);
}
console.log("----");


/** 29 */
for (let i = 0; i <students.length; i++) {
    students[i].skills.sort();
    console.log(students[i].skills);
}
console.log("----");


/** 30 */
for (let i = 0; i <students.length; i++) {
    console.log(students[i].skills.join(", "));
}
console.log("----");


/** 31 */
for (let i= 0; i <students.length; i++) {
    console.log(Object.keys(students[i]));
}
console.log("----");

/** 32 */
for (let i= 0; i <students.length; i++) {
    console.log(Object.values(students[i]));
}
console.log("----");

/** 33 */
for (let i = 0; i <students.length; i++) {
    console.log(Object.values(students[i]));
    console.log(Object.keys(students[i]));
}
console.log("----");

/** 34 */
for (let i= 0; i <students.length; i++) {
    students[i].country ="egypt";
}
console.log(students);
console.log("----");


/** 35 */
for (let i = 0; i<students.length; i++) {
    students[i].city = "giza";
    console.log(students[i].city);
}
console.log(students);
console.log("----");


/** 36 */

for (let i = 0; i<students.length; i++) {
    delete students[i].country;
}
console.log(students);
console.log("----");

/** 37 */
for (let i = 0; i<students.length; i++) {
    if (students[i].hasOwnProperty("grade")) {
        console.log("yes");
    }else{
       console.log("noo");
    }
}
console.log("----");


/** 38 */
for (let i = 0; i<students.length; i++) {
    let grade = students[i].grade;
    if (grade >= 90) {
        console.log("excellent");
    } else if (grade >= 80) {
        console.log("very good");
    } else if (grade >= 70) {
        console.log("good");
    } else if (grade >= 60) {
        console.log("pass");
    } else {
        console.log("fail");
    }
}
console.log("----");



/** 39 */
for (let i = 0; i<students.length; i++) {
    if (students[i].age <18) {
        console.log("Minor");
    } else {
        console.log("Adult");
    }
}
console.log("----");

/** 40 */

function getStudentName() {
    for (let i = 0; i < students.length; i++) {
        return students[i].name;
    }
}
console.log(getStudentName());
console.log("----");


/** 41 */

function getStudentAge() {
    for (let i = 0; i < students.length; i++) {
        return students[i].age;
    }
}
console.log(getStudentAge());
console.log("----");


/** 42 */
function isStudentPassed() {
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 60) {
        return true;
    } else {
        return false;
    }
  }
}
console.log(isStudentPassed());
console.log("----");


/** 43 */
function getSkillsCount() {
    for (let i = 0; i < students.length; i++) {
        return students[i].skills;
    }
}
console.log(getSkillsCount());
console.log("----");

/** 44 */
function getAverageGrade() {
    let sum = 0;
    for (let i = 0; i< students.length; i++) {
        sum +=students[i].grade;
    }
    return sum/students.length;
}
console.log(getAverageGrade());
console.log("----");



/** 45 */
console.log( Math.random());
console.log(Math.round(4.5)); //less than 0.5, it rounds down ,0.5 or more, it rounds up. 5
console.log(Math.floor(4.7));// rounds down to the nearest integer. 4
console.log(Math.ceil(4.1)); //rounds up to the nearest integer. 5
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.pow(8, 2));
console.log("----");













