//3
let mapa = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 31, 33, 23]
];

function solucionaBusTesoro(mapa)
{
  let solucion=false;
  let sig=mapa[0][0];
  while(solucion==false){
      let sigF=Number(sig.toString()[0]);
      let sigC=Number(sig.toString()[1]);
      if(mapa[sigF-1][sigC-1] == sig){
        solucion=true;
      }
      else{
        sig= mapa[sigF-1][sigC-1];
        console.log(sig);
      }
  }
return sig;
}
console.log(solucionaBusTesoro(mapa));

//4
/*
function creartabla(dimension){
    let solucion=(Math.round(Math.random()(dimension-1)+1))*10+Math.round(Math.random()(dimension-1)+1);
    let mapa=Array(dimension).fill().map(() => Array(dimension));
    let fila,columna,numero;
    fila=Math.floor(solucion/10);
    columna=solucion%10;
    mapa[fila-1][columna-1]=solucion;

    fila=Math.floor(Math.random()*(dimension-1)+1);
    columna=Math.floor(Math.random()*(dimension-1)+1);
    numero=fila*10+columna;
    mapa[fila-1][columna-1]=solucion;
        

    for(let i=0;i<5;i++){
        fila=Math.floor(Math.random()*(dimension-1)+1);
        columna=Math.floor(Math.random()*(dimension-1)+1);
        if(mapa[fila-1][columna-1]!=undefined ||(fila==1 &&columna==1)){
            while((mapa[fila-1][columna-1]!=undefined)||(fila==1 &&columna==1)){
            fila=Math.floor(Math.random()*(dimension-1)+1);
            columna=Math.floor(Math.random()*(dimension-1)+1);
            }
        }
        mapa[fila-1][columna-1]=numero;
          numero=fila*10+columna;
    }
    mapa[0][0]=numero;

    for(let i=0;i<dimension;i++){
        for(let j=0;j<dimension;j++){
            if(mapa[i][j]==undefined){
                mapa[i][j]=(Math.round(Math.random()(dimension-1)+1))*10+Math.round(Math.random()(dimension-1)+1);
            }
        }
    }
    return mapa

}
*/
