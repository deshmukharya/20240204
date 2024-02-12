/**
 * @param {Number} number 
 * @param {Number} size 
 * @returns {BinaryNumber} binary representtaion of  number with given size
 */
function getSimple2sComplement(number, size) {
    // Check if size is less than 52
    if (size >= 52) {
        console.error("Size should be less than 52.");
        return;
    }
    // Determine the sign bit
    let signBit = number >= 0 ? 0 : 1;

    // Convert the absolute value of the number to binary
    if(number>0){
    let binaryRepresentation = Math.abs(number).toString(2);

    // Ensure that the binary representation fits within the specified size
    if (binaryRepresentation.length > size - 1) {
        console.error("Binary representation exceeds the specified size.");
        return;
    }
    // Pad the binary representation with zeros to match the specified size
    binaryRepresentation = binaryRepresentation.padStart(size - 1, '0');

    // Insert the sign bit at the beginning
    binaryRepresentation = signBit + binaryRepresentation;
    return binaryRepresentation;
}
if(number<0){

    let binaryRepresentation = (Math.abs(number) + 1).toString(2);

    // Ensure that the binary representation fits within the specified size
    if (binaryRepresentation.length > size - 1) {
        console.error("Binary representation exceeds the specified size.");
        return;
    }

    // Pad the binary representation with zeros to match the specified size
    binaryRepresentation = binaryRepresentation.padStart(size - 1, '0');

    // Insert the sign bit at the beginning
    binaryRepresentation = '1' + binaryRepresentation;
    return binaryRepresentation;
}    
}

// Example usage:
let inputNumber = 8;
let inputSize = 11;

let binaryResult = getSimple2sComplement(inputNumber, inputSize);

console.log(`Binary representation of ${inputNumber} with size ${inputSize}: ${binaryResult}`);

console.log("-----------------------------------------------------------");

/**
 * 
 * @param {String} binaryString 
 * @returns {Number} Decimal Conversion along with sign
 */

function getSimpleDecimalFrom2sComplement(binaryString) {
    // Extract the sign bit
    let signBit = binaryString.charAt(0);

    // Extract the absolute value of the number in binary
    let absoluteBinaryValue = binaryString.slice(1);

    // Determine the sign based on the extracted sign bit
    let sign = signBit === '0' ? 1 : -1;

    // Convert the binary value to decimal
    let decimalValue = parseInt(absoluteBinaryValue, 2);

    // Adjust the sign based on the extracted sign bit
    let finalNumber = sign * decimalValue;

    // Return the size, number, and sign
    return {
        size: binaryString.length,
        number: finalNumber,
        sign: sign
    };
}

let inputBinary = '10000000000000000000000000000000000011';
let parsedResult = getSimpleDecimalFrom2sComplement(inputBinary);
console.log("Decimal Representation is" );
console.log(`Size: ${parsedResult.size}`);
console.log(`Number: ${parsedResult.number}`);
console.log(`Sign: ${parsedResult.sign}`);

 console.log("-----------------------------------------------------------");
/**
 * @param {Number} number 
 * @returns {String} 64-bit IEEE 754 representation of the number
 */

function getJSNumberRepresentation(number) {
    // Check if the number is within the representable range for a 64-bit binary
    if (!Number.isFinite(number)) {
        console.error("Number is not finite and cannot be represented in IEEE 754 format.");
        return;
    }

    // Get the sign bit
    let signBit = number >= 0 ? '0' : '1';

    // Convert the absolute value of the number to binary
    let binary = Math.abs(number).toString(2);

    // Separate the integer and fractional parts
    let integerPart = Math.floor(Math.abs(number));
    let fractionalPart = Math.abs(number) - integerPart;

    // Calculate the exponent using the integer part
    let exponent = (Math.log2(integerPart) | 0) + 1023;

    // Convert the integer part to binary
    let integerBinary = integerPart.toString(2);

    // Combine the integer and fractional parts into the mantissa
    let mantissa = integerBinary.slice(1) + binary.slice(binary.indexOf('.') + 1);

    // Pad the mantissa with zeros to make it 52 bits long
    mantissa = mantissa.padEnd(52, '0');

    // Combine the sign bit, exponent, and mantissa to get the 64-bit representation
    let result = signBit + exponent.toString(2).padStart(11, '0') + mantissa;

    return result;
}

// Example usage:
let inputNumber1 = 4.35;
let binaryResult1 = getJSNumberRepresentation(inputNumber);

console.log(`64-bit represenattaion of ${inputNumber1}: ${binaryResult1}`);
console.log("-----------------------------------------------------------");

/**
 * @param {String} binaryString - 64-bit IEEE 754 binary representation
 * @returns {Number} Decimal representation of the binary string
 */
function getNumericFromJSRepresentation(binaryString) {
    // Ensure the input is a valid 64-bit binary string
    if (!/^[01]{64}$/.test(binaryString)) {
        console.error("Invalid input. Please provide a 64-bit binary string.");
        return;
    }

    // Extract sign bit, exponent, and mantissa from the binary string
    let signBit = binaryString[0];
    let exponent = parseInt(binaryString.slice(1, 12), 2) - 1023;
    let mantissa = "1" + binaryString.slice(12);

    // Convert the mantissa to decimal
    let decimalMantissa = mantissa.split('').reduce((sum, bit, index) => {
        return sum + (parseInt(bit) * Math.pow(2, -index));
    }, 0);

    // Calculate the decimal value based on the sign, exponent, and mantissa
    let result = (signBit === '0' ? 1 : -1) * Math.pow(2, exponent) * (1 + decimalMantissa);

    return result;
}

// Example usage:
let binaryInput = "0100000000001001001100110011001100110011001100110011001100110011";
let decimalResult = getNumericFromJSRepresentation(binaryInput);

console.log(`Decimal representation of ${binaryInput}: ${decimalResult}`);


