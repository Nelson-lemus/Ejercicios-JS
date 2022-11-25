//5.	Elaborar un algoritmo para leer la edad de 10 personas y mostrar cuantos son mayores de edad.

const array = [13,14,15,16,17,18,19,20,21,22];
let contador = 0;

array.forEach(value => {
    if(value >= 18){
        contador++;
        console.log(value);
    }
})

console.log("Total de personas mayores de edad: " + contador);

