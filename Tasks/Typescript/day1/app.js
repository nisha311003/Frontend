"use strict";
let price;
price = 799;
console.log(price);
let productName;
productName = "HeadPhones";
console.log(productName);
let isStudent;
isStudent = true;
console.log(isStudent);
let address;
address = undefined;
console.log(address);
let salary;
salary = null;
console.log(salary);
let transactionId;
transactionId = 39n;
console.log(transactionId);
let user1;
user1 = Symbol("Ram");
console.log(user1);
let num1;
num1 = 30n;
let num2;
num2 = 40n;
console.log(num1 + num2);
let rollNos = [101, 203];
console.log(rollNos);
let branches = ["CSE", "ECE"];
console.log(branches);
let mixed = ["kalam", 35, true];
console.log(mixed);
// let details:{name:string,age:number,address:{city:string}}={
//     name: "Ram",
//     age: 34,
//     address:{
//         city: "Hyd"
//     }
// }
// console.log(details);
function smileCompetition() {
    return "Himani";
}
let first = smileCompetition();
console.log(first);
function latecomers(student, rollNo) {
    console.log(student);
    console.log(rollNo);
}
latecomers("Rahil", 420);
let canteen;
canteen = "tea";
canteen = 15;
canteen = true;
canteen = null;
//tuple-fixed order
let details = ["kalam", 20, true];
console.log(details);
//literals-you can use your custom values
let emotion;
emotion = "smile";
console.log(emotion);
function himani() {
    console.log("Himani");
}
himani();
let message;
message = "Hello";
message = 45;
message = "break";
if (typeof message === "string") {
    console.log(message.toUpperCase());
}
else {
    console.log(message);
}
function lunchBreak(time, day) {
    console.log("Lunch time is: ", time);
    console.log("Day is: ", day);
}
lunchBreak(1);
function fun(mood = "Smile") {
    console.log(mood);
}
fun("angry");
let a = (college, buildingNo, isCollegeGood) => {
    console.log(college);
    console.log(buildingNo);
    console.log(isCollegeGood);
    return "duck out";
};
a("LPU", 38, false);
function chat(...rest) {
    console.log(rest);
}
chat("hii", "hello", "khemcho");
function listed(...rest) {
    console.log(rest);
}
listed(1, 2, 3, 4, 5);
function mix(...rest) {
    console.log(rest);
}
mix("hii", "hello", 1, 2, 3);
let student1 = {
    name: "Nisha",
    spects: "28mp",
    rollNo: 101
};
let student2 = {
    name: "Isha",
    spects: "42mp",
    rollNo: 103
};
console.log(student2.spects);
// student2.spects="48mp"
function f5(rating) {
    if (typeof rating === "string") {
        console.log(rating.toUpperCase());
    }
    else {
        console.log(rating);
    }
}
f5("five star");
