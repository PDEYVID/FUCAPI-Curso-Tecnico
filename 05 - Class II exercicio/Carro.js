/*Implemente uma classe Carro.js com as seguintes propriedades:
a) Um veículo tem nome, taxa de consumo de combustível (medidos em km / litro) e uma
quantidade de combustível no tanque( litros).
b) O nome e a taxa de consumo de combustível é iniciada pelo construtor, e a quantidade
de combustível no tanque inicialmente é 0.
c) Faça um método obterGasolina(), que retorna o nível de gasolina no tanque
d) Faça um método adicionarGasolina(qtd_gas), que abastece o tanque.
e) Faça um método andar(distancia) que simule o ato de dirigir o veículo por uma certa
distância. Ao andar, a quantidade de combustível no tanque é reduzida, seguindo a taxa
de consumo. Caso não consiga completar a distância, deve mostrar uma mensagem no
console: “Acabou gasolina! Não consegui completar o trajeto”.
f) Exporte a classe como módulo e crie um novo arquivo CarroTeste.js, faça os seguintes
testes:*/

class Carro {
    nome;
    taxaC;
    quantCombustivel;

    constructor(nome, taxaC, quantCombustivel) {
        this.nome = nome
        this.taxaC = taxaC
        this.quantCombustivel = quantCombustivel

    }

    tostring() {
        return `Nome: ${this.nome}\n` +
            `TaxaC: ${this.taxaC}\n` +
            `QuantCombustivel: ${this.quantCombustivel}\n`
    }
    obterGasolina() {

    }
    adicionarGasolina(qtd_gas) {

    }
    andar(distancia) {

    }
}