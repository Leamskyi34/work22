// Helper function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(num) {
    return !isEven(num);
  }
  
  // Helper function to calculate the square of a number
  function square(num) {
    return num * num;
  }
  
  // Helper function to calculate the cube of a number
  function cube(num) {
    return num * num * num;
  }
  
  // Example usage of helper functions
  console.log(isEven(4)); // Output: true
  console.log(isOdd(5)); // Output: true
  console.log(square(3)); // Output: 9
  console.log(cube(2)); // Output: 8