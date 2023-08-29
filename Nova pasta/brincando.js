// como pegar data e hora

/*let data = new Date(); 
let week_day = data.getDay();
const dia_da_semana = [
    'domingo',
    'segunda',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
];
let year = data.getFullYear();
const meses_do_ano = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
    ''
];
let meses = data.getMonth() - 1;
console.log(meses_do_ano[meses]);
let hours = data.getHours(); 
let min = data.getMinutes();
console.log(dia_da_semana[week_day]);*/
let i = 5;
let r = 4;

let mult = i * r;

function variavel (l){
    let valor_variavel = Math.floor(mult * Math.random());
    console.log(valor_variavel);
}

