/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let n = str.length;

  for (let i = 0; i < n + 1 / 2; i++) {
    if (str[i] !== str[n - i - 1]) return false;
  }

  return true;
}

const testCases = [
  { input: 'racecar', expected: true },
  { input: 'hello', expected: false },
  { input: 'Anna', expected: true }, // Case-insensitive
  { input: 'Nan', expected: true },  // Case-insensitive
  { input: '12321', expected: true }, // Numeric palindrome
];

// Test the function
testCases.forEach(testCase => {
  const result = isPalindrome(testCase.input);
  const status = result === testCase.expected ? 'PASSED' : 'FAILED';
  console.log(`Input: ${testCase.input} | Expected: ${testCase.expected} | Result: ${result} | Status: ${status}`);
});

module.exports = isPalindrome;
