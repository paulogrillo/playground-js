/*
Tabuada
Precisamos de um código que calcule a tabuada de multiplicação do 7 e imprima a expressão seguido do resultado. Exemplo:

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21

Lembre-se de fazer a multiplicação do 7x1 até 7x10! 

Há, uma última dica, você pode usar a variável i que é nosso contador para concatenar na hora de montar a mensagem “7 x 1” Afinal os valores depois do X (1,2,3,4…) são os valores que mudam de acordo com cada loop.
*/

for ( var i = 1; i <=10; i++){
console.log("7 x " + i + " = " + 7 * i)
}