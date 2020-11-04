let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function valido(n) {
    if (Number(n) >= 1 && Number(n) <= 100) return true
    else return false
}

function repetido(n, l) {
    if (l.indexOf(Number(n)) != -1) return true
    else return false
}

function adicionar() {
    if (valido(num.value) && !repetido(num.value, valores)) {
        valores.push(num.value)
        res.innerHTML = ''

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        item.value = `${num.value}`
        lista.appendChild(item)
    } else {
        window.alert('Número inválido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    res.innerHTML = `Ao todo temos ${valores.length} valores cadastrados <br>`
    res.innerHTML += `O maior valor informado foi ${valores.max}`
}