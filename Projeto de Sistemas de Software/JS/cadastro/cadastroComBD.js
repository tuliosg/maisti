const prompt = require('prompt-sync')();
const fs = require('fs');

const ARQUIVO_BD = 'cadastros.json';

class Pessoa {
	constructor(nome, email, numero) {
		this.nome = nome;
		this.email = email;
		this.numero = numero;
	}
}

function salvarDados() {
	const dadosJson = JSON.stringify(cadastro, null, 2);
	fs.writeFileSync(ARQUIVO_BD, dadosJson, 'utf8');
}

function carregarDados() {
	try {
		const dadosJson = fs.readFileSync(ARQUIVO_BD, 'utf8');

		return JSON.parse(dadosJson);
	} catch (error) {

		return [];
	}
}

let cadastro = carregarDados();

function cadastrarPessoa() {
	console.log("\n--- Cadastro de Nova Pessoa ---");
	const nome = prompt("Digite o nome: ");
	const email = prompt("Digite o e-mail: ");
	const numero = prompt("Digite o número do celular: ");

	const novaPessoa = new Pessoa(nome, email, numero);
	cadastro.push(novaPessoa);

	salvarDados();

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
	Número:  ${pessoa.numero}
	-------------------------`);
	}
}

function alterarPessoa() {
	console.log("\n--- Alterar um Cadastro ---");

	if (cadastro.length === 0) {
		console.log("Não há ninguém para alterar. A lista está vazia.");
		return;
	}

	visualizarPessoas();

	const indice = Number(prompt("\nDigite o índice da pessoa que deseja alterar: "));

	if (isNaN(indice) || indice < 1 || indice > cadastro.length) {
		console.log("\n[ERRO] Índice inválido.");
		return;
	}

	const pessoa = cadastro[indice - 1];

	console.log("\nDigite os novos dados. Pressione ENTER para manter a informação atual.");

	const novoNome = prompt(`Nome (${pessoa.nome}): `);
	const novoEmail = prompt(`Email (${pessoa.email}): `);
	const novoNumero = prompt(`Número (${pessoa.numero}): `);

	if (novoNome) {
		pessoa.nome = novoNome;
	}
	if (novoEmail) {
		pessoa.email = novoEmail;
	}
	if (novoNumero) {
		pessoa.numero = novoNumero;
	}

	salvarDados();

	console.log("\n[SUCESSO] Cadastro alterado com sucesso!");
}

function removerCadastro() {
	console.log("\n--- Remover um Cadastro ---");
	visualizarPessoas();

	if (cadastro.length === 0) {
		return;
	}

	const indice = Number(prompt("\nDigite o índice que deseja remover: "));

	if (isNaN(indice) || indice < 1 || indice > cadastro.length) {
		console.log("\n[ERRO] Índice inválido.");
		return;
	}

	const pessoaRemovida = cadastro.splice(indice - 1, 1);
	salvarDados();

	console.log(`\n[SUCESSO] O cadastro de '${pessoaRemovida[0].nome}' foi removido.`);
}

while (true) {
	console.clear();

	console.log(`
==============================
   MENU DE CADASTRO (JSON)
==============================
1. Cadastrar pessoa
2. Visualizar cadastros
3. Alterar cadastro
4. Remover cadastro
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
			alterarPessoa();
			break;
		case '4':
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