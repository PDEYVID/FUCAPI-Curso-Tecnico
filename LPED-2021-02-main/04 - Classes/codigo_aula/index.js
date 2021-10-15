

//importar o módulo Retangulo
// {Retangulo} -> destructuring de objetos

/* SINTAXE p/ modulos de classe: 
import {Nome_classe} from './nome_arquivo.js'
*/
import { Retangulo } from "./Retangulo.js";

let r1 = new Retangulo(2,3);
let r2 = new Retangulo(4,4);
// chamando get ladoA() (método)
console.log(r1.ladoA)


console.log(r2.ladoB); //metodo get ladoB

r2.ladoB = 25 ; // chamando metodo set ladoB