const prompt = require('prompt-sync')();

class Contato {
    constructor(nomeContato, emailContato, telefoneContato) {
        //Inicalização do Contato
        this.nome = nomeContato;
        this.email = emailContato;
        this.telefone = telefoneContato;
    }
}

class Agenda {
    constructor() {
        //A Agenda inicia com uma lista vazia de contatos
        this.contatos = [];
    }

    pausar() {
        //Função auxiliar apenas para pausar a execução e limpar a tela
        console.log("\n-------------------------------------------");
        prompt("Pressione ENTER para continuar...");
        console.clear();
    }

    adicionar(contato) {
        //Adiciona um novo contato à lista
        this.contatos.push(contato);
        console.log("\n✅ Contato adicionado com sucesso!");
    }

    listar() {
        //Lista todos os contatos armazenados na agenda
        console.log("\n======= 📖 LISTA DE CONTATOS =======");
        
        if (this.contatos.length === 0) {                       //Verifica se a lista está vazia
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
        //Edita as informações de um contato existente
        if (this.contatos[index]) {
            this.contatos[index].nome = nNome;
            this.contatos[index].email = nEmail;
            this.contatos[index].telefone = nTel;
            console.log("\n✅ Informações atualizadas com sucesso!");
        } else {
            console.log("\n❌ Erro: Contato não encontrado.");
        }
    }

    excluir(index) {
        //Remove um contato da lista pelo índice
        if (this.contatos[index]) {
            this.contatos.splice(index, 1);
            console.log("\n✅ Contato removido com sucesso!");
        } else {
            console.log("\n❌ Erro: Contato não encontrado.");
        }
    }
}

//Cria uma instância da Agenda e inicia o loop do menu
const minhaAgenda = new Agenda();
let opcao = -1;

console.clear(); 
console.log("\n===========================================");
console.log("       BEM-VINDO AO SISTEMA DE AGENDA      ");
console.log("===========================================");

//O loop principal serve para exibir o menu enquanto o usuário não escolhe sair
while (opcao !== 0) {
    console.log("\n---- MENU ----");
    console.log("1 - Listar Contatos");
    console.log("2 - Adicionar Contato");
    console.log("3 - Editar Contato");
    console.log("4 - Excluir Contato");
    console.log("0 - Sair do Sistema");
    console.log("-------------------------\n");
    
    //Lê a opção do usuário
    opcao = parseInt(prompt("Escolha uma opção: "));

    //O switch case trata cada opção do menu, ou seja, cada funcionalidade da agenda
    switch (opcao) {

        //Lista os contatos existentes
        case 1:
            minhaAgenda.listar();
            minhaAgenda.pausar();
            break;

        //Adiciona um novo contato
        case 2:
            console.log("\n--- NOVO CONTATO ---");
            const nome = prompt("Nome: ");
            const email = prompt("Email: ");
            const tel = prompt("Telefone: ");
            const novo = new Contato(nome, email, tel);
            minhaAgenda.adicionar(novo);
            minhaAgenda.pausar();
            break;

        //Edita um contato existente
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
            minhaAgenda.pausar();
            break;

        //Exclui um contato existente
        case 4:
            minhaAgenda.listar();
            if (minhaAgenda.contatos.length > 0) {
                const idEx = parseInt(prompt("ID do contato para excluir: "));
                minhaAgenda.excluir(idEx);
            }
            minhaAgenda.pausar();
            break;

        //Sai do sistema
        case 0:
            console.log("\nFinalizando o sistema... Até logo!\n");
            break;

        //Trata opções inválidas
        default:
            console.log("\n⚠️ Opção inválida! Tente novamente.");
            minhaAgenda.pausar();
            break;
    }
}