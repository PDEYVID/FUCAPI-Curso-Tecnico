/*Desenvolva a classe Data que representa uma data
a) Atributos:
➢ dia, mês, ano: faça atributos privados
b) Métodos:
➢ constructor: inicializa atributos.
➢ Compara(data): recebe como parâmetro um outro objeto da classe Data. Deve
retornar:
 0, se as datas forem iguais
 1, se a data corrente(this) for maior que a do parâmetro
 -1, se a data do parâmetro for mair que a data corrente
➢ Faça getters e setters de cada atributo(dia, mês e ano)
➢ toString(): retorna a data no formato dd/MM/YYYY */

class Danta {
    dia;
    mes;
    ano;

    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    toString() {
        return `Dia: ${this.dia}\n` +
            `Mes: ${this.mes}\n` +
            `Ano: ${this.mes}\n`
    }
    Compara(data) {

    }
  

}