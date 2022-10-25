
const whisky = 7000;
const vino = 1500;
const gin = 3000;
const champagne = 3200;


let opcionError = false;
let nombreUsuario;

function checkValor (variableCheck)
{if (variableCheck == false);}

function consulta (variableConsulta)
{console.log (variableConsulta)};

nombreUsuario = prompt("Ingrese su nombre");
consulta (nombreUsuario);
if (nombreUsuario == false) {nombreUsuario = "Tu nombre de Usuario NO FUE REGISTRADO"};

alert("Bienvenido a la Tienda" + " " + nombreUsuario);

let dinero =  prompt("ingrese la cantidad de dinero que tiene pensado gastar");
while (dinero == null || /\D/.test(dinero) || dinero == "") {
    dinero = prompt("Ingrese un NUMERO VALIDO: ")};
let iniciarCompra;

do  {
    alert ("estos son nuestros producto y precios:" + "\nwhisky.-$" + whisky +"\nvino.-$" + vino +  "\ngin.-$" + gin +  "\nchampagne.-$" + champagne);
        let producto = prompt ('ingrese el producto que quiere comprar: \n a.Whisky \n b.Vino \n c.Gin \n d.Champagne');
        let precio = 0;

switch(producto){
    case "a":
        precio = 7000;
        break;
    case "b":
        precio = 1500;
        break;
    case "c":
        precio = 3000;
        break;
    case "d":
        precio = 3200;
        break;
    default:
        opcionError = true;
        break;
    
}
if (opcionError == true) {alert ("Ud. ha ingresado una opcion no valida. Deberá Iniciar la compra de nuevo"); iniciarCompra == false;} else {
let cantidadProducto = prompt ('ingrese la cantidad de producto a adquirir');
let costoCompra =  precio * cantidadProducto;  

let dineroRestante = dinero - costoCompra;

if (costoCompra > dinero) {alert("El dinero es insuficiente para comprar" + " " + cantidadProducto + " botellas del producto");break}
            else {alert ("ud ha comprado satisfactoriamente  " + cantidadProducto + "  botellas del producto");
            alert ("El costo total de su compra es de $:" + costoCompra);
            alert (" El dinero restante es $:" + dineroRestante);
            consulta (costoCompra);
            if (dineroRestante >= 1500) {dinero=dineroRestante;
            iniciarCompra = confirm ("¿Desea efectuar otra compra?\nSI --> Aceptar \nNO --> Cancelar"); if (iniciarCompra == false) {consulta (dineroRestante)}}
            else {alert ("el dinero restante no es suficiente para efectuar una nueva compra"); consulta (dineroRestante);break};
}}} while (iniciarCompra == true);

