import inquirer from "inquirer";
import { describe } from "node:test";
import { tap } from "node:test/reporters";
import { createBrotliCompress } from "zlib";
//day 1 code
//QUESTION 1

import { stringify } from "querystring";
import { kMaxLength } from "buffer";
import { error } from "console";

// let name = "Taha";
// console.log("Hello " + name + " would you like to learn typescript? ");

//QUESTION 2

    // let name = "Taha";
    // console.log(name.toUpperCase());
    // console.log(name.toLowerCase());
    // console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());    
 
// QUESTION 3
 
    // let name = " \t\n Taha \t\n";
    // console.log(name);
    // console.log(name.trim());

//Question 5

// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

// Question 6

// let famousperson = 'Albert Einstien';
// let message =  (`${famousperson} once said, A person who never made a mistake never tried anything new.` )
// console.log(message);

// Question 7

// console.log(4+4);
// console.log(14-6);
// console.log(2*4);
// console.log(32/4);

// Question 8

// let Favourite_Number: number = 5;
// console.log(`${Favourite_Number}, Is my favourite number.`);

// Question 9

// let ArrayString : string[] = ["Azlan" , "Sheriyar" , "Sajjad"];
// // console.log(ArrayString[0]);
// // console.log(ArrayString[1]);
// // console.log(ArrayString[2]); 

// // Question 10 // Connected with Question 9.

// let message : string = " Would you like to learn typescript with me? ";
// console.log(ArrayString [0] +  message );
// console.log(ArrayString [1] +  message );
// console.log(ArrayString [2] +  message );

// Question 11

// let Transport : string[] = ["Honda Motorcycle." , "Tesla Car." , "Toyota Truck."];
// let message : string = " I would like to own a ";
// console.log(message + Transport[0]);
// console.log(message + Transport[1]);
// console.log(message + Transport[2]);

// // Either

// Transport.forEach(Transport => {
//   console.log(message + Transport);  
// });

// // Question 12

// let Guests_List : string[] = [" Carl," , " Sam," , " Richard,"];
// let message : string = " Would you like to join me for dinner. ";
// Guests_List.forEach(Guests_List => {
//     console.log(Guests_List + message);
// })


//  let unableToAttend= "John";
//  console.log(unableToAttend + " Can't make it to dinner.");
//  let newguests = " Carl";
//  Guests_List[Guests_List.indexOf(unableToAttend)] = newguests;

//  console.log("Great news, i've found a bigger dinner table!");
//  Guests_List.unshift(" Taha");
//  Guests_List.splice(Guests_List.length / 2, 0, " Charle's Darwin");
// Guests_List.push(" Ada Love");

// Guests_List.forEach(Guests_List=>{
//     console.log("Dear" + Guests_List + message);
// })

// console.log("Unfortunately, i can only invite two people over dinner.");
// while (Guests_List.length > 2){
//     let removed_guests = Guests_List.pop();
//     console.log('dear, ', removed_guests, " I can't invite you to dinner");

// }
// Guests_List.forEach(Guests_List => {
//     console.log("Dear,", Guests_List, " Your still invited to dinner")
// })
// Guests_List.splice(0, Guests_List.length);
// console.log(Guests_List);


//


// let result = 3 + 4 * 5;)
// result++
// console.log(result);

// let c = 10;
// c += 5;
// console.log(c);


// function halfFryEgg(){
//     let cocked= 1 + 1.5 + 2;
//     console.log(cocked);
// } halfFryEgg()

// function halfFryEgg(){
//     let cocked = 1 + 1.5 + 2;
//     return cocked;
// }
// let response: number = halfFryEgg();
// console.log(response);

// function halfFryEgg(egg: number, butter: number, salt: number): number{
//     return egg + butter + salt;
// }
// let response = halfFryEgg(1 , 1.5 , 2);
// console.log(response);

// function addNumber( a: number, b: number): number {
//     return a + b;
// }
// let response = addNumber(3,5);
// console.log(response);

// function calculateArea(width: number, height: number): number{
//     return width * height;
// }
// let response = calculateArea(100, 50);
// console.log(response);


// let places: string[] = ["Turkey", "Canada", "America", "Japan" ];
// console.log('countries i would like to visit:', places);


// console.log(places); //Original Order

// console.log([...places].sort()); // Alphabetical Order
// console.log(places); //Original Order

// console.log([...places].sort().reverse()); //Reverse Alphabetical Order
// console.log(places); //Original Order

// // // //

// places.reverse(); //Reversed Order
// console.log(places);

// places.sort(); //Alphabetical Order
// console.log(places);

// // // //

// let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
// console.log(`I am inviting ${guests.length} people to dinner.`);

// // // //

// let book: { title: string; author: string; yearPublished: number } = {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     yearPublished: 1937
// };
// console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

// // // //

// let alien_color = "blue";
// if (alien_color == "blue"){
//     console.log("you just earned 5 points!");
// } else if (alien_color =="green"){
//     console.log("you just earned 10 points!");
// } else if (alien_color == "yellow"){
//     console.log("You just earned 20 points");
// } else if (alien_color == "red"){
//     console.log("You just earned 50 points for shooting the alien");
// } else console.log("You lost!")

// }

// // // //

// let car = "subaru";
// console.log("Is car == 'subaru'?, i predict true ");
// console.log(car == 'subaru');

// console.log("Is car == 'toyota'?, i predict false");
// console.log(car == 'toyota');

// // // //

// let age = 170
// if (age < 2){
//     console.log("This person is a baby.");
// } else if (age < 13){
//     console.log("This person is a kid.");
// } else if (age < 20){
//     console.log("This person is a teenager.");
// } else if ( age < 65){
//     console.log("This person is an adult.");
// } else {
//     console.log( "This person is an elder.");
// }

// // // //

// let favourite_fruits: string[]= [];

// if (favourite_fruits.includes('mango')){
//     console.log("Would you like to eat mango?");
// } else if (favourite_fruits.includes('banana')){
//     console.log("Would you like to eat banana?");
// } else if (favourite_fruits.includes('apple')){
//     console.log("Would you like to eat a apple?");
// } else console.log("Unavailable");

// // // //

// let userName = "saad"
// if (userName == 'Taha'){
//     console.log(`Hello ${userName}`);
// } else if (userName == 'Sufyan'){
//     console.log(`Hello ${userName}`);
// } else if (userName == 'Admin'){
//     console.log(`Welcome back ${userName}`);
// } else console.log(`Hello ${userName}, how can we help you?`);

// let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

// usernames.forEach(username => {
//     if (username === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// });

// // // //


// let usernames: string[] = [];

// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     console.log('Welcome back'); //Greet users
//}
// Removing all usernames ensures the message "We need to find some users!" is printed.


// // // //

// let numbers: number[] = [1,2,3,4,5,6,7,8,9];
// numbers.forEach(number=>{
//     let suffix = "th";
//     if (number === 1){
//         suffix = "st"
//     } else if (number === 2){
//         suffix = "nd"
//     } else if (number === 3){
//         suffix = "rd"
//     }
//     console.log(`${number} ${suffix}`);
// });

// // // //

// let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

// pizzas.forEach(pizza => {
//     console.log(`I like ${pizza} pizza.`);
// });
// console.log("I really love pizza!");

// // // //

// let animals: string[] =["cat", "dog", "goat"];
// animals.forEach(animal =>{
//     console.log(`this ${animal} would make a great pets`);
// })
// console.log('i really like these animals');

// // // //

// function make_shirts(size: string, message: string){
//     console.log(`making a ${size} shirt with ${message} message`);
// }

// make_shirts("large", "we love pakistan");

// // // //

// function shirt(size: string = "large", message: string = "We love typescript"){
//     console.log(`making a ${size} shirt with this message ${message} printed on it`);
// }

// shirt()
// shirt("Medium")
// shirt("Small", "Dive into coding")

// // // //

// function describe_city(city: string, country: string = "Pakistan") {
//     console.log(`${city} is in ${country}.`);
// }

// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Tokyo", "Japan");
 
// // // //

// function city_country(city: string, country: string): string {
//     return `${city}, is in ${country}`;
// }

// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("Tokyo", "Japan"));
// console.log(city_country("Paris", "France"));

// // // //

// function make_album(artist: string, title: string, tracks?: number){

//     let album = {artist, title, tracks};

//     if (tracks){
//      album ['tracks']= tracks;
   
//     }
//     return album;
// }

// console.log(make_album('First Artist', '1st Album'));
// console.log(make_album('Second Artist', '2nd Album'));
// console.log(make_album('Third Artist', '3rd Album',10));

// // // //

// let magicians: string[] = ['Alice', 'Alex', 'Any'];

// function show_magicians(magicians: string[]){
//     magicians.forEach(magician=>{
//         console.log(magician,'magician');
//         });
// }

// show_magicians(magicians);

// function make_great(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great";
//     }
// }

// make_great(magicians); // Modifies the original array
// show_magicians(magicians);// Shows modified names
 
// //


// function make_sandwich(...items:string[]){
//     console.log(`making sandwiches with ${items.join(',')}`)
// }

// make_sandwich('cheese','beef','lettuce')
// make_sandwich('chicken','cheese','tommato')
// make_sandwich('ham','cheese','tommato')


// // //

//     function make_car(manufacturer: string, model: string, ...options: [string, any ][]): object {
//         let car = { manufacturer, model };
//         options.forEach(([key, value]) => car[key] = value);
//         return car;
//     }
    
//     console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
//     console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

// Day 16
// Qno.46

    // let laptop = {
    //     brand: 'Dell',
    //     model: 'Elite Series',
    //     year: 2024,
    //     describe: function (){
    //         console.log(`This laptop is ${this.year}, ${this.model}, ${this.brand}`)
    //     }
    // };
 
    // laptop.describe();

// Qno.47

    //   let laptops = [
    //     {make: "Dell", model: "xps 15", year: 2021},
    //     {make: "Apple", model: "MacBook Pro", year: 2020},
    //     {make: "HP", model: "Sepctre x360", year: 2021},
    //   ];
    //   let [laptop1, laptop2, laptop3] = laptops;
    //  console.log(laptop1);
    //  console.log(laptop2);
    //  console.log(laptop3);
 
//Qno.48

// let pricesSet1 = [1000, 1200, 1400];
// let pricesSet2 = [900, 1100, 1500];
// let combinedPrices = [...pricesSet1, ...pricesSet2].sort(( a , b ) => a - b);
// console.log(combinedPrices);

//Day-17
// Qno.49 

// Creating a function that accepts multiple hobbies.
// function logHobbies(...hobbies: string[]){
//   // Loops through each hobby in the array
//   hobbies.forEach((hobby) => {
//     console.log(`I love ${hobby}.`);
//   });
// }
// logHobbies("Exploring", "Coding", "Reading History");

// Qno.50

// let myIdealDay = `My ideal day would involve:
// 1. Walking up early, and perform fajar prayer.
// 2. Spending a few hours coding on a project.
// 3. Ending the day with a good workout.`;

// console.log(myIdealDay);

// Qno.51

// function calculateArea(width: number, height: number): number{
//   return width * height;
// }
// let calculateAreaArrow = (width: number, height: number): number =>
//   width * height;

// console.log(calculateAreaArrow(5,7));

// Day-18
// Qno.52

// let smartPhone = {
//     make: 'Google',
//     model: 'Pixel 3a xl',
//     specs: {
//         storage: '64GB',
//         screenSize: '6.2 inches',
//         battery: '12 hours'
//     },
// };

// console.log(smartPhone);

// Qno.53

// let devSkills = {
//     languages: ['JavaScript', 'TypeScript', 'Python'],
//     frameworks: ['React', 'Angular', 'Vue'],
//     tools: ['Git', 'Webpack', 'Docker']
// };

// let { languages, frameworks, tools } = devSkills;

// console.log(
//     `Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`
// );

// Qno.54

// function createObjectWithDynamicKey (key: string, value: string){
//     let dynamicObject = {}; 
//     dynamicObject[key] = value;
//     return dynamicObject;
// };

// let themePrefrence = createObjectWithDynamicKey('Theme', 'Dark');
// let languagePrefrence = createObjectWithDynamicKey('Language', 'English');
// let fontSizePrefrence = createObjectWithDynamicKey('FontSize', 'Medium');

// console.log(userPrefrence);
// console.log(languagePrefrence);
// console.log(fontSizePrefrence);

// Day-19
// Qno.55

// let numbers: number[] = [ 1, 2, 3, 4, 5 ];

// let doubledNumbers = numbers.map((number) => number * 2);

// console.log(doubledNumbers);

// Qno.56

// let mixedArray = [ 1, "Apple", 2, "Mango", true, 3, "Orange", false];

// let stringItems = mixedArray.filter ((item) => typeof item === "string");

// console.log(stringItems);

// Qno. 57

// let grades = [82, 97, 78, 91, 63, 54];

// let averageGrade = grades.reduce((total, grades) => total + grades,0) / grades.length;

// console.log(averageGrade);

// Day-20
// Qno.58

// function averageScore(...scores: number[]): number {
//     let total = scores.reduce((total, score) => total + score,0);
//     return total / scores.length;
// };

// console.log(averageScore(82, 97, 78, 91, 63, 54));

// Qno.59

// function makeAdder (valueToAdd: number): (number) => number {
//     return function (number: number): number {
//         return number + valueToAdd;
//     };
// }

// let addFive = (makeAdder(5));

// console.log(addFive(10));

// Qno.60

// let userProfile = (function() {
//     let name = 'Taha';
//     let age = 20;

//     return{
//         displayInfo: function(){
//             console.log(`Name: ${name}, Age: ${age}`)
//         },
//     };
// })();

// userProfile.displayInfo();

// Day-21
// Qno.61

// enum vehicleType {
//     Car,
//     Truck,
//     Motorcycle
// };

// console.log(vehicleType.Car)

// Qno.62

// interface Student {
//     Name: String,
//     Age: number,
//     Classes: string[]
// };

// let student1: Student = {
//     Name: "Taha",
//     Age: 20,
//     Classes: ["Maths", "Physics", "Chemistry"]
// };

// console.log(student1);

// Qno.63

// type Shape = {
//     kind: "Circle" | "Rectangle";
//     radius?: number;
//     width?: number;
//     height?: number;
// };

// let circle: Shape = {
//     kind: "Circle",
//     radius: 5,
// };

// let rectangle: Shape = {
//     kind: "Rectangle",
//     height: 10,
//     width: 20,
// };

// console.log(circle);
// console.log(rectangle);

// Day-21
// Qno.64

// function combinedStringAndNumber (text: string, number: number){
//     return text + number;
// }

// console.log(combinedStringAndNumber("Age: ", 20));

// Qno.65

// function remainder (number1: number, number2: number): number {
//     return number1 % number2
// };

// console.log(remainder(5, 2));

// Qno.66

// function checkBothTrue (val1: boolean, val2: boolean): boolean {
//     return val1 && val2;
// }

// console.log(checkBothTrue(true, true));

// Day-22
// Qno.67

// function addNumberAndString(number1: number, numberString: string): number {
//     return number1 + Number(numberString);
// }

// console.log(addNumberAndString(15, "5"));

// Qno.68

// function multiplyDecimals(num1: number, num2: number): number {
//     return Math.round(num1 * num2 * 100) / 100
// };

// console.log(multiplyDecimals( 0.1, 0.2));

// Qno.69

// function divideAndRemainder (dividend: number, divisor: number):

// { quotient: number; remainder: number } {

//     let quotient = Math.floor( dividend / divisor );
//     let remainder = dividend % divisor;

//     return { quotient, remainder };
// }

// console.log(divideAndRemainder(10, 3));

// Day-24
// Qno.70

// function printNumbersWithLet() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }

// printNumbersWithLet();

// Qno.71

// let age = 25;
// age = 26;
// console.log(age);

// const name = "Alice";
// try {
//     name = "Bob"; // This line will cause error
// } catch (error) {
//     console.log("Cannot assign to 'name' because it is a constant.")
// };

// Qno.72

// {
//     let blockLet = "Visible inside the block";
//     const blockConst = "Also visible inside the block";
//     console.log(blockLet);
//     console.log(blockConst);
// }

// try {
//     console.log(blockLet); //This line will cause error.
// } catch (error) {
//     console.log("Can not access `blockLet` outside the block scope.");
// }

// try {
//     console.log(blockConst); //This line will cause error.
// } catch (error) {
//     console.log("Can not access `blockConst` outside the block scope.");
// }

// Day-25
// Qno.73

// function updateVariable() {
//     let number = 10;
//     console.log("Initial Value:", number);

//     number = 20;
//     console.log("Updated value:", number)
// }

// updateVariable();

// Qno.74

// function swapValues() {
//     let a = 5;
//     let b = 10;

//     console.log("Before Swap: a =", a, "b =", b);

//     let temp = a;
//     a = b;
//     b = temp;

//     console.log("After Swap: a =", a, "b =", b);
// };

// swapValues();

// Qno.75

// function useCompoundOperators() {
//     let x = 4;
//     console.log("Initial Value of x:", x);

//     x += 2;
//     console.log("After Addition:", x);

//     x -= 1;
//     console.log("After Subtraction:", x);

//     x *= 3;
//     console.log("After Multiplication:", x);

//     x/= 2;
//     console.log("After Division:", x);
// };

// useCompoundOperators();

// Day-26
// Qno.76

// function addNumbers(number1: number, number2: number): number {
//     return number1 + number2
// };

// console.log(addNumbers(5, 7));

// Qno.77

// function greetUser(name: string = "anonymous") {
//     console.log(`Hello, ${name}`)
// };

// greetUser("Taha");
// greetUser();

// Qno.78

// function squareDeclaration(number: number): number {
//     return number * number
// };

// const squareExpression = function (number: number): number {
//     return number * number
// };

// console.log(squareDeclaration(4));
// console.log(squareExpression(4));

// Day-27
// Qno.79

// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
// };

// console.log(car.model);

// Qno.80

// let car1 = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
// };

// car1.color = "Blue";
// car1.year = 2021;

// console.log(car1);

// Qno.81

// function logObjectProperties(obj: object) {
//     for (let property in obj) {
//         console.log(`${property}: ${obj[property]}`)
//     };
// };

// logObjectProperties({
//     make: "Toyota",
//     model: "Corolla",
//     year: 2022,
//     color: "Blue",
// });

// Day-28
// Qno.82

// function stringLength (str: string): number {
//     return str.length;
// }

// console.log(stringLength("Taha"));

// Qno.83

// function convertToUperCaseThenLowerCase(text: string){
//     let upperCase = text.toUpperCase();
//     let lowerCase = text.toLowerCase();

//     console.log("Uppercase:", upperCase, "Lowercase:", lowerCase);
    
// }

// convertToUperCaseThenLowerCase("Hello World");

// Qno.84

// function replaceJavaScriptWithTypeScript(sentence: string): string {
//     return sentence.replace(/JavaScript/g, "TypeScript");
// }

// console.log(
//     replaceJavaScriptWithTypeScript(
//       "I love JavaScript and JavaScript is awesome!"
//     )
//   );

// Day-29
// Qno.85

// function findCodePosition(str: string): number {
//     return str.indexOf("code")
// }

// console.log(findCodePosition("Learn to code with JavaScript"));

// Qno.86

// function  checks(str: string): boolean {
 
//     return str.includes("JavaScript");
// }

// console.log(checks("I love coding in JavaScript."));

// Qno.87

// function extractFirstTenCharacs(str: string): string {
    
//     return str.substring(0, 10); 
    
// }

// console.log(extractFirstTenCharacs("Hello, JavaScript world!"));


// Day-30
// Qno.88

// function stringIntoNumber(str: string): number {
//     return Number(str);
// }

// console.log(stringIntoNumber("123"));

// Qno.89

// function roundToTwoDecimalPlaces(num: number): number {
//     return Number(num.toFixed(2))
// }

// console.log(roundToTwoDecimalPlaces(3.14159));

// Qno.90

// function generateRandomNumber(): number {
//     return Math.floor(Math.random()*10) + 1
// }

// console.log(generateRandomNumber());

// Day-31
// Qno.91

// let fav_Fruits = ["Mango", "Pomegranate", "Watermellon"];
// console.log(fav_Fruits);

// fav_Fruits.push("Apple");
// console.log(fav_Fruits);

// Qno.92

// This is ok but it can only work for one array. 
// For another array you've to create another function. 

// let cars = ["Porshe", "BMW", "Mercedes"];

// function removeLastElement([]) {
//     return cars.pop()
// }

// console.log(removeLastElement(cars));
// console.log(cars);

// The generic function removeLastElement can be used on arrays of any type. 
// The use of the generic type parameter <T> makes the function flexible and type-safe for different array types

// Qno. 92

// function removeLastElement<T>(arr: T[]): T | undefined {
//     return arr. pop();
// }

// let fruits = ["Mango", "Pomogranate", "Cherry"];
// console.log(removeLastElement(fruits));
// console.log(fruits);

// let cars = ["Toyota", "Nissan", "Cheverolet"];
// console.log(removeLastElement(cars));
// console.log(cars);

// let numbers = [1, 2, 3];
// console.log(removeLastElement(numbers));
// console.log(numbers);

// Qno.93

// let fruits = ["Apple", "Banana", "Cherry"];

// let replaceIndex = fruits.indexOf("Banana");

// fruits[replaceIndex] = "Mango"

// console.log(fruits);

// Day-32
// Qno.94

// let Words = ["Mobile", "Computer", "Laptop"]

// let length = Words.map((word) => word.length);

// console.log(length);

// Qno.95

// const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// function filterGreaterThan10 (numbers: number[]): number[] {
//     return numbers.filter((numbers) => numbers > 10)
// }

// console.log(filterGreaterThan10(numbers));

// Qno.96

// let nums = [10, 20, 30, 40, 50];

// let accumulate = nums.reduce((accumulator, current) => accumulator + current, 0)

// console.log(accumulate);

// Day-33
// Qno.97

// function getCurrentDateFormatted(): string {
//     const now = new Date();
//     const day = String(now.getDate()).padStart(2, "0");
//     const month = String(now.getMonth() + 1).padStart(2, "0");
//     const year = now.getFullYear();
//     return `${day}-${month}-${year}`
// }

// console.log(getCurrentDateFormatted());

// Qno.98

// function daysUntilNewYear(): number {
//     const today = new Date();
//     const newYear = new Date(today.getFullYear() + 1, 0, 1);
//     const diff = newYear.getTime() - today.getTime();
//     const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
//     return days;
// }


// console.log(daysUntilNewYear() + " Days until New Year.");

// Qno.99

// function getNextBirthday(month: number, day: number): Date {
//     const today = new Date();
//     let year = today.getFullYear();
//     const birthday = new Date(year, month - 1, day);
//     if (birthday < today) {
//         birthday.setFullYear(year + 1)
//     }
//     return birthday;
// }

// const nextBirthday = getNextBirthday(4, 15);
// console.log("Next birthday on:", nextBirthday.toLocaleDateString());

// Day-34
// Qno.100

// const squareRoot: number = Math.sqrt(144);

// console.log(`The square root of 144 is ${squareRoot}.`);

// Qno.101

// const randomInteger: number = Math.floor(Math.random() * 10 + 1);

// console.log(randomInteger);

// Qno.102

// const difference: number = Math.abs(-5 - 5);

// console.log(difference);

// Day-35
// Qno.103

// function getRandomBoolen(): boolean {
//     return Math.random() > 0.5;
// }

// console.log(getRandomBoolen());

// Qno.104

// function getRandomHexColor(): string {
//     const color = 
//     "#" +
//     Math.floor(Math.random() * 0xffffff) //Will need to understand in dept.
//     .toString(16)
//     .padStart(6, "0");
//     return color;
// }

// console.log(getRandomHexColor());

// Qno.105

// function diceRoll(): number {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     return roll
// }

// console.log(diceRoll());

// Day-36
// Qno.106

// function isLeapYear(year: number): boolean {
//     return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
// }

// console.log(isLeapYear(2016));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(2024));


// qno.107

// let number: number;
// number = 12;

// if (number % 2 === 0 && number % 3 === 0) {
//     console.log(true);

// } else {
//     console.log(false);

// }

// Qno.108

// function areStringEqualIgnoreCase(str1: string, str2: string): boolean {
//     return str1.toLowerCase() === str2.toLowerCase();
// }

// console.log(areStringEqualIgnoreCase("hello", "HELLO"));
// console.log(areStringEqualIgnoreCase("Hello", "World"));

// Day-37
// Qno.109

// let currentTime = new Date();

// if (currentTime.getHours() < 12) {
//     console.log("Good Morning");
    
// }

// Qno.110

// function gradesBasedOnScore(score: number) {
//     if(score >= 85) {
//         console.log("Grade: A");
        
//     } else if(score >= 70 ) {
//         console.log("Grade: B");
        
//     } else if(score >= 60) {
//         console.log("Grade: C");
        
//     } else if(score >= 45) {
//         console.log("Grade: D");
        
//     } else {
//         console.log("Grade: F");
        
//     }
    
// }

// gradesBasedOnScore(90);

// Qno.111

// let age = 90;

// if(age < 14) {
//     console.log("This person is a child.");
    
// } else if(age === 14 && age < 18) {
//     console.log("This person is an teenager.");
    
// } else {
//     console.log("this person is an adult.");
    
// }

// Day-38
// Qno.112,113,114

// const countries = new Map<string, string>()

// countries.set("USA", "Washington, D.C");
// countries.set("France", "Paris");
// countries.set("Japan", "Tokyo");
// countries.set("Pakistan", "Islamabad");
// countries.set("Germany", "Berlin");
// countries.set("Italy", "Rome");

// console.log(countries);

// const CapitalOfFrance = countries.get("France");
// console.log(`The capital of France is ${CapitalOfFrance}`);

// const hasItaly = countries.has("Italy");
// console.log(`Is Italy in the map? ${hasItaly}`);

// countries.delete("Germany");
// console.log(countries);

// const numberOfCountries = countries.size;
// console.log(`Number of countries in the map: ${numberOfCountries}`);

// countries.forEach((capital, country) => {
//     console.log(`${country}: ${capital}`);
// })

// Day-39
// Qno.115

// function logDayOfWeek(dayNumber: number): void {
//     switch(dayNumber){
//         case 1:
//             console.log("Sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("Friday");
//             break;
//         case 7:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("Invalid day number");
//             break;
//     }
// }

// logDayOfWeek(11);

// Qno.116

// function logSeason(month: number): void {
//     switch(month) {
//         case 12:
//         case 1:
//         case 2:
//             console.log("Winter");
//             break;
//         case 3:
//         case 4:
//         case 5:
//             console.log("Spring");
//             break;
//         case 6:
//         case 7:
//         case 8:
//             console.log("Summer");
//             break;
//         case 9:
//         case 10:
//         case 11:
//             console.log("Fall");
//             break;
//         default:
//             console.log("Invalid month");
//             break;
//     }
// }

// logSeason(13)

// Qno.117

// function evaluateGrade(grade: string): void {
//     switch(grade) {
//         case "A":
//             console.log("Excellent");
//             break;
//         case "B":
//             console.log("Good");
//             break;
//         case "C":
//             console.log("Fair");
//             break;
//         case "D":
//             console.log("Poor");
//             break;
//         case "F":
//             console.log("Fail");
//             break;
//         default:
//             console.log("Invalid grade");
//             break;
//     }
// }

// evaluateGrade("G");

// Day-40
// Qno.118

// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Qno.119

// let count: number = 0;

// while (count < 5) {
//     console.log("Hello, World!");
//     count++;
// }

// Qno.120

// let favouriteMovies: string[] = [
//     "Inception",
//     "The Matrix",
//     "Interstellar",
//     "The Prestige"
// ];

// for(let movie of favouriteMovies) {
//     console.log(movie);
// }

// Day-41
// Qno.121

// for (let i = 1; i <= 10; i++) {
//     if(i === 5) {
//         continue;
//     }
//     console.log(i);
    
// }

// Qno.122

// let counter: number = 10;

// while(counter > 0) {
//     if(counter === 5) {
//         break;
//     }
//     console.log(counter);
//     counter--;
// }


// Qno.123


// function logUntilVowel(str: string): void {
//     const vowels = "aeiouAEIOU";
//     for(const char of str) {
//         if(vowels.includes(char)) {
//             console.log(`First vowel found: ${char}`);
//             break;
//         }
//         console.log(char);
//     }
// }

// logUntilVowel("TSGAT");

// Day-42
// Qno.124

// const person = {
//     name: "Taha",
//     getName: function () {
//         return this.name;
//     },
// };

// console.log(person.getName());

// Qno.125

// const rectangle = {
//     length: 4,
//     width: 5,
//     calculateArea: function() {
//         return this.length * this.width;
//     },
// };

// console.log(rectangle.calculateArea());

// Qno.126

// const myObject = {
//     property: "Value",
//     outerMethod: function () {
//         console.log(this.property);
        
//         const innerMethod = () => {
//             console.log(this.property);
//         };

//         innerMethod()
//     },
// };

// myObject.outerMethod();

// Day-43
// Qno.127

// const traditionalFunction = function(a, b) {
//     return a + b;
// };


// const arrowFunction = (a, b) => a + b;

// console.log(traditionalFunction(5, 5));
// console.log(arrowFunction(5, 5));

// Qno.128

// const multiplyParameters = (...numbers: number[]) => 
//     numbers.reduce((current, accumulator) => current * accumulator, 1);

// console.log(multiplyParameters(2, 3, 4));

// Qno.129

// const traditionalVsArrow = {
//     value: "myVal",
    
//     traditionalFunction: function() {
//         console.log("Traditional func:", this.value);
//     },

//     arrowFunction: () => {
//         console.log("Arrow func:", this.value);
//     },
// }

// traditionalVsArrow.traditionalFunction();
// traditionalVsArrow.arrowFunction();

// Day-44
// Qno.130

// import {add} from "./export.js"

// console.log(add(2, 3));

// Qno.131

// import {Person} from "./export.js"

// const person = new Person("Taha");
// person.greet();

// Qno.132

// import { utilOne, utilTwo } from "./export.js";

// import Calculator from "./export.js";

// Day-45
// Qno.133

// const person = {
//     name: "Alice",
//     age: 30,
//     city: "Wonderland",
// };

// const jsonstring = JSON.stringify(person);
// console.log(jsonstring);

// Qno.134

// const jsonString = '{"Name": "Alice", "Age": 25, "City": "Wonderland"}';

// const person = JSON.parse(jsonString)

// console.log(person);

// Qno.135

// const person1 = {
//     name: "Alice",
//     age: 30,
//     city: "Wonderland",
// };

// const jsonString = JSON.stringify(person1, null, 2);
// console.log(jsonString);

// Day-46
// Qno.136

// for (let i = 1; i <= 5; i++) {
//     console.log(`Iteration ${i}, i value: i`);
// }

// Qno.137

// try {
//     throw new Error("Something went wrong");
// } catch(error) {
//     console.log(error.message);
// }

// Qno.138

// Sample code snippet for setting a breakpoint
// console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
// console.log(
//   "This line has a breakpoint set on it in the browser's developer tools"
// );
// console.log("After breakpoint");
// To use breakpoints, open this code in your browser,
// open the developer tools, navigate to the Source tab,
// find this script, 
//and click on the line number where you want to pause execution.
//When you reload or run your page, execution will pause at the breakpoint.

// Day-47
// Qno.139

// Reserved word: let - used to declare a block-scoped local variable.
// let count = 5;

// Reserved word: if - used to execute a block of code if a specified condition is true
// if(count > 0) {
//     console.log("Count is greater than 0.");
// }

// Reserved word: return - used to exit a function and return a value from that function
// function add(a, b) {
//     return a + b
// }

// Qno.140

// Attempting to use a reserved word as a variable name
//let if = 5; // This line would cause a syntax error

// console.log(
// "Using a reserved word as a variable name causes a syntax error in JavaScript."
//   );

// Qno.141

// async function fetchData() {
//     // Assuming fetchSomething returns a Promise
//     const data = await fetchSomething();
//     console.log(data);
//       // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
// }

// console.log(
//     "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
//   );


// Day-48
// Qno.142

// let promise =  new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello, World!");
//         console.log("Hello, World!");
//     }, 2000)
// });

// Qno.143

// function moneyReturn(moneyReturned: boolean): Promise<void> {
//     return new Promise((resolve, reject) => {
//         if(moneyReturned === true){
//             resolve()
//         } else {
//             reject()
//         }
//     })
// }

// moneyReturn(false)
// .then(() => console.log("Money has been returned!"))
// .catch(() => console.error("Money not returned."));

// const conditionalPromise = new Promise<string>((resolve, reject) => {
//     const success = Math.random() > 0.5;
//     if(success) {
//         resolve("Success!!");
//     } else {
//         reject(new Error("Failure."))
//     }
// })

// conditionalPromise
// .then((result) => console.log(result))
// .catch((error) => console.log(error.message));

// Qno.144

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise<string>((resolve) => {
//     setTimeout(resolve, 100, "Foo")
// });

// Promise.all([promise1,promise2,promise3,promise]).then((values) => {
//     console.log(values);
// })

// Day-49
// Qno.145

// let Email = "abc@gmail.com";
// let Password = 1234

// function userLogin(email: string, password: string | number, callback): void {
//     if (email === Email && password === Password) {
//         callback(email)
//     } else {
//         console.log("Invalid Email or Password.");
//     }
// }

// userLogin("abc@gmail.com", 1234, ((email) =>{
//     console.log(email);
// }))

// Qno.146

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredNumbers: number[] = numbers.filter((number) => number > 5)

// console.log(filteredNumbers);

// Qno.147

// function fetchData(callback: (error: Error | null, data?: string) => void): void {
//     const error =  new Error("Failed to fetch data.");
//     const data = "Some data";

//     if(Math.random() > 0.5) {
//         callback(null, data);
//     } else {
//         callback(error);
//     }
// }

// fetchData((error, data) => {
//     if(error) {
//         console.error(error.message);
//     } else {
//         console.log(data);
//     }
// });

// Day-50
// Qno.148

// setTimeout(() => {
//     console.log("Set Timeout");
// }, 2000)

// Qno.149

// console.log("Start");

// setTimeout(() => {
//     console.log("Callbacl executed"); // This gets queued to be executed by the event loop
// }, 0)

// console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.

// Qno.150

// Synchronous example
// console.log("Before synchronous operation");

// for(let i = 0; i <1e9; i++) {} // A long loop

// console.log("After synchoronous operation");

// // Asynchronous example
// console.log("Before asynchronous operation");

// setTimeout(() => {
//     console.log("Asynchronous operation completed");
// }, 1000);

// console.log("After asynchronous operation setup");







