

function ocultar() {
      document.getElementById('myDIV').style.display = "none";
      document.getElementById("button3").style.visibility = "visible";
      document.getElementById("encriptar").style.display = "initial";
      document.getElementById("encriptar").style.textAlign ="justify";
    }


  function encriptar(){
    var texto = document.querySelector("#encriptador").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#encriptar").value = textoCifrado;
    document.querySelector("#encriptador").value;
  }

var boton1 = document.querySelector("#button1");
boton1.onclick = encriptar;

function desencriptar (){
  var texto = document.querySelector("#encriptador").value;
  var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  document.querySelector("#encriptar").value = textoCifrado;
  document.querySelector("#encriptador").value;

}

var boton2 = document.querySelector("#button2");
boton2.onclick = desencriptar;


function copiar(){
  var copyText = document.getElementById("encriptar");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
    navigator.clipboard
      .writeText(copyText.value)
      .then(() => {
        alert("El texto ha sido copiado");
      })
      .catch(() => {
        alert("Algo salió mal");
      });
}

