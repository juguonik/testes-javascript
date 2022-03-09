// 1
var nomeCompleto = "Juliana Guonik";

console.log (nomeCompleto);


// 2
var numeroA = 4;
var numeroB = 13;
var resultado = numeroA * numeroB;

console.log (resultado);


// 3
var saudacao = "Oi eu sou o Goku!";
console.log (saudacao);


// 4
function multiplica (numeroA, numeroB) {
    console.log (numeroA*numeroB);
}
multiplica (10,5);


// 5
var podeDirigir = 22;

if (podeDirigir >= 18) {
    console.log ("Você pode dirigir");
}
else {
    console.log ("Você não pode dirigir")
}

// 6
for (var contador =0; contador <=20; contador++) {
    console.log (contador);
}

// 7
for (var i=1; i <=20; i+=2) {
            console.log (i);
    }

// 8

function tabuada (numero) {
    for (var tabu=1; tabu <=10; tabu++) {
        console.log (tabu*numero);
}
}
tabuada (5);

// 9

function  converterEmHoras (numeroMinutos) {
    console.log (numeroMinutos/60);

}
converterEmHoras (120);