
CREATE TABLE customers (  
          cust_id SERIAL PRIMARY KEY,   -- serial is used to auto increment the value
          cust_name VARCHAR(100) NOT NULL 
);



CREATE TABLE orders ( 
            ord_id SERIAL PRIMARY KEY, 
            ord_date DATE NOT NULL, 
            price NUMERIC NOT NULL,
            cust_id INTEGER NOT NULL, 
            FOREIGN KEY (cust_id) REFERENCES 
            customers (cust_id) 
);


select * from orders;
select * from customers;



drop table customers;
drop table orders;



-- ----------------------- joins ----------------------------
-- types of joins
-- 1. cross joins     ->means to join every row of the first table with every row of the second table.
-- 2. inner joins      ->returns only the rows that have matching values in both tables.
-- 3. outer joins     --> returns all rows from both tables, joining them where it can and putting NULL where it can't.
-- 4. LEFT JOIN        --> returns all rows from the left table, and the matched rows from the right table. The result is NULL from the right side, if there is no match.
-- 5. RIGHT JOIN     --> returns all rows from the right table, and the matched rows from the left table. The result is NULL from the left side, when there is no match.
-- 6. FULL JOIN       --> returns rows when there is a match in one of the tables. It returns all rows from the left table and the right table, with NULL in the columns where there is no match.
-- 7. SELF JOIN      --> is a regular join, but the table is joined with itself.
-- 8. NATURAL JOIN --> is based on all columns in the two tables that have the same name.
-- 9. CROSS JOIN    --> returns the Cartesian product of the two tables.

-- 1. cross joins -> baiscally show the possble combination
select * from customers cross join orders;

-- 2 inner joins
select * from customers inner join orders on customers.cust_id = orders.cust_id;

select * from customers c inner join orders o ON c.cust_id =o.cust_id;

-- using group by    - use for aggregate function
select c.cust_name ,count(o.ord_id) from customers c inner join orders o ON c.cust_id =o.cust_id
group by cust_name;


-- LEFT JOIN 
select c.cust_name ,count(o.ord_id) from customers c left join orders o ON c.cust_id =o.cust_id
group by cust_name;



select * from customers c LEFT JOIN orders o 
ON c.cust_id =o.cust_id;

select * from orders o LEFT JOIN  customers c 
ON c.cust_id =o.cust_id;


-- RIGHT JOIN
select * from customers c RIGHT JOIN orders o 
ON c.cust_id =o.cust_id;

select * from orders o  RIGHT JOIN customers c
ON c.cust_id =o.cust_id;


-- FULL JOIN
select * from customers c FULL JOIN orders o
ON c.cust_id =o.cust_id;

select * from orders o FULL JOIN customers c
ON c.cust_id =o.cust_id;


