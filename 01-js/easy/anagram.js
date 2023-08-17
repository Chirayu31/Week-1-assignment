/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let arr = {}

  for (const c of str1) {
    arr[c] = (arr[c] || 0) + 1;
  }

  for (const c of str2) {
    if (!arr[c]) return false;
    arr[c]--;
  }

  return Object.values(arr).every(cnt => cnt === 0)

}

const testCases = [
  ['listen', 'silent', true],
  ['hello', 'world', false],
  ['abcdef', 'fedcba', true],
  ['abc', 'cbaa', false],
  ['anagram', 'nagaram', true],
  ['12345', '54321', true],
  ['abcd', 'dcbaa', false],
  ['', '', true],
];
let passed = 0;

for (const [str1, str2, expected] of testCases) {
  const result = isAnagram(str1, str2);
  if (result === expected) passed++;
  console.log(`Are "${str1}" and "${str2}" anagrams? Expected: ${expected}, Result: ${result}`);
}
console.log('')
console.log(`${passed} testcases passed out of ${testCases.length}`)
console.log('')

module.exports = isAnagram;
