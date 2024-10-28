const header = document.getElementById("contenedor");
console.log(header)
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
 //header
 //main
 const carrito={}
 const enJson=JSON.stringify(carrito)
 const main=document.getElementById("main-container")
 const titulo=document.createElement("h1")
 titulo.innerText="Nuestros productos"
 main.appendChild(titulo)
 titulo.className="titulo-principal"
 const section=document.createElement("section")
 section.className="container-cards"
 main.appendChild(section)
 const subtituloSilla=document.createElement("div")
 subtituloSilla.className="subtitulo"
 subtituloSilla.innerHTML="<h3>Nuestras sillas</h3>"
 section.appendChild(subtituloSilla)
const productoSillas=[
   {
      nombre:"Da Vinci",
      precio:"$300",
      carrito:"Agregar al carrito",
},
{
   nombre:"Donatello",
   precio:"$250",
   carrito:"Agregar al carrito",
},
{
   nombre:"Miguel Angél",
   precio:"$200",
   carrito:"Agregar al carrito",
},
];
productoSillas.forEach(el=>{
   const card=document.createElement("div")
   card.className="card"
   const nombre=document.createElement("p")
   nombre.className="nombres-card"
    const precio=document.createElement("p")
   precio.className="precios-card"
   const boton=document.createElement("button")
   boton.className="boton-card"
   nombre.innerText=`${el.nombre}`
   precio.innerText=`${el.precio}`
   boton.innerText=`${el.carrito}`
   boton.addEventListener("click",()=>agregarAlCarrito(el))
   card.appendChild(nombre)
   card.appendChild(precio)
   card.appendChild(boton)
   section.appendChild(card)
   function agregarAlCarrito(){
      const guardarLocal=(producto, array)=>{
         localStorage.setItem(producto,array)
      };
      guardarLocal("listaProductos", JSON.stringify(productoSillas))
    }
})
const subtituloMesa=document.createElement("div")
subtituloMesa.className="subtitulo"
subtituloMesa.innerHTML="<h3>Nuestras mesas</h3>"
section.appendChild(subtituloMesa)
const productoMesa=[
   {
      nombre:"Sanzio",
      precio:"$600",
      carrito:"Agregar al carrito",
},
{
   nombre:"Botticelli",
   precio:"$650",
   carrito:"Agregar al carrito",
},
{
   nombre:"Caravaggio",
   precio:"$700",
   carrito:"Agregar al carrito",
},
];
productoMesa.forEach(el=>{
   const card=document.createElement("div")
   card.className="card"
   const nombre=document.createElement("p")
   nombre.className="nombres-card"
    const precio=document.createElement("p")
   precio.className="precios-card"
   const boton=document.createElement("button")
   boton.className="boton-card"
   nombre.innerText=`${el.nombre}`
   precio.innerText=`${el.precio}`
   boton.innerText=`${el.carrito}`
   boton.addEventListener("click",()=>agregarAlCarrito(el))
   card.appendChild(nombre)
   card.appendChild(precio)
   card.appendChild(boton)
   section.appendChild(card)
   function agregarAlCarrito(){
      const guardarLocal=(producto, array)=>{
         localStorage.setItem(producto,array)
      };
      guardarLocal("listaProductos", JSON.stringify(productoMesa))
    }
})
const subtituloSillones=document.createElement("div")
subtituloSillones.className="subtitulo"
subtituloSillones.innerHTML="<h3>Nuestros sillones</h3>"
section.appendChild(subtituloSillones)
 const productoSillones=[
   {
      nombre:"Giotto",
      precio:"$600",
      carrito:"Agregar al carrito",
},
{
   nombre:"Vecellio",
   precio:"$650",
   carrito:"Agregar al carrito",
},
{
   nombre:"Angélico",
   precio:"$700",
   carrito:"Agregar al carrito",
},
 ];
 productoSillones.forEach(el=>{
   const card=document.createElement("div")
   card.className="card"
   const nombre=document.createElement("p")
   nombre.className="nombres-card"
    const precio=document.createElement("p")
   precio.className="precios-card"
   const boton=document.createElement("button")
   boton.className="boton-card"
   nombre.innerText=`${el.nombre}`
   precio.innerText=`${el.precio}`
   boton.innerText=`${el.carrito}`
   boton.addEventListener("click",()=>agregarAlCarrito())
   card.appendChild(nombre)
   card.appendChild(precio)
   card.appendChild(boton)
   section.appendChild(card)
      function agregarAlCarrito(){
         const guardarLocal=(producto, array)=>{
            localStorage.setItem(producto,array)
         };
         guardarLocal("listaProductos", JSON.stringify(productoSillones))
       }
  
})
console.log(main);
const guardados=JSON.parse(localStorage.getItem("listaProductos"))
const producto=[]