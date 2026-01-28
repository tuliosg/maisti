const prompt = require('prompt-sync')();
const fs = require('fs');

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
        console.clear();
    }

    exibirMenu() {
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
    constructor() {
        this.caminhoArquivo = 'agenda.json';
        this.contatos = this.carregarArquivo();
    }

    carregarArquivo() {
        try {
            if (fs.existsSync(this.caminhoArquivo)) {
                const dados = fs.readFileSync(this.caminhoArquivo, 'utf-8');
                return JSON.parse(dados);
            }
        } catch (erro) {
            console.log("Erro ao carregar arquivo, iniciando agenda vazia.");
        }
        return [];
    }

    salvarArquivo() {
        const dados = JSON.stringify(this.contatos, null, 2);
        fs.writeFileSync(this.caminhoArquivo, dados, 'utf-8');
    }

    adicionar(contato) {
        this.contatos.push(contato);
        this.salvarArquivo();
        console.log("\n✅ Contato adicionado com sucesso!");
    }

    listar() {
        console.log("\n======= 📖 LISTA DE CONTATOS =======");
        if (this.contatos.length === 0) {
            console.log("\nA agenda está vazia no momento.");
        } else {
            this.contatos.forEach((c, index) => {
                console.log(`\n[Contato ${index}]\nNOME: ${c.nome.toUpperCase()}`);
                console.log(`   📧 Email: ${c.email}`);
                console.log(`   📞 Tel:   ${c.telefone}`);
                console.log("-------------------------------------------");
            });
        }
    }

    editar(index, nNome, nEmail, nTel) {
        if (this.contatos[index]) {
            this.contatos[index].nome = nNome;
            this.contatos[index].email = nEmail;
            this.contatos[index].telefone = nTel;
            this.salvarArquivo();
            console.log("\n✅ Informações atualizadas com sucesso!");
        } else {
            console.log("\n❌ Erro: Contato não encontrado.");
        }
    }

    excluir(index) {
        if (this.contatos[index]) {
            this.contatos.splice(index, 1);
            this.salvarArquivo();
            console.log("\n✅ Contato removido com sucesso!");
        } else {
            console.log("\n❌ Erro: Contato não encontrado.");
        }
    }
}
2
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
            if (minhaAgenda.contatos.length > 0) {
                const idEd = parseInt(prompt("ID do contato para editar: "));
                console.log("\n--- NOVOS DADOS ---");
                const nNome = prompt("Novo Nome: ");
                const nEmail = prompt("Novo Email: ");
                const nTel = prompt("Novo Telefone: ");
                minhaAgenda.editar(idEd, nNome, nEmail, nTel);
            }
            minhaInterface.pausar();
            break;

        case 4:
            minhaAgenda.listar();
            if (minhaAgenda.contatos.length > 0) {
                const idEx = parseInt(prompt("ID do contato para excluir: "));
                minhaAgenda.excluir(idEx);
            }
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