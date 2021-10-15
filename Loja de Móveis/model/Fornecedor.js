import {GuardaR} from "./GuardaR.js";
import { Moveis } from "./Moveis.js";
import { Sofa } from "./Sofa.js";

export class Fornecedor {
    
    #nome
    #listaMoveis;

    static LISTA_FORNECEDORES = [
        /* o objeto abaixo é um fornecedor*/
        {
        nome: "APA MOVEIS",
        listaMoveis: [

            new GuardaR(4,10,"aaa"),
            new Sofa(8,"marron","dssda")
        ]

        }
    ]   
    constructor(nome) {
        this.#nome = nome;
        this.#listaMoveis = [];
    }

    static cadastroFornecedor(){
        let nomeFornecedor = prompt("Digite o nome do fornecedor!!");
        
        //criando fornecedor
        let fornecedor = new Fornecedor(nomeFornecedor);

        //criando o movel
        let movel = new Sofa(4,"marron","gazin")


        //colocar o movel no fornecedor
        fornecedor.inserirMovelLista(movel);


        Fornecedor.LISTA_FORNECEDORES.push(fornecedor);

    }

    inserirMovelLista( movel ){
        if( ! (movel instanceof Moveis)){
            alert("erro ao inserir")
            return
        }

        this.#listaMoveis.push(movel)
    }
}