/* eslint-disable no-alert */
/* eslint-disable import/extensions */

import champions from './champions.js';

import championsCards from './championsCards.js';

function fetchResponse() {
  return fetch('http://ddragon.leagueoflegends.com/cdn/11.8.1/data/pt_BR/champion.json')
    .then((data) => data.json())
    .then((champion) => champion.data);
}

const generateHistoryChampion = (fighter) => `${fighter.name} "${fighter.title}".<br><br>${fighter.blurb}<br><br>
  Pontos de Vida: ${fighter.stats.hp}<br>
  Ataque Físico: ${fighter.stats.attackdamage}<br>
  Velocidade de Ataque: ${fighter.stats.attackspeed}ms<br>
  Defesa Física: ${fighter.stats.armor}<br>
  Defesa Mágica: ${fighter.stats.spellblock}<br>
  Distancia do Ataque: ${(fighter.stats.attackrange < 500)
    ? fighter.stats.attackrange * 0.01
    : fighter.stats.attackrange * 0.1}metros<br>
    Defesa Física por nível: ${fighter.stats.armorperlevel} pontos<br>
    Defesa Mágica por nível: ${fighter.stats.armorperlevel} pontos<br>
    Pontos de vida por nível: ${fighter.stats.spellblock} pontos<br>
    Classe: ${fighter.tags.toString().replace(',', ', ')}
<a  class="link" target="_blank" href ="https://br.leagueoflegends.com/pt-br/champions/${(fighter.name).toString().toLowerCase().replace('. ', '-').replace('\'', '-')}/"><br><br>(clique aqui para mais informações..)</a>`;

const showchamp = (fighter) => {
  const selectImages = document.querySelectorAll('.championscards');
  const selectChampText = document.querySelector('#cardText');

  if (selectImages.length > 0) {
    selectImages[0].remove();
    selectChampText.remove();
  }

  const selectBody = document.body;
  selectBody.style.backgroundImage = champions[fighter.id];
  selectBody.style.backgroundAttachment = 'fixed';
  selectBody.style.transition = '1s';

  const selectDivChampCards = document.querySelector('#champCards');
  const createImg = document.createElement('img');
  createImg.classList.add('championscards');
  createImg.src = championsCards[fighter.id];
  selectDivChampCards.appendChild(createImg);

  const createSpan = document.createElement('span');
  createSpan.id = 'cardText';
  createSpan.style.backgroundColor = 'black';
  createSpan.innerHTML = generateHistoryChampion(fighter);

  selectDivChampCards.appendChild(createSpan);
};

const selectChamp = (event, champion) => {
  const champ = event.target;
  champ.classList.add('selected');
  showchamp(champion);
  setTimeout(() => champ.classList.remove('selected'), 1000);
  champ.classList.add('deSelected');
  setTimeout(() => champ.classList.remove('deSelected'), 2000);
};

const showChampionsNames = (champions1) => {
  champions1.forEach((champion) => {
    const selectDivChamps = document.querySelector('#champs');
    const createSpan = document.createElement('span');
    createSpan.innerHTML = champion.name;
    createSpan.classList.add('champion');

    // Comente/Descomente as linhas 75 e 76 deste arquivo e as linhas 35 e 36 do arquivo css,
    // para adicionar/remover icones aos nomes dos campeões.
    createSpan.style.backgroundImage = `url(img/champion/tiles/${champion.image.full})`;
    createSpan.style.backgroundSize = '100%';

    createSpan.addEventListener('click', (event) => selectChamp(event, champion));
    selectDivChamps.appendChild(createSpan);

    // const createImg = document.createElement('img');
    // createImg.classList.add('cardicon');
    // createImg.src = `img/champion/tiles/${champion.image.full}`;
    // selectDivChamps.appendChild(createImg);
  });
};

window.onload = async function onload() {
  try {
    const champions0 = await fetchResponse();
    const arrchampions = Object.values(champions0);
    showChampionsNames(arrchampions);
  } catch (error) {
    alert(error);
  }
};
