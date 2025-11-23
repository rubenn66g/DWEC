/*let tablero = [];
let turno="X";
function crearTabla() {
  tablero = []; 
  for (let i = 0; i < 3; i++) {
    tablero[i] = []; 
    for (let j = 0; j < 3; j++) {
      tablero[i][j] = ""; 
    }
  }
  mostrarTabla();
}

function mostrarTabla() {
  let html = "";

  for (let i = 0; i < 3; i++) { 
    for (let j = 0; j < 3; j++) { 
      if (tablero[i][j] === "") {
        html += "_";
      } else {
        html += tablero[i][j];
      }
      if (j < 2) {
        html += " | ";
      }
    }
    html += "<br>";
  }

  document.getElementById("tablero").innerHTML = html;
}


function jugar(fila, columna) {
    if (tablero[fila][columna] === "") {
        if (turno === "X") {
          tablero[fila][columna] = "X";
          turno = "O";
        }else {
            tablero[fila][columna] = "O";
            turno = "X";
        }

    mostrarTabla();

      } else {
        document.getElementById("mensaje").textContent = "Casilla ocupada, elige otra";
      }
    }
*/

class TresEnRaya{
  tablero;
  turnoJugador;
  contador;
  constructor(){
    this.reiniciaPartida();
  }
  //devuelve:
  //0 si el movimiento es correcto
  //1 si la casilla esta ocupada
  //2 Si no es el turno del jugador
  //3 si con ese mov el jugador gana
  //4 empate
  mueveJ1(celdaX,celdaY){
    if(this.mueve(celdaX,celdaY,1)==0 || this.mueve(celdaX,celdaY,1)==3)
    this.contador++;
    
    if(this.mueve(celdaX,celdaY,1)==0 &&this.contador==9){
      return 4;
    }
    return this.mueve(celdaX,celdaY,1);
  }
  mueveJ2(celdaX,celdaY){
    if(this.mueve(celdaX,celdaY,-1)==0 || this.mueve(celdaX,celdaY,-1)==3)
    this.contador++;
    if(this.mueve(celdaX,celdaY,-1)==0 &&this.contador==9){
      return 4;
    }
    return this.mueve(celdaX,celdaY,-1);
  }
  mueve(celdaX,celdaY,jugador)
  {
    if(this.tablero[celdaX][celdaY]==0){
        if(jugador==this.turnoJugador){
            this.tablero[celdaX][celdaY]= jugador;
            this.turnoJugador=this.turnoJugador*-1;
        }
        else{
            return 2;
        }
    
    
    if(this.victoria(jugador)==true){
      return 3;
    } 
    return 0;
  }
    else{
      return 1;
    } 
  }
  reiniciaPartida(){
    this.tablero=new Array(3);
    for(fila of this.tablero){
      fila=new Array(3);
      fila[0]=0;
      fila[1]=0;
      fila[2]=0;
    }

    this.turnoJugador=1;
    this.contador=0;
    
  }

  victoria(jugador){
    victoria=false;
    for (let i = 0; i < 3; i++) {
      if (this.tablero[i][0] == jugador && this.tablero[i][1] == jugador && this.tablero[i][2] == jugador)
        victoria=true;
      if (this.tablero[0][i] == jugador && this.tablero[1][i] == jugador && this.tablero[2][i] == jugador)
        victoria=true;
    }

    if (this.tablero[0][0] == jugador && this.tablero[1][1] == jugador && this.tablero[2][2] == jugador)
      victoria=true;
    if (this.tablero[0][2] == jugador && this.tablero[1][1] == jugador && this.tablero[2][0] == jugador)
      victoria=true;

    return victoria;
  }
}

juego =new TresEnRaya();
