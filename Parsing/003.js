let a = "ABCMINMIN";
let b = "BBQCOCO";
let c = a + b;
let arr = [];

for (let i = c.length - 1; i >= 0; i--) {
    if (i % 2 === 0)
        arr.push(c[i]);
}
alert(arr);