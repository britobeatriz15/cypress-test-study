it('nada agora', function() {})

/*function soma(a, b) {
  return a + b
}*/

/*const soma = function soma(a, b) {
  return a + b
}*/

/*const soma = (a, b) => {
  return a + b
}*/

/* aqui o sinal de = mais o sinal de >, formam uma seta, essa função se chama arrow, que pode ser usada diretamente exemplo: */ 

//const soma = (a, b) => a + b

//console.log(soma(3, 7))

/* Aqui segue algumas variações do arrow fuction*/

//const soma = a => a + a

//console.log(soma(5,5))

const soma = () => 5 + 5

console.log(soma())

/*teste function e arrow*/

it('a function test...', function() {
  console.log('function',this)
})

/* aqui vai dar undefined, o this referencia o vazio inserido*/

it('a arrow test...', () => {
  console.log('arrow', this)
})