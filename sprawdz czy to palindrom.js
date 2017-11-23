
function palindrome(str) {
  // Good luck!
  var palindrome = str.toLowerCase(str).replace(" ",""|",",""|".","");
var reverseStrip = str.split("").reverse().join("");
if (reverseStrip === palindrome) {
  return true;
}
else { 
  return false;
}
  
}


palindrome("My age is 0, 0 si ega ym.");