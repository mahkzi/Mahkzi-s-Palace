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
icono.appendChild(imagen);
console.log(header);
// header index
let carrito;
if (localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}else{
    carrito=[]
}
function agregarAlCarrito(){
    const producto=fetch("./json/data.json")
    carrito.push(producto.precio);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
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
boton.addEventListener("click",()=> agregarAlCarrito());
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
