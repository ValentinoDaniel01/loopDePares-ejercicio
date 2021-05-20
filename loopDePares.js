function loopDePares(a){
    for(let numero = 0; numero < 101; numero++){
        let suma = numero + a;
        if(suma % 2 == 0){
            console.log('el numero', numero, 'es par')
        }else{console.log(numero)}
    }
}

loopDePares(2)
