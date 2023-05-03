let empty = [];
let empty2 = [,,,];
let all = [1,'test',3.14];
let coffe = ["americano","latte"];
const cars = ["Ssab","Volvo","BMW"];

cars[0] = cars[2];
let car = cars[2];
cars[1] = Date.now();

console.log(cars);
console.log(typeof cars);

document.getElementById("search_message").innerHTML = cars; // 이름 참조