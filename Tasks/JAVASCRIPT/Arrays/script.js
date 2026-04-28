// let arr=["Palak","Himani","Naina"]
// arr.push("Poornima")
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift("Garv")
// console.log(arr);

// arr.shift()
// console.log(arr);



//delete
// let arr=["Palak","Himani","Naina"]
// arr.splice(0,1)
// console.log(arr);

//adding
// let arr=["Palak","Himani","Naina"]
// arr.splice(2,0,"Sambar")

// console.log(arr);


//update
// let arr=["Palak","Himani","Naina"]
// arr.splice(1,1,"Garv 😎")
// console.log(arr);


// function sorry(){
//     for(let i=1;i<=50;i++){
//         console.log("Mother Himani...");
//         console.log("Hello Himani are you there 🤔");
//     }
// }
// sorry()


// let days = ["Friday", "Saturday", "Sunday"];

// days.forEach((ele,ind)=>{
//     console.log(ele);
//     console.log(ind);
    
// })

// let students = ["Garv","Sai","Samreen","Naina"];
// students.forEach((person)=>{
//     console.log(`Hello ${person} Good morning....`);
    
// })


// let numbers = [1,2,3];
// let result = numbers.map((ele)=>{
//     return ele*2;
// })
// console.log("Actual Array: ", numbers);

// console.log("Returned Array: ",result);

// let prices =[200,45,79,30,798];
// prices.map((ele)=>{
//     let tax =30;
//     console.log(ele+tax);
    
// })


// let ages = [18,20,35,40,50,77];
// let res = ages.filter((ele)=>{
//     return ele >30;
// }) 

// console.log(res);


// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let res = numbers.filter((ele)=>{
//     return ele%2 ==0;
// })
// console.log(res);


// let number=[1,2,3];
// let res = number.reduce((acc, val)=>{
//     return acc+val; 
// })
// console.log(res);


//----Array destructuring------

// let fruits =["Mango", "Papaya", "Watermelon", "MuskMelon", "Kiwi"];

// let [a, b, c, d, e] = fruits;

// console.log(c);


let details=["Headphones", "Laptop","Shirt", [3500, 54000,2500,2000], "Shoes"];
let[a,b,c,[first, second, third, fourth], d] =details;
console.log(third);


let numbers=[474,506,7,8];
let copiedArrays = [101,...numbers,102]
console.log(copiedArrays);
