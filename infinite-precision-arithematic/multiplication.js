/**
 * 1.multiply two arrays
 * 2.don not contain negative number
 * it will contain two functions addition and multiplication
 */
/**
 * @param {Number} array1 
 * @param {Number} array2 
 * @returns {array} which will store addition of array1 and array2
 */
function add(array1, array2) {
    /**
	 * @throws {error} if number is negative , array contains any negative element
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
    var lastdigit = 0;
    
    /**
	* Loop through each digit position in the arrays, starting from the rightmost digit
	* calculate current digit if array ends then only take 0
	* add current digit to result along with result
	*/
    while (index1 >= 0 || index2 >= 0) {
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
   //reverse the array to get correct order of output
    array3 = array3.reverse();
    return array3;
}


/**
 * @param {Number} array1 
 * @param {Number} array2 
 * @returns {array} which will contain multiplication of array1 and array2
 */
function multiply(array1, array2) {
    //calculate length of each array for further iteration
    var index1 = array1.length - 1;
    var index2 = array2.length - 1;
    var array3 = [];

    //Outer loop iterates through each digit of array2
    for (var a2 = index2; a2 >= 0; a2--) {
        var tempResult = [];
        var carry = 0;
       //Inner loop iterates through each digit of array1 
        for (var a1 = index1; a1 >= 0; a1--) {
            /**
			 * @throws {error} if element of an array is two digit number
			 */7
			if(array1[a1]>9  || array2[a2]>9){
				throw new Error("Number is invalid.");
			}
            // Calculate the product of the current digits of array1 and array2, plus any carry
            var res = array1[a1] * array2[a2] + carry;
            /**
             * If the result is a two-digit number, extract the last digit and update carry
             * If the result is a single-digit number, add it to the temporary result array
             */
            if (res > 9) {
                var lastDigit = res % 10;
                var newCarry = Math.floor(res / 10);

                tempResult.push(lastDigit);
                carry = newCarry;
            } else {
                tempResult.push(res);
                carry = 0;
            }
        }
        //If there is a carry after processing all digits of array1, add it to the temporary result
        if (carry > 0) {
            tempResult.push(carry);
        }
        //Reverse the temporary result array to get the correct order of digits
        tempResult = tempResult.reverse();
      
        //as per multiplication rule adding zero at last position 
        for (var i = 0; i < index2 - a2; i++) {
            tempResult.push(0);
        }
        console.log(tempResult);
        //using prvious add function
        array3 = add(array3, tempResult);
    }
    console.log("Final answer:");

    return array3.join("");
}

let array1 = [5];
let array2 = [1,2];
console.log(multiply(array1, array2));
