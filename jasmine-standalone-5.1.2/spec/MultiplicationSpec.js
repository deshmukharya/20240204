describe("multiply function", function() {
    // Test case 1: Multiplication of single-digit numbers
    it("should multiply two single-digit numbers correctly", function() {
        let array6 = [5];
        let array7 = [3];
        expect(multiply(array6, array7)).toEqual("15");
    });

    // Test case 2: Multiplication of a single-digit number with a multi-digit number
    it("should multiply a single-digit number with a multi-digit number correctly", function() {
        let array6 = [5];
        let array7 = [1, 2];
        expect(multiply(array6, array7)).toEqual("60");
    });

    // Test case 3: Multiplication of multi-digit numbers
    it("should multiply two multi-digit numbers correctly", function() {
        let array6 = [1, 2];
        let array7 = [3, 4];
        expect(multiply(array6, array7)).toEqual("408");
    });

    // Test case 4: Multiplication by zero
    it("should return '0' if any of the arrays is [0]", function() {
        let array6 = [0];
        let array7 = [3, 4];
        expect(multiply(array6, array7)).toEqual("0");
    });

    // Test case 5: Multiplication of two empty arrays
    it("should return '0' if both arrays are empty", function() {
        let array6 = [];
        let array7 = [];
        expect(multiply(array6, array7)).toEqual("0");
    });

    // Test case 6: Multiplication of arrays containing only zeros
    it("should return '0' if both arrays contain only zeros", function() {
        let array6 = [0, 0, 0];
        let array7 = [0, 0, 0];
        expect(multiply(array6, array7)).toEqual("0");
    });

    // Test case 7: Multiplication of arrays with negative numbers
    it("should throw an error if any element in the arrays is negative", function() {
        let array6 = [1, 2, -3];
        let array7 = [-4, 5, 6];
        expect(function() { multiply(array6, array7) }).toThrow(new Error("Please enter positive numbers only."));
    });

    // Test case 8: Multiplication of arrays with non-numeric elements
    it("should throw an error if any element in the arrays is a non-numeric value", function() {
        let array6 = [1, 2, 3];
        let array7 = [4, "5", 6];
        expect(function() { multiply(array6, array7) }).toThrow(new Error("Array elements must be of type Number."));
    });
});
