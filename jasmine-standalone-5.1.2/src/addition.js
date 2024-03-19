
/**
 * @param {Number} array1 
 * @param {Number} array2 
 * @returns {array} which will store addition of array1 and array2
 */
function add(array1, array2) {
	/**
	 * @throws {error} if number is negative that is array contains any negative element
	 */
    if (array1.some(num => num < 0) || array2.some(num => num < 0)) {
        throw new Error("Please enter positive numbers only.");
    }
		//calculate length of each array for further iteration
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      throw new Error("Inputs must be arrays.");
  }

  // Check if array elements are numbers
  if (!array1.every(num => typeof num === 'number') || !array2.every(num => typeof num === 'number')) {
      throw new Error("Array elements must be of type Number.");
  }

  // Check for negative numbers in arrays
  if (array1.some(num => num < 0) || array2.some(num => num < 0)) {
      throw new Error("Please enter positive numbers only.");
  }

  // Calculate length of each array for further iteration
  var index1 = array1.length - 1;
  var index2 = array2.length - 1;
  var carry = 0;
  var array3 = [];
  var lastdigit = 0;

  var allZeros = true;
  while (index1 >= 0 || index2 >= 0) {
      // Check for two-digit numbers in arrays
      if (array1[index1] > 9 || array2[index2] > 9) {
          throw new Error("Number is invalid.");
      }

      var digit1 = index1 >= 0 ? array1[index1] : 0;
      var digit2 = index2 >= 0 ? array2[index2] : 0;
      var result = digit1 + digit2 + carry;

      if (result !== 0) {
        allZeros = false;
    }

      if (result > 9) {
          lastdigit = result % 10;
          array3.push(lastdigit);
          carry = Math.floor(result / 10);
      } else {
          array3.push(result);
          carry = 0;
      }
      index1--;
      index2--;
  }

  if (carry > 0) {
      array3.push(carry);
  }

  array3 = array3.reverse();
  if (allZeros) {
    return "0";
}
  return array3.join("");
}
let array1 = [1,9,9];
let array2 = [7,7];
console.log(add(array1, array2));

