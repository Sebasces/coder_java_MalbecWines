//Registro Usuario//

const inputNombre= document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const enviar = document.getElementById("enviar")
const formularioUser =document.getElementsByClassName("formularioUser")
const registro=document.getElementById("registro")



let ingresoUsuario = enviar.addEventListener("click",() => { 
        let usuario= {
        nombre: inputNombre.value,
        apellido:inputApellido.value};
        localStorage.setItem ('infoUsuario',JSON.stringify(usuario));
        const message= document.createElement("div")
        message.innerHTML =`
            <p>Bienvenido, Hemos registrado su Usuario</p>`;
        registro.append(message);
        message.style.textAlign="center";
        message.style.display="flex"; 
        message.style.position="fixed";
        message.style.alignItems="center"; 
        message.style.width= "30em"; 
        message.style.zIndex="40";
        message.style.height="5em";
        message.style.backgroundColor="white";
        message.style.marginLeft= "25em";
        message.style.color="black";
        const salirmessage = document.createElement("button")
        salirmessage.innerText ="X"
        message.append(salirmessage)
        salirmessage.addEventListener("click",() => {
        message.style.display= "none";
    })})
        



/* OBJETOS */


class producto {
    constructor (titulo, precio, stock,id,img)
    {
    this.titulo = titulo;
    this.precio = Number(precio);
    this.stock =  stock;
    this.id = id;
    this.img = img;
}}



const productos = [];
    const whisky = new producto("whisky",7000,100,1,"/Users/sebastiancescosta/Desktop/Proyecto-coder-java/img/jackdaniels.jpeg");
        productos.push(whisky);
    const vino = new producto("vino",1500,100,2,"/Users/sebastiancescosta/Desktop/Proyecto-coder-java/img/vino_card.jpeg");
        productos.push(vino);
    const gin = new producto ("gin",3000,100,3,"/Users/sebastiancescosta/Desktop/Proyecto-coder-java/img/gin.png");
        productos.push(gin);
    const champagne = new producto("champagne",3200,100,4,"/Users/sebastiancescosta/Desktop/Proyecto-coder-java/img/champagne.jpeg");
        productos.push(champagne);
    const vodka = new producto ("vodka", 2100,100,5,"/Users/sebastiancescosta/Desktop/Proyecto-coder-java/img/voddka.jpeg");
        productos.push(vodka);
    const ron = new producto ("ron", 3500,100,6,"/Users/sebastiancescosta/Desktop/Proyecto-coder-java/img/ron.jpeg");
        productos.push(ron);      


//* Productos y Carrito *//
const containerProductos = document.getElementById("containerCard");
let verCarrito = document.getElementById("verCarrito");
const containerCarrito = document.getElementById("containerCarrito");

let carrito = [];


productos.forEach((producto) => {
let cardCreator = document.createElement("div");
cardCreator.className = "cardProducto"
cardCreator.innerHTML = `
    <img src=${producto.img}>
    <h3>${producto.titulo}</h3>
    <p>${"precio $"+producto.precio}</p>
    `;
containerProductos.append (cardCreator);

let agregarCarrito= document.createElement("button");
agregarCarrito.innerText = "agregar a carrito";
cardCreator.append (agregarCarrito);

agregarCarrito.addEventListener("click", () => {
    carrito.push({
    id: producto.id,
    titulo: producto.titulo,
    precio: producto.precio,
    img:producto.img,
})})})

verCarrito.addEventListener("click", () => {
    containerCarrito.innerHTML ="";
    containerCarrito.style.display= "flex";
    let user = JSON.parse (localStorage.getItem('infoUsuario'));
    const carritoHead = document.createElement("div");
    carritoHead.className = "carritoHead";
    carritoHead.innerHTML = `
        <h2 id="carritoHeadtitle">${user.nombre+ " " + user.apellido + " " + "Tu compra es"}</h2>
        `;
    containerCarrito.append(carritoHead)

    const salirCarrito = document.createElement("button")
    salirCarrito.innerText ="X"
    carritoHead.append(salirCarrito)
    salirCarrito.addEventListener("click",() => {
        containerCarrito.style.display= "none";
    })

    carrito.forEach((producto) => {
    let carritoBody = document.createElement("div")
    carritoBody.className = "carritoBody"
    carritoBody.innerHTML = `
    <img src=${producto.img}>
    <h3>${producto.titulo}</h3>
    <p>${"precio $"+producto.precio}</p>
    `
    containerCarrito.append(carritoBody);
    /*const eliminarItem= document.createElement("button");
    eliminarItem.innerText= "Eliminar";
    carritoBody.append(eliminarItem)*/

        
    })
    
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

    const  totalCarrito = document.createElement("div")
    totalCarrito.className ="totalCarrito"
    totalCarrito.innerHTML = `
        <h3> ${"El total de su compra es $"+ total}</h3>`

    containerCarrito.append (totalCarrito);
}
)

