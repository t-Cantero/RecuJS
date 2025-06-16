function eliminarImagen(){
    var imagenes = document.getElementsByTagName("img");
    if(imagenes.length > 0){
        var ultima = imagenes[imagenes.length - 1];
        ultima.parentNode.removeChild(ultima);
    }else{
        alert("No hay más imágenes por eliminar.");
    }
}

function agregarParrafo(){
    var contenedores = document.getElementsByTagName("div");
    if(contenedores.length > 0){
        var primerContenedor = contenedores[0];
        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = "Otro Párrafo";
        primerContenedor.appendChild(nuevoParrafo);
    }else{
        var contenedor = document.createElement("div");
        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = "Otro Párrafo"
        contenedor.appendChild(nuevoParrafo);
        document.body.appendChild(contenedor);
    }
}
document.getElementById("agregar").addEventListener("click", agregarParrafo);
document.getElementById("eliminar").addEventListener("click", eliminarImagen);
