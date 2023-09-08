//Fazer um programa que recebe uma string e retorna a maior letra, segundo o
//alfabeto
//Como vou fazer?
//Preciso usar o split para retirar os espaços e fazer com que cada letra
//tenha um espaço numa array
//cada letra do alfabeto pode ser reconhecida como um número e segue de forma
//crescente

//array bidimensional feito como cada número do primeiro array corresponda com a posição da letra do
//alfabeto do segundo array, o alfabeto contem 26 letras.
const alfabeto = [
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ],
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
];
//fução que cria uma nova array com os números correspondentes de cada letra das palavras
//recebidas por ela
const biggestLetter = (str) => {
  let contalf = [];
  //Retira os espaços da string
  let concString = str.replace(" ", "");
  //Transforma cada letra em um elemento da array
  concString = concString.split("");
  //Testa qual das letras correspondem ao alfabeto e salva a posição delas
  for (let i = 0; concString.length > i; i++) {
    for (let j = 0; alfabeto[0].length > j; j++) {
      if (concString[i] === alfabeto[1][j]) {
        contalf.push(alfabeto[0][j]);
      }
    }
  }
  //Salva o maior número sendo ele a maior letra do alfabeto
  let contB = 0;
  for (let i = 0; contalf.length > i; i++) {
    if (contalf[i] > contB) {
      contB = contalf[i];
    }
  }
  console.log(contB);
  //Usa a posição do maior número para exibir a maior letra do alfabeto
  console.log(alfabeto[1][contB - 1]);
};
biggestLetter("ola yundow");

//NOTA: Existe uma maneira bem mais simples de resolver este exercicio utilizando a função
//sort, porem foi escolhida fazer dessa forma para uma aprofundamento nos estudos de arrays
