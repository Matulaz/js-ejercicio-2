// Práctica de JavaScript 2
//Testeo de linkeado!
console.log("hola mundo!") 

// 1)Imprime los números del 1 al 10
// for( var i = 1; i<=10 ; i++){
//     console.log(i)
// }


// // 2)Imprime los números pares del 2 al 20
// for (var i = 2; i<=20 ; i++){
//     if (i % 2 == 0){
//     console.log(i)
//     }
// }


// // 3)Imprime los números impares del 1 al 19
// for (var i = 1; i<20 ; i++){
//     if (i % 2 != 0){
//     console.log(i)
//     }
// }



// 4)Imprime los números del 10 al 1 en orden inverso
// for (var i = 10; i <=10 && i >0 ; i--){
//     console.log(i)
// }




// 5)Imprime los números del 1 al 10, pero se detiene al llegar al 5
// for (var i = 1; i <=10 ; i++){
//     if (i <= 5)[
//         console.log(i)
//     ]
// }




// 6)Imprime los números del 1 al 10, pero salta el 5
// for (var i = 1; i <=10; i++){
//     if (i != 5){
//         console.log(i)
//     }
// }




// 7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
// function decirNombre (nombre){
//     alert(`Hola ${nombre}`)
// }

// decirNombre('Matias')


// 8)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta
// function saludar(nombre){
//     return `Hola ${nombre}`
// }

// alert(saludar('Matias'))



// 9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
// function sumar(a,b){
//     return a+b
// }
// console.log(sumar(10,15))



// 10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
//Probamos una arrow function
//syntax
//()=>expression ANONIMA
//declaro_variable = (parametros) => {cuerpo_de_la_funcion}

// let restar = (a,b) => {return a-b}
// console.log(restar(10,5))



// 11)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null 

// let calcular = (operacion,a,b) => {
//     switch(operacion){
//         case '+':
//         return a+b;
//         break;
//         case '-': 
//         return a-b;
//         break;
//         default: 
//         return null;
//     }
// }

// console.log(calcular('*',10,3))



// 12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

// function contarHasta(numero){
//     for(var i = 1; i <= numero; i++){
//         console.log(i)
//     }

// }

// contarHasta(10)



// 13)Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.



//NO RESUELTO!!!!
// function calculadora(){

//     let consulta = prompt('Necesitas usar calculadora? \nResponda: SI - NO');

//     if (consulta == 'SI'){
//             let num1 = parseInt(prompt("Ingrese el Primer numero"));
//             let num2 = parseInt(prompt("Ingrese el segundo numero"));
//             let operacion = prompt("Ingrese la operacion que desea realizar");

//             console.log(num1, operacion, num2)

//             calculadora();
//     }else{
//         console.log("El programa ha finalizado")
//     }

// }

// calculadora();




// 14)hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..

// for (var i = 1; i <= 25; i++){

//         let j = 11
//         let resultado = j*i
//         console.log(resultado)

// }


// 15)hacer  un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares ingresan valores por teclado

// let sumaPar = 0
// let sumaImpar = 0

// for(var i = 1; i<=5; i++){
//     let num = prompt("Porfavor, ingresa un numero")

//             if (num%2 == 0){
//                 sumaPar++
//             }else{
//                 sumaImpar++
//             }

// }

// console.log(`Ingresaste ${sumaPar} numeros PAR y ${sumaImpar} numeros IMPAR`)


// 16)hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas. 
// 17)Se cuenta con la siguiente información:
// 	Las edades de 5 estudiantes del turno mañana.
// 	Las edades de 6 estudiantes del turno tarde.
// 	Las edades de 11 estudiantes del turno noche.
// Las edades de cada estudiante deben ingresarse por teclado.
// a)	Obtener el promedio de las edades de cada turno (tres promedios).
// b)	Imprimir dichos promedios (promedio de cada turno).
// c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.


// 18)Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// a)	La cantidad de valores negativos ingresados.
// b)	La cantidad de valores positivos ingresados.
// c)	La cantidad de múltiplos de 15.
// d)	El valor acumulado de los números ingresados que son pares.

// 19)hacer un programa que lea los lados de 4 triángulos, e informar:
// a)	De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno 
// b)	Cantidad de triángulos de cada tipo.
// c)	Tipo de triángulo del que hay menor cantidad. 

// 20)hacer  una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
// Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
// 4 5 6 7 8 9 10

// 21)Hacer  una función que reciba tres enteros y retorne el promedio.

// 22)Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.
// 23)
// hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final !¡

// 24)Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

// 25)Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

// 26)Definí una función generarEmail que reciba como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

// 27)Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje:
// Ingresá una cantidad de grados Celsius
// Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es: {resultado}
// 28)Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
// Ingresá la distancia del recorrido
// Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
// Las velocidades de los medio de transporte son:
// a pie : 5 km/ hs
// bicicleta : 10 km/ hs
// auto : 50 km/hs
// 29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// datos con los cuales deben ser enviados a la función

// puedeVerPelicula(12, false)
// false
//  puedeVerPelicula(12, true)
// true
//  puedeVerPelicula(16, false)
// true
//  puedeVerPelicula(18, true)
// true

// 30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
// datos con los cuales deben ser enviados a la función:
// esVocal('a')
// true
//  esVocal('n')
// false
//  esVocal('e')
// true





