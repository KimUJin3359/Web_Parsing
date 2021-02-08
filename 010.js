let str = "AB[100]T[41]ABS[1][5]BTS";
let start_index = -1;
let end_index;
let arr = [];
let res = 0;

while ((start_index = str.indexOf("[", start_index + 1)) !== -1) {
    end_index = str.indexOf("]", start_index + 1);
    arr.push(str.substring(start_index + 1, end_index));
}
for (let i = 0; i < arr.length; i++) {
    res += Number(arr[i]);
}
console.log(res);