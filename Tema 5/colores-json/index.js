datosaMaquetar={
  "colors": [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "#FF0000"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
  ]
}
window.onload=()=>{
    cont=document.getElementById("contenedor");
    for(color of datosaMaquetar.colors){
        miDiv=document.createElement("div");
        h2=document.createElement("h2");
        h3=document.createElement("h3");
        h31=document.createElement("h3");
        h32=document.createElement("h3");
        h33=document.createElement("h3");
        coloresFondo=miDiv.style.backgroundColor=color.code.hex;
        if(color.color=="black"){
            miDiv.style.color="white";
        }
        h2.textContent=color.color;
        h3.textContent=color.category;
        h31.textContent=color.type;
        h32.textContent=color.code.rgba;
        h33.textContent=color.code.hex;
        miDiv.appendChild(h2);
        miDiv.appendChild(h3);
        miDiv.appendChild(h31);
        miDiv.appendChild(h32);
        miDiv.appendChild(h33);
        cont.appendChild(miDiv);
        

    }
}