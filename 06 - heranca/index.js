import { Funcionario } from "./model/Funcionario.js";
import { Pessoa } from "./model/Pessoa.js";
import { Vendedor } from "./model/Vendendo.js";

let p = new Pessoa("paulo", "12345612312")
console.log(p.toString)

let f = new Funcionario("Lia", "12345612312", 3000)
console.log(f.toString)
console.log(f.toString2)

let v = new Vendedor("Kennedy", "1111", 5000);

v.totalVendas = 20000;

console.log(v.toString)
console.log(v.calculaSalario)