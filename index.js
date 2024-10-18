function isPalindrome(word) {
  // Write your algorithm here
  // true if word is palindrome
  // false if word is not palindrome
  // racecar
  let j = word.length - 1 // 7-1 = 6
  for (let i = 0; i < word.length / 2; i++) { // i=0; 0<7/2 = true; 0
      if (word[i] != word[j]) {     //  if(r != r)
        return false
      }
      j--;
  }
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/ // word[0] = word[6]

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
