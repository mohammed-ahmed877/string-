// // Easy
// //1 Create a string "Hello World" and display it in the console.
//  let gretting = "Hello World";
//  console.log(gretting);
 
// //2 Find the length of the string "JavaScript".
// let btn = "java script";
// console.log(btn.length);


// // 3 Convert "hello" to uppercase.
// let hee = "hello";
// console.log(hee.toUpperCase());


// // 4 Convert "WORLD" to lowercase.

// let sun = "WORLD"
// console.log(sun.toLowerCase());


// // 5 Get the first character of "Pakistan".
// let country = "paklistan";
// console.log(country.charAt(0));



// // 6 Get the last character of "Quetta".
// let city = "Quetta";
// console.log(city.charAt(city.length - 1));



// // Medium

// // 7  Check if the string "frontend developer" contains "developer".
// let job = "frontend developer";
// if (job.includes("developer")) {

//     console.log("The string contains 'developer'.");

// } else {

//     console.log("The string does not contain 'developer'.");

// }
// // 8 Replace "I like Java" with "I like JavaScript".
// let me ="i like java ";
// let newString = me.replace("java ", "java script");
// console.log(newString);


// // 9 Remove extra spaces from " Ahmed " using a string method.
// let name ="       ahmed            ";
// console.log(name.trim());


// // 10 Split "apple,banana,mango" into an array.
// let fruit ="apple,banana,mango";
// let arr = fruit.split(",");
// console.log(arr);


// // 11 Join ["Ali", "Ahmed", "Sara"] into a single string separated by commas.
// let names = ["Ali", "Ahmed", "Sara"];
// let join = names.join(",");
// console.log(join);
  
// // 12Count how many times the letter "a" appears in "JavaScript".
// let lat= "java script";
// let str= lat.split("a").length-1;
// console.log(str);


// //Practice Challenge
// // Reverse the string "hello" and output "olleh".
// let word= "hello";
//  console.log(word.split("").reverse().join(""));
 
// // Check if "madam" is a palindrome.
// // Capitalize the first letter of "javascript" and make it "Javascript".
// // Take a user's name from an input field and display:
// // Original name
// // Length of name
// // Uppercase name
// // Lowercase name











// JavaScript String Problems

// 1. Lowercase Name
// Write a function that takes a name as input and returns it all in lowercase.
// 2. Uppercase Shouting
// Convert a given string into uppercase to simulate shouting. Example: "hello" →
// "HELLO".
// 3. Count Characters
// Given a string, return the number of characters in it.
// 4. First Character
// Write a function that returns the first character of a string using charAt().
// 5. Last Character
// Return the last character of any string using .charAt() and .length.
// 6. Find Position of Word
// Given a sentence, find the position (index) of the word "apple" using indexOf.
// 7. Extract First Word
// Use slice() and indexOf() to extract the first word from a sentence.
// 8. Replace a Word
// Replace the word "bad" with "good" in a given sentence using replace().
// 9. Replace All Vowels
// Replace all occurrences of vowels in a string with "*" using replaceAll().
// 10. Split Sentence into Words
// Convert a sentence into an array of words using split(" ").
// 11. Capitalize First Letter
// Capitalize only the first letter of a given word.
// 12. Find Second Word
// Write a function that returns the second word of a sentence using split().

// 13. Censor a Word
// Replace all instances of a bad word like "dumb" in a string with "****".
// 14. Count Words in Sentence
// Use .split() and .length to count how many words are in a sentence.
// 15. Check if Word Exists
// Return true if a specific word (e.g., "cat") exists in a string using indexOf.
// 16. Extract Domain from Email
// Given an email address, extract and return the domain name (everything after @).
// 17. Reverse Words in Sentence
// Given a sentence, split it into words, reverse the array, and join it back into a string.
// 18. Check Palindrome (Basic)
// Write a function that checks if a word is the same when reversed (ignore case).
// 19. Count Vowels
// Count how many vowels are in a given string using a loop and charAt.
// 20. Alternate Case Converter
// Convert a string to alternating case (e.g., "hello" → "HeLlO").
// a.
// 21. Title Casing a Sentence
// Convert a full sentence so that the first letter of each word is capitalized.
// 22. Remove Duplicate Words
// Given a sentence, remove any repeated words (case-insensitive).
// 23. Mask Email Address
// Convert an email like john.doe@example.com to j***@example.com.
// 24. Find Most Frequent Word
// Return the word that appears most frequently in a paragraph.
// 25. Abbreviate a Full Name
// Given John Ronald Reuel Tolkien, return J.R.R.T. using split, charAt, and
// toUpperCase.
// 26. Check if Anagram
// Write a function that checks whether two strings are anagrams (same letters, different

// order).
// 27. Find All Word Positions
// Return all indices where a specific word occurs in a string (case-insensitive).
// 28. Reverse Each Word
// Given a sentence, reverse each word individually but keep them in the same order.
// 29. Smart Word Wrap
// Break a sentence into lines of a given character limit, wrapping on spaces (not in the
// middle of a word).
// 30. Find Longest Word
// Find and return the longest word in a sentence.
// 31. Censor Multiple Bad Words
// Given a list of bad words, replace each with "***" in a paragraph using replaceAll
// and a loop.
// 32. Detect Repeated Characters
// Return all characters that appear more than once in a string.
// 33. Compress Repeating Characters
// Convert "aaabbbcc" to "a3b3c2".
// 34. Check Password Strength
// Create a function that checks if a password string meets criteria (min 8 chars, contains
// number, uppercase, lowercase).
// 35. Extract Hashtags
// From a social media post, extract all words starting with #.
// 36. CamelCase Converter
// Convert a sentence like "make this camel case" to "makeThisCamelCase".
// 37. Parse CSV Line
// Given a CSV string like "name,age,email", return an array of values.
// 38. Custom Split Without Using split()
// Write a function that splits a string by a space character without using .split().

// 39. Format Phone Number
// Given a 10-digit string like "1234567890", return it in the format (123) 456-7890.
// 40. Detect Palindromes in Sentence
// Return all palindromic words in a sentence (e.g., "madam is at civic center" →
// ["madam", "civic"]).