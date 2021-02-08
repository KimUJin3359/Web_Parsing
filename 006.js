let str = "ABCABCMCABCABCMCBBQABC";
let find = "ABC";
let index = -1;
let count = 0;

while ((index = str.indexOf(find, index + 1)) !== -1) {
    count += 1;
}
console.log(count);