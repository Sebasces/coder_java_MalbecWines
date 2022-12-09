//Registro Usuario//

const inputNombre= document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const enviar = document.getElementById("enviar")
const formularioUser =document.getElementsByClassName("formularioUser")
const registro=document.getElementById("registro")
const registroUsuario= []


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


let ingresoUsuario = enviar.addEventListener("click",() => { 
    let usuario= {
    nombre: inputNombre.value,
    apellido:inputApellido.value};
    
    if (inputNombre.value == "" || inputApellido.value == "") { swal({
        title: "Registración rechazada",
        text: "Ud. no se ha registrado correctamente" + " ",
        icon: "warning",
        button: "cerrar",
    })}
        else {
    swal({
        title: "Registración exitosa",
        text: "Bienvenido" + " " +usuario.nombre + " "+ usuario.apellido,
        icon: "success",
        button: "cerrar",
    });localStorage.setItem ('infoUsuario',JSON.stringify(usuario))}
    
})


let agregarCarrito= document.createElement("button");
agregarCarrito.innerText = "agregar a carrito";
cardCreator.append (agregarCarrito);

agregarCarrito.addEventListener("click", () => {
    let user = JSON.parse (localStorage.getItem('infoUsuario'))
    if (user == null) {{ swal({
        title: "Registración rechazada",
        text: "Ud. no se ha registrado correctamente" + " ",
        icon: "warning",
        button: "cerrar",
    })}} else {
    
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
}}
carritoIndex ();
localStorage.setItem ('carrito',JSON.stringify(carrito));
Toastify({

    text: "agregaste un producto al carrito",
    
    duration: 800

    
    }).showToast();
});
});

//carrito//
    
    const iniciarCarrito = () => {
    
    
    containerCarrito.innerHTML ="";
    let user = JSON.parse (localStorage.getItem('infoUsuario'));
    const carritoHead = document.createElement("div");
    carritoHead.className = "carritoHead";
    carritoHead.innerHTML = `
        <h2 id="carritoHeadtitle">${user.nombre+ " " + user.apellido + " " + "tu selección es"}</h2>
        `;
    containerCarrito.style.display= "flex"
    containerCarrito.append(carritoHead)

    const salirCarrito = document.createElement("button")
    salirCarrito.innerText ="cerrar ventana"
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
    
    const continuarCompra = document.createElement("a")
    continuarCompra.innerText ="confirmar compra"
    continuarCompra.className = "continuarCompra"
    totalCarrito.append(continuarCompra)
    continuarCompra.addEventListener("click",() => {if(total >1) {
        console.log(total)
        containerCarrito.style.display= "none";
        localStorage.setItem ('totalCompra',JSON.stringify(total))
        window.location.href="./finalizarcompra.html";
        
    }})
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

carritoIndex();

function carritoInicia() {
    verCarrito.addEventListener("click", iniciarCarrito)
}
    



