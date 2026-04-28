let price:number;
price=799;
console.log(price);

let productName:string
productName="HeadPhones";
console.log(productName);

let isStudent:boolean;
isStudent=true;
console.log(isStudent);

let address:undefined;
address=undefined;
console.log(address);

let salary:null;
salary=null;
console.log(salary);

let transactionId:bigint;
transactionId=39n;
console.log(transactionId);

let user1:Symbol;
user1=Symbol("Ram")
console.log(user1);

let num1:bigint;
num1 = 30n;
let num2:bigint;
num2=40n;
console.log(num1+num2);

let rollNos:number[]=[101, 203];
console.log(rollNos);
let branches:string[]=["CSE","ECE"]
console.log(branches);

let mixed:(number|string|boolean)[]=["kalam", 35, true]
console.log(mixed);

// let details:{name:string,age:number,address:{city:string}}={
//     name: "Ram",
//     age: 34,
//     address:{
//         city: "Hyd"
//     }
// }
// console.log(details);

function smileCompetition():string{
    return "Himani"
}
let first=smileCompetition();
console.log(first);

function latecomers(student:string, rollNo:number){
    console.log(student);
    console.log(rollNo);
}
latecomers("Rahil", 420)
 

let canteen:any;
canteen="tea";
canteen=15
canteen=true
canteen=null

//tuple-fixed order

let details:[name:string,age:number,isEmployee:boolean]=["kalam",20,true]
console.log(details);

//literals-you can use your custom values
let emotion: "angry"| "smile"
emotion="smile" 
console.log(emotion);

function himani():void{

    console.log("Himani");
    
}
himani();

let message:unknown
message="Hello"
message=45
message="break"
if(typeof message==="string"){
    console.log(message.toUpperCase());
}
else{
    console.log(message);
    
}


function lunchBreak(time:number,day?:string){
    console.log("Lunch time is: ", time);
    console.log("Day is: ", day);

}
lunchBreak(1)

function fun(mood:string="Smile"){
    console.log(mood);
    
}
fun("angry")

let a=(college:string, buildingNo:number, isCollegeGood:boolean):string=>{
    console.log(college);
    console.log(buildingNo);
    console.log(isCollegeGood);
    return "duck out"
    
}
a("LPU", 38, false)

function chat(...rest:string[]){
    console.log(rest);
    
}
chat("hii", "hello", "khemcho")

function listed(...rest:number[]){
    console.log(rest);
    
}
listed(1,2,3,4,5)

function mix(...rest:(number|string)[]){
    console.log(rest);
    
}
mix("hii", "hello", 1, 2, 3)

interface user{
    name:string,
    readonly spects:string,
    rollNo:number
}

let student1:user={
    name:"Nisha",
    spects:"28mp",
    rollNo:101
}


let student2:user={
    name:"Isha",
    spects:"42mp",
    rollNo:103
}

console.log(student2.spects);
// student2.spects="48mp"

function f5(rating:number|string){

    if(typeof rating ==="string"){
        console.log(rating.toUpperCase());
        
    }
    else{
        console.log(rating);
        
    }
}
f5("five star")
