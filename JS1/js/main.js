//Task 1

let playerOneChoice = "rock";
let playerTwoChoice = "scissors";

if (playerOneChoice === playerTwoChoice) {
  console.log("It's a tie" + " "+ playerOneChoice );
} else if (
  playerOneChoice === "rock" && playerTwoChoice === "paper"
) {
  console.log("Paper wins");
} else if (
  playerOneChoice === "rock" && playerTwoChoice === "scissors"
) {
  console.log("Rock wins");
}


//Task 2

let studentName = "Yara"; 
let age = 21;  
let isStudent = true; 
let loc = "giza";
let grade = 85;  
let hobbies = ["Coding", "Reading"]; 

let person = `name: ${studentName}, city: ${loc}`;
console.log(person);

let emptyValue = null;  
let notAssigned;

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
}
