
function mostrarCarrito(){
    if (carrito.length === 0) {
        const mensaje=document.createElement("p");
        mensaje.innerText="Su carrito esta vacio"
        carritoHtml.appendChild(mensaje);
    }else{ carrito.forEach(producto=>{
        const productosCarrito=document.createElement("div");
        productosCarrito.className="productos-carrito";
         const mostrarNombre=document.createElement("p");
         mostrarNombre.className="texto-carrito";
         mostrarNombre.innerText=`${producto.nombre}`;
         const mostrarPrecio=document.createElement("p");
         mostrarPrecio.className="texto-carrito";
         mostrarPrecio.innerText=`${producto.precio}`;
         const mostrarCantidad=document.createElement("p")
         mostrarCantidad.className="texto-carrito";
         mostrarCantidad.innerText=`${producto.cantidad}`;
         productosCarrito.appendChild(mostrarNombre);
         productosCarrito.appendChild(mostrarPrecio);
         productosCarrito.appendChild(mostrarCantidad);
         carritoHtml.appendChild(productosCarrito);
    })
}}
const carritoIcono=document.getElementById("contenedor-icono");
carritoIcono.addEventListener("click",()=>mostrarCarrito())
const carritoHtml=document.getElementById("carrito-productos")
// header index

const container=document.getElementById("main-container");
const titulo=document.createElement("h1");
titulo.className="titulo-principal";
titulo.innerText="Nuestros Productos";
container.appendChild(titulo);
const containerCards=document.createElement("section");
containerCards.className="contenedor-cartitas";
container.appendChild(containerCards);

function cardCreator(producto){
const carta=document.createElement("div");
carta.className="cartita"
const imagen=document.createElement("img");
imagen.src=`${producto.imagen}`;
imagen.alt="carga fallida";
imagen.className="imagen-cartita";
const nombre=document.createElement("p");
nombre.className="texto-cartita";
nombre.innerText=`${producto.nombre}`;
const precio=document.createElement("p");
precio.className="texto-cartita";
precio.innerText=`${producto.precio} $`;
const boton =document.createElement("button");
boton.innerText="Comprar";
boton.className="boton-cartita";
boton.addEventListener("click",()=> agregarAlCarrito(producto));
//agregar la funcion para agregar al carrito
carta.appendChild(imagen);
carta.appendChild(nombre);
carta.appendChild(precio);
carta.appendChild(boton);
containerCards.appendChild(carta);
};
fetch("./json/data.json")
.then(response=>response.json())
.then(data=>{
    data.forEach(el=>cardCreator(el));
})
.catch(error=>console.error(error));
let carrito;
if (localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}else{
    carrito=[]
}
function agregarAlCarrito(producto){
    if (carrito.some(el => el.id === producto)) {
        const indiceProducto = carrito.findIndex(el => el.id === producto.id);
        carrito[indiceProducto].cantidad += 1;
        Toastify({

            text: "Su producto se agregó correctamente al carrito",
            backgroundColor:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(112,13,233,1) 37%, rgba(0,212,255,1) 100%)",
            duration: 3000
            
            }).showToast();
    }else{
        const nuevoProducto = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1,
        };
        carrito.push(nuevoProducto);
        Toastify({

            text: "Su producto se agregó correctamente al carrito",
            backgroundColor:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(112,13,233,1) 37%, rgba(0,212,255,1) 100%)",
            duration: 3000
            
            }).showToast();
        }
    localStorage.setItem("carrito", JSON.stringify(carrito));
};