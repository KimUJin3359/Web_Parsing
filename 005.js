let str = "KFCOCOBBQMINMINC";

let index = str.indexOf('C');
console.log(`${index}`);

let arr = [];
while (index !== -1) {
    arr.push(index);
    index = str.indexOf('C', index + 1);
}
console.log(arr);

// ...은 배열을 풀어서 출력한다
const a = ['a', 'b', 'c'];
console.log(...a);
