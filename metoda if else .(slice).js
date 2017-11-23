function truncateString(str, num) {


  if (str.length > num && num>3) {
var nums = num-3;
return str.slice(0,nums)+"...";
}
if (str.length<=num) { return str;}
  return str.slice(0,num) + "...";

}
truncateString("A-", 1);
