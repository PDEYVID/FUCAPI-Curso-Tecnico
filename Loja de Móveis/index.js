import { Moveis } from "./model/Moveis.js";
import { Compras } from "./model/Compras.js";
 
while (1) {
  let op = menu();
  if (op == 0) {
    alert("Saindo...")
    break;
  }
  if (op == 1) {
    alert(Moveis.listar())
  } else if (op == 2) {
    Moveis.cadastrar()
  } else if (op == 3) {
    let stringLista = "Selecione um dos moveis abaixo: \n"
    stringLista += Moveis.listar();
    let opcaoMoveis = prompt(stringLista);
    let moveis = Moveis.LISTA_PIZZAS[opcaoMoveis];
    
    let stringConfirm = ""
    stringConfirm += "Voce deseja adicionar o item abaixo no carrinho?\n"
    stringConfirm += `Nome: ${moveis.nome}\n`;
    stringConfirm += `- ${moveis.descricao}\n`
    stringConfirm += `Preco: ${moveis.preco}\n`
    
    if (confirm(stringConfirm)) {
      Compras.adicionarMoveis(moveis)
      alert("intem adicionado no carrinho!")
    } else if (op == 4) {
      alert(Compras.mostrarCarrinho())
    } else if (op == 5) {
      Compras.finalizarCarrinho();
    } else if (op == 6) {
      alert(Compras.mostrarHistorico())
    } else {
      alert("OPCAO INVALIDA!")
    }
  }
}
//menu da loja
function menu() {
  let string;
  string = "Digite uma opção: \n"
  string += "1 - MOSTRAR LISTA DE MOVEIS \n"
  string += "2 - CADASTRAR MOVEIS\n"
  string += "3 - ADICIONAR NO CARRINHO \n"
  string += "4 - MOSTRAR CARRINHO \n"
  string += "5 - FINALIZAR CARRINHO (FINALIZAR COMPRA) \n"
  string += "6 - MOSTRAR HISTORICO \n"
  string += "0 - SAIR"
  let opcao = parseInt(prompt(string))
  return opcao;
}
