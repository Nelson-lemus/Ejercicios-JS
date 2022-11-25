//7.	Elaborar un algoritmo para leer la nota de diez estudiantes y mostrar cantidad de aprobados y reprobados.

let aprobados = 0;
let reprobados = 0;

for(i = 0; i < 10; i++){
let notas = parseInt(prompt("Ingrese las notas de los estudiantes: "))

if(notas >= 6 && notas <=10){
    aprobados++
} else if(notas < 6 && notas >= 0){
    reprobados++
} else{
    alert('La nota que ingreso no esta en el rango de 0 a 10')
    
}
    
}

alert('La cantidad de aprobados son ' + aprobados + ' y la cantidad de reprobados es de ' + reprobados)