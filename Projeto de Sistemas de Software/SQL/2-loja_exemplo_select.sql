-- Compilador SQL Online
-- https://www.programiz.com/sql/online-compiler

-- Seleção completa
SELECT * FROM Customers;

-- Seleção de colunas específicas
SELECT cliente_id, sobrenome FROM Customers;

-- Seleção com condição
SELECT * FROM Customers
WHERE pais = 'BR';

-- Seleção com ordenação crescente
SELECT * FROM Customers
ORDER BY sobrenome ASC;

-- Seleção com ordenação decrescente
SELECT * FROM Products
ORDER BY preco DESC;