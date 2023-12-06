const textArea = document.querySelector("#mensaje");
const mensaje = document.querySelector("#resultado");
const textoImagen = document.querySelector("#img-mensaje");
const contenido = document.querySelector("#resultado");
const btnEscuchar = document.querySelector("#resultado");

function btnEncriptar(){
    if(!validarTexto()){
        ocultarAdelante()
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado;
        textArea.value = "";
    }
    
}

function encriptar(stringEncriptado){
    
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    document.getElementById("resultadoArea-btn").style.display = "show";
    document.getElementById("resultadoArea-btn").style.display = "inherit";

    return stringEncriptado;

}

function btnDesencriptar(){
    ocultarAdelante()
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";

}


function desencriptar(stringDesencriptado){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    document.getElementById("resultadoArea-btn").style.display = "show";
    document.getElementById("resultadoArea-btn").style.display = "inherit";

    return stringDesencriptado;

}

function ocultarAdelante() {
    textoImagen.classList.add("ocultar");
}

function copy(){
    contenido.select();
    document.execCommand("copy");
    mensaje.value = "";
    mensaje.focus();
}

function escuchar(){
    var mensajeEncriptado = mensaje.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}



function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[ a-z " "]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}