function comecaComMaiuscula(palavra){

      return /^[A-Z]/.test(palavra)
    
    }
    
     
    
    var palavras = ["Amor", "copo", "Bolacha", "biscoito"];
    
     
    
    // Seu código vem aqui embaixo.
    
    
    for(var i = 0; i < palavras.length; i++){
    
    var maiuscula = comecaComMaiuscula(palavras[i]);
    
      if(maiuscula == true){
    
         console.log("A palavra " + palavras[i] + " Começa com maiuscula")
    
         continue
    
      }else{
    
         console.log("A palavra " +palavras[i] + " Não começa com maiuscula")
    
      }
    
    }
