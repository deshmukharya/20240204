describe("subtract function", function() {
  
    // Test case 1: Subtract two arrays of equal length correctly
    it("should subtract two arrays of equal length correctly", function() {
        let array4 = [5, 4, 3];
        let array5 = [1, 2, 1];
        expect(subtract(array4, array5)).toEqual("422");
    });

    // Test case 2: Subtract two arrays of different length correctly
    it("should subtract two arrays of different length correctly", function() {
        let array4 = [5, 4, 3];
        let array5 = [1, 2];
        expect(subtract(array4, array5)).toEqual("531");
    });

    // Test case 3: Subtracting zero from a positive number
    it("should handle subtracting zero correctly", function() {
        let array4 = [1, 2, 3];
        let array5 = [0];
        expect(subtract(array4, array5)).toEqual("123");
    });

    // Test case 4: Subtracting a positive number from zero
    it("should handle subtracting from zero correctly", function() {
        let array4 = [0];
        let array5 = [1, 2, 3];
        expect(subtract(array4, array5)).toEqual("-123");
    });

    // Test case 5: Subtracting two empty arrays
    it("should return '0' if both arrays are empty", function() {
        let array4 = [];
        let array5 = [];
        expect(subtract(array4, array5)).toEqual("0");
    });

    // Test case 6: Subtracting arrays with non-numeric elements
    it("should throw an error if any element in the arrays is a non-numeric value", function() {
        let array4 = [1, 2, 3];
        let array5 = [4, "5", 6];
        expect(function() { subtract(array4, array5) }).toThrow(new Error("Array elements must be of type Number."));
    });

    // Test case 7: Subtracting arrays with negative numbers
    it("should throw an error if any element in the arrays is negative", function() {
        let array4 = [1, 2, -3];
        let array5 = [-4, 5, 6];
        expect(function() { subtract(array4, array5) }).toThrow(new Error("Please enter positive numbers only."));
    });

    // Test case 8: Subtracting arrays with two-digit numbers
    it("should throw an error if any element in the arrays is a two-digit number", function() {
        let array4 = [1, 9, 9];
        let array5 = [7, 7, 11];
        expect(function() { subtract(array4, array5) }).toThrow(new Error("Number is invalid."));
    });

});
