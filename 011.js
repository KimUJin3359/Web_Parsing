function insert(str, index, target){
    let a = str.substring(0, index);
    let b = str.substring(index, str.length);
    return a + target + b;
}

let str = "ABCDEFG";

const result = insert(str, 3, 'BBQWORLD');
console.log(result);