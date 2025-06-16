const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
if(!meses.length == 12){
    console.log("!Qué año más raro, nos faltan meses");
}else{
    console.log("\nEstos son los 12 meses del año:");
    for( let i = 0; i < meses.length; i++){
        console.log((i+1)+"."+meses[i]);
    }
}