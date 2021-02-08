// substr(start_index, size)
// substring(start_index, end_index + 1)

let str = "123456789123456789";
let input = prompt("input").split(" ");
let arr = [];
for (let i = 0; i < input.length; i++)
{
    arr.push(input[i]);
}
let result = str.substring(Number(arr[0]), Number(arr[1]) + 1);
console.log(...result);