const header=document.getElementById("contenedor-header");
const nav=document.createElement("nav");
nav.className="nav-bar"
header.appendChild(nav);
const ul=document.createElement("ul");
ul.className="ulista";
nav.appendChild(ul);
const li=document.createElement("li");
li.className="lista";
ul.appendChild(li);
const link=document.createElement("a");
link.href="../index.html";
link.innerText="Volver al inicio";
link.className="link";
li.appendChild(link);
console.log(header);
const section=document.getElementById("contenedor-section");
const textoSection=document.createElement("div");
textoSection.className="info"
const formularioContenedor=document.createElement("div");
formularioContenedor.className="form-contenedor"
section.appendChild(textoSection);
section.appendChild(formularioContenedor);
const texto=document.createElement("h3");
texto.innerText="Comuníquese con nosotros";
texto.className="texto";
textoSection.appendChild(texto);
const formulario=document.getElementById("formulario");
formulario.className="form";
formularioContenedor.appendChild(formulario);
const boton=document.createElement("button");
boton.className="boton-enviar";
boton.innerText="Envíar";
boton.type="submit";
boton.addEventListener("click",()=> enviarDatos());
formulario.appendChild(boton);
console.log(section);
/*footer*/
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
function enviarDatos(){
    Swal.fire({
        title: "!Muchas Gracias!",
        text: "Su mensaje se ha enviado correctamente",
        icon: "success",
        confirmButtonText: "!Perfecto!",
        background:"smokewhite"
      });
    }