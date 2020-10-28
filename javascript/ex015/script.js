function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique se os dados estão corretos')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = 'blue'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src','h-criança.png')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src','h-jovem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src','h-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src','h-idoso.png')
            }
        }
        else {
            genero = 'Mulher'
            document.body.style.background = 'red'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src','m-criança')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src','m-jovem.png')
            } else if (idade < 60) {
                // Adulta
                img.setAttribute('src','m-adulta.png')
            } else {
                // Idosa
                img.setAttribute('src','m-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}