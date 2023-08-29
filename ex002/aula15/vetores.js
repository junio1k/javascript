
let num = [4,6,9,8,7]

num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)

if(pos == -1){
    console.log(`O valor nâo esta representado em nenhuma posição`)
}else{
    console.log(`O valor está na posição ${pos}`)
}