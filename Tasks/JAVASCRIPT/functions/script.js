// function lunchBreak(){
//     console.log("Lunch break is over.....🥱");
// }
// lunchBreak();

// function coffeeMachine(customer, typeOfTea="Hot Tea"){

//     console.log("Type of tea ", typeOfTea);
//     console.log("Boil the water");
//     console.log("Add Tea powder");
//     console.log("Add milk");
//     console.log("Add sugar");

//     // console.log(Enjoy);
//     console.log("Prepared for",customer, "😁");
// }
// coffeeMachine("Neha","Cold Tea");
// coffeeMachine("Aman");
// coffeeMachine("Sam","Ice Tea");


// function details(university, student, cgpa){
//     console.log("Name of the university: ", university);
//     console.log("Name of the student: ", student);
//     console.log("Student cgpa is: ", cgpa);
 
// }
// details("nisha","lpu",8.82);


// function greeting(num1, num2){
//     console.log("Now we are returning the value");
//     return num1+num2;
    
// }
// console.log(greeting(5,2));

// function f1(){
//     console.log("Hiii");
//     return;
// }
// let res = f1();
// console.log(res);

// function f2(){
//     console.log("Helllo");
// }
// let res1 = f2();
// console.log(res1);


// //Anonymous function
// let af = function(){
//     console.log("This is anonymous function");
// }
// af();

// //function expression

// let b = function sleepMode(){
//     console.log("I am feeling sleepy......🥱");
    
// }
// //sleepMode() // ->Reference error (not defined)
// b();

// let a = student =>{
//     console.log(student,"am feeling sleepy....");
    
// }
// a("I");

// let d =() =>
//     "Hii"
// let c = d();
// console.log(c);


// //HIgher Order Callback

// function lpu(student){
//     console.log("Example for HOC");
//     // console.log(student); //prints function ƒ hello(){console.log("Hii from Hello")};

//     student();

// }
// function hello(){
//     console.log("Hii from Hello");
    
// }

// lpu(hello);
//------------------------------------------

// Global Scope 
// -----------------------------------------
// var a=10;
// let b =20;
// const c=30;

// console.log(a);
// console.log(b);
// console.log(c);

// function f1(){
//     console.log(a);
//     console.log(b);
//     console.log(c); 
// }
// f1();

// if(true){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
//-------------------------------------------

//Function scope/local scope
//-------------------------------------------

// function f1(){
//     var a=10;
//     let b=20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c); 
// }
// f1();

// console.log(a);
// console.log(b);
// console.log(c);
//-------------------------------------------------

//Block scope
//----------------------------------------------

if(true){
    var a=10;
    let b=20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c); 
}

console.log(a); //only a prints after block scope
//var has global as well as block scope
// console.log(b);//reference error not defined
// console.log(c); //reference error not defined


// function getNotification(){
//     console.log("Hey!! i reached home Safely...😊");
    
// }

// function travelling(message){
//  console.log("Going to home....🚘");
//  message()
 
// }
// travelling(getNotification)




// function f1(){
//     console.log("This is higher order function i am going to return f2 function");
//   return function f2(){
//     console.log("This is returned function");
//    }
// }
// let a=f1()
// // console.log(a);
// a()



// function outer(){
//     let like=10;
//      function inner(){
//             console.log("Your likes count: ",like);
//      }
//      inner()
// }
// outer()





// function movieplan(){
//     console.log("Planning for movie");

//      function bookTicket(){
//         console.log("Booked ticket");
         
//      }
//      bookTicket()

//      function buyPopCorn(){
//         console.log("Buying pop corn..🍿");
//      }
//      buyPopCorn()

//      function enjoy(){
//          console.log("Enjoying Movie...🎥");
//      }
//      enjoy()

// }
// movieplan()



// var a=10;
// let b=20;
// const c=30;


// console.log(a);
// console.log(b);
// console.log(c);



// function f1(){
//    console.log(a);
//    console.log(b);
//    console.log(c);  
// }
// f1()



// if(true){
// console.log(a);
// console.log(b);
// console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);





// function f1(){
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);   
// }
// f1()
//   console.log(a);
//     console.log(b);
//     console.log(c); 


// if(true){
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//  console.log(a);
//     console.log(b);
//     console.log(c);


function flipkart(product1, product2, ...cart){
    console.log(product1);
    console.log(product2);
    console.log(cart);
    
}
flipkart("Shirt", "Shoes","Watch","Mobile");