var div = document.getElementById("div1");
var parrafo = document.createElement("p");
var contenido = document.createTextNode("Hola");
parrafo.appendChild(contenido);
div.appendChild(parrafo);

var div2 = document.getElementsByTagName("div");
for(var i = 0; i < div2.length; ++i) {
    var parrafo2 = document.createElement("p");
    var contenido2 = document.createTextNode("General");
    parrafo2.appendChild(contenido2);
    div2[i].appendChild(parrafo2);
}
