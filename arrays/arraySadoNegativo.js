var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0

//seu loop aqui:
for(var i = 0; i <listaDeGanhos.length; i++)  

if(listaDeGanhos[i]<0) {totalNegativos = totalNegativos + 1}

console.log(totalNegativos)
