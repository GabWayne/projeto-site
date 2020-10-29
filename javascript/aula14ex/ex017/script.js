function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        numero = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1;c <= 10;c++) {
            var item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}