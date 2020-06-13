function contar(valor) {
    let outroValor = document.getElementById('outroValor').value
    switch (valor) {

        case "outroValor":
            if (outroValor < 2) {
                window.alert('[ERRO] Valor inválido')
                break
            }
            document.getElementById('vSaque').innerHTML = `R$ ${outroValor},00 </br>Saque realizado com sucesso!<br><id="res"></strong>`
                //document.getElementById('res').innerHTML = 'R$ ' + outroValor + ',00'
            break
        default:
            if (isNaN(valor)) {
                window.alert('[ERRO] Valor inválido')
                break
            }
            document.getElementById('vSaque').innerHTML = `R$ ${valor},00 </br>Saque realizado com sucesso<br><id="res"></strong>`
    }
    // NOTAS PARA SAQUE
    if (Number(valor % 100 == 0)) {
        var n100 = valor / 100
        document.getElementById('nNotas').innerHTML = `${n100} nota de R$100,00`
    } else if (Number(valor % 50 == 0)) {
        var n50 = valor / 50
        document.getElementById('nNotas').innerHTML = `${n50} nota de R$50,00`
    } else if (Number(valor % 20 == 0)) {
        var n20 = valor / 20
        document.getElementById('nNotas').innerHTML = `${n20} nota de R$20,00`
    } else if (Number(valor % 10 == 0)) {
        var n10 = valor / 10
        document.getElementById('nNotas').innerHTML = `${n10} nota de R$10,00`
    }
    ////////////////////
    else if (Number(outroValor % 100 == 0)) {
        let nots100 = outroValor / 100
        document.getElementById('nNotas').innerHTML = `${nots100} notas de R$100,00`
    } else {
        let resto = (outroValor / 100).toFixed(2).split('.')
        let n1001 = parseInt(resto[0])
        let n1002 = parseInt(resto[1])
        nots100 = n1001
        if (n1002 % 50 == 0) {
            let nots50 = Number(n1002 / 50)
            document.getElementById('nNotas').innerHTML = `${nots100} notas de R$100,00 e ${nots50} notas de R$50,00`
        } else {
            let r = (n1002 / 50).toFixed(2).split('.')
            let n501 = parseInt(r[0])
            let rr1 = parseInt(r[1])
            let n502 = n1002 - (n501 * 50)
            nots50 = n501
            if (n502 % 20 == 0) {
                let nots20 = Number(n502 / 20)
                document.getElementById('nNotas').innerHTML = `${nots100} notas de R$100,00 | ${nots50} notas de R$50,00 e ${nots20} notas de R$20,00`
            } else {
                let x = (n502 / 20).toFixed(2).split('.')
                let n201 = parseInt(x[0])
                let xx1 = parseInt(x[1])
                let n202 = n502 - (n201 * 20)
                nots20 = n201
                if (n202 % 10 == 0) {
                    let nots10 = Number(n202 / 10)
                    document.getElementById('nNotas').innerHTML = `${nots100} notas de R$100,00 | ${nots50} notas de R$50,00 | ${nots20} notas de R$20,00 e ${nots10} notas de R$10,00`
                } else document.getElementById('nNotas').innerHTML = 'boa'
            }
        }
    }
}