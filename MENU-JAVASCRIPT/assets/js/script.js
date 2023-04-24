let num1
let num2
let opcion

//FUNCIONES
//MAYOR
function mayor (num1,num2) {
    if(num1 > num2){
        alert(num1 + " es mayor que " + num2);
    }else if(num1 === num2){
        alert(num1 + " es igual a: " + num2);
    }else{
        alert(num2 + " es mayor que: " + num1);
    }
}
//SUMA
function sumar (num1, num2) {
    let resultado = num1 + num2
    alert("La suma de " + num1 + " + " + num2 + " es igual a: " + resultado)
}
//RESTA
function restar (num1, num2) {
    let resultado = num1 - num2;
    alert("La resta de " + num1 + " + " + num2 + " es igual a: " + resultado)
}
//MULTIPLICACIÓN
function multiplicar (num1, num2) {
    let resultado = num1 * num2;
    alert("La multiplicación de " + num1 + " + " + num2 + " es igual a: " + resultado)
}
//DIVISION
function dividir (num1, num2) {
    let resultado = num1/num2;
    alert("La división de " + num1 + " + " + num2 + " es igual a: " + resultado)
}
//MOSTRAR NUMERO
function mostrar_numero(num1,num2) {
    alert("Los numeros ingresados son: " + num1 + num2)
}

//CICLO
do{
    opcion = prompt(
    "Selecciones qué desea hacer: \n 1. Calcular cuál es el mayor. \n 2. Sumar \n 3. Restar \n 4. Multiplicar \n 5. Dividir \n 6. Mostrar los números ingresados \n 7. Salir"
    );

if (opcion != 7 && opcion < 7 && opcion > 0) {
    num1 = parseInt(prompt("Ingrese el primer numero"))
    num2 = parseInt(prompt("Ingrese el segundo número"))
}

switch (opcion) {
    case "1":
        mayor(num1,num2)
        break;
    
        case "2":
        sumar(num1,num2)
        break;

        case "3":
        restar(num1,num2)
        break;

        case "4":
        multiplicar(num1,num2)
        break;

        case "5":
        dividir(num1,num2)
        break;

        case "6":
        mostrar_numero(num1,num2)
        break;

        case "7":
            alert("Adiós");
            break;

        default:
        alert("Elección incorrecta")
        break;
    }
}
while(opcion !== "7")
