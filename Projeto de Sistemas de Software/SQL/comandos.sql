-- Compilador SQL Online
-- https://www.programiz.com/sql/online-compiler

-- COMANDOS SQL BÁSICOS

-- CREATE      -> Cria uma tabela
-- INSERT      -> Insere dados em uma tabela
-- SELECT      -> Seleciona dados de uma tabela
-- UPDATE      -> Atualiza dados em uma tabela
-- DELETE      -> Remove dados de uma tabela
-- DROP        -> Remove uma tabela
-- WHERE       -> Filtro de dados
-- ORDER BY    -> Ordena os dados selecionados
-- ASC         -> Ordenação crescente
-- DESC        -> Ordenação decrescente
-- PRIMARY KEY -> Chave primária
-- NOT NULL    -> Campo obrigatório
-- FOREIGN KEY -> Chave estrangeira
-- REFERENCES  -> Referência para chave estrangeira

-- Estruturas

-- Para criar tabelas
-- CREATE TABLE nome_da_tabela (
--   coluna1 TIPO_DADO RESTRIÇÃO,
--   coluna2 TIPO_DADO RESTRIÇÃO,
--   ...
--   colunaN TIPO_DADO RESTRIÇÃO
-- );
-- TIPO_DADO: INTEGER, VARCHAR, REAL, DATE, etc.
-- RESTRIÇÃO: PRIMARY KEY, NOT NULL, FOREIGN KEY, REFERENCES, etc.

CREATE TABLE exemplo (
  id INTEGER PRIMARY KEY,
  nome VARCHAR[30] NOT NULL,
  idade INTEGER,
  cidade VARCHAR[30]
);

-- Para inserir dados
-- INSERT INTO nome_da_tabela (coluna1, coluna2, ..., colunaN)
-- VALUES (valor1, valor2, ..., valorN);
INSERT INTO exemplo (id, nome, idade, cidade) VALUES
  (1, 'Ana', 28, 'São Paulo'),
  (2, 'Bruno', 35, 'Rio de Janeiro'),
  (3, 'Clara', 22, 'Belo Horizonte');

-- Para selecionar dados
-- SELECT coluna1, coluna2, ..., colunaN
-- FROM nome_da_tabela
-- WHERE condição
-- ORDER BY coluna [ASC|DESC];
SELECT * FROM exemplo;
SELECT nome, cidade FROM exemplo;
SELECT * FROM exemplo WHERE idade > 25;
SELECT * FROM exemplo ORDER BY nome ASC;
SELECT * FROM exemplo ORDER BY idade DESC;

-- Para atualizar dados
-- UPDATE nome_da_tabela
-- SET coluna1 = valor1, coluna2 = valor2, ..., colunaN = valorN
-- WHERE condição;
UPDATE exemplo SET cidade = 'Curitiba' WHERE id = 2;

-- Para remover dados
-- DELETE FROM nome_da_tabela
-- WHERE condição;
DELETE FROM exemplo WHERE id = 3;

-- Para remover uma tabela
-- DROP TABLE nome_da_tabela;
DROP TABLE exemplo;