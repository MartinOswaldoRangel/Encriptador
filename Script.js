const textareaEncriptar = document.getElementById('textareaEncriptar');
const textareaDesencriptar = document.getElementById('textareaDesencriptar');
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');

const btnCopiar = document.querySelector('.btnCopiar');
//bloquear textareaDesencriptar
textareaDesencriptar.setAttribute("readonly",true);

//Validar minusculas y caracteres especiales
btnEncriptar.addEventListener('click',() =>{
    const texto = textareaEncriptar.value;
    const caracteres =/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    if (texto.length == 0) {
        alert('Ingresa texto para encriptar o desencriptar');
    }else if (!/[a-zñ]+$/.test(texto) || caracteres.test(texto) ) {
        alert("solo letras minusculas y sin acentos")
        document.getElementById('textareaEncriptar').value ='';
    }
})
//Validar campos vacios
btnDesencriptar.addEventListener('click',() =>{
    const texto = textareaEncriptar.value;
    if (texto.length == 0) {
        alert('Ingresa texto para encriptar o desencriptar');
    }
})
btnCopiar.addEventListener('click',() =>{
    const texto = textareaEncriptar.value;
    if (texto.length == 0) {
        alert('El campo está vacío');
    }
})

//Encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto.replaceAll('e', 'enter')
                            .replaceAll('i', 'imes')
                            .replaceAll('a', 'ai')
                            .replaceAll('o', 'ober')
                            .replaceAll('u', 'ufat');
    return textoEncriptado;
}

//Desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto.replaceAll('enter', 'e')
                                .replaceAll('imes', 'i')
                                .replaceAll('ai', 'a')
                                .replaceAll('ober', 'o')
                                .replaceAll('ufat', 'u');
    return textoDesencriptado;
}

//Botón de encriptar
btnEncriptar.addEventListener('click', 
function() {
    let textoEncriptado = encriptarTexto(textareaEncriptar.value);
    textareaDesencriptar.value = textoEncriptado;
});

//Botón de desencriptar
btnDesencriptar.addEventListener('click', 
function() {
    let textoDesencriptado = desencriptarTexto(textareaDesencriptar.value);
    textareaDesencriptar.value = textoDesencriptado;
});

//Botón de copiar
btnCopiar.addEventListener('click', 
function() {
    textareaDesencriptar.select();
    document.execCommand('copy');
});