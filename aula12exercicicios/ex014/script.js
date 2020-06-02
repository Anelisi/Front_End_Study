function carregar() {
    var msg = document.getElementById('msg')
    var saudar = document.getElementById('saudar')
    var img = document.getElementById('imagem')
    var agora = new Date();
    var diaSemana = agora.getDay();
    var hora = addZero(agora.getHours());
    var min = addZero(agora.getMinutes());


    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i
    }

    switch (diaSemana) {
        case 0:
            var dia = 'Domingo'
            break
        case 1:
            var dia = 'Segunda-feira'
            break
        case 2:
            var dia = 'Terça-feira'
            break
        case 3:
            var dia = 'Quarta-feira'
            break
        case 4:
            var dia = 'Quinta-feira'
            break
        case 5:
            var dia = 'Sexta-feira'
            break
        case 6:
            var dia = 'Sábado'
    }

    if (hora < 7) {
        msg.innerHTML = (`Hoje é <strong>${dia}</strong><br> e são <strong>${hora}h${min}min</strong>`)
        img.src = 'madrugada.png'
        saudar.innerHTML = ('Tenha uma ótima madrugada!')
        document.body.style.background = '#374b6e'
        document.getElementById('botao').innerText = 'Atualizar'
        document.getElementById('txtDataHora').style.display = 'none'
        document.getElementById('txtG').style.color = '#fd659b'
        document.getElementById('footer').style.color = '#fd659b'
    } else if (hora < 12) {
        msg.innerHTML = (`Hoje é <strong>${dia}</strong><br> e são <strong>${hora}h${min}min</strong><br>`)
        img.src = 'manha.png'
        document.body.style.background = '#ffdb58'
        document.body.style.color = '#964b00'
        saudar.innerHTML = ('Tenha um ótimo dia!')
        document.getElementById('txtG').style.color = '#ff8c00'
        document.getElementById('txtDataHora').style.display = 'none'
        document.getElementById('botao').innerText = 'Atualizar'
        document.getElementById('botao').style.color = '#964b00'
        document.getElementById('botao').style.background = '#ffaa76'
        document.getElementById('footer').style.color = '#ff8c00'
    } else if (hora < 19) {
        msg.innerHTML = (`Hoje é <strong>${dia}</strong><br> e são <strong>${hora}h${min}min</strong><br>`)
        img.src = 'tarde.png'
        document.body.style.background = '#ff956c'
        document.getElementById('txtG').style.color = '#a75d67'
        document.body.style.color = '#a75d67'
        saudar.innerHTML = ('Tenha uma ótima tarde!')
        document.getElementById('txtDataHora').style.display = 'none'
        document.getElementById('botao').innerText = 'Atualizar'
        document.getElementById('botao').style.color = '#6e3d26'
        document.getElementById('botao').style.background = '#bc8f8f'
        document.getElementById('footer').style.color = '#6e3d26'
            //document.getElementById('botao').style.display = 'none'
    } else {
        msg.innerHTML = (`Hoje é <strong>${dia}</strong><br> e são <strong>${hora}h${min}min</strong><br>`)
        img.src = 'noite.png'
        saudar.innerHTML = ('Tenha uma ótima noite!')
        document.body.style.background = '#05448c'
        document.getElementById('botao').innerText = 'Atualizar'
        document.getElementById('botao').style.color = '#af4c4d'
        document.getElementById('txtDataHora').style.display = 'none'
        document.getElementById('txtG').style.color = '#af4c4d' //'#fd659b'
        document.getElementById('footer').style.color = '#af4c4d' //'#fd659b'

    }
}