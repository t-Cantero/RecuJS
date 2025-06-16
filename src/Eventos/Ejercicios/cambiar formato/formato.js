var contenedores = document.getElementsByTagName("div");
var primerContenedor = contenedores[0];
var parrafos = document.getElementsByTagName("p");
var ultParrafo = parrafos[parrafos.length - 1];

function cambiarColor(){
    var contenedores = document.getElementsByTagName("div");
    var primerContenedor = contenedores[0];
    primerContenedor.style.backgroundColor = "yellow";
}
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


primerContenedor.addEventListener("mouseover", cambiarColor);
primerContenedor.addEventListener("mouseout", function() {
    primerContenedor.style.backgroundColor = "";
});
ultParrafo.addEventListener("click", function(){
    ultParrafo.style.fontFamily = "Arial";
    ultParrafo.style.fontSize = "20px";
});
document.getElementById("agregar").addEventListener("click", agregarParrafo);
document.getElementById("eliminar").addEventListener("click", eliminarImagen);

