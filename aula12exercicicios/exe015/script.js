function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anof = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (anof.value.lenght == 0 || anof.value > ano) {
        window.alert('[ERRO] Verifique os dados digitados e tente novamente!')
    } else {
        var sexf = document.getElementsByName('radsex')
        var idade = ano - Number(anof.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (sexf[0].checked) {
            genero = 'Mulher'
            if (idade < 12) {
                genero = 'Menina'
            } else if (idade < 18) {
                genero = 'Adolecente'
            }
            if (idade <= 4) {
                res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos`
                img.setAttribute('src', 'menina_n.png')
                    // nene
            } else if (idade < 10) {
                img.setAttribute('src', 'menina_c.png')
                    // criança                
            } else if (idade < 18) {
                img.setAttribute('src', 'adole_m.png')
                    // adolescente
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher_adulta.png')
                    // Adulto

            } else {
                img.setAttribute('src', 'mulher_senhora.png') // Idoso

            }
        } else if (sexf[1].checked) {
            genero = 'Homem'
            if (idade < 12) {
                genero = 'Menino'
            } else if (idade < 18) {
                genero = 'Adolecente'
            }
            if (idade <= 4) {
                img.setAttribute('src', 'menino_n.png')
                    // nene
            } else if (idade < 10) {
                img.setAttribute('src', 'menino_c.png')
                    // criança                
            } else if (idade < 18) {
                img.setAttribute('src', 'adole_h.png')
                    // adolescente

            } else if (idade < 50) {
                img.setAttribute('src', 'homem_adulto.png')
                    // Adulto

            } else {
                img.setAttribute('src', 'homem_senhor.png')
                    // Idoso

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos`
        res.appendChild(img)
    }
}