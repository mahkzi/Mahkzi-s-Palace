let nombre=prompt("Por favor, introduzca su nombre")
function saludar(){
    alert("Que tengas un buen día "+nombre)
}
let zonaUsuario=prompt("Ingrese la zona en la cual estaría interesad@. 0-para Zona Norte, 1-para zona Sur, 2-para zona Este, 3-para zona Oeste, 4-para zona Centro o 5-Para ver más en detalle las zonas junto con sus propiedades(véase por consola)")
const zonas= ["Usted ha elegido Zona norte","Usted ha elegido Zona sur ","Usted ha elegido Zona este ","Usted ha elegido Zona oeste","Usted ha elegido Zona centro",];
if (zonaUsuario==0){
    alert(zonas[0])
    let usuarioNorte=prompt("En que parte específicamente le gustaría? Tigre, Caseros o Munro")
    switch(usuarioNorte){
        case "Tigre":
           alert("Tigre es el mejor punto turístico")
            break;
            case "Caseros":
               alert("Caseros tiene las mejores plazas")
                break;
                case "Munro":
                   alert("Munro tiene los mejores restaurantes")
                    default:
                        alert("introdujiste un valor no válido")
                        break;
    }
    saludar()
}else if(zonaUsuario==1){
    alert(zonas[1])
    let usuarioSur=prompt("En que parte específicamente le gustaría? (utilice correctamente mayúsculas y acentos); Quilmes, Lanús, Almirante Brown")
    switch(usuarioSur){
        case "Quilmes":
            alert("Quilmes tiene las mejores propuestas ecónomicas")
            break;
            case "Lanús":
               alert("Lanús tiene mejores calles")
                break;
                case "Almirante Brown":
                   alert("Almirante Brown tiene los mejores Lagos")
                    default:
                        alert("introdujiste un valor no válido")
                        break;
    }
    saludar()
}else if(zonaUsuario==2){
    alert(zonas[2])
    let usuarioEste=prompt("En que parte específicamente le gustaría ?(utilice correctamente mayúsculas y acentos); Chacarita, Bella Vista, 9 de Julio")
    switch(usuarioEste){
        case "Chacarita":
            alert("Chacarita tiene las mejores vistas")
            break;
            case "9 de Julio":
               alert("9 de Julio tiene el mejor verde")
                break;
                case "Bella Vista":
                    alert("Bella Vista tiene la mejor seguridad")
                    default:
                        alert("introdujiste un valor no válido")
                        break;
    }
    saludar()
}else if(zonaUsuario==3){
    alert(zonas[3])
    let usuarioOeste=prompt("En que parte específicamente le gustaría?(utilice correctamente mayúsculas y acentos); Morón, Merlo, Moreno")
    switch(usuarioOeste){
        case "Morón":
            alert("Moreno tiene lamejor cultura")
            break;
            case "Merlo":
                alert("De Merlo salieron los mejores cantantes")
                break;
                case "Moreno":
                   alert("Hogar del mejor fútbol")
                    default:
                        alert("introdujiste un valor no válido")
                        break;
    }
    saludar()
}else if(zonaUsuario==4){
    alert(zonas[4])
    let usuarioCentro=prompt("En que parte específicamente le gustaría?(utilice correctamente mayúsculas y acentos); San Nicolás, Balvanera, Montserrsat")
    switch(usuarioCentro){
        case "San Nicolás":
            alert("Una hermosa zona familiar")
            break;
            case "Balvanera":
                alert("Balvanera tiene los mejores bares")
                break;
                case "Montserrat":
                   alert("Montserrat tiene la mejore música en vivo")
                   default:
                    alert("introdujiste un valor no válido")
                    break;
    }
    saludar()
}else if(zonaUsuario==5){
    const infoZonas=["Tigre","Caseros","Munro","Quilmes","Lanús","Almirante Brown","Chacarita","9 de Julio","Bella Vista","Morón","Merlo", "Moreno","San Nicolás","Balvanera", "Montserrat"]
for(let i=0;i<15;i++){
    console.log(infoZonas[i])
}
saludar()
}else{
alert("hablo en chino? recarga la página y fijate que números funcan dale.")
}
