let nameInput = document.querySelector(`#lname`);
let workInput = document.querySelector(`#work`);
let ageInput = document.querySelector(`#age`);
let submitBtn = document.querySelector(`#submit`);

submitBtn.addEventListener(`click`, function () {
  let fname = nameInput.value;
  let work = workInput.value;
  let age = ageInput.value;

  if (fname === `` || work === `` || age === ``) {
    alert(`Please fill all data!`);
  } else {
    console.log(`Name: ${fname}`);
    console.log(`Work: ${work}`);
    console.log(`Age: ${age}`);

    if (age < 18) {
      alert(`You are under age!`);
    } else {
      alert(`Registration Done`);
    }
  }
});












