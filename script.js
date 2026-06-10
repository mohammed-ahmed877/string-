// Easy
//1 Create a string "Hello World" and display it in the console.
 let gretting = "Hello World";
 console.log(gretting);
 
//2 Find the length of the string "JavaScript".
let btn = "java script";
console.log(btn.length);


// 3 Convert "hello" to uppercase.
let hee = "hello";
console.log(hee.toUpperCase());


// 4 Convert "WORLD" to lowercase.

let sun = "WORLD"
console.log(sun.toLowerCase());


// 5 Get the first character of "Pakistan".
let country = "paklistan";
console.log(country.charAt(0));



// 6 Get the last character of "Quetta".
let city = "Quetta";
console.log(city.charAt(city.length - 1));



// Medium

// 7  Check if the string "frontend developer" contains "developer".
let job = "frontend developer";
if (job.includes("developer")) {

    console.log("The string contains 'developer'.");

} else {

    console.log("The string does not contain 'developer'.");

}
// 8 Replace "I like Java" with "I like JavaScript".
let me ="i like java ";
let newString = me.replace("java ", "java script");
console.log(newString);


// 9 Remove extra spaces from " Ahmed " using a string method.
let name ="       ahmed            ";
console.log(name.trim());


// 10 Split "apple,banana,mango" into an array.
let fruit ="apple,banana,mango";
let arr = fruit.split(",");
console.log(arr);


// 11 Join ["Ali", "Ahmed", "Sara"] into a single string separated by commas.
let names = ["Ali", "Ahmed", "Sara"];
let join = names.join(",");
console.log(join);
  
// 12Count how many times the letter "a" appears in "JavaScript".
let lat= "java script";
let str= lat.split("a").length-1;
console.log(str);


//Practice Challenge
// Reverse the string "hello" and output "olleh".
let word= "hello";
 console.log(word.split("").reverse().join(""));
 
// Check if "madam" is a palindrome.
// Capitalize the first letter of "javascript" and make it "Javascript".
// Take a user's name from an input field and display:
// Original name
// Length of name
// Uppercase name
// Lowercase name