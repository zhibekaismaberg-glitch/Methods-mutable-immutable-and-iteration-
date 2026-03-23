// mutable methods - push, pop, shift, unshift, splice, reverse, fill
// Immutable or not mutable methods - concat, slice, join, includes, indexOf
// Iteration methods - forEach, map, filter, some, every, find, findIndex, sort, reduce, reduceRight

/* const numbers = [1, 2, 3, 4]
const part = numbers.slice(1, 3)
console.log(part);                   // result: 2, 3
 
/* const numbers = [10, 20, 30, 40, 50]
const part = numbers.slice(1, 3)
console.log(part);                      // result: 20, 30

const fruits = ["apple", "banana", "orange", "mango"]
const parties = fruits.slice(1, 3)
console.log(parties); */                  // result: "banana"   "orange"

/* const numbers = [1, 2, 3, 4, 5]
const part = numbers.slice(2, 4)
console.log(part);                        // result: 3, 4

const colors = ["red", "blue", "green", "yellow"]
const parties = colors.slice(1)
console.log(parties) */                   // result: "blue", "green", "yellow"

/* const colors = ["red", "blue", "green"]
const color = "red"
if (colors.includes(color)) {
  console.log("Цвет правильный")          // result: Цвет правильный 
} */

/* const numbers = [1, 2, 3]
numbers.splice(1, 1, 9)
console.log(numbers) */              // result: 1, 9, 3  mutable method

// Примитивные типы данных - string, number, Boolean, undefined, null, bigInt, symbol
// Непримитивные типы данных - object, function, array

/* let a = 5
b = a
b = 10
console.log(a);  */  // result: 5

/* let aObject = {
    number: 5,
}
let bObject = aObject
bobject.number = 10
console.log(aObject.number); */  // result: 10 так как объект непримитивный тип данных

/* const arr1 = [1, 2, 3]
const arr2 = arr1
arr2.push(4)
console.log(arr1)
console.log(arr2) */   // result: [1,2,3,4]  [1,2,3,4]


                                
    // Immutable or not mutable methods - concat, slice, join, includes, indexOf

/* let numbers = [1, 2, 3, 4, 5]    
let numbers1 = [6, 7, 8, 9]  
console.log(numbers.concat(numbers1)); */   // result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* let numbers = [1, 2, 3, 4, 5]
let numbers1 = [6, 7, 8, 9, 10] */
/* let numbers2 = numbers.slice()
numbers.push(6)
console.log(numbers); */      // 1 2 3 4 5 6
/* console.log(numbers.join());    // 1,2,3,4,5 str
console.log(numbers.includes(4));  // true
console.log(numbers.indexOf(5)); */   // 4


// Iteration methods
                          
/* const favorites = [
    {name: "Ronaldo", age: 42},
    {name: "Joe Biden", age: 39},
    {name: "Adele", age: 40},
    {name: "Barak Obama", age: 42},
    {name: "Beyonce", age: 44},
    {name: "Justin Bieber", age: 31},
    {name: "Bil Gates", age: 69},
    {name: "Jeff Bezos", age: 61},
    {name: "Mark Zuckerberg", age: 41},
];

favorites.forEach(() => {
  console.log("called");
})

favorites.forEach((item, index) => {
    console.log(item, index);
})         
console.log(
    favorites.map((item) => {
        return item.name + "is" + item.age + "years old"
    })
);
console.log(
  favorites.filter((item) => {
    return item.age > 40
  })
)
console.log(
    favorites.some((item) => {
        return item.age === 60
    })
);
console.log(
    favorites.every((item) => {
        return item.age > 40
    })
);               
console.log(
  favorites.find((item) => {
    return item.age === 40
  })
);
console.log(
  favorites.findIndex((item) => {
    return item.age === 40
  })
);

console.log(
  favorites.sort((a, b) => {
    if (a.age < b.age) return 1;
    else return -1
  })
);


const number = [6, 2, 4, 18, 92, 23]
number.sort((a, b) => {
  if (a > b) return 1;
  else return -1;
})
console.log(number);
 */



// Home work 4-lesson
 
/* const numbers = [3, 8, 5, 10, 7]

numbers.push(12)
console.log(numbers);

numbers.shift()
console.log(numbers);

const numbers2 = numbers.filter((number) => number % 2 === 0);
console.log(numbers2);

const numbers3 = numbers.map((number) => number * 5);
console.log(numbers3);

numbers.sort((a, b) => a - b);
console.log(numbers); 
 */
// 2

 const famouses = [
  { name: "Cristiano Ronaldo", age: 41, role: "footballer" },
  { name: "Joe Biden", age: 83, role: "politician" },
  { name: "Adele", age: 37, role: "singer" },
  { name: "Barack Obama", age: 64, role: "politician" },
  { name: "Beyonce", age: 44, role: "singer" },
  { name: "Justin Bieber", age: 31, role: "singer" },
  { name: "Bill Gates", age: 69, role: "businessman" },
  { name: "Fatima", age: 17, role: "little sister" },
  { name: "Mark Zuckerberg", age: 41, role: "businessman" },
  { name: "Billie Eilish", age: 24, role: "singer" }
];

console.log(
  famouses.map((item) => {     // 1 вариант
    return item.name
  })
);

const names = famouses.map((famouse) => famouse.name); // 2 вариант
console.log(names);

console.log(
  famouses.map((item) => {
    return item.name + " is a " + item.role // 1 вариант
  })
);

const descriptions = famouses.map(
  (famouse) => `${famouse.name} is a ${famouse.role}`  // 2 вариант
);
console.log(descriptions);

console.log(
  famouses.reduce((prev, curr) => {     
    return prev + curr.age;
  }, 0) / famouses.length          // средний возраст
);

console.log(
  famouses.reduce((prev, curr) => {
    if (prev.age > curr.age) return prev;   // самый старший
    else return curr;
  })
);

console.log(
  famouses.reduce((prev, curr) => {
    if (prev.age < curr.age) return prev;   // самый младший
    else return curr;
  })
);

console.log(
  famouses.reduce((prev, curr) => {
    if (prev.age < curr.age) return prev;  // самый старший 
    else return curr
  }).age - 
  famouses.reduce((prev, curr) => {
    if (prev.age > curr.age) return prev;  // самый младший
    else return curr
  }).age
);

console.log(
  famouses.sort((a, b) => {
    if (a.age > b.age) return 1
    else return -1
  })
);

console.log(
  sortedFamouses[0],
  sortedFamouses[sortedFamouses.length -1],
);


console.log(
  famouses.reduce((prev, curr) => {
    return prev + curr.age;
  },0),
);

const unage = famouses.some((famouse) => famouse.age < 18);
console.log(unage);

const olderThan20 = famouses.filter((famouse) => famouse.age > 20);
console.log(olderThan20); 

