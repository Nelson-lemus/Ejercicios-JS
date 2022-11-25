//3.	El costo de las llamadas telefónicas internacionales depende de la zona geográfica en la que se encuentre el país destino y del número de minutos hablados. En la siguiente tabla se presenta el costo del minuto por zona. A cada zona se le ha asociado una clave.
//Nota: Para llamadas con duración menor a 30 minutos se hace descuento del 10%.

let clave;
let minutos;
let tarifa = 0;
clave = 12;
minutos = 31;

switch(clave){
    case 12:
        tarifa = minutos * 2.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: America del Norte" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: America del Norte" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 15:
        tarifa = minutos * 2.20;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: America Central" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: America Central" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 18:
        tarifa = minutos * 4.50;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: America del Sur" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: America del Sur" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 19:
        tarifa = minutos * 3.50;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Europa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Europa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 23:
        tarifa = minutos * 6.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Asia" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Asia" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 25:
        tarifa = minutos * 6.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Africa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Africa" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
    case 29:
        tarifa = minutos * 5.00;
        if(minutos < 30){
            tarifa = (tarifa * 0.10) - tarifa;
            console.log("Zona: Oceania" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + Math.abs(tarifa));
        }else{
            console.log("Zona: Oceania" + "\n" +
                        "Numero de minutos: " + minutos + "\n" +
                        "Tarifa: " + tarifa);
        }
        break;
}