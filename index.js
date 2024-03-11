function isPalindrome(word) {

  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
