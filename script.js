// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Wraps the primitiveMultiply function and keeps trying until a call succeeds,
 * after which it returns the result. Only handles MultiplicatorUnitFailure
 * exceptions.
 * @param {number} a - The first number to multiply.
 * @param {number} b - The second number to multiply.
 * @return {number} The result of a * b.
 */
/******  b90ca3aa-1262-4a3f-87c8-23b36f3593a1  *******/
function reliableMultiply(a, b) { // initializes the function
  while (true){ // sets a while loop that only acts when true
    try{ // attempts to run the primitive Multiply function 
      return primitiveMultiply(a, b); // returns the result if possible
    } catch (e) { // catches any errors which happens a lot
      console.log("Attempt failed, retying..."); // logs the error and prints it to console
    }
  }
}

console.log(reliableMultiply(8, 8)); // outputs 64 if no errors are thrown