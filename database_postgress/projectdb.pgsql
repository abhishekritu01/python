
-- project_db   database name

-- Ecommerce 

CREATE TABLE customers (
    cust_id SERIAL PRIMARY KEY,
    cust_name VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    ord_id SERIAL PRIMARY KEY,
    ord_date DATE NOT NULL,
    cust_id INTEGER NOT NULL,
    FOREIGN KEY (cust_id) REFERENCES customers (cust_id)
);

CREATE TABLE products (
    p_id SERIAL PRIMARY KEY,
    p_name VARCHAR(100) NOT NULL,
    price NUMERIC NOT NULL
);

CREATE TABLE order_items (
    item_id SERIAL PRIMARY KEY,
    ord_id INTEGER NOT NULL,
    p_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (ord_id) REFERENCES orders (ord_id),
    FOREIGN KEY (p_id) REFERENCES products (p_id)
);





INSERT INTO customers (cust_name)
VALUES 
    ('Raju'), ('Sham'), ('Paul'), ('Alex');

INSERT INTO orders (ord_date, cust_id)
VALUES 
    ('2024-01-01', 1),      -- Raju first order
    ('2024-02-01', 2),     -- Sham first order
    ('2024-03-01', 3),     -- Paul first order
    ('2024-04-04', 2);    -- Sham second order

INSERT INTO products (p_name, price)
VALUES 
    ('Laptop', 55000.00),
    ('Mouse', 500),
    ('Keyboard', 800.00),
     ('Cable', 250.00)
;

INSERT INTO order_items (ord_id, p_id, quantity)
VALUES 
    (1, 1, 1),  -- Raju ordered 1 Laptop
    (1, 4, 2),  -- Raju ordered 2 Cables
    (2, 1, 1),  -- Sham ordered 1 Laptop
    (3, 2, 1),  -- Paul ordered 1 Mouse
    (3, 4, 5),  -- Paul ordered 5 Cable
    (4, 3, 1);  -- Sham ordered 1 Keyboard
	
	
-- step 1--------------
select * from order_items ;
select * from products ;
select * from orders ;
select * from customers  ;

----step 2
SELECT * FROM order_items;



SELECT * FROM order_items oi 
JOIN products p ON oi.p_id = p.p_id;



SELECT * FROM order_items oi 
JOIN products p ON oi.p_id = p.p_id;



SELECT p.p_name,
oi.quantity,
o.ord_date
FROM order_items oi 
JOIN products p ON oi.p_id = p.p_id
JOIN orders o ON o.ord_id = oi.ord_id;



SELECT p.p_name,
oi.quantity,
o.ord_date,
c.cust_name,
p.price,
(oi.quantity * p.price) AS total_price
FROM order_items oi 
JOIN products p ON oi.p_id = p.p_id
JOIN orders o ON o.ord_id = oi.ord_id
JOIN customers c ON o.cust_id = c.cust_id;


---------------- tutorial view ---------
create view billing_info as
SELECT o.ord_id,
	   c.cust_name,
       o.ord_date,
	   p.p_name,
       p.price,
	   oi.quantity ,
       (oi.quantity * p.price) AS total_price
FROM order_items oi
JOIN products p ON oi.p_id = p.p_id
JOIN orders o ON o.ord_id = oi.ord_id
JOIN customers c ON o.cust_id = c.cust_id;

select * from billing_info ;

DROP VIEW billing_info;




-- ------------Having claue  Group rollup----------------
-- Having claue 
SELECT * FROM billing_info;

SELECT p_name, SUM(total_price) FROM billing_info GROUP BY p_name;

SELECT p_name, SUM(total_price) FROM billing_info
GROUP BY p_name
HAVING SUM(total_price) > 500;


SELECT p_name,sum(total_price) FROM billing_info GROUP BY ROLLUP(p_name)
HAVING SUM(total_price) > 500 ORDER BY SUM(total_price);

-- rollup
SELECT COALESCE(p_name, 'Total'),
p_name, SUM(total_price) FROM 
billing_info GROUP BY
ROLLUP(p_name) 
ORDER BY SUM(total_price);


======================================
-- Stored Routine is a set of SQL statements that can be stored in the database server and called from the client application.
-- Types of STORED Routine
-- 1. Stored Procedure - perform a specific task like insert, update, delete, select
-- 2. Stored Function /User defined Functions

	