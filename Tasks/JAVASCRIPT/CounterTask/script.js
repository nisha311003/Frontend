let count=0;

let inc = document.getElementById("inc")
let dec = document.getElementById("dec")
let res = document.getElementById("res")

inc.addEventListener("click", ()=>{
    let value = document.getElementById("value")
    count++;
    value.innerText=count;
})

dec.addEventListener("click", ()=>{
    let value = document.getElementById("value")
    if(count > 0){
        count--;
        value.innerText=count;
    }
    
})

res.addEventListener("click", ()=>{
    let value = document.getElementById("value")
    count=0;
    value.innerText=count
    
})
