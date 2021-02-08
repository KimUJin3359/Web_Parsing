// indexOf("문자열", 시작할 index)
// 대소문자 구분
// 처음으로 나오는 인덱스 출력
// 못 찾는 경우 return (-1)

let a = "HELLOWORLDHELLO";
let g1 = a.indexOf("HELLO");
let g2 = a.indexOf("HELLO", g1 + 1);
console.log(`index = ${g1}, index = ${g2}`);