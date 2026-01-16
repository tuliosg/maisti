const prompt = require('prompt-sync')();

const cadastro = [];

function cadastrarPessoa() {
	console.log("\n--- Cadastro de Nova Pessoa ---");
	const nome = prompt("Digite o nome: ");
	const email = prompt("Digite o e-mail: ");
	const numero = prompt("Digite o número do celular: ");

	cadastro.push({ nome, email, numero });

	console.log(`\n[SUCESSO] ${nome} foi cadastrado(a)!`);
}

function visualizarPessoas() {
	console.log("\n--- Pessoas Cadastradas ---");

	if (cadastro.length === 0) {
		console.log("Nenhuma pessoa cadastrada.");
		return;
	}

	for (let i = 0; i < cadastro.length; i++) {
		const pessoa = cadastro[i];
		console.log(`
    Índice: ${i + 1}
    Nome:   ${pessoa.nome}
    Email:  ${pessoa.email}
    Número: ${pessoa.numero}
    -------------------------`);
	}
}

function removerCadastro() {
	console.log("\n--- Remover um Cadastro ---");

	visualizarPessoas();

	if (cadastro.length === 0) {
		return;
	}

	const indice = Number(prompt("\nDigite o índice que deseja remover: "));

	const pessoaRemovida = cadastro.splice(indice - 1, 1);
	console.log(`\n[SUCESSO] O cadastro de '${pessoaRemovida[0].nome}' foi removido.`);
}

while (true) {
	console.clear();

	console.log(`
==============================
   MENU DE CADASTRO
==============================
1. Cadastrar pessoa
2. Visualizar cadastros
3. Remover cadastro
0. Sair
==============================`);

	const opcao = prompt("Escolha uma opção: ");

	switch (opcao) {
		case '1':
			cadastrarPessoa();
			break;
		case '2':
			visualizarPessoas();
			break;
		case '3':
			removerCadastro();
			break;
		case '0':
			console.log("\nSaindo do sistema...");
			process.exit(0);
		default:
			console.log("\n[ERRO] Opção inválida! Tente novamente.");
			break;
	}

	prompt("\nPressione ENTER para continuar...");
}