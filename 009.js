let str = "ABCDEF[1599]AAQ";
let start_index = str.indexOf("[");
let end_index = str.indexOf("]", start_index + 1);
let substr = str.substring(start_index + 1, end_index);
console.log(Number(substr) + 1);