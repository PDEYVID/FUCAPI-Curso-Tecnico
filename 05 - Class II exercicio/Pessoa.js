/*1. Crie uma classe Pessoa que modele uma pessoa:
a) Atributos: nome,idade, peso e altura( em cm)
b) Métodos: constructor( construtor), envelhecer (aumentar idade), engordar(aumentar
peso), emagrecer(diminuir peso), crescer(aumentar altura), toString(). 
Por padrão, a cada
ano que a pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 1cm
c) cumprimenta(): Este Método deve obedecer o comportamento:
d) Exporte a classe como módulo e crie em um novo arquivo PessoaTeste.js:
➢ Instancie dois objetos e teste cada um dos métodos: envelhecer(),engordar(),
emagrecer(), crescer()
*/

class Pessoal {
    nome;
    idade;
    peso;
    altura;

    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
    tostring() {
        return `Nome: ${this.nome}\n` +
            `Idade: ${this.nome}\n` +
            `Peso: ${this.peso}\n` +
            `Altura: ${this.altura}\n`
    }
    envelhecer(aumentaIdade) {
        if (this.idade < 21) {
            if (idade + aumentaIdade <= 21) {
                this.altura += aumentaIdade
            } else {
                let aumenta_altura = 21 - this.idade
                this.altura = aumenta_altura;
            }
        }
    }
   engordar(aumentaPeso) {
 
    }
    emagrecer() {

    }
    crescer() {

    }
    cumprimenta() {

    }

}

let p1 = new Pessoal('Paulo', 23, 65, 1.7)

p1.envelhecer(10)

console.log(toString())