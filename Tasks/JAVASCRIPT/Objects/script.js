// let details={
//     Sname: undefined,
//     Fname: "Nisha",
//     pincode: 800020,
//     salary:undefined,
//     contact:8797126190,
//     empid:undefined,
//     company: "Capgemini",
//     location: "Banglore",
//     "@colle-ge":"LPU",
//     "1age":"22",
//     Hobbies: ["Painting","Cycling","Cooking"],
//     address:{
//         state: "Bihar",
//         city: "Patna"
//     }
// }
// details.ismarried=false;//adding new property

// delete details.ismarried;//deleting property

// details.salary = null;//updating the property

// console.log(details);
// console.log(details.salary);
// console.log(details["location"]);
// console.log(details["@colle-ge"]);
// console.log(details["1age"]);
// console.log(details.Hobbies[0]);
// console.log(details.address.city);
// console.log(Object.keys(details));

// console.log(Object.values(details));

// console.log(Object.entries(details));//gives both keys and values


// let training={
//     course:"Java Full Stack",
//     year: "Final year",
//     details:{
//         techonologies: ["Java","SQL", "React"],
//         duration: 6,
//         timings: "9-5",
//         salaryDetails:{
//             salary:0,
//             haveHolidays:false,
//             mentalHealth: undefined
//         }
//     }
// }


// let employee={
//     name:"Nisha",
//     company:"GlobalLogic",
//     salary:"5.60Lpa",
//     state:"Bihar",
//     mood: function(){
//         console.log("Sleeping mode....");
        
//     }
// }
// // Object.freeze(employee);
// // employee.role="SDE";//cannot add property
// // delete employee.salary;//cannot delete property
// // employee.company="Hitachi"; //cannot update property

// // Object.seal(employee);
// // employee.role="SDE"; //cannot add property
// // delete employee.salary;//cannot delete property
// // employee.company="Hitachi"; //can update property
// console.log(employee);
// employee.mood();


//----object destructuring------

// let product ={
//     item:"Watch",
//     price:5000,
//     details:{
//         locations: "Hyderabad",
//         warranty: 2
//     },
//     brand: "fastrack",
//     material:"steel" 
// }

// let {item, price,details:{locations, warranty},brand, material}=product
// console.log(locations);


let details={
    college:  "LPU",
    trainig: "Capgemini",
    duration: "1month 15 days"
}

let copiedObjects={...details}
console.log(copiedObjects);




