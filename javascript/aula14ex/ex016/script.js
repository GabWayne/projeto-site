function contar() {
    var ini = document.getElementById('inicio')
    var pas = document.getElementById('passo')
    var fim = document.getElementById('fim')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || pas.value.length == 0 || fim.value.length == 0) {
        //window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossível contar'
    } else {
        var inicio = Number(ini.value)
        var passo = Number(pas.value)
        var final = Number(fim.value)

        if (passo <= 0) {
            window.alert('Impossível contar com passo menor que 1. Considerando passo 1')
            passo = 1
        }

        res.innerHTML = ``
        if (inicio < final) {   //contagem crescente
            for (var c = inicio;c <= final;c += passo) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {    //contagem decrescente
            for (var c = inicio;c >= final;c -= passo) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}