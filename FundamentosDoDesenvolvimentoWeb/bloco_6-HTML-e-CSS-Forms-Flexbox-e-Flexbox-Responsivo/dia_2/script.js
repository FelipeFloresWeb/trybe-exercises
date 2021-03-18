const selectElementEstado = document.querySelector('#estado');
const selectDataInicio = document.querySelector('#datainicio');
const selectButton = document.querySelector('#send');
const selectBody = document.querySelector('body');

function createState() {
  const estados = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins', 'Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul', 'Distrito Federal', 'Espírito Santo', 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Paraná', 'Rio Grande do Sul', 'Santa Catarina'];

  for (let index = 0; index < estados.length; index += 1) {
    const element = estados[index];
    const createOption = document.createElement('option');
    createOption.innerHTML = element;
    selectElementEstado.appendChild(createOption);
  }
}
window.onload = createState();

function checkDateInput() {
  const dataSplited = selectDataInicio.value.split('/');
  const errorMsg = 'Formato de data inválido!';
  const alert = errorMsg;

  if (parseInt(dataSplited[0], 10) > 31 || parseInt(dataSplited[0], 10) < 1) {
    alert(errorMsg);
  } if (parseInt(dataSplited[1], 10) > 12 || parseInt(dataSplited[1], 10) < 1) {
    alert(errorMsg);
  } if (parseInt(dataSplited[2], 10) > 2021 || parseInt(dataSplited[2], 10) < 1) {
    alert(errorMsg);
  }
}

function sendInformations() {
  const selectInputs = document.querySelectorAll('input');
  const selectTextArea = document.querySelector('#curriculo');
  const createDiv = document.createElement('div');

  createDiv.id = 'divformulario';
  createDiv.style.maxWidth = '1000px';
  createDiv.style.display = 'block';
  selectBody.appendChild(createDiv);

  for (let index = 0; index < selectInputs.length; index += 1) {
    const createP = document.createElement('p');
    createP.innerHTML = selectInputs[index].value;
    createDiv.appendChild(createP);
  }
  const createP = document.createElement('p');
  createP.innerHTML = selectTextArea.value;
  createDiv.appendChild(createP);
}

function preventDefaultSettings(event) {
  event.preventDefault();
  const allInputs = document.querySelectorAll('input', 'select', 'textarea');
  let msg = '';
  const alert = msg;
  for (let index = 0; index < allInputs.length; index += 1) {
    const element = allInputs[index];
    if (element[index].value === '') {
      msg += `Campo ${element[index].id} está vazio<br>`;
    } if (element[index].type === 'radio' && !element[index].checked) {
      msg += `Campo ${element[index].id} não esta selecionado<br>`;
    }
  }
  alert();
}

selectButton.addEventListener('click', preventDefaultSettings);
selectButton.addEventListener('click', checkDateInput);
selectButton.addEventListener('click', sendInformations);
