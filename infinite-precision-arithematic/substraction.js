/*
1. subtract two numbers which are given in arrays form and store result in separate array
2.if first number is greater than second then reverse it peform substraction and make number negative
3. it should not take negative number
*/
/**
 * @param {Number} array1 
 * @param {Number} array2 
 * @returns {array} which will store substraction of array1 and array2
 */
function subtract(array1, array2) {
	/**
	 * @throws {error} if number is negative , array contains any negative element
	 */
    if (array1.some(num => num < 0) || array2.some(num => num < 0)) {
        throw new Error("Please enter positive numbers only.");
    }
    
		/**create flag determine result is positive or negative
		 * firstly we are checking lenth of array
		 * if lenth is same then check value 
		 * if true means array1 is less than array2 then swap arrays
     */
    var isNegativeResult = false;
    if ((array1.length!== array2.length && array1.join('') < array2.join(''))||(array1.length === array2.length && array1.join('') < array2.join(''))) {
        isNegativeResult = true;
        [array1, array2] = [array2, array1]; 
    }

    var index1 = array1.length - 1;
    var index2 = array2.length - 1;
    var borrow = 0;
    var array3 = [];
   /**
		 * Loop through each digit position in the arrays, starting from the rightmost digit
		 * if result is negative then  add 10 to result for borrowing
		 * set borrow to 1 indicate borrowing for next iteration
		 * if tere is no borrowing reset borrow to 0
		 */
    while (index1 >= 0 || index2 >= 0) {
			/**
			 * @throws {error} if element of an array is two digit number
			 */
			if(array1[index1]>9  || array2[index2]>9){
				throw new Error("Number is invalid.");
			}
        var digit1 = index1 >= 0 ? array1[index1] : 0;
        var digit2 = index2 >= 0 ? array2[index2] : 0;

        var result = digit1 - digit2 - borrow;
       /**
				* id result is less tahn zero then add 10 to it generate borrow
				  if not then make borrow zero
			  */
        if (result < 0) {
            result += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }

        array3.push(result);
        index1--;
        index2--;
    }

    // Remove leading zeros like make 009 = 9
    while (array3.length > 1 && array3[array3.length - 1] === 0) {
        array3.pop();
    }
    //reverse the array to get correct order
    array3 = array3.reverse();

    // Add negative sign that indicate result is negative
    if (isNegativeResult) {
        array3.unshift('-');
    }

    return array3.join("");
}

let array1 = [0,1,1];
let array2 = [7,7];
console.log(subtract(array1, array2));


   
  
 

  
