-- Compilador SQL Online
-- https://www.programiz.com/sql/online-compiler

-- Atualizar país da Clara para 'BR'
UPDATE Customers
SET pais = 'BR'
WHERE cliente_id = 3;

-- Conferir mudanças
SELECT * FROM Customers;

SELECT * FROM Products;
