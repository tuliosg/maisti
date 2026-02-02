-- Compilador SQL Online
-- https://www.programiz.com/sql/online-compiler

-- 1ª QUESTÃO
-- Coisinho rodou código abaixo no Programiz.
-- Ao executar o código, a tabela Customers foi criada e populada com 30 registros.
-- Porém, algumas colunas ficaram com valores NULL.
-- Preencha as colunas Sobrenome e País com valores adequados.
-- Lembre-se que para preencher, você deve usar o comando UPDATE.
-- Está proibido alterar o comando executado por coisinho.

CREATE TABLE Customers (
  cliente_id INTEGER PRIMARY KEY,
  nome VARCHAR[30] NOT NULL,
  sobrenome VARCHAR[30],
  pais VARCHAR[10]
);

INSERT INTO Customers (cliente_id, nome, sobrenome, pais) VALUES
  (1,  'Ana',      'Souza',     'BR'),
  (2,  'Bruno',    'Lima',      'BR'),
  (3,  'Carlos',   NULL,        'AR'),
  (4,  'Daniela',  'Moraes',    'PT'),
  (5,  'Eduardo',  'Oliveira',  NULL),
  (6,  'Fernanda', 'Costa',     'BR'),
  (7,  'Gabriel',  'Silva',     'MX'),
  (8,  'Helena',   NULL,        'CL'),
  (9,  'Igor',     'Santos',    'BR'),
  (10, 'Joana',    'Martins',   NULL),
  (11, 'Kleber',   'Dias',      'BR'),
  (12, 'Larissa',  'Gomes',     'US'),
  (13, 'Marcos',   NULL,        'BR'),
  (14, 'Natália',  'Ferreira',  'BR'),
  (15, 'Otávio',   'Ramos',     'UY'),
  (16, 'Patrícia', NULL,        'BR'),
  (17, 'Quésia',   'Carvalho',  NULL),
  (18, 'Ricardo',  'Teixeira',  'PT'),
  (19, 'Sabrina',  'Almeida',   'BR'),
  (20, 'Tiago',    'Pereira',   'BR'),
  (21, 'Ursula',   NULL,        'DE'),
  (22, 'Victor',   'Rocha',     'BR'),
  (23, 'Wagner',   'Barbosa',   'BR'),
  (24, 'Xavier',   'Cunha',     NULL),
  (25, 'Yara',     'Nogueira',  'ES'),
  (26, 'Zeca',     'Farias',    'BR'),
  (27, 'Alberto',  NULL,        'FR'),
  (28, 'Bianca',   'Reis',      'BR'),
  (29, 'Cláudio',  'Andrade',   NULL),
  (30, 'Denise',   'Moreira',   'BR');