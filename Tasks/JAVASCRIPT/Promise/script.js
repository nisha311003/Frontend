// console.log("Order placed 😁");

// let swiggy = new Promise((resolve, reject)=>{
//     let isFoodAvailable=true;
//     setTimeout(()=>{
//         if(isFoodAvailable){
//             resolve("Food Delivered...😎")
//         }
//         else{
//             reject("Delivery delayed because of heavy rain...😞")
//         }
//     },8000)
// })

// async function handleOrderPromise(){
//     try {
//         let value = await swiggy;
//         console.log(value);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// handleOrderPromise()

// // swiggy.then((data)=>{
// //     console.log(data);
    
// // })
// // .catch((reason)=>{
// //     console.log(reason);
    
// // })
// // console.log("Doing other works...🤸‍♂️");

// console.log("Naina is waiting for bus...🚍");
// let transport = new Promise((resolve, reject)=>{
//     let isBusArrived = false;
//     setTimeout(()=>{
//         if(isBusArrived){
//             resolve({
//                 name: "Orange Travells",
//                 busNo: "KS07123",
//                 busStatus: "Arrived"
//             })
//         }else{
//             reject("Bus has delayed...😞")
//         }
//     },5000) 
// })

// async function handlePromise(){
//     try{
//         let value = await transport;
//         console.log(value);

//     }catch(error){
//         console.log(error);
        
//     }
// }
// handlePromise()

// // transport.then((data)=>{
// //     console.log("Travel operator name: ",data.name);
// //     console.log("Bus number: ", data.busNo);
// //     console.log("Bus status: ", data.busStatus);

    
// // })
// // .catch((reason)=>{
// //     console.log(reason);
    
// // })

 