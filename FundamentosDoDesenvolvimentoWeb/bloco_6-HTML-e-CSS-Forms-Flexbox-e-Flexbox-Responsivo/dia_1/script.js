const selectElementEstado = document.querySelector('#estado');
const selectDataInicio = document.querySelector('#datainicio');
const selectButton = document.querySelector('#send');
const selectButtonClear = document.querySelector('#clear');
const selectBody = document.querySelector('body');
const selectForm = document.querySelector('#formulario');

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

function checkDateInput(data) {
  data = selectDataInicio.value.split('/')
  const errorMsg = 'Formato de data inválido!';

  if (parseInt(data[0]) > 31 || parseInt(data[0]) < 1) {
    alert(errorMsg);
  } if (parseInt(data[1]) > 12 || parseInt(data[1]) < 1) {
    alert(errorMsg);
  } if (parseInt(data[2]) > 2021 || parseInt(data[2]) < 1) {
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
}

function clearInputs() {
  const selectInputs = document.querySelectorAll('input');
  const selectLastDiv = document.querySelector('#divformulario');
  const selectTextArea = document.querySelector('#curriculo');
  for (let index = 0; index < selectInputs.length; index += 1) {
    selectInputs[index].value = '';
  }
  selectLastDiv.remove();
  selectTextArea.remove();
}

selectButton.addEventListener('click', preventDefaultSettings);
selectButton.addEventListener('click', sendInformations);
selectButton.addEventListener('click', checkDateInput);
selectButtonClear.addEventListener('click', clearInputs);
