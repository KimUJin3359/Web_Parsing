let a = prompt("three string with space");
let b = a.split(" ");
let arr = [];

for (let i = 0; i < b.length; i++) {
    arr.push(b[i]);
}

if (arr[0] === arr[1] && arr[1] === arr[2]) {
    alert("Very Good");
}
else if (arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2]) {
    alert("Two");
}
else {
    alert("Only One");
}