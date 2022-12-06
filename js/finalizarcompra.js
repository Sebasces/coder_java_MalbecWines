
        const cerrarCompra = document.getElementById("cerrarCompra")
        const finalizarTransaccion= document.getElementById("finalizarTransaccion")
        const totalpago = JSON.parse (localStorage.getItem('totalCompra'));
        const checkoutCompra = JSON.parse(localStorage.getItem('carrito'));
        const mediodePago = document.createElement("div")
        mediodePago.className = "mediodePago"
        mediodePago.innerHTML = `
        <h2>${"Confirmación de Compra"}</h2>
        <h3>${"el monto total a pagar por su compra es $"+ " "+ totalpago}</h3>
        <div id="tarjeta">
            <form id="formTarjeta">
            <div class="form-group owner">
            <label for="owner">Titular de la Tarjeta</label>
            <input type="text" class="form-control" id="owner">
        </div>
        <div>
        <label for="owner">Correo electrónico</label>
            <input type="text" class="form-control" id="owner">
        </div>

        <div class="form-group CVV">
            <label for="cvv">Código de Seguridad</label>
            <input type="text" class="form-control" id="cvv">
        </div>
        <div class="form-group" id="card-number-field">
            <label for="cardNumber">Número de Tarjeta</label>
            <input type="text" class="form-control" id="cardNumber">
        </div>
        <div class="form-group" id="expiration-date">
            <label>Mes de Expiración</label>
            <select>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
            </select>
            <select>
                <option value="16"> 2022</option>
                <option value="17"> 2023</option>
                <option value="18"> 2024</option>
                <option value="19"> 2025</option>
                <option value="20"> 2026</option>
            </select>
            <div>
                <button type="submit">Pagar</button>
            </div>
            </form>
            </div>
            `
            finalizarTransaccion.append(mediodePago)

        /*const enviarPago = document.createElement ("div")
        enviarPago.innerHTML=`
            <button type="submit"  id="confirmPago">Pagar</button>`
            mediodePago.append(enviarPago);*/
        
        mediodePago.addEventListener("click", () =>{
            
            const compraRealizada = document.createElement ("div")
            compraRealizada.style.display ="block";
            compraRealizada.style.textAlign="center";
            compraRealizada.style.textAlign="center";
            compraRealizada.style.display="flex"; 
            compraRealizada.style.position="fixed";
            compraRealizada.style.alignItems="center"; 
            compraRealizada.style.width= "30em"; 
            compraRealizada.style.zIndex="40";
            compraRealizada.style.height="5em";
            compraRealizada.style.backgroundColor="white";
            compraRealizada.style.marginLeft= "25em";
            compraRealizada.style.color="black";
            compraRealizada.className = "mensajeConfirmación"
            compraRealizada.innerHTML =`
                <h3>Hemos registrado su solicitud, en momentos recibira un e-mail de confirmación</h3>`; 
            finalizarTransaccion.append(compraRealizada);
        
            const cerrarVentana = document.createElement("button")
            cerrarVentana.innerText ="X"
            compraRealizada.append(cerrarVentana)
            compraRealizada.addEventListener("click",() => {
            compraRealizada.style.display= "none";
            cerrarCompra.style.display="none"
            localStorage.clear()
            window.location.href="./index.html"
            
    })})
        
        
        const detalleCompra =document.getElementById("detalleCompra")
        checkoutCompra.forEach((producto) => {
            let finalizarCompra = document.createElement("div")
            finalizarCompra.className = "checkout"
            finalizarCompra.innerText ="El detalle de su compra es el siguiente:"
            finalizarCompra.innerHTML = `
            <img src=${producto.img}>
            <div> 
            <h4>${producto.titulo}</h4>
            <p>${"cantidad" + " " +producto.cantidad}</p>
            </div>    
            `
        detalleCompra.append(finalizarCompra)})
        
        
        /*const volveraCarrito = document.createElement("a");
        volveraCarrito.innerText = "Anular operación y Volver al inicio";
        detalleCompra.append  (volveraCarrito)


         detalleCompra.append(finalizarCompra)});
/*
        const confirmarTransacción = document.createElement ("button")
        confirmarTransacción.className ="Pagar"
        confirmarTransacción.innerText ="Confirmar  Trasacción"
        cerrarCompra.append(confirmarTransacción);*/
            
