import { Conta } from "./conta.js";

let c1 = new Conta("hugo","1111","110",3500)
c1.limiteCartao = 1000;

c1.compraCartao(500);

c1.saque(3100)

console.log(c1.toString)