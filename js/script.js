/* Nomes:
  Felipe Rodrigues da silva souza - RA: 32232
  Gabriel Medeiros Nascimento - Ra: 33336
  */


let botaoPesquisar = document.getElementById('pesquisar');
let conteudo = document.getElementById('loadPersonagem');
let input = document.getElementById('nomePersonagem')
let inputNome = document.getElementById('nomePersonagem');
let formulario= document.getElementById('frmSearch')


// Função para chamar todos os personagens
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

// Função para filtrar pelo nome do personagem
const getPersonagemByName = function (nomePersonagem) {
  nomePersonagem.toUpperCase()
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

// Criar os cards dos personagens
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

// limpa os cards
const clearCards = function () {
  conteudo.innerHTML = '';
};

// Evento de escutar ao carregar
window.addEventListener('load', function () {
  getPersonagem();
});

// Evento para pesquisa ao clicar
botaoPesquisar.addEventListener('click', function () {
  clearCards();
  let nome = inputNome.value
  if (nome === '') {
    getPersonagem();
  } else {
    getPersonagemByName(nome);
  }
});

// Serve para quando o teclado é pressionado na busca dando o 'Enter'
input.addEventListener('keypress',function (tecla){
  let nome = inputNome.value
  console.log(tecla);
  
  if(tecla.key === 'Enter')
  getPersonagemByName(nome)
})

// Serve para cancelar a ação da submit
formulario.addEventListener('submit',function (event){
  event.preventDefault()

})


