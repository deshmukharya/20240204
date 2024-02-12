
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
    var index1 = array1.length - 1;
    var index2 = array2.length - 1;
    var carry = 0;
		//define empty array in which result will be store
    var array3 = [];
    var lastdigit=0;
		/**
		 * Loop through each digit in the arrays, starting from the rightmost digit
		 * calculate current digit 
		 * if array ends then only take 0 
		 * add current digit to result along with carry
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
        var result = digit1 + digit2 + carry;
				/**
				 * if result is two digit  number than
				 * extract last digit and push lastdigit to resultant array
				 * update carry with the tens place of the result
				 * if result is single digit simply push it to the resultant array
				 */
        if (result > 9) {
            lastdigit=result % 10
            array3.push(lastdigit);
            carry = Math.floor(result / 10);
        } else {
            array3.push(result);
            carry = 0;
        }
        index1--;
        index2--;
    }
		// if loop ends and still carry is present then push it to the resultant array
    if (carry > 0) {
        array3.push(carry);
    }
		//reverse the array to get correct order
    array3 = array3.reverse();
    return array3.join("");
}
let array1 = [1,9,9];
let array2 = [7,7];
console.log(add(array1, array2));

