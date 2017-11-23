
function mutation(arr) {


for (var i=0;i <arr[1].length; i++) {
    var string1 = arr[0].toLowerCase();
    var string2 = arr[1].toLowerCase();
if (string1.indexOf(string2[i]) ===-1) { //string2[i] to dowolna litera w drugim wyrazie
  return false;
}


}
  return true;
}
mutation(["hello", "Hello"]);