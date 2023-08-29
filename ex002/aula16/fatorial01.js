/*function parimp(n){
    if(n%2==0){
        return "par"
    } else{
        return "ímpar"
    }
}

console.log(parimp(4))*/

/*function somar(s=0,s1=0){
    return s + s1
}
console.log(somar(15))*/
/*let s = 8
let t = function(v){
    return v*s
}
console.log(t(8))*/

/*function fatorial(n){
    let fat = 1
    for(let c = n ; c > 1 ; c --){
         fat *= c
    }
    return fat
}

console.log(`O fatorial de é igual ${fatorial(5)}`)*/
//RECURSIVIDADE
function fatorial(s){
    if(s == 1){
        return 1
    }else{
        return s * fatorial(s - 1)
    }
}

console.log(fatorial(5))
