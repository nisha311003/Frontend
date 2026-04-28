// let para = document.querySelector("p");
// console.log(para.innerText);
// console.log(para.textContent);

// para.innerText="Hii hello how are you"
// para.textContent="hiiiiiiiiiiiiiiiiiii"
// para.innerHTML="<i>How are you today</i>"

//Changing styles

// let h1 = document.querySelector("h1")
// h1.style.color="white"
// h1.style.backgroundColor="Blue"
// h1.style.fontSize="40px"
// h1.style.padding="20px"
// h1.style.textShadow="2px 3px 2px yellow"


//Changing attribute

// let img =document.querySelector("img")
// img.setAttribute("src", "./image.png")
// console.log(img.getAttribute("src"));
//img.removeAttribute("src")

//Creating and adding elements
// let h2 = document.createElement("h2")
// h2.innerText="Creating element using CreateElement Method";
// let body = document.body
// // body.appendChild(h2,"time is 10:20")//extra content is not adding

// let p = document.createElement("p")
// p.innerHTML="<i>Creating another element with paragraph tag</i>"
// // body.appendChild(h2,p)

// // console.log(body);
// let div = document.querySelector("div")
// div.appendChild(p)  

// let i=document.createElement("i");
// i.innerText="Today also one more celebrity is coming to lpu...";

// let b=document.createElement("b") 
// b.innerText="Sonam Bhajwa"

// let br = document.createElement("br")

// let div = document.querySelector("div")
// div.append(i, "Extra text")
// div.prepend(b)

// let h1=document.querySelector("h1")
// h1.classList.add("heading")
// h1.classList.remove("heading")

let div = document.getElementById("box")
let button = document.querySelector("button")
button.addEventListener("click", ()=>{
    div.classList.toggle("lpu")
})