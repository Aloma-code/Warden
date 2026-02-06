// let person = {
//     firstName: 'idris',
//     lastName: 'Yusuf',
//     age: '21'
// };
// person.age = '19';
// console. log(person);

// let country = 'Nigeria';
// let state = 'Lagos';
// let Agege = 'work';
// if (Agege== 'work') alert('I work at Agege')

const massMark = '95';
const heightMark = '1.8';
const massJohn = '85';
const heightJohn = '1.6';
const BmiMark = massMark / (heightMark * heightMark);
const BmiJohn = massJohn / (heightJohn * heightJohn);
console.log(BmiMark, BmiJohn)
if (BmiMark > 40){
    console.log("mark's BMI is higher than John's")
} else {
    console.log("John's BMI is higher than Mark's")
}

// if(condition){
  //line for when condition is met
// } else if (condition) {
  // line for when 2nd condition is met
// } else{
  // line for when condition is not met
// }

greeting= document.getElementById("greeting");
// console.log(greeting.innerHTML)
const now = new Date();
console.log(now.getHours());
const currentHour = now.getHours();
if(currentHour > 1 && currentHour <= 11){
    console.log("Good morning")
    greeting.innerHTML= "Good morning"
} else if (currentHour >= 12 && currentHour <= 16){
    console.log("Good afternoon")
    greeting.innerHTML= "Good afternoon"
} else{
    console.log("Good evening")
    greeting.innerHTML= "Good evening"
}