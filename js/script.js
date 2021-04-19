document.getElementById("botao-enviar").addEventListener("click", validaFormulario);

function validaFormulario(){

if(document.getElementById("nome").value != "" && document.getElementById("email").value != "") {
  alert ("Enviado!!! Você receberá novidades pelo email.")
} else {
  alert ("Por favor, preencha os campos nome e email!")
}};

//font:   