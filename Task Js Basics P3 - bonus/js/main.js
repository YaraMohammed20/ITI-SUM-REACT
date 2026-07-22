const employees = [
  {
    id: 1,
    name: "Ahmed",
    age: 22,
    salary: 6000,
    department: "IT",
    active: true
  },
  {
    id: 2,
    name: "Sara",
    age: 27,
    salary: 8500,
    department: "HR",
    active: true
  },
  {
    id: 3,
    name: "Ali",
    age: 20,
    salary: 4500,
    department: "IT",
    active: false
  },
  {
    id: 4,
    name: "Mona",
    age: 30,
    salary: 10000,
    department: "Finance",
    active: true
  },
  {
    id: 5,
    name: "Omar",
    age: 24,
    salary: 7000,
    department: "Marketing",
    active: false
  },
  {
    id: 6,
    name: "Youssef",
    age: 29,
    salary: 12000,
    department: "IT",
    active: true
  }
];

//----------------p1-------------------

//1
/**1 */
for (let i = 0; i < employees.length; i++) {
  console.log(employees[i].name);
}
console.log("------------------------");

/**2 */

for (const employee of employees) {
  console.log(employee.name);
}
console.log("------------------------");

/**3 */
employees.forEach(employee => {
  console.log(employee.name);
});
console.log("------------------------");


//2
for (const idx in employees) {
  console.log(idx);
}
console.log("------------------------");


//3
for (let i = 0; i < employees.length; i++) {
  if (employees[i].active) {
    console.log(employees[i]);
  }
}
console.log("------------------------");

//-----------------p2------------------

//1
const welcome = (name) => `Welcome ${name}`;
console.log(welcome("yara"));
console.log("------------------------");

//2
const employee = employees[0];
const { name, salary } = employee;
console.log(name);
console.log(salary);
console.log("------------------------");

//3
const newEmployee = {
  ...employee,
  country: "egypt"
};
console.log(newEmployee);
console.log("------------------------");

//4
console.log(`${employee.name} works in ${employee.department} and earns ${employee.salary}`);
console.log("------------------------");

//----------------p3--------------------
//1
const allnames = employees.map((employees)=>{
    return employees.name;
});
console.log(allnames);
console.log("------------------------");

//2
const allSalary = employees.map((employees)=>{
    return employees.salary;
});
console.log(allSalary);
console.log("------------------------");

//3
const allItems = employees.map(
  employee => `${employee.name} (${employee.department})`
);
console.log(allItems);
console.log("------------------------");

//4
const increasedSalary = employees.map(employee => ({
  ...employee,
  salary: employee.salary + 1000
}));
console.log(increasedSalary);
console.log("------------------------");

//----------------p4--------------------
//1
/**1 */
const result1= employees.filter(employee => employee.salary > 7000);
console.log(result1);

console.log("------------------------");

/**2 */
const result2= employees.filter(employee => employee.department == "IT");
console.log(result2);
console.log("------------------------");

/**3 */
const result3= employees.filter(employee => employee.active == true);
console.log(result3);
console.log("------------------------");

/**4 */
const result4= employees.filter(employee => employee.age < 25);
console.log(result4);
console.log("------------------------");

/**5 */
const depSA = employees.filter(
  employee => employee.department === "IT" && employee.salary > 5000
);
console.log(depSA);

//-------------------p5------------------------
// 1
const findsalary = employees.find(employee => employee.salary > 9000);
console.log(findsalary);
console.log("------------------------");


// 2
const hrEmployee = employees.find(employee => employee.department === "HR");
console.log(hrEmployee);
console.log("------------------------");


// 3
const noActive = employees.find(employee => !employee.active);
console.log(noActive);
console.log("------------------------");


// 4
const empId = employees.find(employee => employee.id === 100);
console.log(empId); 
console.log("------------------------");











