
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

"gato" => "gaitober"
gaitober" => "gato"
*/

//encriptar("gato");

//desencriptar("gaitober")

/*
function capturar() {
    encriptar(cadena.value);
}

function prueba() {
    desencriptar(cadena.value);
}
*/

const cadena = document.getElementById("text");
const area_default    = document.getElementById("default");
const area_result   = document.getElementById("result");
const texto_out  = document.getElementById("respuesta");

var respuesta;

codificar.addEventListener('click', () => {
    if(cadena.value){
        if (acento(cadena.value)) {
            alert("La cadena contiene caracteres con acento. Por favor, escríbela nuevamente sin acentos.");
          } else {
            respuesta = encriptar(cadena.value);
            area_default.classList.add("invisible");
            area_result.classList.remove("invisible");
            texto_out .innerHTML = respuesta;
            cadena.value = "";    
            copiar.disabled = false; 
          }

    }else{
        alert("Por gavor ingrese el texto que desea encriptar")
    }
    
});

decodificar.addEventListener('click', () => {
    if (cadena.value) {
        respuesta = desencriptar(cadena.value);
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto_out .innerHTML = respuesta;
        cadena.value = "";    
        copiar.disabled = false; 
    }else{
        alert("Por gavor ingrese el texto que desea desencriptar")

    }
    
});

copiar.addEventListener('click', () =>{
    cadena.value = respuesta; 
    const card = ``;
    texto_out .innerHTML = card;

})

function encriptar(cadena) {
    var texto = cadena.replace(/e/ig,"enter").replace(/i/ig,"imes").replace(/a/ig,"ai").replace(/o/ig,"ober").replace(/u/ig,"ufat");    
    return texto 
    
}

function desencriptar(cadena) {
    var texto = cadena.replace(/ai/ig,"a").replace(/enter/ig,"e").replace(/imes/ig,"i").replace(/ober/ig,"o").replace(/ufat/ig,"u");
    return texto
}

function acento(cadena) {
    var acentos = /[áéíóú]/;
    return acentos.test(cadena);
}
  



