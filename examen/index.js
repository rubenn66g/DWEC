
function ejercicio1(cadena){
    let cont=0;
    cadena=cadena.toLowerCase();
    for(i=0;i<cadena.length;i++){
        if(cadena.charAt(i)=='a' ||cadena.charAt(i)=='e' ||cadena.charAt(i)=='i'||cadena.charAt(i)=='o'){
            cont++
        }
    }
    return cont
}

console.log(ejercicio1("hola"));


function ejercicio2(numero){
    for(i=0;i<numero;i++){
        if(numero[i] / 3==0){
        console.log("Div3");
        }
        else{
            if(numero[i]/ 5==0){
                console.log("Div5");
            }
            else{
                if(numero[i]/3==0 && numero5/5==0){
                    console.log("Div3+Div5");
                }
                else{
                    console.log(numero[i]);
                }
            }
        }
    }
}
    

console.log(ejercicio2(5));


function ejercicio3(cadena){
    let correcto=false;
    let cont=0;
    let cont1=0;
    for(i=0;i<cadena.length;i++){
        if(cadena.charAt(0)==')'){
            correcto=false;
        }
        else{
            if(cadena[i]='('){
                cont++;
            }
            if(cadena.charAt[i]==')'){
                cont1++;
            }
            if(cont==cont1){
                correcto=true;
            }
        }
    }
    return correcto;
}
console.log(ejercicio3(")assdd()"))


function ejercicio4(minutos){
    let segundos=60;
    for(i=segundos-1;i>=-1;i--){
        if(i==0){
            minutos--;
            i=59;
        }
        if(minutos==0 && segundos==0){
            console.log("hemos terminado");
        }
        console.log(minutos+":"+i);
    }

}
console.log(ejercicio4(1))
function ejercicio5(array){
    for(i=0;i<array.length;i++){
        array[i].replace("/",",");
        Number(array[i]);
        let fechas=[new Date(array[i])];
        for(j=0;j<fechas-length;j++){
            console.log(fechas[i]);
        }
    }
}
console.log(ejercicio5(["12/05/1999","13/06/2000"]));


function ejercicio6(productos,cat){
    let precioTotal=0;
    for(i=0;i<productos.length;i++){
        if(productos[i].categoria==cat){
            precioTotal+=(productos[i].precio*productos[i].stock);
        }
        if(cat=""){
            precioTotal+=(productos[i].precio*productos[i].stock);
        }
    }
    return precioTotal;
}
console.log(ejercicio6([
    { id: 1, nombre: "Laptop Gamer", categoria: "Electrónica", precio: 1500, stock: 10 },
    { id: 2, nombre: "Silla de Oficina Ergonómica", categoria: "Hogar", precio: 250, stock: 20 },
    {id: 3, nombre: "Libro 'Clean Code'", categoria: "Libros", precio: 45,stock:50}],"Electrónica"));
class Cuenta{
    titular;
    saldo=0;
    constructor(titular,saldo){
        this.titular=titular;
        this.saldo=saldo;
    }

    depositar(dinero){
        this.saldo+=dinero;
    }

    retirar(dinero){
        let ingresado=false;
        if(dinero<=this.saldo){
            this.saldo-=dinero;
            ingresado=true
        }
        return ingresado;
    }
}

class CuentaCorriente extends Cuenta{
    limite;
    constructor(titular,saldo,limite){
        super(titular,saldo);
        this.limite=limite;
    }
    retirar(dinero){
        this.saldo-=dinero+this.limite;
    }
}

class CuentaAhorro extends Cuenta{
    tasa;
    constructor(titular,saldo,tasa){
        super(titular,saldo);
        this.tasa=tasa;
    }
    aplicarInteres(){
        let intereses=this.saldo*this.tasa;
        this.saldo+=intereses
    }
}

let cuenta1=new CuentaCorriente("ruben",1000,400);
let cuenta2=new CuentaAhorro("ruben",500,10);