let vueltas = parseInt(prompt("¿Cuántas vueltas querés dar?"));
let numero = parseInt(prompt("¿Qué número quéres sumar?"));
alert("OK, ahí vamos! Sumaremos " + numero + ", " + vueltas + " veces");
let suma = 0;

for(let i = 1; i <= vueltas; i++) {
    suma = suma + numero;
    console.log(suma);
}

alert("Luego de " + vueltas + " vuelta(s), el resultado es: " + suma);