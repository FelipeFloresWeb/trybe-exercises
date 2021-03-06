function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:
function liCreator() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysList = document.querySelector("#days");
  for(let index = 0; index < dezDaysList.length; index += 1) {
    let daysListItem = document.createElement("li")
    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
      let daysListItem = document.createElement("li");
      daysListItem.innerHTML = dezDaysList[index];
      daysListItem.className = "day holiday";
      daysList.appendChild(daysListItem);
    } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      daysListItem.innerHTML = dezDaysList[index];
      daysListItem.className = "day friday";
      daysList.appendChild(daysListItem);
    } else if (dezDaysList[index] === 25) {
      daysListItem.innerHTML = dezDaysList[index];
      daysListItem.className = "day holiday friday";
      daysList.appendChild(daysListItem);
    } else {
      daysListItem.innerHTML = dezDaysList[index];
      daysListItem.className = "day";
      daysList.appendChild(daysListItem);
    }
  }
}
liCreator();
// Exercício 1:

// Exercício 2:
function holidaysButton(string) {
  const divButton = document.querySelector(".buttons-container");
  const button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerHTML = string;
  divButton.appendChild(button);
}
holidaysButton("Feriados");
// Exercício 2:

// Exercício 3:
function showHolidays() {
  let holidayButton = document.querySelector("#btn-holiday");
  let holidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let holidaysColor = 'white';
  holidayButton.addEventListener("click", changeColor);
  function changeColor() {
    for (let index = 0; index < holidays.length; index += 1) {
      let holidays = document.querySelectorAll(".holiday"); 
      if (holidays[index].style.backgroundColor === holidaysColor) {
        holidays[index].style.backgroundColor = backgroundColor;
      } else {
        holidays[index].style.backgroundColor = holidaysColor;
      }
    }
  }
}
showHolidays();
// Exercício 3:

// Exercício 4:
function fridayButton(string) {
  const divButton = document.querySelector(".buttons-container");
  const button = document.createElement("button");
  button.id = "btn-friday";
  button.innerHTML = string;
  divButton.appendChild(button);
}
fridayButton("Sexta-feira");
// // Exercício 4:

// // Exercício 5:
function showFridays() {
  let button = document.querySelector("#btn-friday");
  let text = "Sexta-feira!";

  button.addEventListener("click", setText);
  function setText() {
    let fridayslist = document.querySelectorAll(".friday");
       if (fridayslist[0].innerHTML === "4") {
        fridayslist[0].innerHTML = "Sexta-feira!";
        fridayslist[1].innerHTML = "Sexta-feira!";
        fridayslist[2].innerHTML = "Sexta-feira!";
        fridayslist[3].innerHTML = "Sexta-feira!";
      } else {
        fridayslist[0].innerHTML = 4;
        fridayslist[1].innerHTML = 11;
        fridayslist[2].innerHTML = 18;
        fridayslist[3].innerHTML = 25;
      }
    }
  }
showFridays()
// // Exercício 5:


// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
// Copiar
// const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .
// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
// Exercício 9:
// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
// Exercício 10:
// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: keyCode