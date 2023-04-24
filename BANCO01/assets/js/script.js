//FUNCIÓN CONSTRUCTORA
function Usuario(nombre, clave, rut, saldo) {
    this.nombre = nombre;
    this.clave = clave;
    this.rut = rut;
    this.saldo = saldo;
}


//DATOS USUARIOS
let usuario1 = new Usuario ("Susanita", "raton", 1234567, 200000)
let usuario2 = new Usuario ("Ramoncito", "perrito", 2345678, 300000)
let usuario3 = new Usuario ("Danielita", "gatito", 3456789, 400000)

let usuarios = [usuario1, usuario2, usuario3]
console.log(usuarios)


//INICIO
alert("Bienvenido a Banca en Línea.");
let rut = prompt("Ingrese su rut:");
let clave = prompt("Ingrese su clave:");


//LOGIN

let login = false;
let usuario;

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].rut == rut && usuarios[i].clave == clave) {
    usuario = usuarios[i];
    alert("Bienvenido(a) al banco, " + usuario.nombre + ".");
    login = true;
  }
}

if (login == true) {
  menu(usuario);
} else {
  alert("Datos de usuario incorrectos.");
}


//MENU
function menu() {
    let opcion = parseInt(prompt("Seleccione una operación: \n 1. Ver saldo. \n 2. Realizar un giro. \n 3. Realizar un depósito. \n 4. Salir."))

switch (opcion) {
    //SALDO
    case 1:
    alert("Su saldo actual es: " + usuario.saldo + ".");
    break;
    
    //GIRO
    case 2:
    let giro = parseInt(prompt("Su saldo actudal es de: " + usuario.saldo + ". \nIngrese saldo a girar:"))
    
    // operación NO HAY SALDO
    //(si giro es MAYOR a usuario.saldo)
    if (giro > usuario.saldo) {
        alert("No puede realizar esta operación. Saldo insuficiente.");
    } else {
    // operación GIRO
    //(se resta el primer valor, o sea, usuario.saldo y resulta en giro)
    usuario.saldo -= giro;
    alert("Giro realizado con éxito.\nSu saldo actual es " + usuario.saldo + ".");
    }
    break;

    //DEPOSITO
    case 3:
    let deposito = parseInt(prompt("Su saldo actudal es de: " + usuario.saldo + ". \nIngrese monto a depositar:"));
    
    // operación DEPOSITO
    let saldo = usuario.saldo + deposito;
    // resultado DEPOSITO
    usuario.saldo = saldo;
    alert("Deposito realizado con éxito.\nSu saldo actual es " + usuario.saldo + ".");
    break;

    //SALIR
    case 4:
    alert("Gracias por preferirnos.");
    break;

    default:
    alert("Operación incorrecta");
    break;
}
 while (opcion != 4);
}