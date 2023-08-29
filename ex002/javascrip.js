function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var idade = ano - Number(fano.value)
    var img = document.getElementById('div#img')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO Verifique os dado e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 2){
                //recem nascido
                img.setAttribute('src','foto-bebe-mas.png')
            }else if(idade < 10){
                // criança
                img.setAttribute('src','foto-criança-masc.png')
            }else if (idade < 21){
                //adolecente

            }else if (idade < 51){
                //adulto
                img.setAttribute('src', 'foto-adulto-masc.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-masc.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos genero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}