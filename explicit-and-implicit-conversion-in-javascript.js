/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/
//Part 1. Debuggung Challenge
//covert the string "5" to Integer 5 using Number() 
let num = "5"; 
let result = Number(num) - 2;
console.log("The result is: " + result);


//convert the string "false" to Boolean() result true.
let isValid = "false";
console.log("Before conversion the output is a String " + isValid); 
if (Boolean(isValid)) {
    console.log("After type converstion is Boolean value " + Boolean(isValid));
    console.log("This is Valid");
}  

// convert the number 5 to String() "5"
let age = "25";
let addMore = 5;
let totalAge = age + String(addMore);
console.log("Total Age: " + totalAge);


//Part 2 example of implicit type conversion.
// Arithmetic operation of undefined with number, boolean or null gives NaN

let impResult;
impResult = 4 + undefined;
console.log(impResult);  // NaN

impResult = 4 - undefined;
console.log(impResult);  // NaN

impResult = true + undefined;
console.log(impResult);  // NaN

impResult = null + undefined;
console.log(impResult);  // NaN

// Example of explicit type conversion.


//Convert to Boolean Explicitly
//To convert other data types to a boolean, you can use Boolean().

//In JavaScript, undefined, null, 0, NaN, ” converts to false. For example,


let expResult = Boolean('');
console.log(expResult); // false

expResult = Boolean(0);
console.log(expResult); // false

expResult = Boolean(undefined);
console.log(expResult); // false

expResult = Boolean(null);
console.log(expResult); // false

expResult = Boolean(NaN);
console.log(expResult); // false
