/**
 * 1. Multiply two arrays
 * 2. Do not contain negative numbers
 * It will contain two functions: addition and multiplication
 */

/**
 * @param {Number[]} array1 
 * @param {Number[]} array2 
 * @returns {string} which will store addition of array1 and array2
 */
function add(array1, array2) {
    /**
     * @throws {Error} if number is negative, array contains any negative element
     */
    if (array1.some(num => num < 0) || array2.some(num => num < 0)) {
        throw new Error("Please enter positive numbers only.");
    }
    // Calculate length of each array for further iteration
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

/**
 * @param {Number[]} array1 
 * @param {Number[]} array2 
 * @returns {string} which will contain multiplication of array1 and array2
 */
function multiply(array1, array2) {
    // Calculate length of each array for further iteration
    var index1 = array1.length - 1;
    var index2 = array2.length - 1;
    var array3 = [];

    // Outer loop iterates through each digit of array2
    for (var a2 = index2; a2 >= 0; a2--) {
        var tempResult = [];
        var carry = 0;
        // Inner loop iterates through each digit of array1 
        for (var a1 = index1; a1 >= 0; a1--) {
            /**
             * @throws {Error} if element of an array is two digit number
             */
            if (array1[a1] > 9 || array2[a2] > 9) {
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
        // If there is a carry after processing all digits of array1, add it to the temporary result
        if (carry > 0) {
            tempResult.push(carry);
        }
        // Reverse the temporary result array to get the correct order of digits
        tempResult = tempResult.reverse();

        // Add zeros according to the position in multiplication
        for (var i = 0; i < index2 - a2; i++) {
            tempResult.push(0);
        }

        // Use the addition function to accumulate the temporary result to the final result
        array3 = add(array3, tempResult);
    }

    return array3.join("");
}
