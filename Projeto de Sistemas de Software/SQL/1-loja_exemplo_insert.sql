-- Compilador SQL Online
-- https://www.programiz.com/sql/online-compiler

-- LIMPEZA DAS TABELAS EXISTENTES
DROP TABLE IF EXISTS OrderItems;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Shippings;

-- Tabela de Clientes, Produtos, Pedidos e Itens do Pedido

-- Tabela de Clientes
CREATE TABLE Customers (
  cliente_id INTEGER PRIMARY KEY,
  nome       VARCHAR[30] NOT NULL,
  sobrenome  VARCHAR[30] NOT NULL,
  pais       VARCHAR[10] NOT NULL
);

-- Tabela de Produtos
CREATE TABLE Products (
  produto_id INTEGER PRIMARY KEY,
  nome       VARCHAR[30] NOT NULL,
  preco      REAL NOT NULL
);

-- Tabela de Pedidos
CREATE TABLE Orders (
  pedidos_id  INTEGER PRIMARY KEY,
  cliente_id  INTEGER NOT NULL,
  pedido_data DATE NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES Customers(cliente_id)
);

-- Tabela de Itens do Pedido
CREATE TABLE OrderItems (
  item_pedido_id INTEGER PRIMARY KEY,
  pedidos_id     INTEGER NOT NULL,
  produto_id     INTEGER NOT NULL,
  quantidade     INTEGER NOT NULL,
  FOREIGN KEY (pedidos_id) REFERENCES Orders(pedidos_id),
  FOREIGN KEY (produto_id) REFERENCES Products(produto_id)
);

-- DADOS DE EXEMPLO

-- Inserindo Clientes na Tabela Customers
INSERT INTO Customers VALUES
  (1,'Ana','Souza','BR'),
  (2,'Bruno','Lima','BR'),
  (3,'Clara','Dias','PT');

-- Inserindo Produtos na Tabela Products
INSERT INTO Products VALUES
  (1,'Café 500g',22.90),
  (2,'Filtro de Papel',9.50),
  (3,'Garrafa Térmica',79.00);

-- Inserindo Pedidos na Tabela Orders
INSERT INTO Orders VALUES
  (1,1,'2025-09-01'),
  (2,1,'2025-09-05'),
  (3,2,'2025-09-07');

-- Inserindo Itens do Pedido na Tabela OrderItems
INSERT INTO OrderItems VALUES
  (1,1,1,2),(2,1,2,3),  -- pedido 1 (Ana)
  (3,2,3,1),            -- pedido 2 (Ana)
  (4,3,1,1),(5,3,2,1);  -- pedido 3 (Bruno)