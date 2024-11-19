const body=document.getElementById("gran-contenedor");
const header = document.getElementById("contenedor");
const nav = document.createElement("nav");
nav.className= "navegador";
header.appendChild(nav);
const links=document.createElement("div")
links.className="contenedor-ul";
nav.appendChild(links);
const ulista =document.createElement("ul");
ulista.className="contenedor-li";
links.appendChild(ulista);
const lia=document.createElement("li");
lia.className="lista";
ulista.appendChild(lia);
const lib=document.createElement("li");
lib.className="lista";
ulista.appendChild(lib);
const inicio=document.createElement("a");
inicio.href="./index.html";
inicio.innerText="Inicio";
inicio.className="links"
lia.appendChild(inicio);
const nosotros=document.createElement("a");
nosotros.href="/pages/nosotros.html"
nosotros.innerText="Sobre nosotros";
nosotros.className="links"
lib.appendChild(nosotros);
const icono=document.createElement("div")
icono.className="contenedor-icono";
nav.appendChild(icono);
const imagen=document.createElement("img");
imagen.src="./assets/icons8-carrito-de-compras-50.png";
imagen.alt="icono del carrito";
imagen.className="img";
imagen.addEventListener("click",()=>mostrarCarrito());
icono.appendChild(imagen);
console.log(header);
function mostrarCarrito(){
  const carritoDiv=document.createElement("div");
  carritoDiv.className="container-carrito";
  const divProductos=document.createElement("div");
  divProductos.className="productos";

  carritoDiv.appendChild(divProductos);
  const divTotal=document.createElement("div")
  divTotal.className="suma-total";
  divTotal.innerText="Hola soy una prueba";
  carritoDiv.appendChild(divTotal);
  const botonDenegar=document.createElement("button");
  const botonConfirmar=document.createElement("button");
  botonDenegar.className="denegar";
  botonConfirmar.className="confirmar";
  carritoDiv.appendChild(botonDenegar);
  carritoDiv.appendChild(botonConfirmar);
  header.appendChild(carritoDiv);
}
function verCarrito() {

    if (carrito.length === 0) {
    } else {
        mensaje = "";
        carrito.forEach(el=>{
            mensaje += carrito[el].id + ". " + carrito[el].nombre + " ($" + carrito[el].precio + ") - Cantidad: " + carrito[el].cantidad + "\n";
        });
        }
}
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
        const indiceProducto = carrito.findIndex(el => el.id === producto);
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
//footer
const footer=document.getElementById("footer-container");
const containerFooter=document.createElement("div");
containerFooter.className="contenedor-footer";
footer.appendChild(containerFooter);
const contenedorTexto=document.createElement("div");
contenedorTexto.className="texto-container";
containerFooter.appendChild(contenedorTexto);
const textoFooter=document.createElement("h3");
textoFooter.className="texto-footer";
textoFooter.innerText="Síguenos en nuestras redes"
const containerImg=document.createElement("div");
containerImg.className="footer-imagenes";
containerFooter.appendChild(containerImg);
const imagenIg=document.createElement("img");
imagenIg.src="../assets/icons8-instagram-48.png";
imagenIg.alt="se ha producido un error";
imagenIg.className="imagen-footer";
const imagenFacebook=document.createElement("img");
imagenFacebook.src="../assets/icons8-facebook-nuevo-48.png";
imagenFacebook.alt="se ha producido un error";
imagenFacebook.className="imagen-footer";
contenedorTexto.appendChild(textoFooter);
containerImg.appendChild(imagenIg);
containerImg.appendChild(imagenFacebook);
console.log(footer);