//converting json to javascript

// let classBunk=`{
//         "Students":30,
//         "Branch": "Great CSE",
//         "RoomNo": 906

// }`
// let javascriptObject=JSON.parse(classBunk)
// console.log(javascriptObject);


//converting javascript to json

// let classBunk={
//         Students:30,
//         Branch: "Great CSE",
//         RoomNo: 906

// }
// let jsonObject=JSON.stringify(classBunk)
// console.log(jsonObject);

// let promise1=fetch("https://fakestoreapi.com/products")
// promise1.then((response)=>{
//     // console.log(response); //response object
//     let promise2 = response.json();
//     // console.log(promise2); //again promise

//     promise2.then((actualData)=>{
//         // console.log(actualData); // [{},{},....etc]
//         actualData.forEach((ele, index) => {
//             // console.log(ele);

//             console.log("Price of the product: ",ele.price);
//             console.log("Category: ", ele.category);
            
            
//         });
        
//     })
    
    
// })
// .catch((reason)=>{
//     console.log(reason);
    
// })

async function handlePromise(){
    try {
        let response = await fetch("https://fakestoreapi.com/products")

        let actualData = await response.json();

        let container = document.getElementById("container")

        actualData.forEach((ele, index) => {
            let div = document.createElement("div");
            div.style.border="1px solid black"
            div.style.padding="10px"
            
            let title = document.createElement("h3")
            let price = document.createElement("p")
            let category = document.createElement("p")

            title.innerHTML=`Name of the product: ${ele.title}`
            price.innerHTML=`Price of the product: ${ele.price}`
            category.innerHTML=`Category of the product: ${ele.category}`

            // div.appendChild(title)
            // div.appendChild(price)
            // div.appendChild(category)
            div.append(title,price,category)

            container.append(div)
        });
        
    } catch (error) {
        console.log(error);
        
    }
}
handlePromise()