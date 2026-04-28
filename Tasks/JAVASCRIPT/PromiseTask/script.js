
async function handlePromise(){
    try {
        let response = await fetch("https://fakestoreapi.com/products")

        let actualData = await response.json();
    

        let container = document.querySelector(".container");

        actualData.forEach((ele, index)=>{

            let div = document.createElement("div");
            div.classList.add("cards")

            let image = document.createElement("img")
            let category = document.createElement("p");
            let price = document.createElement("p")
            let rating=document.createElement("p")
            let br = document.createElement("br")
            let buyNow = document.createElement("button")

            buyNow.classList.add("buyNow")

            image.setAttribute("src",ele.image)
            image.style.height="100px";
            category.innerHTML=`Category: ${ele.category}`
            price.innerHTML=`Price: ${ele.price}`
            rating.innerHTML=`Rating: ${ele.rating.rate}`
            buyNow.innerText="Buy Now"

            div.append(image, br, category,price,rating, buyNow)

            container.appendChild(div)
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
handlePromise()