function contar() {
    var ini = document.getElementById('inicio')
    var pas = document.getElementById('passo')
    var fim = document.getElementById('fim')
    var res = document.getElementById('res')

    var inicio = Number(ini.value)
    var passo = Number(pas.value)
    var final = Number(fim.value)

    if (passo <= 0) {
        window.alert('Impossível contar com passo menor que 1. Considerando passo 1')
        passo = 1
    }

    res.innerHTML = ``
    for (var c = inicio;c <= final;c += passo) {
        res.innerHTML += `${c} -> `
    }
    res.innerHTML += `Fim!`
}