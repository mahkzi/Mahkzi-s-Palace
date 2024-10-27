const header = document.getElementById("contenedor");
const nodoNav =document.createElement("nav");
nodoNav.className="navegacion";
header.appendChild(nodoNav);
const nodoUl = document.createElement("ul");
nodoUl.className="lista";
nodoNav.appendChild(nodoUl)
const opciones =["Inicio","Productos destacados","Carrito"]
opciones.forEach(el=>{
    const nodoLi = document.createElement("li");
    nodoLi.innerText=el;
    nodoUl.appendChild(nodoLi)
    nodoLi.className="encabezado"
}
)
 console.log(header)
 //header
 const main= document.getElementById("main-container");
 main.innerHTML="<h1>Nuestros productos</h1>";
 main.className="titulo"
 
 const section =document.getAnimations("container-cards")
 const productoSillas=[
    {
        nombre:"Da Vinci",
        img:"*colocar imagen*",
        precio:"300$",
 },
 {
    nombre:"Angel",
    img:"*colocar imagen*",
    precio:"250$"
 },
 {
    nombre:"Caravaggio",
    img:"*colocar imagen*",
    precio:"200$"
 },
 {
    nombre:"Donatello",
    img:"*colocar imagen*",
    precio:"400$"
 }
];
productoSillas.forEach(el=>{
    const card=document.createElement("div");
    card.className="div-card";
    const nombre=document.createElement("p");
    const precio=document.createElement("p")
    const imagen=document.createElement("img")
    nombre.innerText=el.nombre
    precio.innerText=el.precio
    imagen.innerText=el.img
    card.appendChild(imagen)
    card.appendChild(precio)
    card.appendChild(nombre)
    
}
)
console.log(main)
