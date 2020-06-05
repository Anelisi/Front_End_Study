function contar() {
    let nota100 = document.getElementById('b100')
    let nota50 = document.getElementById('b50')
    let nota20 = document.getElementById('b20')
    let nota10 = document.getElementById('b10')
    let nota5 = document.getElementById('b5')
    let nota2 = document.getElementById('b2')
    let outroValor = document.getElementById('botsacar')
    let res = document.getElementById('res')
    let vSaque = 0

    switch (vSaque) {
        case "nota100": // tentei dessa forma para ver se essa sintaxe funcionava, mas não deu também
            vSaque = '100,00'
            document.getElementById('res').innerHTML += `${vSaque}`
            break;
        case "b50":
            document.getElementById('res').innerHTML += 'R$ 50,00'
            break
        case "b20":
            document.getElementById('res').innerHTML += 'R$ 20,00'
            break
        case "b10":
            document.getElementById('res').innerHTML += 'R$ 10,00'
            break
        case "b5":
            document.getElementById('res').innerHTML += 'R$ 5,00'
            break
        case "b2":
            document.getElementById('res').innerHTML += 'R$ 2,00'
            break
        case "outroValor":
            document.getElementById('res').innerHTML += `${outroValor}`
            break

        default:
            window.alert('[ERRO] Valor inválido')

            break;
    }
}