//6.	Elaborar un algoritmo para leer las notas de 1 estudiantes.
//Calcular el promedio de cada estudiante de la siguiente manera:
//Nota 1 (20%)
//Nota 2 (30%)
//Nota 3 (50%)

let nota1 = parseInt(prompt('Ingrese la primera nota: '));
let nota2 = parseInt(prompt('Ingrese la segunda nota: '));
let nota3 = parseInt(prompt('Ingrese la tercera nota: '));

let promedio = (nota1 * 0.20) + (nota2 * 0.30) + (nota3 * 0.50)

alert('Su promedio es ' + promedio)