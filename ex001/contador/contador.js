let inicio = document.getElementById('inicio');
let fim = document.getElementById('fim');
let passo = document.getElementById('passo');
let resultado = document.getElementById('resultado');

function contar(){
   /* if(inicio.value == 0){
        window.alert("Digite um número válido");
    }*/
    for(let i = 0; i <= inicio; i++ ){
        resultado.innerHTML += ` ${i} `
    }
}