/*
Exercício Agenda de Contatos
Crie um programa em JavaScript que funcione como uma agenda de contatos simples. O programa deve permitir ao usuário adicionar, listar, editar e excluir contatos. Cada contato deve ter um nome, um e-mail e um número de telefone.

Requisitos:
1. Adicionar Contato: O usuário deve poder adicionar um novo contato fornecendo o nome, e-mail e número de telefone.
2. Listar Contatos: O programa deve listar todos os contatos armazenados na agenda.
3. Editar Contato: O usuário deve poder editar as informações de um contato existente, selecionando-o por índice ou nome.
4. Excluir Contato: O usuário deve poder excluir um contato da agenda, selecionando-o por índice ou nome.
5. Interface de Usuário: Utilize o prompt-sync para interagir com o usuário via terminal, exibindo um menu com as opções disponíveis e lendo as entradas do usuário.

Orientação:
Você deve completar o código abaixo para construir a Agenda. Implemente as funcionalidades de adicionar, listar, editar e excluir contatos conforme descrito nos requisitos. Os códigos que devem ser completados estão indicados por comentários. Não altere os códigos já fornecidos, apenas adicione o que for necessário para completar as funcionalidades.

*/

const prompt = require('prompt-sync')();

//Definição da classe Contato
class Contato {
    constructor(nome, email, telefone) {
    //Inicializa as propriedades do contato
    //COMPLETE AQUI
    }
}

class Agenda {
    constructor() {
        this.contatos = [];
    }

    //Função para pausar a execução e esperar o usuário pressionar ENTER
    pausar() {
        console.log("\n-------------------------------------------");
        prompt("Pressione ENTER para continuar...");
        console.clear();
    }

    //Adiciona um novo contato à agenda
    adicionar(contato) {
        //COMPLETE AQUI
    }

    //Listagem de todos os contatos na agenda
    listar() {
        
        if (this.contatos.length === 0) {
            console.log("\nA agenda está vazia");
        } else {
            //COMPLETE AQUI
        }
    }

    //Edita um contato existente na agenda
    editar(index, nNome, nEmail, nTel) {
        //COMPLETE AQUI
    }

    //Exclui um contato da agenda pelo índice
    excluir(index) {
        //COMPLETE AQUI
    }
}

//Código principal para interagir com o usuário
const minhaAgenda = new Agenda();
let opcao = -1;

console.clear(); 
console.log("\n===========================================");
console.log("       BEM-VINDO AO SISTEMA DE AGENDA      ");
console.log("===========================================");

//Loop principal do menu
while (opcao !== 0) {
    console.log("\n---- MENU ----");
    console.log("1 - Listar Contatos");
    console.log("2 - Adicionar Contato");
    console.log("3 - Editar Contato");
    console.log("4 - Excluir Contato");
    console.log("0 - Sair do Sistema");
    console.log("-------------------------\n");
    
    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            //Listar contatos
            //COMPLETE AQUI
            break;

        case 2:
            //Adicionar contato
            //COMPLETE AQUI
            break;

        case 3:
            //Editar contato
            //COMPLETE AQUI
            break;

        case 4:
            //Excluir contato
            //COMPLETE AQUI
            break;

        //Sair do sistema
        case 0:
            console.log("\nFinalizando o sistema...\n");
            break;

        //Opção inválida
        default:
            console.log("\nOpção inválida! Tente novamente.");
            minhaAgenda.pausar();
            break;
    }
}