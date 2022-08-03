// Declaring a variable
// keyword identifier/variableName = value

// this contains all the datatypes
var firstName = "Haleem";
let lastName = "Yedu";
let age = 17;
let isMarried = true;
let children = ["Kojo", "Abena", "Ekua"];
let other = {
    favoriteColor: "Gold",
    favoriteSport: "Soccer",
    favoriteFruit: "Apple",
};
const fullName = firstName + " " + lastName; // concatenation
const myself = `My name is ${firstName} ${lastName}.`; // String interpolation
console.log(myself);

// STRINGS
let sentence = "This is a story about Haleem Yedu in Blind Spot";// length method
console.log(sentence.length);
console.log(sentence.split("Haleem"));
console.log(sentence.replace("Haleem", "Yedu"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("Spot"));
console.log(sentence.includes(""));

//ARRAY
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
console.log(days.length);
days.push("Friday");
console.log(days);
// days.push("Friday"); //push add up the value to end
// console.log(days);
console.log(days.pop()); //pop takes out the immediate value
days.unshift("Sunday"); // unshift add value to the beginning 
console.log(days);
console.log(days.shift());
console.log(days.indexOf("Friday"));
// console.log(days[2]);
console.log(days[5]); // Retrieving data
// days[0] = "Sunday"; // change data in the array
// console.log(days);
days[5] = "Sunday"; // change data in the array
console.log(days);

// OBJECT
let person = {
    firstName: "Haleem",
    lastName: "Yedu",
    age: 17,
};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

