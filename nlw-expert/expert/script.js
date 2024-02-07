const perguntas = [
  {
    pergunta:
      'Qual palavra-chave é usada para declarar uma variável em JavaScript?',
    respostas: ['var', 'let', 'const'],
    correta: 2 // Resposta correta: const
  },
  {
    pergunta:
      'Qual dos seguintes NÃO é um tipo de dado primitivo em JavaScript?',
    respostas: ['string', 'array', 'boolean'],
    correta: 1 // Resposta correta: array
  },
  {
    pergunta:
      'Qual função é usada para imprimir algo no console em JavaScript?',
    respostas: ['console.print()', 'log()', 'console.log()'],
    correta: 2 // Resposta correta: console.log()
  },
  {
    pergunta: 'O que o método "parseInt()" faz em JavaScript?',
    respostas: [
      'Arredonda um número para o inteiro mais próximo',
      'Converte uma string em um número inteiro',
      'Retorna o valor máximo em um array'
    ],
    correta: 1 // Resposta correta: Converte uma string em um número inteiro
  },
  {
    pergunta:
      'Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?',
    respostas: ['/* Comentário */', '// Comentário', '<!-- Comentário -->'],
    correta: 1 // Resposta correta: // Comentário
  },
  {
    pergunta:
      'Qual estrutura de controle é usada para repetir um bloco de código várias vezes?',
    respostas: ['if', 'while', 'for'],
    correta: 2 // Resposta correta: for
  },
  {
    pergunta: 'O que o operador "===" verifica em JavaScript?',
    respostas: [
      'Verifica se dois valores são iguais, independentemente do tipo',
      'Verifica se dois valores são iguais e do mesmo tipo',
      'Verifica se dois valores são diferentes'
    ],
    correta: 1 // Resposta correta: Verifica se dois valores são iguais, independentemente do tipo
  },
  {
    pergunta: 'Qual destas declarações de função em JavaScript está correta?',
    respostas: [
      'function myFunction() => {}',
      'let myFunction = function() {}',
      'const myFunction = () => {}'
    ],
    correta: 1 // Resposta correta: let myFunction = function() {}
  },
  {
    pergunta: 'O que o método "push()" faz em um array em JavaScript?',
    respostas: [
      'Remove o último elemento do array',
      'Adiciona um novo elemento no início do array',
      'Adiciona um novo elemento no final do array'
    ],
    correta: 2 // Resposta correta: Adiciona um novo elemento no final do array
  },
  {
    pergunta:
      'Qual é a maneira correta de acessar o segundo elemento de um array chamado "myArray" em JavaScript?',
    respostas: ['myArray(2)', 'myArray[2]', 'myArray.second'],
    correta: 1 // Resposta correta: myArray[2]
  }
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()

//Pegar a quantidades de perguntas
const totalDePerguntas = perguntas.length
//Mostrar na tela a quantidade de perguntas que fora acertadas
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// Loop para percorrer todas as perguntas
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    //adicionar qual o index da pergunta
    dt.querySelector('input').setAttribute(
      'name',
      'pergunta-' + perguntas.indexOf(item)
    )
    // adiciona o valor da resposta no value
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    // Pegar qual input esta selecionado e verificar se esta correto
    dt.querySelector('input').onchange = event => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      //Mostrar na tela os acertos
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  // Coloca a pergunta na tela

  quiz.appendChild(quizItem)
}
