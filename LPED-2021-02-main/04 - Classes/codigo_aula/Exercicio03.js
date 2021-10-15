


class Retangulo{
    /* atributos */
    ladoA;
    ladoB;
    /* métodos */
    constructor(ladoA,ladoB){
        this.ladoA = ladoA;
        this.ladoB = ladoB
    }

    calculaArea(){
        return this.ladoA * this.ladoB
    }
    /* padrao nome metodos -> cammel case */
    calculaPerimetro(){
        return 2*this.ladoA + 2*this.ladoB;
    }

    toString(){
        return "ladoA : "+ this.ladoA + "\n"+
                "ladoB: "+this.ladoB + "\n"+
                "Area: "+ this.calculaArea() + "\n"+
                "Perimetro: "+ this.calculaPerimetro()+ "\n"
    }

    /* mudar ladoA -> metodo set */
    setLadoA(novoLado){
        this.ladoA = novoLado
    }
    /* mudar ladoB -> metodo set */
    setLadoB(novoLado){
        this.ladoB = novoLado;
    }

    /* metodos getters -> retornam valor dos atributos */
    getLadoA(){
        return this.ladoA;
    }
    getLadoB(){
        return this.ladoB;
    }
}

let r1 = new Retangulo(3,6);
let r2 = new Retangulo(4,9);



console.log(r1)
r2.setLadoB(10)
console.log(r2);
r1.setLadoA(4)
console.log(r1.getLadoA())

console.log(r1.toString())
console.log(r2.toString())

console.log(r1.ladoA)
r1.ladoA = 99
console.log(r1.toString())