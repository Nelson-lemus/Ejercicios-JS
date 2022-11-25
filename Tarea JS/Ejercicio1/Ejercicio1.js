//1.	Leer un número entero y determinar si tiene 3 dígitos.

let num_ent= 777;
let string = num_ent.toString();

if (string.length===3) {
    console.log('El numero entero tiene 3 digitos.')
} else {
    console.log('El numero entero no es de 3 digitos, este tiene ' + string.length + ' digitos.')
}