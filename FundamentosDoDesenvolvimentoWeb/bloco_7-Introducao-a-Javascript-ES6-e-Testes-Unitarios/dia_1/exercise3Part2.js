// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade
// de clicks no botão conforme a variável clickCount é atualizada.
// Crie um código JavaScript com a seguinte especificação:
const selectButton = document.querySelector('#contadorButton');
let selectP = document.querySelector('#contador');

function contador() {
  let count = 1;
  selectP.innerHTML = parseInt(selectP.innerHTML, 10) + parseInt(count, 10);
}

selectButton.addEventListener('click', contador);
