const selectElementEstado = document.querySelector('#estado');
const selectDataInicio = document.querySelector('#datainicio');
const selectButton = document.querySelector('#send');
const selectButtonClear = document.querySelector('#clear');
const selectBody = document.querySelector('body');
const selectForm = document.querySelector('#formulario');

function createState() {
  const estados = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins', 'Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul', 'Distrito Federal', 'Espírito Santo', 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Paraná', 'Rio Grande do Sul', 'Santa Catarina'];


  // {
  //   AC: "Acre",
  //   AL: "Alagoas",
  //   AP: "Amapá",
  //   AM: "Amazonas",
  //   BA: "Bahia",
  //   CE: "Ceará",
  //   DF: "Distrito Federal",
  //   ES: "Espírito Santo",
  //   GO: "Goías",
  //   MA: "Maranhão",
  //   MT: "Mato Grosso",
  //   MS: "Mato Grosso do Sul",
  //   MG: "Minas Gerais",
  //   PA: "Pará",
  //   PB: "Paraíba",
  //   PR: "Paraná",
  //   PE: "Pernambuco",
  //   PI: "Piauí",
  //   RJ: "Rio de Janeiro",
  //   RN: "Rio Grande do Norte",
  //   RS: "Rio Grande do Sul",
  //   RO: "Rondônia",
  //   RR: "Roraíma",
  //   SC: "Santa Catarina",
  //   SP: "São Paulo",
  //   SE: "Sergipe",
  //   TO: "Tocantins",
  // };

  for (let index = 0; index < estados.length; index += 1) {
    const element = estados[index];
    const createOption = document.createElement('option');
    createOption.innerHTML = element;
    selectElementEstado.appendChild(createOption);
  }
}
createState();

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

selectElementEstado.addEventListener('click', createState);
selectButton.addEventListener('click', preventDefaultSettings);
selectButton.addEventListener('click', sendInformations);
selectButtonClear.addEventListener('click', clearInputs);
