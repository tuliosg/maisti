// Dados: Uma lista simples para armazenar os nomes dos pacientes
let fila = [];
let contadorSenha = 1;

// Função para adicionar paciente
function adicionarPaciente(nome) {
    let paciente = {
        nome: nome,
        senha: contadorSenha
    };
    fila.push(paciente);
    console.log("Paciente " + nome + " entrou na fila com a senha " + contadorSenha);
    contadorSenha++;
}

// Função para chamar o próximo (FIFO)
function chamarProximo() {
    if (fila.length > 0) {
        // shift() remove o primeiro elemento do array
        let proximo = fila.shift();
        console.log("Chamando: " + proximo.nome + " (Senha: " + proximo.senha + ")");
    } else {
        console.log("A fila está vazia.");
    }
}

// Execução passo a passo
adicionarPaciente("João");
adicionarPaciente("Maria");
chamarProximo(); // Chama o João
chamarProximo(); // Chama a Maria