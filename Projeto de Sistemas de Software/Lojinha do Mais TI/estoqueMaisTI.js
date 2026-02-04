const prompt = require('prompt-sync')();
const db = require('./database');

class Estoque {
    cadastrar(nome, preco, qtd) {
        /*
        Cadastro de produto
        */
        console.log("\n✅ Produto cadastrado com sucesso!");
    }

    listarTudo() {
        /*
        
        */
    }

    atualizar(id, preco, qtd) {
        /*
        
        */
    }

    remover(id) {
        /*
        
        */
    }
}

// Não alterem o código abaixo
class InterfaceEstoque {
    pausar() {
        console.log("\n-------------------------------------------");
        prompt("Pressione ENTER para continuar...");
    }

    exibirMenu() {
        console.clear();
        console.log("=== 📦  GESTÃO DE ESTOQUE ===");
        console.log("1. Cadastrar Produto");
        console.log("2. Listar Estoque");
        console.log("3. Atualizar Produto");
        console.log("4. Remover Produto");
        console.log("0. Sair");
        console.log("======================================");
    }
}


const estoque = new Estoque();
const interfaceGerente = new InterfaceEstoque();
let opcao = -1;

while (opcao !== 0) {
    interfaceGerente.exibirMenu();
    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            console.log("\n--- CADASTRAR PRODUTO ---\n");

            const nome = prompt("Nome: ");
            const preco = parseFloat(prompt("Preço: "));
            const quantidade = parseInt(prompt("Quantidade: "));
            estoque.cadastrar(nome, preco, quantidade);

            interfaceGerente.pausar();
            break;

        case 2:
            estoque.listarTudo();
            interfaceGerente.pausar();
            break;

        case 3:
            console.log("\n--- ATUALIZAR PRODUTO ---\n");
            estoque.listarTudo();

            const id_produto = parseInt(prompt("\nID do produto: "));
            const novoPreco = parseFloat(prompt("Novo Preço: "));
            const novaQuantidade = parseInt(prompt("Nova Quantidade: "));
            estoque.atualizar(id_produto, novoPreco, novaQuantidade);

            interfaceGerente.pausar();
            break;

        case 4:
            console.log("\n--- REMOVER PRODUTO ---\n");
            estoque.listarTudo()

            const id_remover = parseInt(prompt("\nID para remover: "));
            estoque.remover(id_remover);

            interfaceGerente.pausar();
            break;
    }
}
