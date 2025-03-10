let  addMoreList = document.getElementById("addMoreList")
let container = document.querySelector(".container");
let pendingTask=document.querySelector(".pendingTask")

let makeToDOList = ()=>{
    let inputField = document.getElementById("inputField").value;

    if(!inputField || inputField===""){
        let errorMsg = document.createElement("p");
        errorMsg.textContent="SORRY! Empty input is not allowed"
        errorMsg.classList.add("showError");
        document.body.appendChild(errorMsg);
        setTimeout(()=>{
          errorMsg.textContent="";
          errorMsg.classList.remove("showError")
        },2000)
        return;
    }
    let makeList = document.createElement("p");
    makeList.textContent= inputField;
    makeList.classList.add("makeList");
    // let createDeleteBtn= document.querySelector(".createDelete")
    
      let createDeleteBtn = document.createElement("button");
      createDeleteBtn.innerHTML=`<i class="fa-solid fa-trash"></i>`;
      createDeleteBtn.classList.add("createDelete")

      container.appendChild(makeList);
      makeList.appendChild(createDeleteBtn)

      pendingTask.textContent=`You have ${document.querySelectorAll(".makeList").length} pending tasks`;

      let clearAll= document.querySelector(".clearAll")
      if(makeList && !clearAll){
        let clearAll = document.createElement("button");
        clearAll.textContent="Clear";
        clearAll.classList.add("clearAll");
        // clearAll.style.color="red"
        container.appendChild(clearAll);

      clearAll.addEventListener("click",()=>{
        let allMakeList = document.querySelectorAll(".makeList")
      allMakeList.forEach((item)=>{
        // container.removeChild(item);
        item.remove();
      });
      pendingTask.textContent="";
      clearAll.remove();
          }); 
      }
     
      createDeleteBtn.addEventListener("click",()=>{

        pendingTask.textContent=`You have ${document.querySelectorAll(".makeList").length-1} pending tasks`;
        container.removeChild(makeList);

        if(document.querySelectorAll(".makeList").length===0){
          let clearAll = document.querySelector(".clearAll");
          pendingTask.textContent="";

          if(clearAll){
         clearAll.remove();
          }
        }
      })
      document.getElementById("inputField").value="";
    };

    

addMoreList.addEventListener("click",makeToDOList);

inputField.addEventListener("keypress",(event)=>{
  if(event.key==="Enter"){
    event.preventDefault();
    addMoreList.click();
  }
})
