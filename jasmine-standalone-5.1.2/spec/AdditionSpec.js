describe("add function", function() {
  
    it("should add two arrays of equal length correctly", function() {
      let array1 = [1, 9, 9];
      let array2 = [7, 7, 0];
      expect(add(array1, array2)).toEqual("969");
    });
  
    it("should add two arrays of different length correctly", function() {
      let array1 = [2, 5, 9, 8];
      let array2 = [3, 6, 1];
      expect(add(array1, array2)).toEqual("2959");
    });
  
    it("should handle carrying over correctly", function() {
      let array1 = [9, 9, 9];
      let array2 = [9, 9, 9];
      expect(add(array1, array2)).toEqual("1998");
    });
  
    it("should throw an error if any element in the arrays is negative", function() {
      let array1 = [1, 2, -3];
      let array2 = [-4, 5, 6];
      expect(function() { add(array1, array2) }).toThrow(new Error("Please enter positive numbers only."));
    });
  
    it("should throw an error if any element in the arrays is a two-digit number", function() {
      let array1 = [1, 9, 99];
      let array2 = [7, 7, 11];
      expect(function() { add(array1, array2) }).toThrow(new Error("Number is invalid."));
    });
    it("should handle empty arrays correctly", function() {
        let array1 = [];
        let array2 = [2, 3, 4];
        expect(add(array1, array2)).toEqual("234");
    });
    
    // Test case 7: Adding arrays where both arrays are empty
    it("should return '0' if both arrays are empty", function() {
        let array1 = [];
        let array2 = [];
        expect(add(array1, array2)).toEqual("0");
    });
    
    // Test case 8: Adding arrays containing only zero
    it("should return '0' if both arrays contain only zeros", function() {
        let array1 = [0, 0, 0];
        let array2 = [0, 0, 0];
        expect(add(array1, array2)).toEqual("0");
    });
    
    // Test case 9: Adding arrays with negative numbers
    it("should throw an error if any element in the arrays is negative", function() {
        let array1 = [1, 2, -3];
        let array2 = [-4, 5, 6];
        expect(function() { add(array1, array2) }).toThrow(new Error("Please enter positive numbers only."));
    });
    
    // Test case 10: Adding arrays with non-numeric elements
    it("should throw an error if any element in the arrays is a non-numeric value", function() {
        let array1 = [1, 2, 3];
        let array2 = [4, "5", 6];
        expect(function() { add(array1, array2) }).toThrow(new Error("Array elements must be of type Number."));
    });
    

  
  
  });
  