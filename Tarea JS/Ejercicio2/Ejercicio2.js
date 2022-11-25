//2.	En un cierto país el impuesto que se debe pagar por artículos importados se calcula mediante las siguientes reglas:
let precio;
let resultado = 0;

precio= 19

if(precio > 20 && precio <= 40){
    resultado = precio * 0.30;
    console.log('El precio del articulo es de ' + precio + ' dolares' ,'\n' +
                'El impuesto a pagar es del 30% por lo cual debe pagar ' + resultado + ' dolares de impuesto' )
} else if(precio > 40 && precio <= 500){
    resultado = precio *0.40;
    console.log('El precio del articulo es de ' + precio + ' dolares' ,'\n' +
                'El impuesto a pagar es del 40% por lo cual debe pagar ' + resultado + ' dolares de impuesto' )
} else if(precio > 500){
    resultado = precio *0.50;
    console.log('El precio del articulo es de ' + precio + ' dolares' ,'\n' +
                'El impuesto a pagar es del 50% por lo cual debe pagar ' + resultado + ' dolares de impuesto' )
} else{
    console.log('El precio del articulo no genera impuestos.')
}                