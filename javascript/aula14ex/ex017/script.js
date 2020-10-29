function tabuada() {
    var num = document.getElementById('num')
    var numero = Number(num.value)
    var res = document.getElementById('res')

    res.innerHTML = ''
    for (var c = 1;c <= 10;c++) {
        var mult = numero * c
        res.innerHTML += `${numero} x ${c} = ${mult} <br>`
    }
    res.innerHTML += 'Fim!'
}