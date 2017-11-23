
function findLongestWord(str) {
  var longestWord = str.split(" ");
  var array = longestWord.sort(function(a,b){return b.length-a.length;});
  return array[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");