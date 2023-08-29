


let valores = [1,2,10,40]


/*console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos<valores.length;pos++){
    console.log(`A posição ${pos} tem valores ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`A posição ${pos} tem valores ${valores[pos]}`)
}
let receita = 1
let a = ['pao','café','manteiga','salame']
a.push('presunto')
let fruta = a.indexOf('queijo')


if( fruta == -1){
    console.log(`Não temos esse ingrediente`)
} else{
    console.log("aproveite e compre já")
}

/*console.log (`começamos com a preparar ${a[0]}`)

for(let cont in a){
    console.log(`depois preparamos o ${a[cont]}`)
}*/

/*console.log(a)

for(let cont in a ){
    console.log(`Para a receita ${receita} usamos os ingredientes ${a[cont]}`)
}*/

let inicio = 1
let fim = 10
let tab = [5,6]
tab.sort()
console.log(`A tabuada tem ${tab.length} números`)

for(let contagem = inicio ; contagem <= fim ; contagem++){
    console.log(`${contagem} x ${tab[0]} = ${contagem*tab[0]}`)
     console.log(`${contagem} x ${tab[1]} = ${contagem*tab[1]}`)
     if(inicio == 0 || fim > 10){
        console.log('Número inválido')
     }else{
        console.log('')
     }

}