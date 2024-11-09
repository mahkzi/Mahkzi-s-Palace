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
const icono=document.createElement("div")
icono.className="contenedor-icono";
nav.appendChild(icono);
const imagen=document.createElement("img");
imagen.className= "img";
imagen.src="../assets/Eames-blanco-600x629-1-e1693398098543.jpg";
imagen.alt="icono del carrito";
icono.appendChild(imagen);
console.log(header);