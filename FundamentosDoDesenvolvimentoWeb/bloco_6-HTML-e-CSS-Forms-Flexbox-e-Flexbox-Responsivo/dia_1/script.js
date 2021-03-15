const selectElementEstado = document.querySelector('#estado');
const selectDataInicio = document.querySelector('#datainicio');
const selectButton = document.querySelector('#send');

function createState() {
  const estados = ['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins', 'Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe', 'Goiás', 'Mato Grosso', 'Mato Grosso do Sul', 'Distrito Federal', 'Espírito Santo', 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Paraná', 'Rio Grande do Sul', 'Santa Catarina'];

  for (let index = 0; index < estados.length; index += 1) {
    const element = estados[index];
    const createOption = document.createElement('option');
    createOption.innerHTML = element;
    selectElementEstado.appendChild(createOption);
  }
}
let data = 05 / 12 / 2018;// 05122018

function checkDateInput(data) {
  // data = /\d+/g;
  // selectDataInicio.value = `${data}`;
  data = `${data}`;
  data = data.split('/');
  const errorMsg = 'Formato de data inválido!';

  for (let index = 0; index < data.length; index += 1) {

    parseInt(data[index]);
    if (data[0] > 31 || data[0] < 1) {
      alert(errorMsg);
    } if (data[1] > 12 || data[1] < 1) {
      alert(errorMsg);
    } if (data[2] > 2021 || data[2] < 1)
      alert(errorMsg);
  }
}

function sendInformations() {

}

selectElementEstado.addEventListener('click', createState);
selectDataInicio.addEventListener('change', checkDateInput);
selectButton.addEventListener('click', sendInformations);
