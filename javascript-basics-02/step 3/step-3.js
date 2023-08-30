const div=document.querySelector("div");
const input=document.querySelector("#name");

input.addEventListener("keyup",()=>{
    div.textContent=input.value;
})