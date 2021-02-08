let str = "BTSMINBTSMINBTSKKOPSM";
let arr = ["SM", "MIN", "OP", "VO", "TSM"];
let max = 0;
let max_index;

for (let i = 0; i < arr.length; i++) {
    let index = -1;
    let cnt = 0;
    while ((index = str.indexOf(arr[i], index + 1)) !== -1) {
        cnt += 1;
    }
    if (cnt > max)
    {
        max_index = i;
        max = cnt;
    }
}
console.log(arr[max_index]);

// 위에 아무 선언도 없이
// test = 5;
// 를 입력했을 때, java script에서 자동적으로
// (var) test = 5;
// 바꿔 저장한다.