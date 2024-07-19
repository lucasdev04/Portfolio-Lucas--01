const copiarEmail = document.getElementById("btn-copiar");

copiarEmail.addEventListener("click", copiar);

function copiar (){
    navigator.clipboard.writeText("ramalhol656@gmail.com");
    copiarEmail.textContent = "Email Copiado";
  setTimeout(function() {
    copiarEmail.textContent = "Copiar Email";
  }, 2000);
}