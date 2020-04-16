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
		console.log(i);
	}
	
	return i;
}

startCounting();