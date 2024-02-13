/**
 * Class representing an Infinite Precision Integer.
 */
class InfiniteNumber {
    /**
     * An internal member Array to contain the digits of the Infinite Integer.
     * @private
     * @type {number[]}
     */
    _internalArray = [];

    /**
     * Creates an instance of InfiniteNumber.
     * @param {number|string|number[]} inputObject - The input to create an InfiniteNumber.
     * @throws {Error} Will throw an error if the input is invalid.
     */
    constructor(inputObject) {
        if (typeof inputObject === "number") {
            // Handle input as a number
            if (isNaN(inputObject)) {
                throw new Error("Input is NaN.");
            }
            if (inputObject < 0) {
                throw new Error("Input cannot be negative.");
            }
            if (inputObject % 1 !== 0) {
                throw new Error("Input needs to be an integral value.");
            }
            // Convert the number to an array of digits
            while (inputObject !== 0) {
                this._internalArray.unshift(inputObject % 10);
                inputObject = Math.floor(inputObject / 10);
            }
        } else if (typeof inputObject === "string") {
            // Handle input as a string
            if (inputObject.length === 0) {
                throw new Error("Empty string is not accepted.");
            }
            let myRegex = /^[0-9]+$/;
            if (!myRegex.test(inputObject)) {
                throw new Error("String can have decimal numbers only.");
            }
            // Convert the string to an array of digits
            for (let index = 0; index < inputObject.length; index++) {
                const currentDigit = parseInt(inputObject.charAt(index));
                this._internalArray.push(currentDigit);
            }
        } else if (Array.isArray(inputObject)) {
            // Handle input as an array
            if (inputObject.some((elem) => !Number.isInteger(elem) || elem < 0 || elem > 9)) {
                throw new Error("Array should contain positive integers and not greater than 9.");
            }
            // Copy the array to _internalArray
            this._internalArray = [...inputObject];
        } else {
            // If inputObject is not a number, string, or array, throw an error
            throw new Error(`Constructor of InfiniteNumber does not support this data type ${typeof inputObject}`);
        }
    }

    /**
     * Helper method to get a copy of the _internalArray variable.
     * @returns {number[]} - A copy of the internal array.
     */
    getInternalArray() {
        return [...this._internalArray];
    }

    /**
     * Helper method to get the representation of this Infinite Precision Integer as a string.
     * @returns {string} - The Infinite Precision Integer as a string.
     */
    getNumberAsString() {
        return this._internalArray.join('');
    }
}

/**
 * Function to perform subtraction of two arrays.
 * @param {number[]} array1 - The first array.
 * @param {number[]} array2 - The second array.
 * @returns {void} - Prints the result of subtraction.
 */
function subtract(array1, array2) {
    // Try to create InfiniteNumber objects for both arrays
    let infNumber1, infNumber2;

    try {
        infNumber1 = new InfiniteNumber(array1);
    } catch (error) {
        console.error("Error in Array 1:", error.message);
        return; // Exit function if validation fails
    }

    try {
        infNumber2 = new InfiniteNumber(array2);
    } catch (error) {
        console.error("Error in Array 2:", error.message);
        return; // Exit function if validation fails
    }

    /**create flag determine result is positive or negative
     * firstly we are checking length of array
     * if length is same then check value 
     * if true means array1 is less than array2 then swap arrays
     */
    var isNegativeResult = false;
    if ((array1.length !== array2.length && array1.join('') < array2.join('')) ||
        (array1.length === array2.length && array1.join('') < array2.join(''))) {
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
     * set borrow to 1 indicate borrowing for the next iteration
     * if there is no borrowing reset borrow to 0
     */
    while (index1 >= 0 || index2 >= 0) {
        var digit1 = index1 >= 0 ? array1[index1] : 0;
        var digit2 = index2 >= 0 ? array2[index2] : 0;

        var result = digit1 - digit2 - borrow;
        /**
         * if result is less than zero then add 10 to it generate borrow
         * if not then make borrow zero
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
    // reverse the array to get the correct order
    array3 = array3.reverse();

    // Add negative sign that indicates the result is negative
    if (isNegativeResult) {
        array3.unshift('-');
    }

    console.log("Result of subtraction:", array3.join(""));
}

/**
 * Function to perform addition of two arrays.
 * @param {number[]} array1 - The first array.
 * @param {number[]} array2 - The second array.
 * @returns {number[]} - Resultant array after addition.
 */
function add(array1, array2) {
    let infNumber1, infNumber2;

    try {
        infNumber1 = new InfiniteNumber(array1);
    } catch (error) {
        console.error("Error in Array 1:", error.message);
        return; // Exit function if validation fails
    }

    try {
        infNumber2 = new InfiniteNumber(array2);
    } catch (error) {
        console.error("Error in Array 2:", error.message);
        return; // Exit function if validation fails
    }
    // Calculate length of each array for further iteration
    var index1 = array1.length - 1;
    var index2 = array2.length - 1;
    var carry = 0;
    // Define an empty array in which the result will be stored
    var array3 = [];
    var lastdigit = 0;

    /**
     * Loop through each digit in the arrays, starting from the rightmost digit
     * calculate the current digit
     * if the array ends then only take 0
     * add the current digit to the result along with carry
     */
    while (index1 >= 0 || index2 >= 0) {
        var digit1 = index1 >= 0 ? array1[index1] : 0;
        var digit2 = index2 >= 0 ? array2[index2] : 0;
        var result = digit1 + digit2 + carry;

        /**
         * if the result is a two digits number than
         * extract the last digit and push the last digit to the resultant array
         * update carry with the tens place of the result
         * if the result is a single digit, simply push it to the resultant array
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

    // if the loop ends and still carry is present then push it to the resultant array
    if (carry > 0) {
        array3.push(carry);
    }

    // reverse the array to get the correct order
    array3 = array3.reverse();
    return array3; // Return the resultant array
}

/**
 * Function to perform multiplication of two arrays.
 * @param {number[]} array1 - The first array.
 * @param {number[]} array2 - The second array.
 * @returns {void} - Prints the result of multiplication.
 */
function multiply(array1, array2) {
    // Try to create InfiniteNumber objects for both arrays
    let infNumber1, infNumber2;

    try {
        infNumber1 = new InfiniteNumber(array1);
    } catch (error) {
        console.error("Error in Array 1:", error.message);
        return; // Exit function if validation fails
    }

    try {
        infNumber2 = new InfiniteNumber(array2);
    } catch (error) {
        console.error("Error in Array 2:", error.message);
        return; // Exit function if validation fails
    }

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

        // Add zero at the last position as per multiplication rule 
        for (var i = 0; i < index2 - a2; i++) {
            tempResult.push(0);
        }

        // Using the add function to get the result array
        array3 = add(array3, tempResult);
    }

    console.log("Result of multiplication:", array3.join(""));
}

// Test the subtract function with arrays
let subArray1 = [0, 1, 1];
let subArray2 = [7, 7];
subtract(subArray1, subArray2);

// Test the addition function
let array1 = [1,9,9];
let array2 = [7,7];
console.log("Result of addition");
console.log(add(array1, array2));

// Test the multiply function with arrays
let mulArray1 = [5, 5];
let mulArray2 = [1, 2];
multiply(mulArray1, mulArray2);





