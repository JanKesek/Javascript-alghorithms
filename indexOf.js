function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase();
  if (alphabet.indexOf(str) == -1) {
    var count = str.length;
    var firstLetter = alphabet.indexOf(str[0]);
    var string = alphabet.slice(firstLetter, firstLetter+count);
    for (var i=0;i<string.length;i++) {
    while (str.indexOf(string[i]) == -1) {
     
        return string[i];
        
      }
    }
    }
  }


fearNotLetter("ABCEFG");