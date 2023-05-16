var botaoPesquisar = document.getElementById('pesquisar');
var conteudo = document.getElementById('loadPersonagem');

const getPersonagem = function () {
  let url = 'https://rickandmortyapi.com/api/character/';

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (dadosPersonagem) {
      createCards(dadosPersonagem.results);
    })
    .catch(function (error) {
      console.log('Erro ao obter personagens:', error);
    });
};

const getPersonagemByName = function (nomePersonagem) {
  let url = `https://rickandmortyapi.com/api/character?name=${nomePersonagem}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (dadosPersonagem) {
      createCards(dadosPersonagem.results);
    })
    .catch(function (error) {
      console.log('Erro ao obter personagens:', error);
    });
};


const createCards = function (personagens) {
  clearCards();

  personagens.forEach(function (personagem) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let figure = document.createElement('figure');

    let img = document.createElement('img');
    img.setAttribute('src', personagem.image);

    let h2 = document.createElement('h2');
    let titulo = document.createTextNode(personagem.name);
    h2.appendChild(titulo);

    let span_status = document.createElement('span');
    span_status.setAttribute('class', 'status');
    let texto_status = document.createTextNode('Status: ' + personagem.status);
    span_status.appendChild(texto_status);

    let span_species = document.createElement('span');
    span_species.setAttribute('class', 'species');
    let texto_species = document.createTextNode('Espécie: ' + personagem.species);
    span_species.appendChild(texto_species);

    conteudo.appendChild(card);
    card.appendChild(figure);
    figure.appendChild(img);
    card.appendChild(h2);
    card.appendChild(span_status);
    card.appendChild(span_species);
  });
};

const clearCards = function () {
  conteudo.innerHTML = '';
};

window.addEventListener('load', function () {
  getPersonagem();
});

botaoPesquisar.addEventListener('click', function () {
  clearCards();
  let nome = document.getElementById('nomePersonagem').value;
  if (nome === '') {
    getPersonagem();
  } else {
    getPersonagemByName(nome);
  }
});
