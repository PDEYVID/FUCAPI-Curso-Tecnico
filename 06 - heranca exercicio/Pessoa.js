/*1. Crie uma classe Pessoa que modele uma pessoa:
a) Atributos: nome,idade, peso e altura( em cm)
b) Métodos: constructor( construtor), envelhecer (aumentar idade), engordar(aumentar
peso), emagrecer(diminuir peso), crescer(aumentar altura), toString(). Por padrão, a cada
ano que a pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 1cm
c) cumprimenta(): Este Método deve obedecer o comportamento abaixo:

d) Exporte a classe como módulo e crie em um novo arquivo PessoaTeste.js:
➢ Instancie dois objetos e teste cada um dos métodos: envelhecer(),engordar(),
emagrecer(), crescer()*/

class Pessoa{
    nome;
    idade;
    peso;
    altura;

    constructor(nome, idade, peso, altura){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    toString(){
        return`Nome: ${this.nome}\n`+
            `Idade: ${this.idade}\n`+
            `Peso ${this.peso}\n`+
            `Altura ${this.altura}\n`
    }
    envelhecer(){
        
    }
    engordar(){

    }
    emagrecer(){

    }
    crescer(){

    }
}