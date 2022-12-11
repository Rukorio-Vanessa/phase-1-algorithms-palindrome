function isPalindrome(string) {
  // Write your algorithm here
  const stringToArray = string.split('')
  const reverseStringToArray = stringToArray.reverse()
  const reverseString = reverseStringToArray.join('')
  if(string == reverseString) {
        return true
    }
    else {
        return false
    }
}              
//testing to confirm
console.log(isPalindrome('abba'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('a'))
console.log(isPalindrome('robot'))
console.log(isPalindrome('ab'))

/* 
  Add your pseudocode here
  //define function isPalindrome(string)
 convert string into an array:
       const stringToArray = string.split('');
 reverse the array:
       const reverseStringToArray =    stringToArray.reverse();
 convert array to a string
       const reverseString =   reverseStringToArray.join('') 
 if(string == reverseString) {
        console.log('True');
    }
    else {
        console.log('False');
    }
}              
*/

/*
  Add written explanation of your solution here
   SUMMARY:
 a function that checks if a word is palindrome.
 it should take in take in one argument that is a string in lowercase(all letters)
if the string is palindrome it should return 'true' else 'false'.

TEST CASES:
When the function is called with the argument ('mom') expect return value is 'true'
When the function is called with the argument ('clove') expect return value is 'false'
 SUMMARY:
 a function that checks if a word is palindrome.
 it should take in take in one argument that is a string in lowercase(all letters)
if the string is palindrome it should return 'true' else 'false'.

TEST CASES:
When the function is called with the argument ('mom') expect return value is 'true'
When the function is called with the argument ('clove') expect return value is 'false'

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
