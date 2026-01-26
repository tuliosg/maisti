class Paciente {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
    }
}

class GerenciadorConsulta {
    constructor() {
        this.fila = [];
        this.proximaSenha = 1;
    }

    adicionar(nome) {
        let novoPaciente = new Paciente(nome, this.proximaSenha);
        this.fila.push(novoPaciente);
        console.log("Paciente " + nome + " registrado com senha " + this.proximaSenha);
        this.proximaSenha++;
    }

    chamar() {
        if (this.fila.length > 0) {
            let proximo = this.fila.shift();
            console.log("Atendimento agora: " + proximo.nome);
        } else {
            console.log("Nenhum paciente aguardando.");
        }
    }
}

// Uso do objeto
const minhaFila = new GerenciadorConsulta();
minhaFila.adicionar("João");
minhaFila.adicionar("Maria");
minhaFila.chamar();