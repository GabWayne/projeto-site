function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()

    hora = 1
    msg.innerText = `Agora são ${hora} horas.`

    if (hora >= 5 && hora <= 12) {
        msg.innerText += ' Bom dia!'
        foto.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora <= 18) {
        msg.innerText += ' Boa tarde!'
        foto.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerText += ' Boa noite!'
        foto.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}