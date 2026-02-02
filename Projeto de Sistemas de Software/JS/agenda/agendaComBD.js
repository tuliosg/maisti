/*
A execução deste código requer a instalação do pacote 'better-sqlite3'.
Instale-o usando o seguinte comando no terminal:
npm install better-sqlite3
*/
const prompt = require('prompt-sync')();
const Database = require('better-sqlite3'); 

class Contato {
    constructor(nomeContato, emailContato, telefoneContato) {
        this.nome = nomeContato;
        this.email = emailContato;
        this.telefone = telefoneContato;
    }
}

class Interface {
    pausar() {
        console.log("\n-------------------------------------------");
        prompt("Pressione ENTER para continuar...");
    }

    exibirMenu() {
        console.clear(); 
        console.log("\n===========================================");
        console.log("        BEM-VINDO AO SISTEMA DE AGENDA      ");
        console.log("===========================================");
        console.log("\n---- MENU ----");
        console.log("1 - Listar Contatos");
        console.log("2 - Adicionar Contato");
        console.log("3 - Editar Contato");
        console.log("4 - Excluir Contato");
        console.log("0 - Sair do Sistema");
        console.log("-------------------------\n");
    }
}

class Agenda {
    // Inicializa o banco de dados e cria a tabela de contatos, se não existir
    constructor() {
        this.db = new Database('agenda.db');
        
        this.db.prepare(`
            CREATE TABLE IF NOT EXISTS contatos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT,
                telefone TEXT
            )
        `).run();
    }

    // Adiciona um novo contato ao banco de dados - CREATE
    adicionar(contato) {
        const comando = this.db.prepare(
            'INSERT INTO contatos (nome, email, telefone) VALUES (?, ?, ?)'
        );
        comando.run(contato.nome, contato.email, contato.telefone);
        console.log("\n✅ Contato adicionado com sucesso!");
    }

    // Lista todos os contatos do banco de dados - READ
    listar() {
        console.log("\n======= 📖 LISTA DE CONTATOS =======");
        
        const lista = this.db.prepare(
            'SELECT * FROM contatos'
        ).all();

        if (lista.length === 0) {
            console.log("\nA agenda está vazia no momento.");
        } else {
            lista.forEach((c) => {
                console.log(`\n[ID: ${c.id}]\nNOME: ${c.nome.toUpperCase()}`);
                console.log(`   📧 Email: ${c.email}`);
                console.log(`   📞 Tel:   ${c.telefone}`);
                console.log("-------------------------------------------");
            });
        }
        return lista; 
    }

    // Edita um contato existente no banco de dados - UPDATE
    editar(id, nNome, nEmail, nTel) {
        const comando = this.db.prepare(
            'UPDATE contatos SET nome = ?, email = ?, telefone = ? WHERE id = ?'
        );
        const resultado = comando.run(nNome, nEmail, nTel, id);

        if (resultado.changes > 0) {
            console.log("\n✅ Informações atualizadas com sucesso!");
        } else {
            console.log("\n❌ Erro: Contato não encontrado.");
        }
    }

    // Exclui um contato do banco de dados - DELETE
    excluir(id) {
        const comando = this.db.prepare(
            'DELETE FROM contatos WHERE id = ?'
        );
        const resultado = comando.run(id);

        if (resultado.changes > 0) {
            console.log("\n✅ Contato removido com sucesso!");
        } else {
            console.log("\n❌ Erro: Contato não encontrado.");
        }
    }
}

const minhaAgenda = new Agenda();
const minhaInterface = new Interface(); 
let opcao = -1;

console.clear(); 
console.log("\n===========================================");
console.log("        BEM-VINDO AO SISTEMA DE AGENDA      ");
console.log("===========================================");

while (opcao !== 0) {
    minhaInterface.exibirMenu(); 
    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            minhaAgenda.listar();
            minhaInterface.pausar();
            break;

        case 2:
            console.log("\n--- NOVO CONTATO ---");
            const nome = prompt("Nome: ");
            const email = prompt("Email: ");
            const tel = prompt("Telefone: ");
            const novo = new Contato(nome, email, tel);
            minhaAgenda.adicionar(novo);
            minhaInterface.pausar();
            break;

        case 3:
            minhaAgenda.listar();
            const idEd = parseInt(prompt("ID do contato para editar: "));
            console.log("\n--- NOVOS DADOS ---");
            const nNome = prompt("Novo Nome: ");
            const nEmail = prompt("Novo Email: ");
            const nTel = prompt("Novo Telefone: ");
            minhaAgenda.editar(idEd, nNome, nEmail, nTel);
            minhaInterface.pausar();
            break;

        case 4:
            minhaAgenda.listar();
            const idEx = parseInt(prompt("ID do contato para excluir: "));
            minhaAgenda.excluir(idEx);
            minhaInterface.pausar();
            break;

        case 0:
            console.log("\nFinalizando o sistema... Até logo!\n");
            break;

        default:
            console.log("\n⚠️ Opção inválida! Tente novamente.");
            minhaInterface.pausar();
            break;
    }
}