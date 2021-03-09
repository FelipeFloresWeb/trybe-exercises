function addInputText() {
  let divText = document.querySelector("#text");
  let boxText = document.querySelector("#inpuText");
  let buttonAdd = document.querySelector("#addButton");
  let clearButton = document.querySelector("#clearButton");

  buttonAdd.addEventListener("click", addTextButton);
  clearButton.addEventListener("click", removeTextButton);

  function addTextButton() {
    let newText = '';
    let newP = document.createElement("p");
    let errorMensagem = 'Nenhum conteúdo foi digitado!';
    let thanksMensagem = 'Seu conteúdo foi adicionado em nossa página! Agradecemos pela contribuição';
    if (boxText.value === '') {
      alert(errorMensagem);
    } else {
      newP.className = 'newText';
      newP.innerHTML = boxText.value;
      divText.appendChild(newP);
      alert(thanksMensagem);
      localStorage.setItem('newP', 'innerHTML');
    }
  }

  function removeTextButton(event) {
    let message = 'A caixa de texto foi redefinida!'
    boxText.value = '';
    alert(message);
  }
}
addInputText();
