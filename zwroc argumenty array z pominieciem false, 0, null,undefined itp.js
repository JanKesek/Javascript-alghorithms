// argumenty "falsy" = [false, null, 0, "", undefined, NaN]

function bouncer(arr) {
return arr.filter(function(word) {return word;});
}

bouncer([7, "ate", "", false, 9]);  // wynik 7, "ate", 9 
