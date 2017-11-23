
function titleCase(str) {
  var stringDefault=str.toLowerCase().split(" ").map(function(word){return word.charAt(0).toUpperCase() + word.slice(1);}).join(" ");

return stringDefault;
}
titleCase("sHoRt AnD sToUt");

//charAt(0) w funkcji .map oznacza ze pierwsza litera (0) w kazdym wyrazie (word) bedzie duza, slice(1) to wyraz zaczynajacy sie od drugiej litery
