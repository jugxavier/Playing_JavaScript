// O aplicativo atual está perguntando quanto dinheiro o usuário possui. 
// Depois que o usuário digitar a quantia, precisamos console.log de uma das 
// seguintes respostas:

// Se o usuário tiver mais de US $ 100, responderemos: "Dê-me seu dinheiro!"
// Se o usuário tiver mais de US $ 50, responderemos: "Compre um café barato!"
// Se o usuário tiver menos ou igual a US $ 50, responderemos: "Você é um cara pobre, 
// vá embora!"
// Dica:
// Use uma instrução If / else para verificar o valor da variável "total".

var total = prompt("How much money do you have in your pocket")

  if(total >100){
    console.log("Dê-me seu dinheiro!")
  }
  else if(total >50){
    console.log("Compre um café barato!")
  }
  else{
    console.log( "Você é um cara pobre, vá embora!")
  }
//___________________________________________________________________
// Escreva uma função chamada "isOldEnoughToDrink".

// Dado um número, neste caso uma idade, "isOldEnoughToDrink" 
// retorna se uma pessoa dessa idade tem idade suficiente para beber legalmente nos Estados Unidos.

// Notas: * A idade legal para beber nos Estados Unidos é 21.

// var output = isOldEnoughToDrink (22);
// console.log (output); // -> true