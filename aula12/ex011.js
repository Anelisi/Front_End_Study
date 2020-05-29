var agora = new Date()
var diaSemana = agora.getDay()
var hora = agora.getHours()
var min = agora.getMinutes()

switch (diaSemana) {
    case 0:
        var dia = ('Domingo')
        break
    case 1:
        var dia = ('Segunda-feira')
        break
    case 2:
        var dia = ('Terça-feira')
        break
    case 3:
        var dia = ('Quarta-feira')
        break
    case 4:
        var dia = ('Quinta-feira')
        break
    case 5:
        var dia = ('Sexta-feira')
        break
}
if (hora < 7) {
    console.log(`Hoje é ${dia} são ${hora}:${min} da madrugada`)
    console.log('Tenha uma ótima madrugada!')
} else if (hora < 12) {
    console.log(`Hoje é ${dia} são ${hora}:${min} da manhã!`)
    console.log('Tenha um ótimo dia!')
} else if (hora < 19) {
    console.log(`Hoje é ${dia} são ${hora}:${min} da tarde`)
    console.log('Tenha uma ótima tarde!')
} else {
    console.log(`Hoje é ${dia} são ${hora}:${min} da noite`)
    console.log('Tenha uma ótima noite!')
}