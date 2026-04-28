let list = document.querySelector("#tasklist")
let addBtn = document.querySelector("#addBtn")
let task = document.querySelector("#inputTask")
addBtn.addEventListener("click", ()=>{
    let input = task.value.trim();
    if(input ==""){
        alert("Please enter a task");
        
    }else{
        let li = document.createElement("li");
        let span = document.createElement("span")
        let deleteBtn = document.createElement("button")

        span.textContent=input
        deleteBtn.textContent="Delete"
        deleteBtn.style.backgroundColor="red"
        deleteBtn.style.color="white"

        li.append(span, deleteBtn)
        list.appendChild(li);

        document.getElementById("inputTask").value="";

        deleteBtn.addEventListener("click",()=>{
            li.remove();
        })

        span.addEventListener("click",()=>{
            span.classList.toggle("completed")
        })
    }
})
