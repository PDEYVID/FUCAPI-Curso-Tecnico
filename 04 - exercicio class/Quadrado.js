/*Classe Quadrado(Quadrado.js): Crie uma classe que modele um quadrado:
Atributos: Tamanho do lado
Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área;
*/

class Quadrado{
    lado1;
    lado2;
    lado3;
    lado4;

    constructor(lado1,lado2,lado3,lado4){
        this.lado1 =lado1
        this.lado2 =lado2
        this.lado3 =lado3
        this.lado4 =lado4
    }
    tostring(){
        return`Lado: ${this.lado1}\n`+
        `Lado2: ${this.lado2}\n`+
        `Lado3: ${this.lado3}\n`+
        `Lado4: ${this.lado4}\n`
    }
    MudarvalordoLado(){
        this.lado1
    }
    CalcularArea(){

    }
    
    
}

let l1 = new Quadrado(10)
let l2 = new Quadrado(20)
let l3 = new Quadrado(30)
let l4 = new Quadrado(40)

console.log(l1.tostring())
console.log(l2.tostring())
console.log(l3.tostring())
console.log(l4.tostring())