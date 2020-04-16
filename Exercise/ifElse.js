// O aplicativo atual está perguntando quanto dinheiro o usuário possui. 
// Depois que o usuário digitar a quantia, precisamos console.log de uma das 
// seguintes respostas:

// Se o usuário tiver mais de US $ 100, responderemos: "Dê-me seu dinheiro!"
// Se o usuário tiver mais de US $ 50, responderemos: "Compre um café barato!"
// Se o usuário tiver menos ou igual a US $ 50, responderemos: "Você é um cara pobre, 
// vá embora!"
// Dica:
// Use uma instrução If / else para verificar o valor da variável "total".

// var total = prompt("How much money do you have in your pocket")

//   if(total >100){
//     console.log("Dê-me seu dinheiro!")
//   }
//   else if(total >50){
//     console.log("Compre um café barato!")
//   }
//   else{
//     console.log( "Você é um cara pobre, vá embora!")
//   }
//___________________________________________________________________
// Escreva uma função chamada "isOldEnoughToDrink".

// Dado um número, neste caso uma idade, "isOldEnoughToDrink" 
// retorna se uma pessoa dessa idade tem idade suficiente para beber legalmente nos Estados Unidos.

// Notas: * A idade legal para beber nos Estados Unidos é 21.

// var output = isOldEnoughToDrink (22);
// console.log (output); // -> true
function isOldEnoughToDrink(age){
    if(age >21){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isOldEnoughToDrink(18))
//___________________________________________________________________
// Escreva uma função chamada "isOldEnoughToDrive".

// Dado um número, neste caso uma idade, "isOldEnoughToDrive" 
// retorna se uma pessoa dessa idade tem idade suficiente para dirigir legalmente nos Estados Unidos.

// Notas: * A idade legal para dirigir nos Estados Unidos é 16.

// var output = isOldEnoughToDrive (22);
// console.log (output); // -> true

//your code here!!
// 'function isOldEnoughToDrive(age){
//     if(age >16){
//         return true;
//     }
//     else{
//         return false;
//     }
// }'
// console.log(isOldEnoughToDrive(17))


//___________________________________________________________________

// Escreva uma função chamada "isOldEnoughToVote".

// Dado um número, neste caso uma idade, 'isOldEnoughToVote' 
//  se uma pessoa dessa idade tem idade suficiente para votar legalmente nos Estados Unidos.

// Notas: * A idade legal para votar nos Estados Unidos é de 18 anos.

// var output = isOldEnoughToVote (22);
// console.log (output); // -> true
function isOldEnoughToVote(age){
    if(age >18){
        return true
    }
    else{
        return false
    }
}
// console.log(isOldEnoughToVote(17))
    


//___________________________________________________________________

// Escreva uma função chamada "isOldEnoughToDrinkAndDrive".

// Dado um número, nesse caso, uma idade, "isOldEnoughToDrinkAndDrive" 
// retorna se uma pessoa dessa idade tem idade suficiente para beber e dirigir legalmente nos Estados Unidos.

// Notas: * A idade legal para beber nos Estados Unidos é 21 anos. * É sempre ilegal beber e dirigir nos Estados Unidos.

// var output = isOldEnoughToDrinkAndDrive (22);
// console.log (saída); // -> false
function isOldEnoughToDrinkAndDrive(age){
    // if(age >21){
    //     return false
    // }
    // else{ 
    //     return false
    // }
    return false;
}
console.log(isOldEnoughToDrinkAndDrive(50))
//___________________________________________________________________
// Aqui está uma tabela de preços para uma empresa de catering para casamentos:

// Até 50 pessoas $ 4.000
// Até 100 pessoas US $ 10.000
// Até 200 pessoas $ 15.000
// Mais de 200 pessoas $ 20.000

// Instruções
// Escreva um algoritmo que solicite ao usuário o número de pessoas que participam do casamento e imprima o preço correspondente no console.

// Por exemplo, se o usuário disser que 20 pessoas estão participando do casamento, ele deverá custar US $ 4.000.

// Sugestão
// Use if / else para dividir seu código e defina o valor da variável de preço da maneira correta.

let userInput = prompt('How many people are coming to your wedding?');
//your code here

    if(userInput <51){
      console.log(4000)
    }
    else if(userInput <101){
      console.log(10000)
    }
    else if(userInput <201){
      console.log(15000)
    }
    else if(userInput >200){
      console.log (20000)
    }
     else{
       console.log("por favor especificar o numero")
     }



