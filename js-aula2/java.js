"use strict"
/* 
O strict mode é uma nova feature do ECMAScript  que permite fazer que o codigo JavaScript rode em um modo mais rigoroso.
Neste modo, a engine de JavaScript tem seu comportamento modificado,
o uso de certas partes de linguagem que são tidas como
problématicas, nos forçando assim a escrever um código de 
melhor qualidade e ajudando a capturar bugs mais precocente,

Resumindo, o grande beneficio de se usar strict mode é
reduzir a chance de existirem no código bugs difícieis
de localizar.
*/

//Comentario de uma linha


/*
    Comentario 
    de
    multiplas linhas
*/

alert("Erro");

console.log("ERRO LINHA X.");

var tamanho = 18;

tamnho = 10;

alert(tamnho);

if (true) {
    // VAr , LET , CONST
    var escopoFuncao = 20;
    let escopoBloco = 10;

    const ENDERECO = "Rua A, 10";
    ENDERCO = "Rua B, 20"; //não vai funcionar


    console.log(escopoFuncao);
}