//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// let person3 = {
//     pizza:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }

// Nest an array of objects
let person3 = {
    pizza: ['Deep Dish', 'South Side Thin Crust'],
    tacos: 'Anything not from Taco bell',
    burgers:"Portillos Burgers",
    ice_cream: ["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"    
      }
    ]
  }
  ​
  //  Exercise 3) Get List of Favorite Foods
  console.log(Object.entries(person3))
  ​

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name,age){
    this.name = name;
    this.age = age; 

    this.printInfo = () => {
        return `You're ${this.name}. You are ${this.age} years old. `
    }
}

let new_person = new Person('Ida', 27);

console.log(new_person.printInfo())

class Human{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender
    }
    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
}

let daisy = new Human('Daisy', 28,'Female')
console.log(daisy.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// JavaScript Promises
// A promise represents an action that hasn't finished yet. It's like a placeholder for the
// result of some event
const isGreaterNumber = (num) => {
    return new Promise((resolve, reject) => {
      if (num > 10 === 0) {
        resolve(true);
      }
      else {
        reject(false);
      }
    })
  }
  console.log(isBigNumber(3))
  ​
  // using the above promise
  isGreaterNumber(10).then((result) => {
    console.log('Big Word', result)
  }).catch((error) => {
    console.log('Small Number', error)
  })

//Question 4

//Write a function that takes in a string of one or more words, 
//and returns the same string, but with all five or more letter 
//words reversed (Just like the name of this Kata). Strings passed 
//in will consist of only letters and spaces. Spaces will be 
//included only when more than one word is present.

function spinWords(sentence){
  const sentenceArray = sentence.split(' ');
  let result = '';
  sentenceArray.map((str, i) => {
    if (str.length >= 5){
      sentenceArray[i] = str.split('').reverse().join('');
    } else {
      sentenceArray[i] = str;
    }
  result = sentenceArray.join(' ');
  });
return result;
}


//Question 5

//Given an array of integers, find the one that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    var len = A.length;
    var A_sort = A.slice().sort();

    var count = {};

    A_sort.forEach(function(i) {
        count[i] = (count[i] || 0) + 1;
    });
    for (var key in count) {
        if (count.hasOwnProperty(key)) {

            //  var value = count[key];
            if (count[key] % 2 !== 0) {
                return Number(key);
            }
        }
    }
}
console.log(findOdd([1, 1, 9, 2]));


//uestion 6
//You are given an array (which will have a length of at least 3, 
//but could be very large) containing integers. The array is either 
//entirely comprised of odd integers or entirely comprised of even 
//integers except for a single integer N. Write a method that takes 
//the array as an argument and returns this "outlier" N.


function findOutlier(arr) {
  
  let evenCount = 0;
  
  for(let i = 0; i < 3; i++) {
    let val = arr[i];
    if(val % 2 === 0) evenCount ++;
    
  }
  
  let isEven = evenCount > 1;
  
  for (let i = 0; i < arr.length; i++) {
    if((arr[i] % 2 === 0) !== isEven) return arr[i]; 
  }
  
  return new Error('Array contains no outlier.');
}





