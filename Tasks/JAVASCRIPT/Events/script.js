// function handleClick(){
//     let h1 = document.querySelector("h1")
//     h1.innerText="React js"
// }

// let btn = document.getElementById("btn")
// btn.onclick=()=>{
//     let h1 = document.querySelector("h1")
//     h1.innerText="html"
// }

// let btn1 = document.getElementById("btn1")
// btn1.addEventListener("click", ()=>{
//     let h1 = document.querySelector("h1")
//     h1.innerText="CSS"
// })

// function f1(){
//     console.log("First");
    
// }
// function f2(){
//     console.log("Second");
    
// }

// let btn = document.getElementById("btn")
//  btn.addEventListener("click", ()=>{
//     console.log("First");
    
// })
// btn.addEventListener("click", ()=>{
//     console.log("Second");
    
// })
 
// let input = document.querySelector("input")
// input.addEventListener("input", ()=>{ 
//     let h2 = document.getElementById("h2")
//     h2.innerText=input.value
// })

let form = document.getElementById("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let inp = document.getElementById("name").value
    if(inp==""){
        alert("Field should not be empty!!!!")
    }
    else{
        console.log("Form submitted: ", inp);
        document.getElementById("name").value=""
    }
})

let h2 = document.querySelector("h2");
h2.addEventListener("mouseover", ()=>{
    let body = document.body
    body.style.backgroundColor="maroon"
    body.style.color="White"
})
h2.addEventListener("mouseout",()=>{
     let body = document.body
    body.style.backgroundColor="pink"
    body.style.color="White"
})

let input = document.getElementById("name")
input.addEventListener("focus",()=>{
    input.style.backgroundColor="lightblue"
})
input.addEventListener("blur", ()=>{
    input.style.backgroundColor="lightgreen"
})
input.addEventListener("keydown",()=>{
    input.style.color="purple"
})

