/*
No sistema político atual, temos algumas regras para participar das eleições. 
A principal delas, é que o voto é (obrigatório a partir dos 18 anos), e (opcional a partir dos 16!) 


Diante desse cenário, escreva um código que de acordo com a variável idade informe ao usuário usando console.log(), “Você é obrigado a votar” caso ele cumpra o requisito ou “Seu voto é opcional”.
*/

var idade = 17
// Sua validação aqui
if (idade >= 18){
    console.log("Você é obrigado a votar");
}

if (idade >= 16){
    console.log("Seu voto é opcional")
}
