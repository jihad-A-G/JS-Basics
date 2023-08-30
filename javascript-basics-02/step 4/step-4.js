const btn=document.querySelector("button");
const inputs=document.querySelectorAll("input");
let ans;

btn.addEventListener("click",()=>{
    ans=confirm("Do you want to clear all fields? if yes press ok");
    if(ans===true){
        inputs.forEach(input=>{input.value=""});
    }
})

