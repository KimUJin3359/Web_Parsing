let str = "bts@macdonald.co.kr||inho@mincoding.co.kr||jason@jyp.com";
str = str.replace(/co.kr|com/g, "net");

console.log(str);

let arr = str.split("||");
console.log(arr);

let res = str.replace(/\|\|/g, "@");
res = res.split("@");
let res_arr = [];
for (let i = 0; i < res.length; i++) {
    if (i % 2 === 0) {
        res_arr.push(res[i]);
    }
}
console.log(res_arr);