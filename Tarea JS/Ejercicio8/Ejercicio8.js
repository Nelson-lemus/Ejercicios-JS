//8.	Elabore un algoritmo con un menú simple con las cuatro operaciones básicas: sumar, restar, multiplicar, dividir.

let numero1 = parseInt(prompt('Ingrese el primer numero de la operacion'))
let numero2 = parseInt(prompt('Ingrese el segundo numero de la operacion'))
let eleccion = parseInt(prompt('Ingrese el tipo de operacion. Elige: \n "1" para sumar \n "2" para restar \n "3" para multiplicar \n "4" para dividir '))
let resultado = 0


function operacion(tipo){

    if(tipo == 1){
    resultado = numero1 + numero2
    alert(resultado)
    } else  if(tipo == 2){
    resultado = numero1 - numero2
    alert(resultado)
    } else  if(tipo == 3){
    resultado = numero1 * numero2
    alert(resultado)
    } else  if(tipo == 4){
    resultado = numero1 / numero2
    alert(resultado)
    } else{
        alert("No eligio una operacion de acuerdo al indice")
    }
}
operacion(eleccion)
