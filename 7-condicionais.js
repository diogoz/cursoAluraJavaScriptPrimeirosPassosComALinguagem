console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
  "Corinthians",
  "Presidente Prudente",
  `Sao Paulo`,
  `Rio de Janeiro`
);
// console.log(listaDeDestinos);
const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada = true;

// if (idadeComprador >= 18) {
//   console.log("O comprador é maior de idade!!");
//   listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//   //A pessoa é menor de idade
//   console.log("Comprador está acompanhado");
//   listaDeDestinos.splice(1, 1);
// } else {
//   console.log("O comprador é menor de idade e nao está acompanhado");
// }

console.log(listaDeDestinos);


// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem");
  listaDeDestinos.splice(1, 1);
  console.log("Lista de destinos atualizada!",listaDeDestinos);
} else {
  console.log("É menor de idade e nao posso vender");
}

console.log("Embarque \n\n");
if(idadeComprador >=18 && temPassagemComprada){
  console.log("Boa viagem!");
}else{
 console.log("Voce nao pode embarcar");
}