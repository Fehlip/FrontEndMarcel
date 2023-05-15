var botaoPesquisar = document.getElementById('pesquisar')

var conteudo = document.getElementById('loadPersonagem')

const getPersonagem = function () {
    
    let url = 'https://rickandmortyapi.com/api/character/'

    fetch(url)

        .then(function (response) {
            return response.json()
        })
        .then(function (dadosPersonagem) {
            creatCard(dadosPersonagem)
        })
}

const getPersonagemByName = function (nomePersonagem) {
    let url = `https://rickandmortyapi.com/api/character?name=${nomePersonagem}`
// console.log(nomeLivro, 'teste')
    fetch(url)

        .then(function (response) {
            return response.json()
        })
        .then(function (dadosPersonagem) {
            creatCard(dadosPersonagem)
        })
}

const creatCard = function (personagens) {
    clearCards();
    // Entra no atributo livros do JSON e percorre o array de todos os livros
    personagens.forEach(function (personagem) {


        // ********************* CRIA OS ELEMENTOS HTML ***********************************************

        // Cria a DIV para receber os cards
        let card = document.createElement('div')
        // Atribui a propriedade class e coloca o valor card exatamente igual criamos no HTML
        card.setAttribute('class', 'card')

        // Cria o elemento figure
        let figure = document.createElement('figure')

        // Cria o elemento imagem
        let img = document.createElement('img')
        img.setAttribute('src', item.image)

        // Cria o elemento H2
        let h2 = document.createElement('h2')

        // Cria o elemento span para status
        let span_status = document.createElement('span')
        span_status.setAttribute('class', 'status')

        // Cria o elemento span para o especies
        let span_species = document.createElement('span')
        span_species.setAttribute('class', 'species')


        // Cria o titulo do h2
        let titulo = document.createTextNode(item.name)
        
        // Cria o texto do isbn e do valor
        let texto_isbn = document.createTextNode('STATUS: ' + item.status)
        let texto_valor = document.createTextNode('Espécie: ' + item.species)

    
        // ********************** ASSOCIAR OS ELEMENTOS CONFORME O HTML ********************************
        conteudo.appendChild(card)
        card.appendChild(figure)
        figure.appendChild(img)
        card.appendChild(h2)
        card.appendChild(span_status)
        card.appendChild(span_species)


        // ****************ASSOCIANDO OS TEXTOS NOS ELEMENTOS ******************************************
        h2.appendChild(titulo)
        span_status.appendChild(texto_status)
        span_species.appendChild(texto_species)
        
    })

}

const clearCards = function () {
    // Limpar o resultado da DIV
    conteudo.innerHTML = ''
}

window.addEventListener('load', function () { getPersonagem() })
botaoPesquisar.addEventListener('click', function () {
    clearCards()
    let nome = document.getElementById('nomePersonagem').value
    if (nome == '')
        getPersonagem()
    else
        getPersonagemByName(nome)
})


// window.addEventListener('load', function () { getPersonagem() })