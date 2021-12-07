//1 Exemplo const
const PI = 3.141593;
PI = 3.0; /*Lança um erro, pois PI não pode ser novamente atribuido valor*/

console.log(PI);

//2 Objeto const
const jsFramework = {
  name: "Angular",
};
jsFramework.name = "React"; //Tentano alterar o name da variavel JsFramework
/* Apesar do código acima funcionar, variavéis const são somente de leitura. Então por quê é possível executar o código anterior? 
Ao trabalhar com objetos, um const somente para leitura permite que as propriedades do objeto recebam novos valores ou sejam atualizadas, mas a referência à variável em si (O endereço de referência na memória) não pode ser alterada, o que significa que ela não pode receber um novo valor.

Se tentarmos atribuir uma nova referência à variavel jsFramework, como vemos a seguir, o compilador reclamará e lançará um erro ("jsFramework" is read-only) */

//Erro, não é possível atribuir outra referência ao objeto.
jsFramework = {
  name: "Angular",
};
