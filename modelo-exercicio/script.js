function carregar(){
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas !`
    if(hora >= 0 && hora < 12){
        img.src = 'manha300.png'
        document.body.style.background = '#f6e58d'
    }
        else if (hora >= 12 && hora < 18){
            img.src = 'tarde300.png'
            document.body.style.background = '#cfa421'
        }else{
            img.src = 'noite300.jpg'
            document.body.style.background = '#200f09'
        }
}