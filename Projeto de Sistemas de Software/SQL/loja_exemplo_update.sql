-- Compilador SQL Online
-- https://www.programiz.com/sql/online-compiler

-- Atualizar país da Clara para 'BR'
UPDATE Customers
SET pais = 'BR'
WHERE cliente_id = 3;

-- Remover um produto por ID
DELETE FROM Products
WHERE produtos_id = 2;

-- Conferir mudanças
SELECT * FROM Customers;
SELECT * FROM Products;