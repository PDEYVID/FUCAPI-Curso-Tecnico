/*Classe Retangulo(Retangulo.js): Crie uma classe que modele um retangulo:
Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
Métodos: Mudar valor dos lados, Retornar valor dos lados, 
calcular Área e calcular Perímetro;*/

class Retangulo {
    /*atributos*/
    ladoA;
    ladoB;

    /*metodos*/
    constructor(ladoA, ladoB) { // iniciando os valores do objeto
        this.ladoA = ladoA;
        this.ladoB = ladoB
    }
    /*padrao nome metodos -> cammel case*/
    calculaArea() {
        return this.ladoA * this.ladoB
    }
    calculaPerimetro() {
        return 2 * this.ladoA + 2 * this.ladoB;
    }
    /* serve para mostra os valores */
    toString() {
            return "ladoA: " + this.ladoA + "\n" +
                "ladob: " + this.ladoB + "\n" +
                "Area: " + this.calculaArea() + "\n" +
                "Perimetro:" + this.calculaPerimetro() + "\n"

            // com Template strings
            /*  `ladoA: ${this.ladoA} \n`+
              `ladoB: ${this.ladoB}\n`+
              `Area: ${this.calculaArea}\n`+
              `Perimetro: ${this.calculaPerimetro}\n`*/
    }
    /*mudar ladoA - METODO SET*/
    setladoA(novoLado) {
        this.ladoA = novoLado
    }
    setladoB(novoLado2) {
        this.ladoB = novoLado2
    }
    /*metodos Getters -> retonam valor dos atributos*/
    getladoA() {
        return this.ladoA;
    }
    getladoB() {
            return this.ladoB;
    }

}
//instancia
let r1 = new Retangulo(3, 6); // chamando construtor
let r2 = new Retangulo(4, 9);

console.log(r1)
r2.setladoB(10) 
console.log(r2)
r1.setladoA(4)

console.log(r1.getladoA())
console.log(r2.getladoB())

console.log(r1.toString())
console.log(r2.toString())