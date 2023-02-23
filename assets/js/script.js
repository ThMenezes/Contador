function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')

    let resultado = document.getElementById('resultado')

    if(inicio.value == '' || fim.value == '' || passo.value == '') {
        resultado.innerHTML = 'Impossivel contar, preencha todos os campos!'

    }else {
        resultado.innerHTML = 'Contando: <br>'
        let valorInicial = Number(inicio.value);
        let valorFinal = Number(fim.value);
        let valorPasso = Number(passo.value);               

        if(valorPasso <= 0) {
            alert('Passo inválido! Considerando como PASSO 1')
            valorPasso = 1;
        }

        if(valorInicial < valorFinal) {
            //contagem crescente
            for (let contador = valorInicial; contador <= valorFinal; contador += valorPasso){
            resultado.innerHTML += `${contador} \u{23F1}`
            }  
                  
        } else {
            // contagem regressiva
            for (let contador = valorInicial; contador >= valorFinal; contador -= valorPasso){
                resultado.innerHTML += `${contador} \u{23F1}`
            }
        }
        
        resultado.innerHTML += ` Fim ! \u{1f3c1}`;             
    }     
        
}