// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade
// de clicks no botão conforme a variável clickCount é atualizada.
// Crie um código JavaScript com a seguinte especificação:
const selectButton = document.querySelector('#contadorButton');
const selectP = document.querySelector('#contador');

selectButton.addEventListener('click', () => {
  selectP.innerHTML = parseInt(selectP.innerHTML, 10) + parseInt(1, 10);
});
