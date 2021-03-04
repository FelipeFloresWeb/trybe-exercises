// Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai .
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai .
var deOndeEstou = document.getElementById("elementoOndeVoceEsta");
var addCollorGreen = deOndeEstou.parentNode.parentElement.style.color = "green";
var filhoDoFilho = deOndeEstou.nextElementSibling.innerHTML = "Texto adicionado";
var primeiroFilho = document.getElementById("pai").nextElementSibling;
var primeiroFilhoFromDeOndeEstou = deOndeEstou.previousElementSibling;
var text = deOndeEstou.nextElementSibling.innerHTML;
var terceiroFilho = deOndeEstou.nextSibling.nextSibling;
var terceiroFilhoFromPai = document.getElementById("pai").nextElementSibling.nextElementSibling;