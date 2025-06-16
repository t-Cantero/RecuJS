var imagenes = document.getElementsByTagName("img");
if(imagenes.length >0){
    var ultimaImagen = imagenes[imagenes.length - 1].src;
    alert(`El src de la última imagen de esta página es: \n ${ultimaImagen}`);
}else{
    alert("Esta página no tiene imagenes");
}
