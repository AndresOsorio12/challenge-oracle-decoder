function encriptador(){
    var textoIngresado = document.getElementById("textoIngresado").value;
    var textoEncriptado = textoIngresado.replaceAll("e","enter");
    var textoEncriptado = textoEncriptado.replaceAll("i" ,"imes");
    var textoEncriptado = textoEncriptado.replaceAll("a","ai");
    var textoEncriptado = textoEncriptado.replaceAll("o","ober");
    var textoEncriptado = textoEncriptado.replaceAll("u","ufat");

    document.getElementById("munheco").style.display = "none";
    document.getElementById("noEncontrado").style.display = "none";
    document.getElementById("ingresarTexto").style.display = "none";
    document.getElementById("texto").innerHTML = textoEncriptado;
    document.getElementById("texto").style.display = "show";
    document.getElementById("texto").style.display = "inherit";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function desencriptador(){
    var textoIngresado = document.getElementById("textoIngresado").value;
    var textoEncriptado = textoIngresado.replaceAll("enter","e");
    var textoEncriptado = textoEncriptado.replaceAll("imes","i");
    var textoEncriptado = textoEncriptado.replaceAll("ai","a");
    var textoEncriptado = textoEncriptado.replaceAll("ober","o");
    var textoEncriptado = textoEncriptado.replaceAll("ufat","u");

    document.getElementById("munheco").style.display = "none";
    document.getElementById("noEncontrado").style.display = "none";
    document.getElementById("ingresarTexto").style.display = "none";
    document.getElementById("texto").innerHTML = textoEncriptado;
    document.getElementById("texto").style.display = "show";
    document.getElementById("texto").style.display = "inherit";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function copiar(){
    var cifrado = document.querySelector("#texto");
    texto.select();
    document.execCommand("copy")
}