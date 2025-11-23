let miDiv1=document.getElementById("div1");

//defino eventos a este div
miDiv1.addEventListener("mouseover",cambiaColorE);
miDiv1.addEventListener("mouseout",cambiaColorS);


let miDiv2=document.getElementById("div2");
miDiv2.addEventListener("mouseover",cambiaColorE);
miDiv2.addEventListener("mouseout",cambiaColorS);
document.addEventListener("mousemove",(e)=>{
    if(e.clientX>500) 
        e.target.style.backgroundColor="pink"
    else
        e.target.style.backgroundColor="white";
    });

function cambiaColorE(event){
    if(event.altKey)
        event.target.style.backgroundColor="red";
    else if(event.ctrlKey)
        event.target.style.backgroundColor="yellow";
        else
            event.target.style.backgroundColor="blue";
}

function cambiaColorS(event){
    event.target.style.backgroundColor="white";
}