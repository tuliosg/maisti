const prompt = require('prompt-sync')();

class Contato {
    constructor(nome, email, telefone) {
        
    }
}

class Agenda {
    constructor() {
        this.contatos = [];
    }

    pausar() {
        console.log("\n-------------------------------------------");
        prompt("Pressione ENTER para continuar...");
        console.clear();
    }

    adicionar(contato) {
        
    }

    listar() {
        
        if (this.contatos.length === 0) {
            console.log("\nA agenda está vazia");
        } else {
            
        }
    }

    editar(index, nNome, nEmail, nTel) {
        
    }

    excluir(index) {

    }
}

const minhaAgenda = new Agenda();
let opcao = -1;

console.clear(); 
console.log("\n===========================================");
console.log("       BEM-VINDO AO SISTEMA DE AGENDA      ");
console.log("===========================================");

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
            // Listar contatos
            break;

        case 2:
            // Adicionar contato
            break;

        case 3:
            // Editar contato
            break;

        case 4:
            // Excluir contato
            break;

        case 0:
            console.log("\nFinalizando o sistema...\n");
            break;

        default:
            console.log("\nOpção inválida! Tente novamente.");
            minhaAgenda.pausar();
            break;
    }
}