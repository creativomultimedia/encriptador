function checkForErrors(inputText) {
    
    const outputText = document.getElementById("outputText");
    const placeholder = document.getElementById("placeholder");
    const copyButton = document.querySelector(".copy-btn");
    const clearButton = document.querySelector(".clear-btn");
    const noMessage = document.getElementById("noMessage");
    const enterText = document.getElementById("enterText");
    const errorImage = "assets/algo-salio-ma.png"; // Ruta de la nueva imagen de error
    const initialImage = "assets/Muneco.png"; // Ruta de la nueva imagen de error

    document.addEventListener("DOMContentLoaded", function() {
        document.body.classList.add('fade-in'); // Añade la clase fade-in cuando la página carga
    });

    if (inputText === "") {
        outputText.style.display = "none";
        copyButton.style.display = "none";
        clearButton.style.display = "none";
        placeholder.style.display = "block";
        noMessage.textContent = "Ningún mensaje fue encontrado"; // Texto por defecto
        enterText.textContent = "Ingresa el texto que desees encriptar o desencriptar."; // Texto por defecto
        return false; // Indica que no hay errores
    } else if (!/^[a-z\s]+$/.test(inputText)) {
        // Mostrar mensaje de error si hay caracteres no permitidos
       
        outputText.style.display = "none";
        copyButton.style.display = "none";
        placeholder.querySelector('img').src = errorImage; // Actualizar la imagen de error
        noMessage.textContent = "¡Ups! Algo salió mal. Corrige el texto e intenta de nuevo."; // Texto de error
        enterText.textContent = "No se permiten caracteres especiales."; // Mensaje de error para enterText
        return false; // Indica que hay errores
    }
    return true; // Indica que no hay errores
}

function encryptText() {
    const inputText = document.getElementById("inputText").value;
    const isValid = checkForErrors(inputText);

    if (!isValid) return; // Detiene la ejecución si hay errores

    // Realizar la encriptación si no hay errores
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    const outputText = document.getElementById("outputText");
    const placeholder = document.getElementById("placeholder");
    const copyButton = document.querySelector(".copy-btn");
    const clearButton = document.querySelector(".clear-btn");

    outputText.value = encryptedText;
    outputText.style.display = "block";
    copyButton.style.display = "block";
    clearButton.style.display = "block";
    placeholder.style.display = "none";
}

function decryptText() {
    const inputText = document.getElementById("inputText").value;
    const isValid = checkForErrors(inputText);

    if (!isValid) return; // Detiene la ejecución si hay errores

    // Realizar la desencriptación si no hay errores
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    const outputText = document.getElementById("outputText");
    const placeholder = document.getElementById("placeholder");
    const copyButton = document.querySelector(".copy-btn");
    const clearButton = document.querySelector(".clear-btn");

    outputText.value = decryptedText;
    outputText.style.display = "block";
    copyButton.style.display = "block";
    clearButton.style.display = "block";
    placeholder.style.display = "none";
}

function copyText() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}


function clearText() {
    const outputText = document.getElementById("outputText");
    const placeholder = document.getElementById("placeholder");
    const copyButton = document.querySelector(".copy-btn");
    const clearButton = document.querySelector(".clear-btn");
    const noMessage = document.getElementById("noMessage");
    const enterText = document.getElementById("enterText");
    const initialImage = "assets/Muneco.png"; // Ruta de la imagen inicial

    // Oculta el área de salida y los botones
    outputText.style.display = "none";
    copyButton.style.display = "none";
    clearButton.style.display = "none";
    
    // Limpia el texto de entrada
    document.getElementById("inputText").value = "";
    
    // Muestra el área de placeholder y restablece la imagen y los textos
    placeholder.style.display = "block";
    placeholder.querySelector('img').src = initialImage; // Establece la imagen inicial
    noMessage.textContent = "Ningún mensaje fue encontrado"; // Texto por defecto
    enterText.textContent = "Ingresa el texto que desees encriptar o desencriptar."; // Texto por defecto
}
