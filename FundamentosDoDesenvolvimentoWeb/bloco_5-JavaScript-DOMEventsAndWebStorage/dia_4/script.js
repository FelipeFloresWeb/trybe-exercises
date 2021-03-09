let divText = document.querySelector("#text");
let reloadPage = localStorage.getItem('boxText');
let elementP = document.createElement("p");
elementP.innerHTML = reloadPage;
divText.appendChild(elementP);
function addInputText() {
  let divText = document.querySelector("#text");
  let buttonAdd = document.querySelector("#addButton");
  let clearButton = document.querySelector("#clearButton");
  buttonAdd.addEventListener("click", addTextButton);
  clearButton.addEventListener("click", removeTextButton);

  function addTextButton() {
    let boxText = document.querySelectorAll("div")[90];// filho
    let createElementP = document.createElement("p");
    let errorMensagem = 'Nenhum conteúdo foi digitado!';
    let thanksMensagem = 'Seu conteúdo foi adicionado em nossa página! Agradecemos pela contribuição';
    if (boxText.innerHTML === '') {
      alert(errorMensagem);
    } else {
      createElementP.className = 'newText';
      createElementP.innerHTML = boxText.innerHTML;
      divText.appendChild(createElementP);
      alert(thanksMensagem);
      let savedStorage = localStorage.getItem('boxText');
      savedStorage += boxText.innerHTML;
      localStorage.setItem('boxText', savedStorage);
    }
  }

  function removeTextButton(event) {
    let boxText = document.querySelectorAll("div")[90];// filho
    boxText.innerHTML = '';
    let message = 'A caixa de texto foi redefinida!'
    alert(message);
  }
}
addInputText();
