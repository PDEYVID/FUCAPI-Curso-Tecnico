

// importar o modulo Retangulo 
// {Retangulo} -> destructuring  de objetos

/*SINTAXE P/ MODULOS DE CALSSES
IMPORT {NOME_CLASSE} FRO './NOME_ARQUIVO.JS*/

import { Retangulob } from "./Retangulob.js";

let r1 = new Retangulob(2, 3);
let r2 = new Retangulob(4, 4);

// chamando o get ladoA() (METODO)
console.log(r1.ladoA)

console.log(r2.ladoB)//chamando o get ladoB()

r2.ladoB = 25; //chamando metodo set ladoB