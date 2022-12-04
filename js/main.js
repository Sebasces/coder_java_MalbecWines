//Registro Usuario//

const inputNombre= document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const enviar = document.getElementById("enviar")
const formularioUser =document.getElementsByClassName("formularioUser")
const registro=document.getElementById("registro")
const registroUsuario= []


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
        console.log(usuario)
    })})



/* OBJETOS */


class producto {
    constructor (titulo, precio, stock,id,img,cantidad)
    {
    this.titulo = titulo;
    this.precio = Number(precio);
    this.stock =  stock;
    this.id = id;
    this.img = img;
    this.cantidad = cantidad;
}}



const productos = [];
    const whisky = new producto("whisky",7000,100,1,"img/jackdaniels.jpeg",1);
        productos.push(whisky);
    const vino = new producto("vino",1500,100,2,"img/vino_card.jpeg",1);
        productos.push(vino);
    const gin = new producto ("gin",3000,100,3,"img/gin.png",1);
        productos.push(gin);
    const champagne = new producto("champagne",3200,100,4,"img/champagne.jpeg",1);
        productos.push(champagne);
    const vodka = new producto ("vodka", 2100,100,5,"img/voddka.jpeg",1);
        productos.push(vodka);
    const ron = new producto ("ron", 3500,100,6,"img/ron.jpeg",1);
        productos.push(ron);      


//*  Carrito *//
const containerProductos = document.getElementById("containerCard");
let verCarrito = document.getElementById("verCarrito");
const containerCarrito = document.getElementById("containerCarrito");
const indicadorCarrito = document.getElementById("indicadorCarrito");



let carrito = JSON.parse (localStorage.getItem('carrito')) || [];


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
    /*if (usuario === undefined)*/
    const sumarCantidad = carrito.some ((sumarCantidadProducto)=> sumarCantidadProducto.id === producto.id);

    if (sumarCantidad) {carrito.map ((prod) => {if (prod.id === producto.id) {prod.cantidad++;
    }
});
} else {
    carrito.push({
    id: producto.id,
    titulo: producto.titulo,
    precio: producto.precio,
    img:producto.img,
    cantidad:producto.cantidad,
}); 
}
carritoIndex ();
localStorage.setItem ('carrito',JSON.stringify(carrito));
});
});

//carrito//
    const iniciarCarrito = () => {
        
    containerCarrito.innerHTML ="";
    containerCarrito.style.display= "flex";
    let user = JSON.parse (localStorage.getItem('infoUsuario'));
    const carritoHead = document.createElement("div");
    carritoHead.className = "carritoHead";
    carritoHead.innerHTML = `
        <h2 id="carritoHeadtitle">${user.nombre+ " " + user.apellido + " " + "tu selección es"}</h2>
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
    <div> 
    <h4>${producto.titulo}</h4>
    <p>${"precio unitario $"+producto.precio}</p>
    </div>
    <div>
    <p>${"cantidad" + " " +producto.cantidad}</p>
    </div>
    <div>
    <p>${"subtotal " + " " + ("$"+producto.cantidad * producto.precio)}</p>
    </div>
    
    `
    containerCarrito.append(carritoBody);

    let restarItem = document.createElement("button");
    restarItem.innerText= "-";
    carritoBody.append(restarItem)
    restarItem.addEventListener("click", () => {
        if (producto.cantidad >1){
        producto.cantidad--;
        localStorage.setItem ('carrito',JSON.stringify(carrito));
        iniciarCarrito()};
    });
    let sumarItem = document.createElement("button");
    sumarItem.innerText= "+";
    carritoBody.append(sumarItem);
    sumarItem.addEventListener("click", () => {
        producto.cantidad++;
        localStorage.setItem ('carrito',JSON.stringify(carrito));
        iniciarCarrito();
    })

    let eliminarItem= document.createElement("button");
    eliminarItem.innerText= "Eliminar";
    carritoBody.append(eliminarItem);
    eliminarItem.addEventListener("click", eliminarProducto);
    localStorage.setItem ('carrito',JSON.stringify(carrito));
    iniciarCarrito;

    })
    
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

    const  totalCarrito = document.createElement("div")
    totalCarrito.className ="totalCarrito"
    totalCarrito.innerHTML = `
        <h3> ${"El total de tu compra es $"+ total}</h3>
        `
    containerCarrito.append (totalCarrito);
    
    const finalizarTransaccion= document.getElementById("finalizarTransaccion");
    const continuarCompra = document.createElement("button")
    continuarCompra.innerText ="confirmar compra"
    continuarCompra.className = "continuarCompra"
    totalCarrito.append(continuarCompra)
    continuarCompra.addEventListener("click",() => {
        containerCarrito.style.display= "none"
        const mediodePago = document.createElement("div")
        mediodePago.className = "mediodePago"
        mediodePago.innerHTML = `
        <h2>${"Confirmación de Compra"}</h2>
        <p>${"el monto total a pagar es"+" " + total}</p>
        `
    finalizarTransaccion.append(mediodePago);
    })
}
    carritoInicia()
    const eliminarProducto = () => {
        const encontrarProducto = carrito.find((element) => element.id);
        carrito = carrito.filter ((carritoProductos) => {
        return carritoProductos !== encontrarProducto;
        });
        carritoIndex ();
        localStorage.setItem ('carrito',JSON.stringify(carrito))
        iniciarCarrito ();
    

    };
    const carritoIndex = ()=> {
        indicadorCarrito.style.display = "block";
        indicadorCarrito.innerText = carrito.length;

}


function carritoInicia() {
    verCarrito.addEventListener("click", iniciarCarrito)
}
    