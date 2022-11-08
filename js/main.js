
class usuario {
    constructor (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}}


class Producto {
    constructor (titulo, precio, stock,id)
    {
    this.titulo = titulo;
    this.precio = Number(precio);
    this.stock =  stock;
    this.id = id;
}}

class tarjetaPago {  
    constructor (numero, titular , mesVencimiento, codigoSeguridad) 
    {
    this.numero = numero;
    this.titular = titular;
    this.mesVencimiento = mesVencimiento;
    this.codigoSeguridad = codigoSeguridad;
    }}

const productosArray = [];
    const whisky = new Producto("whisky",7000,100,1);
        productosArray.push(whisky);
    const vino = new Producto("vino",1500,100,2);
        productosArray.push(vino);
    const gin = new Producto ("gin",3000,100,3);
        productosArray.push(gin);
    const champagne = new Producto("champagne",3200,100,4);
        productosArray.push(champagne);
    const vodka = new Producto ("vodka", 2100,100,5);
        productosArray.push(vodka);
    const ron = new Producto ("ron", 3500,100,6);
        productosArray.push(ron);      


let medioPago;
let opcionError = false;

const sumar = function (n1,n2) {
    return  n1+n2
};

function checkValor (variableCheck)
{if (variableCheck == false);}

function consulta (variableConsulta)
{console.log (variableConsulta)};

let carritoArray = [];

const totalcompraArray = [];

let  usuario1 = new usuario (
    nombre = prompt("Ingrese su nombre"),
    apellido = prompt ("Ingreso su apellido"),
    edad = parseInt(prompt("ingrese su edad")));

    while (nombre == null || nombre == "") {nombre = prompt("Ingrese su nombre")};
    while (apellido == null || apellido == "") {apellido = prompt("Ingrese su apellido")};
    if (edad <18) {alert("Hemos registrado que Ud es menor de edad por lo que no puede operar en esta tienda"); 
    while (edad < 18) {edad = prompt("Para efectuar la compra debe tener 18 años. \n Ingrese su edad")}};
        consulta (usuario1);

let iniciarCompra;
    alert ("Malbec Wines es una tienda online de Bebidas Alcoholicas" +" " + "\nBienvenido" + " " + nombre + " " + apellido);
    if (opcionError == true) {alert ("Ud. ha ingresado una opcion no valida. Deberá Iniciar la compra de nuevo"); iniciarCompra == false;} 
    else { do {
        iniciarCompra = true;
            let listadoProductos = productosArray.map ((producto) =>  " " + producto.titulo + " " +"$" +" " + producto.precio);
                alert ("Este es el listado de Productos"+ listadoProductos.join(" - "));
            let productoElegido = parseInt (prompt ('ingrese el producto que quiere comprar: \n 1.Whisky \n 2.Vino \n 3.Gin \n 4.Champagne \n 5.Vodka \n 6.Ron'));
                const productoSeleccionado = productosArray.find(
                (producto) => producto.id === productoElegido); 
                    if (productoSeleccionado == undefined) {alert ("Ud. ha ingresado una opcion no valida. Deberá Iniciar la compra de nuevo");iniciarCompra == false; break;};  
            
            let cantidadProducto = prompt("ingrese la cantidad producto que desea comprar"); 
                while (cantidadProducto == null || /\D/.test(cantidadProducto) || cantidadProducto == "") {
                cantidadProducto = prompt("Ingrese un NUMERO VALIDO: ")};
                
                carritoArray.push((productoSeleccionado.titulo),(productoSeleccionado.precio),(cantidadProducto));
            
                const precioUnitario = Number (productoSeleccionado.precio);
                const costoCompra = precioUnitario * cantidadProducto;
            
                totalcompraArray.push(costoCompra);
            
                iniciarCompra = confirm ("¿Desea seguir comprando ?\nSI --> Aceptar \nNO --> Cancelar")} while (iniciarCompra == true)};
            
                if (iniciarCompra == false) {
                    const total = totalcompraArray.reduce((a, b) => a + b, 0);
                    alert ("El Costo total de su seleccion es: $" + total);
                    consulta(carritoArray);
                    medioPago = Number(prompt ("Ingrese la Forma de pago: \n 1.Efectivo \ 2.Tarjeta en 1 pago"));
                    while (medioPago == null || /\D/.test(medioPago) || medioPago == "" || medioPago > 2) {
                    medioPago = prompt("Ingrese un NUMERO VALIDO: ")};
                    
                        if (medioPago == 1) {let dinero = prompt("ingrese la cantidad de dinero para pagar"); while (dinero == null || /\D/.test(dinero) || dinero == "") {
                            dinero = prompt("Ingrese un NUMERO VALIDO: ")}; while (dinero < total) {dinero = prompt ("El dinero ingresado es insuficiente para efectuar el pago de $" + " " + total + " ingrese un numero mayor")};
                            let diferencia = dinero - total; alert ("Se ha registrado su pago. Tiene una Nota de Credito a su favor de: $" + diferencia +"\n Gracias por su Compra")} 
                        
                            else {
                                const tarjetaPago1 = new tarjetaPago (
                                numero = Number(prompt("Ingrese el Numero de Tarjeta")),
                                titular = prompt("Ingrese el nombre del titular de la tarjeta"),
                                mesVencimiento = Number (prompt ("Ingrese la fecha de vencimiento MMAA")),
                                codigoSeguridad = Number(prompt ("Ingrese el Codigo Seguridad")));
                                consulta(tarjetaPago1)
                                alert("Gracias. estamos procesando su compra en la proxima pre-entrega recibira la confirmacion de la misma")}};