var parrafo = document.getElementById("parrafo");
var parrafos = document.getElementsByTagName("p");
for(var i = 0; i<parrafos.length;i++){
    alert("El parrafo " +(i+1) + " contiene el texto "+ parrafos[i].innerHTML);
}