const prompt = require('prompt-sync')();
const db = require('./database');

class SistemaVendas {
    exibirCatalogo() {
        // Mostra apenas produtos que têm pelo menos 1 unidade
        const produtos = db.prepare(
            'SELECT * FROM produtos WHERE quantidade > 0'
        ).all();

        console.log("\n--- PRODUTOS DISPONÍVEIS ---\n");
        produtos.forEach(p => {
            console.log(`ID: ${p.id} | ${p.nome.padEnd(15)} | Preço: R$ ${p.preco.toFixed(2)} | Estoque: ${p.quantidade}`);
        });
        return produtos;
    }

    registrarVenda(id, qtdVenda) {
        // Busca o produto para conferir o estoque atual
        const produto = db.prepare(
            'SELECT * FROM produtos WHERE id = ?'
        ).get(id);

        if (!produto) {
            console.log("\n❌ Produto não encontrado!");
            return;
        }

        if (produto.quantidade >= qtdVenda) {
            const novaQtd = produto.quantidade - qtdVenda;
            const comando = db.prepare(
                'UPDATE produtos SET quantidade = ? WHERE id = ?'
            );
            comando.run(novaQtd, id);

            console.log(`\n✅ Venda realizada! ${qtdVenda}x ${produto.nome} entregue(s).`);
        } else {
            console.log(`\n❌ Estoque insuficiente! Temos apenas ${produto.quantidade} em estoque.`);
        }
    }
}

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
