// Function 1 to calculate tax
function calculateTax(amount) {
    const taxRate = 0.1; // 10% tax
    return amount * taxRate;
}
console.log(calculateTax(100)); // Output: 10
console.log(calculateTax(200)); // Output: 20
console.log(calculateTax(50));  // Output: 5

// Function 2 to convert string to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello")); // Output: "HELLO"
console.log(convertToUpperCase("world")); // Output: "WORLD"
console.log(convertToUpperCase("javascript")); // Output: "JAVASCRIPT"

// Function 3 to find the maximum of two numbers
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {        return num2;
    }
}
console.log(findMaximum(5, 10));// Output: 10
console.log(findMaximum(-3, 7));// Output: 7
console.log(findMaximum(0, 0));// Output: 0

// Function 4 to check if a string is a palindrome
function isPalindrome(word) {
    const lowerword = word.toLowerCase();
    const reversedWord = lowerword.split('').reverse().join('');
    return lowerword === reversedWord;
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("Madam")); // Output: true

// Function 5 to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
}   
console.log(calculateDiscountedPrice(100, 20)); // Output: 80
console.log(calculateDiscountedPrice(50, 10)); // Output: 45
console.log(calculateDiscountedPrice(200, 25)); // Output: 150
   
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };