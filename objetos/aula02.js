/* Classe construtor */
function Book(title, pages, cod) {
  this.title = title;
  this.pages = pages;
  this.cod = cod;
}

/* Instânciar a classe */
let book = new Book("Livro X", "50", "55553333222");

/* Debug */
// console.log("Título do livro:", book.title);
// console.log("Páginas:", book.pages);
// console.log("Código:", book.cod);

/* Usando prototype para acessar uma cópia do atributo da classe nem ter que percorrer toda classe */
// Book.prototype.printTitle = function () {
//   console.log(this.title);
// };
// book.printTitle();

/*Também podemos declarar funções diretamente na definição da classe */

function Book(title, pages, cod) {
  this.title = title;
  this.pages = pages;
  this.cod = cod;

  this.printCod = function () {
    console.log("Código:", this.cod);
  };
}
book.printCod();
