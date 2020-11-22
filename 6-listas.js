console.log("Trabalhando com listas");

// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestinos = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro',
  'Presidente Prudente'
)
listaDeDestinos.push('Araçatuba') // adicionando item na lista

console.log("Destinos possiveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(4);  // removendo item da lista, 1º item é posicao 0;
console.log(listaDeDestinos);
console.log(listaDeDestinos[3], listaDeDestinos[1]);