const text=document.querySelector(".auto");
const textLoad=()=>
{
    setTimeout(()=>{
        text.textContent="Web Developer";
    },0);
    setTimeout(()=>{
        text.textContent=" Passionate Coder";
    },1000);
    setTimeout(()=>{
        text.textContent="Fond of Sleeping";
    },2000);
}
 setInterval(textLoad,6000);