// ***** Do not edit the code below *****
// Please refer to this array to solve problems 1 and 2
let numbers = [40, 68, 14, 90, 49];
// ***** Do not edit the code above *****

////////// PROBLEM 1 //////////

/* 
    Use forEach method to loop though all the elements in the 'numbers' array above, and divide each element (number) by 2. Print the result in console.
*/
/**
 * orEach(): This method executes a provided function once for each array element. In simple terms, it allows you to loop over each item in an array.

numbers.forEach(): This is calling the forEach() method on the numbers array.

(number => {...}): This is a "callback function" that gets executed for each element in the numbers array. The current element is passed into the callback as number.

console.log(number / 2): Inside of the callback function, we are dividing the current number by 2 (number / 2), and then immediately logging the result to the console with console.log(). This operation happens for each number in the array.

So, to summarize: The code is using forEach to loop through each number in the numbers array, dividing the current number by 2, and then logging the result to the console.
 */
// CODE HERE
numbers.forEach(number => {
  console.log(number / 2);
});
////////// PROBLEM 2 //////////

/* 
    Use a built-in Javascript method that will loop through the 'numbers' array above, divide each number by 2, and then return a NEW ARRAY.

    HINT: .forEach() vs .map() ---- which one does return a new array?

    NOTE: make sure you save the code in a variable, then console.log the variable to see the new array.
*/
/**
 * first there needs to be a new variable created in order to log the numbers to that variable
 * second map() is the correct form. The map() method creates a new array with the results of calling a provided function on every element in the calling array. This process does not mutate the original array. It is used when you want to transform all elements in an array.
 * third we still had to create a loop that would go through each number and divide them by 2
 * then use console.log and put array as the new variable.
 */
// CODE HERE
let array = numbers.map(number => number / 2);
console.log(array);

////////// PROBLEM 3 //////////

// ***** Do not edit the code below *****
let cities = [
  "Tokyo",
  "Jakarta",
  "Miami",
  "Taipei",
  "Honolulu",
  "Vienna",
  "Istanbul",
  "Mumbai",
  "Bangkok",
  "Shanghai",
  "Hanoi",
];
// ***** Do not edit the code above *****

/* 
    Use the filter method on 'cities' array to return a new array of city/cities that end(s) with letter "i."

    Make sure you save the code in a variable. Then, console.log the variable to see the new array.
*/

// CODE HERE
/**
 * .filter() is a method that creates a new array from an existing one with all elements that pass a particular test. filter method creates a new array with all elements that pass the test implemented by the provided function. It is typically used when you want to select a subset of an array based on some criteria.

The test, or predicate, is the function that we pass as an argument to .filter(). This function is invoked once for each element in the 'cities' array. If it returns true, the current element is included in the new array. If it returns false, it's not.

In this case, we're passing an arrow function city => city.endsWith("i") as the argument to .filter(). This function checks whether the current city name ends with the letter "i". The .endsWith() method returns true if the string it's called on ends with the specified string, and false otherwise.

So, our .filter() call builds a new array that includes all cities that end with "i".

Finally, console.log(filteredCities); prints the new array of filtered city names to the console.
 */

let differentCities = cities.filter(city => city.endsWith("i"));
console.log(differentCities);

////////// PROBLEM 4 //////////

// ***** Do not edit the code below *****
let fruits = [
  {
    name: "banana",
    color: "yellow",
    price: 5,
  },
  {
    name: "orange",
    color: "orange",
    price: 4,
  },
  {
    name: "grape",
    color: "green",
    price: 5,
  },
  {
    name: "apple",
    color: "red",
    price: 3,
  },
];
// ***** Do not edit the code above *****

/* 
    Using forEach method, identify each element of the 'fruits' array above if it's an apple or orange by its color. If the color is red, print "The fruit with index [THE ELEMENT'S INDEX] is an apple." If the color is orange, print "The fruit with index [THE ELEMENT INDEX] is an orange." If the color is not red or apple, print "The fruit with index [THE ELEMENT'S INDEX] is neither apple or orange."

    Note: do a google search on how to find an element's index of an array in Javascript. There is a built-in Javascript method that would help you find an index of an element in an array.
*/
/**
 * fruits.forEach((fruit, index) => {...}); uses the forEach function to loop over each item in the 'fruits' array. For each item, it runs the function provided as the argument. This function receives the current item (fruit) and its index (index) as parameters.

let output = The fruit with index ${index} is ; initiates a new variable output, to which it assigns a string value that includes the index of the current fruit in the array.

The if...else if...else block checks the color of each fruit:

If the color is 'red', it appends "an apple." to the output string.
If the color is 'orange', it appends "an orange." to the output string.
If the color is neither 'red' nor 'orange', it appends "neither an apple nor an orange." to the output string.
console.log(output); prints the output string to the console.

Therefore, this script prints a message for each fruit in the 'fruits' array that describes the fruit's index in the array and its color.
 */
// CODE HERE
fruits.forEach((fruit, index) => {
  let output = `The fruit with index ${index} is `;
  if (fruit.color === 'red') {
    output += "an apple.";
  } else if (fruit.color === 'orange') {
    output += "an orange.";
  } else {
    output += "neither an apple nor an orange.";
  }
  console.log(output);
});
/* 
    Run the code in node to see the result. Then, copy and paste the result below.

    NOTE: the result should look like this:
    The fruit with index 0 is neither apple or orange
    The fruit with index 1 is an orange
    The fruit with index 2 is neither apple or orange
    The fruit with index 3 is an apple  
*/

// COPY AND PASTE THE RESULT FROM YOUR CONSOLE (NODE CONSOLE IS YOUR TERMINAL) HERE (AS A MULTI LINES COMMENT)



////////// PROBLEM 5 //////////

// ***** Do not edit the code below *****
let foods = [
  {
    name: "chow mein",
    price: 8,
    tags: ["noodle"],
  },
  {
    name: "chicken katsu rice",
    price: 14,
    tags: ["rice", "meat"],
  },
  {
    name: "beef pho",
    price: 10,
    tags: ["noodle", "meat", "soup"],
  },
  {
    name: "pancake",
    price: 7,
    tags: ["breakfast", "carbs"],
  },
  {
    name: "chicken curry rice",
    price: 12,
    tags: ["meat", "rice"],
  },
  {
    name: "kalua pork rice",
    price: 10,
    tags: ["meat", "rice"],
  },
];
// ***** Do not edit the code above *****

/* 
    Count the total price of foods that have "rice" tag. Please type the result too.
*/

// CODE HERE


// THE TOTAL

