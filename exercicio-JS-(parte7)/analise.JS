let num1 = document.getElementById('fnum')
let lista = document.getElementById('flista')
let array = []
let res = document.getElementById('res')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function Adicionar(){
    if(isNumero(num1.value) && !inLista(num1.value , array)) {
        array.push(Number(num1.value))
        let item = document.createElement('option')
        item.text = `Valor ${num1.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num1.value = ''
    num1.focus()
}

function Finalizar(){
    if(array.length == 0 ){
        window.alert('Adicione valores antes de começar')
    }else{
        let total = array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        let media = 0
        for(let pos in array){
            soma += array[pos]
            if(array[pos] > maior)
            maior = array[pos]
        }
        for(let seg in array){
            if(array[seg] < menor)
            menor = array[seg]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor adicionado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor adicionado é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores adicionados é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
        
    }
}
