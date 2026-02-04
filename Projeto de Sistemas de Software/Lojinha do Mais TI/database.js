const Database = require('better-sqlite3');

class ConexaoBanco {
    constructor() {
        /*
        Código para criar ou abrir o arquivo .db da lojinha
        */
      this._criarTabela();
    }

    _criarTabela() {
        // Define a estrutura da tabela de produtos
        const sql = 
          /*
          Comando SQL para criar a tabela "produtos"
          */
        this.db.prepare(sql).run();
    }
}

// Exportamos a conexão para ser usada nos outros arquivos 
// (não alterem o código abaixo)
module.exports = new ConexaoBanco().db;
