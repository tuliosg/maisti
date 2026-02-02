-- Compilador SQL Online
-- https://www.programiz.com/sql/online-compiler

-- Atualizar país da Clara para 'BR'
UPDATE Customers
SET pais = 'BR'
WHERE cliente_id = 3;

-- Conferir mudanças
SELECT * FROM Customers;

-- Atualizar preço do 'Café 500g' para 31
UPDATE Products
SET preco = 31
WHERE produto_id = 1;

-- Conferir mudanças
SELECT * FROM Products;