import { Moveis } from "./Moveis.js"

export class Compras{

  #listaMoveis
  #total

  static CARRINHO ={
    listaMoveis: [
      new Moveis("Guada Roupa", "2 PORTAS","espelho",450)

    ],
    total: 450
  }
  //ARMAZENAR OS CARRINHOS FINALIZADOS
  static HISTORICO_COMPRAS = [  

  ]

  static adicionarMoveis(moveis = new Moveis()){
    //adicionar a pizza no carrinho -> listaPizzas
    Compras.insertCarrinhoLista(moveis)

    //incrementar no total o valor do preco
    Compras.adicionarTotalCarrinho(moveis)
  }

  static getCarrinhoLista(){
    return Compras.CARRINHO.listaMoveis;
  }
  static getCarrinhoTotal(){
    return Compras.CARRINHO.total
  }
  //inserir um produto na listaPizzas
  static insertCarrinhoLista(moveis = new Moveis()){
    Compras.CARRINHO.listaMoveis.push(moveis)
  }

  static adicionarTotalCarrinho(moveis = new Moveis()){
    Compras.CARRINHO.total += moveis.preco
  }


  static mostrarCarrinho(){
    let string = "-------------------- CARRINHO --------------------\n";
    string+="Lista de Moveis:\n"

    Compras.getCarrinhoLista().forEach(  (moveis , index) => {
       string += `${index}  - ${moveis.nome} | ${moveis.preco} \n`
    } )

    string+= "--------------------------------------------------------\n"
    string+=`TOTAL: ${Compras.getCarrinhoTotal()}`
  
    return string;


  }


  static finalizarCarrinho(){

    //VERIFICAR SE O CARRINHO TA VAZIO
    if(Compras.CARRINHO.listaMoveis.length === 0 ){
      alert("O CARRINHO ESTA VAZIO!")
      return;
    }

    let stringConfirm = "DESEJA FINALIZAR O CARRINHO ABAIXO?\n"
    stringConfirm+= Compras.mostrarCarrinho();

    if(confirm(stringConfirm)){
      // INSERIR O CARRINHO NA LISTA_COMPRAS

      let carrinho = {}
      carrinho.listaMoveis = Compras.CARRINHO.listaMoveis;
      carrinho.total = Compras.CARRINHO.total;
      Compras.HISTORICO_COMPRAS.push( carrinho );


      //ZERAR O CARRINHO
      Compras.CARRINHO.listaMoveis = [];
      Compras.CARRINHO.total=0

      alert("carrinho finalizado com sucesso!")
    }


    
  }


  static mostrarHistorico(){
    let string="";

    if(Compras.HISTORICO_COMPRAS.length == 0 ){
      string+= "HISTORICO VAZIO!\n"
      return string;
    }


    Compras.HISTORICO_COMPRAS.forEach( (carrinho,index) =>{
        string+=`-------- CARRINHO ${index} --------------- \n`
        string+=Compras.exibirCarrinho(carrinho)
    } )

    return string;
  }


  static exibirCarrinho( carrinho){
    let string=""
    string+="LISTA DE MOVEIS: \n"
    carrinho.listaPizzas.forEach( (moveis)=>{

      string += `- ${moveis.nome} , preco: ${moveis.preco}\n`
    })
    string+=`TOTAL: ${carrinho.total}\n` 


    return string;
  }




}