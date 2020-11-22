console.log("\nTrabalhando com condicionais\n");

const listaDeDestinos = new Array(
  "Corinthians",
  "Presidente Prudente",
  `Sao Paulo`,
  `Rio de Janeiro`
);
// console.log(listaDeDestinos);
const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Sao Paulo';

console.log("Destinos possiveis:", listaDeDestinos, "\n\n");



const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0;
let destinoExiste = false;
// while(contador<3){
//   if(listaDeDestinos[contador] == destino){
//     console.log("Destino existe");
//     destinoExiste = true;
//     break;
//   }
//   contador += 1;
// }


if (podeComprar && destinoExiste){
  console.log("Boa Viagem!!");
}else{
  console.log("Desculpe, tivemos um erro!");
}

// console.log("Embarque \n\n");
// if(idadeComprador >=18 && temPassagemComprada){
//   console.log("Boa viagem!");
// }else{
//  console.log("Voce nao pode embarcar");
// }

for (let i = 0; i<=3 ; i++) {
  if (listaDeDestinos[i] == destino) {
    console.log("Destino existe");
    destinoExiste = true;
    break;
  }
  
}
