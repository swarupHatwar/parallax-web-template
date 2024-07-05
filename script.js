
let moon = document.getElementById("moon");

let train = document.getElementById("train");

let text=document.getElementById("text");

let desertmoon = document.getElementById("desertmoon");

let man=document.getElementById("man");


window.addEventListener("scroll",()=>{

     let value=window.scrollY;
     moon.style.top= value*.9 + "px"; 
     
     train.style.left= value * 1.5 + "px";
    
     desertmoon.style.top= value * 0.3 + "px";

     man.style.left= value * .6 + "px"
     
     text.style.top=value= 80 + value* -0.2 + '%';
});

// progress bar


let calcScrollvalue=()=>{
     let scrollProgress=document.getElementById('progress')
     let pos= document.documentElement.scrollTop;
   
     let calcHeight= document.documentElement.scrollHeight - document.documentElement.clientHeight;
     let calcScrollvalue= Math.round((pos*100)/calcHeight)

     if(pos>100){
          scrollProgress.style.display= "grid";

     }
     else{
          scrollProgress.style.display= "none";
     }

     scrollProgress.addEventListener('click', ()=>{
          document.documentElement.scrollTop=0;
     })

     scrollProgress.style.background=`conic-gradient(#194eb9 ${ScrollValue}%, #67cff ${ScrollValue}%,)`;
}
window.onscroll=calcScrollvalue;
window.onload=calcScrollvalue;
