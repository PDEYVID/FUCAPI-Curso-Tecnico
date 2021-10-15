
 export class Moveis{
    #nome
    #descricao
    #preco
  
    static LISTA_PIZZAS = [
      new Moveis("Guada Roupa Casal", "2 Portas de correr","3 Gavetas internas","Espelho em uma das portas", 1.699),
      new Moveis("Cama Box Casal", "Espuma:D28.", "Pés em PVC cinza","Composição Interna:Madeira/Espuma",549),
      new Moveis("Sofa Uatumã","Madeira Branca Industrial/Eucalipto","Grampos Galvanizados","Linho Gaia","Possui 6 pés",699),
      new Moveis("Sapateira","Pintura em UV","Cavilhas e Parafusos","Porta de Abrir","Dobradiça Metálicas",499)
    ]
  
    constructor(nome,descricao, preco){
      this.#nome = nome;
      this.#descricao = descricao;
      this.#preco = preco;
    }
  
    static listar(){
      let string = "";
      string+="LISTA DE MOVEIS: \n"
  
      Pizza.LISTA_MOVEIS.forEach(  (moveis , index)=> {
        string += `${index}  - ${moveis.nome} | ${moveis.preco} \n`
      })
  
  
      return string;
    }
  
    static cadastrar(){
      // instanciando pizzza
      let moveis = new Moveis();
      // pegando as informacoes do usuario
      moveis.nome = prompt("DIgite o nome do objeto")
      moveis.descricao = prompt("DIgite a descricao do objeto")
      moveis.preco = parseInt(prompt("DIgite o preco do objeto"))
  
  
      // inserir na LISTA DE PIZZAS
  
      Moveis.inserirLista(moveis);
  
    }
    //inserir uma pizza na LISTA_PIZZAS
    static inserirLista(moveis = new Moveis()){
      Pizza.LISTA_MOVEIS.push(moveis)
    }
  
  
  
    get toString(){
      return `${this.#nome} | Preco:  ${this.#preco}`
    }
  
    get nome(){
      return this.#nome;
    }
    get descricao(){
      return this.#descricao;
    }
    get preco(){
        return this.#preco;
    }
  
    set nome(nome){
        this.#nome = nome;
    }
  
    set descricao(descricao){
        this.#descricao = descricao
    }
    set preco(preco){
        this.#preco = preco
    }
  
  }