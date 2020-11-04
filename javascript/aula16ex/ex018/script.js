let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function valido(n) {
    if (Number(n) >= 1 && Number(n) <= 100) return true
    else return false
}

function repetido(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else return false
}

function adicionar() {
    if (valido(num.value) && !repetido(num.value, valores)) {
        valores.push(Number(num.value))
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
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            if (valores[pos] > maior) maior = valores[pos]
            if (valores[pos] < menor) menor = valores[pos]
            soma += valores[pos]
        }

        media = soma / valores.length

        res.innerHTML = `A lista possui ${valores.length} valores cadastrados<br>`
        res.innerHTML += `O maior valor adicionado à lista é ${maior}<br>`
        res.innerHTML += `O menor valor adicionado à lista é ${menor}<br>`
        res.innerHTML += `A soma de todos os valores adicionados à lista é ${soma}<br>`
        res.innerHTML += `A média de todos os valores adicionados à lista é ${media}`
    }
}