function mudaFoto(foto) {
    document.getElementById('icone').src = foto
}

function calctotal() {
    var qvalor = Number(document.getElementById('cquant').value)
    total = qvalor * 1500

    document.getElementById('ctotal').value = total
}