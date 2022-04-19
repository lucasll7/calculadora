function calcular(tipo, valor) {
    if (tipo === 'acao'){

        /* limpa o visor */
        if(valor === 'c'){
            document.getElementById('res').value = ''

        }/* operadores aritmeticos */ 
        if( valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){
            document.getElementById('res').value += valor
        }

        /* resultado das operacoes */
        if(valor === '='){
            var res_final = eval(document.getElementById('res').value)
            document.getElementById('res').value = res_final
        }

    /* valores numericos */
    }else if(tipo === 'valor'){
        document.getElementById('res').value += valor
    }
    
}