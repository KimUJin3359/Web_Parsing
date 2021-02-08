function erase(str, index, size)
{
    let a = str.substring(0, index);
    let b = str.substring(index + size);
    return (a + b);
}

let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result = erase(str, 1, 3);
console.log(result);