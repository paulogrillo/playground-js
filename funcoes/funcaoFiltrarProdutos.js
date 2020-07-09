function maisBaratosQue(valor, precos) {

       return precos.filter(p => p <= valor);
    
    }
    
     
    function maisCarosQue(valor, precos) {
    
       return precos.filter(p => p >= valor);
    
    }
    
    function precosEntre(valorMenor, valorMaior, precos) {
    
       return maisCarosQue(valorMenor, maisBaratosQue(valorMaior, precos));
    
    }
    
    console.log(precosEntre(5, 10, [1,2,3,4,5,6,7,8,9,10])); // [ 5, 6, 7, 8, 9, 10 ]
    
