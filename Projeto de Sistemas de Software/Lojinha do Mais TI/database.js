const Database = require('better-sqlite3');

class ConexaoBanco {
    constructor() {
        // Cria ou abre o arquivo único da lojinha
        this.db = new Database('loja.db');
        this._criarTabela();
    }

    _criarTabela() {
        // Define a estrutura da tabela de produtos
        const sql = `
            CREATE TABLE IF NOT EXISTS produtos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                preco REAL NOT NULL,
                quantidade INTEGER NOT NULL
            )
        `;
        this.db.prepare(sql).run();
    }
}

// Exportamos a conexão para ser usada nos outros arquivos
module.exports = new ConexaoBanco().db;
