var agora = new Date()
var dia = agora.getDay()

switch(dia) {
    case 0:
        console.log('Domingou')
        break
    case 1:
        console.log('Segundou')
        break
    case 2:
        console.log('Terçou')
        break
    case 3:
        console.log('Quartou')
        break
    case 4:
        console.log('Quintou')
        break
    case 5:
        console.log('Sextou')
        break
    case 6:
        console.log('Sabadou')
        break
    default:
        console.log('[EREO] Dia inválido')
        break
}