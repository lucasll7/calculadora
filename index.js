function calcular(tipo, valor) {
    if (tipo === 'acao') {

        //Limpa visor
        if (valor === 'c') {
            document.getElementById('resultado').value = ''
        }
        //Adiciona operação ao visor
        if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') {
            document.getElementById('resultado').value += valor
        }
        //Resultado da operação
        if (valor === '=') {
            let resFinal = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = resFinal
        }
    }

    //Adiciona numeros ao visor
    else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }
}
