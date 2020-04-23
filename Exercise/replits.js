// A função Math.random () retornará um número decimal aleatório entre 0 e 1; 
// execute o exercício como várias vezes para testá-lo.

// Instruções
// Agora, atualize o código da função para retornar um número inteiro (sem decimais) entre 1 e 10.

// Dica:
// -Math.random retorna apenas números decimais de 0 a 1, e precisamos de números inteiros de 1 a 10.
// -Multiplique Math.random () por 10 para mover os 2 slots decimais para a direita.
// -Use a função Math.floor () para remover o restante dos decimais e ter apenas números inteiros.

function getRandomInt()
{
	var randomNumber = Math.floor(Math.random()*10+1);
	// randomNumber=5;
	return randomNumber;
}


// console.log(getRandomInt());
//-----------------------------------------------------------------


// Se você executar esse código, verá uma contagem de 0 a 99 (caracteres em branco). 
// Corrija-o para que conte até 100, e você verá 101 em verde depois.

// Você pode concertar isso?
function startCounting()
{
	
	for(var i = 100; i >= 0; i--)
	{
		//console.log(i);
	}
	
	return i;
}

startCounting();
//-----------------------------------------------------
// Os loops são muito úteis, você não precisa se repetir escrevendo as mesmas linhas muitas vezes.

// O loop "for" permite executar o mesmo código para valores diferentes.

// Leia mais sobre loops:
// https://www.w3schools.com/js/js_loop_for.asp

// Instruções
// Crie uma função chamada standardsMaker que imprima 300 vezes a frase "Farei perguntas se estiver com duvidas".
// function standardsMaker()
// 	{
		
// 		for(var i = 0; i <= 300; i++)
// 		{
// 			if(i==299){
// 			// 	console.log("Farei perguntas se estiver com duvidas ok")
// 			// }
// 			// console.log("Farei perguntas se estiver com duvidas");
// 		}
		
// 		return i;
// 	}
// //calling the function
// standardsMaker();
//---------------------------------------

// Imagine que seu software está executando o inventário de uma loja de sapatos, 
// um cliente precisa saber em que cores você tem um determinado sapato.

// Instruções
// Complete esta declaração de opção com 3 cores possíveis: vermelho, verde e azul.

// A função precisa retornar true se a cor estiver disponível ou false se a cor não estiver disponível.

// Dica:
// http://www.w3schools.com/js/js_switch.asp


function getColor(selection){
	switch(selection){
		case "red":
		case"green":
		case "blue":
        	return true;
		//Add more options here
	    default :
	    	return false;//return false because the user pick a unavailable color
	    break;               
	}
}

// var colorname = prompt('What color do you want?');
// var isAvailable = getColor(colorname.toLowerCase());
// if(isAvailable) console.log('Good news! That color is available');
// else console.log('We are sorry, that color is not available');
//-----------------------------------------------------------------


// Criamos uma função que retorna uma cor com base em um número entre 1 e 4 (para qualquer número diferente, ela retornará a cor preta).

// Instruções
// Digamos que somos professores em uma sala de aula de 10 alunos e queremos 
// atribuir aleatoriamente UMA cor, entre vermelho, amarelo, azul e verde, a CADA aluno.

// (apenas uma cor por aluno)

// Altere a função "getAllStudentColors" para que ele retorne uma matriz de 10 cores, 
// com cada item na matriz representando a cor atribuída a cada aluno.

// Dica:
// - Você tem 10 alunos, precisa repetir 10 vezes.
// - Cada vez que você faz um loop, gere um número aleatório entre 1 e 4 usando a função Math.random () que vimos no último exercício.
// - Use a função "getColor" neste exercício para obter o nome da cor do número que você obtém.
// - Imprima a cor no console.

// MENSAGEM IMPORTANTE:
// Se você acha que não está entendendo o loop, é uma boa idéia concluir a sala de aula Arrays Repl.it e voltar aqui:
// https://repl.it/classroom/invite/BB4WDpk

// function getColor(colorNumber=0){
// 	// 	//making sure is a number and not a string
// 		colorNumber = parseInt(colorNumber);
// 		switch(colorNumber){
// 			case 1: 
// 				return "red"; 
// 				break;
// 			case 2: 
// 				return "yellow"; 
// 				break;
// 			case 3: 
// 				return "blue"; 
// 				break;
// 			case 4: 
// 				return "green"; 
// 				break;
// 			default: 
// 				return "black"; 
// 				break;
// 				// x
// 		}
// 	}
	
// 	function getAllStudentColors(){
// 		let array=[]
// 		for(let i=0; i<10; i++){
// 			let test= getColor( Math.floor(Math.random()*4+1));
// 			array.push(test);
	// 	}
	// 	return array
	// 	//your loop here
	// 	// var exampleColor = getColor(1);
	// }
	
	// console.log(getAllStudentColors())
//---------------------------------------------------
//  Write a function called "checkAge". 

// Given a person's name and age, "checkAge" returns one of two messages:

// "Go home, {insert_name_here}!", if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older.

// Naturally, replace "{insert_name_here}" with the given name. :)

// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'
function checkAge(name, age){
 
	switch(true){
      case "name":
      case age>=21:
        return "Welcome, "+ name
     break;
      case age<21:
        return "Go home, " + name
    }       
  // your code here
}
 console.log(checkAge ("Adrian",222))

// -----------------------------------------------
// Escreva uma função chamada "getFullName".

// Dado um nome e um sobrenome, "getFullName" retorna uma única sequência com o nome e o sobrenome separados por 
//um único espaço.

// var output = getFullName ('Joe', 'Smith');
// console.log (saída); // -> 'Joe Smith'
function getFullName(firstName, lastName) {
	return firstName +" "+lastName
}
console.log(getFullName("Joe", "Smith"))
//------------------------------------------------
// Write a function called "getLengthOfWord".

// Given a word, "getLengthOfWord" returns the length of the given word.

// var output = getLengthOfWord('some');
// console.log(output); // --> 4
function getLengthOfWord(word) {
//your code herefunction getLengthOfWord(word) {
	return word.length
  //your code here
  
}
  console.log(getLengthOfWord("some"))

//----------------------------------------------
//  Write a function called "getLengthOfTwoWords".

// Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

// var output = getLengthOfTwoWords('some', 'words');
// console.log(output); // --> 9
function getLengthOfTwoWords(word1, word2) {
//your code here
	return word1.length + word2.length

}
 console.log(getLengthOfTwoWords('some', 'words'))
//----------------------------------------
// Write a function called "isGreaterThanTen".

// Given a number, "isGreaterThanTen" returns whether it is greater than 10.

// var output = isGreaterThanTen(11);
// console.log(output); // --> true
function isGreaterThanTen(num) {
	if(num >10){
		return true
	}
	return false
}
// console.log(isGreaterThanTen(11))
//----------------------------------------
//  Write a function called "isLessThan30".

// Given a number, "isLessThan30" returns whether the given number is less than 30.

// var output = isLessThan30(9);
// console.log(output); // --> true
function isLessThan30(num) {
	//your code here
	if(num <30){
		return true
	}
	return false
}
console.log(isLessThan30(9))
//----------------------------------------
//  Write a function called "equalsTen".

// Given a number, "equalsTen" returns whether or not the given number is 10.

// var output = equalsTen(9);
// console.log(output); // --> false
function equalsTen(num) {
     if(num ==10){
    return true
}
else{
  return false
}
}
console.log(equalsTen(9))
//----------------------------------------
//  Write a function called "isLessThan".

// Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

// var output = isLessThan(9, 4);
// console.log(output); // --> true
function isLessThan(num1, num2) {
    //your code here
	if(num1>num2){
		return true
	}
	else{
		return false
	}
}
console.log(isLessThan(9,4))
//----------------------------------------
//  Write a function called "isGreaterThan".

// Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

// var output = isGreaterThan(11, 10);
// console.log(output); // --> false
function isGreaterThan(num1, num2){
//your code here
	if(num1<num2){
	return true
	}
	else{
	 	return false
	}
}
console.log(isGreaterThan(9,10))
//----------------------------------------
//  Write a function called "isEqualTo".

// Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.

// var output = isEqualTo(11, 10);
// console.log(output); // --> false
function isEqualTo(num1, num2) {
//your code here
if(num1=num2){
    return true
	}
	else{
		return false
	}
}
console.log(isEqualTo(11,10))
