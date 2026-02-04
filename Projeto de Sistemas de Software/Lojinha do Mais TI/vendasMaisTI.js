const prompt = require('prompt-sync')();
const db = require('./database');

class SistemaVendas {
    exibirCatalogo() {
        /*
        
        */
    }

    registrarVenda(id, qtdVenda) {
        /*
        
        */
}

// Não alterem o código abaixo
class InterfaceVendas {
    pausar() {
        console.log("\n-------------------------------------------");
        prompt("Pressione ENTER para continuar...");
    }

    exibirMenu() {
        console.clear();
        console.log("=== 💰 SISTEMA DE VENDAS (VENDEDOR) ===");
        console.log("1. Ver Catálogo de Produtos");
        console.log("2. Realizar Venda");
        console.log("0. Sair");
        console.log("=======================================");
    }
}


const vendas = new SistemaVendas();
const interfaceLoja = new InterfaceVendas();
let opcao = -1;

while (opcao !== 0) {
    interfaceLoja.exibirMenu();
    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            vendas.exibirCatalogo();
            interfaceLoja.pausar();
            break;

        case 2:
            console.log("\n--- REALIZAR VENDA ---\n");
            const lista = vendas.exibirCatalogo();
            if (lista.length > 0) {
                const idVenda = parseInt(prompt("\nID do produto que o cliente quer: "));
                const qtdVenda = parseInt(prompt("Quantidade: "));
                vendas.registrarVenda(idVenda, qtdVenda);
            }
            interfaceLoja.pausar();
            break;
    }
}
