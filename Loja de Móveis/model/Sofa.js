import { Moveis } from "./Moveis.js";

 export class Sofa extends Moveis{
     #qtdLugares;
     #cor;
   

     static LISTA=[
        new Sofa("Sofa",3560,"Confort","6 lugares","bege"),
        new Sofa("Sofa",2200,"ivelop","4 lugares","marrom")

     ];

     constructor(nome,preco,marca,qtdLugares, cor){
        super(nome,preco,marca)
        this.#qtdLugares = qtdLugares;
        this.#cor = cor;
        
     }

    get toString() {
         return `Quantidade Lugares: ${this.qtdLugares}\n` +
             `Cor: ${this.cor}\n` +
             `Marca: ${this.marca}\n`
     }

     get qtdLugares(){
         return this.qtdLugares;
     }
     set qtdLugares(Lugares){
         this.#qtdLugares = Lugares;
     }
     get cor(){
         return this.cor;
     }
     set cor(verde){
        this.#cor = verde;
     }
    get marca (){
        return this.#marca;
    }
    set marca(nike){
        this.#marca = nike;
    }



}