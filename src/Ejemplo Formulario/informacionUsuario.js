function solicitarNombre(){
    let nombre;
    do{
        nombre = prompt("Ingrese su nombre");
        if(!nombre || nombre.trim().length<3){
            alert("El nombre debe tener al menos 3 caracteres.");
        }
    }while(!nombre || nombre.trim().length<3);
    return nombre.trim();

}

function solicitarCorreo(){
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let correo;
    do{
        correo = prompt("Ingrese su correo");
        if(!regexCorreo.test(correo)){
            alert("Por favor, ingrese un correo electrónico válido")
        }
    }while(!regexCorreo.test(correo));
    return correo;
}

function solicitarEdad(){
    let edad;
    do{
        edad = parseInt(prompt("Ingrese su edad"),10);
        if(isNaN(edad) || edad<=0){
            alert("La edad debe ser mayor que 0");
        }
    }while (isNaN(edad) || edad<=0);
    return edad;
}

function solicitarContrasena(){
    let contrasena;
    do{
        contrasena = prompt("Ingrese su contrasena");
        if(!contrasena || contrasena.trim().length<8){
            alert("La contraseña debe contener almenos 8 caracteres.");
        }
    }while(!contrasena || contrasena.trim().length<8);
    return contrasena;
}

const nombre = solicitarNombre();
const correo = solicitarCorreo();
const edad = solicitarEdad();
const contrasena = solicitarContrasena();

const datos = {
    nombre: nombre,
    correo: correo,
    edad: edad,
    contrasena: contrasena
};

console.log("Todos los datos son válidos.");
console.log("Resumen de información ingresada.");
for(let jorge in datos){
    let valor = datos[jorge];

    if(jorge === "contrasena"){
        valor = "*".repeat(valor.length);
    }
    console.log(`${jorge.charAt(0).toUpperCase() + jorge.slice(1)}: ${valor}`);
}