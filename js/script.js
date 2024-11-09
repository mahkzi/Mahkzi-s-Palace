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