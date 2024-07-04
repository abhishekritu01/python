
create table employees( 
	emp_id serial primary key,
	fname varchar(100) not null,
	lname varchar(100) not null,
	email varchar(100) not null unique,
	dept varchar(50),
	salary decimal(10,2) default 30000.00,
	hire_date date not null default current_date
)



INSERT INTO employees (emp_id, fname, lname, email, dept, salary, hire_date) 
VALUES
(1, 'Raj', 'Sharma', 'raj.sharma@example.com', 'IT', 50000.00, '2020-01-15'),
(2, 'Priya', 'Singh', 'priya.singh@example.com', 'HR', 45000.00, '2019-03-22'),
(3, 'Arjun', 'Verma', 'arjun.verma@example.com', 'IT', 55000.00, '2021-06-01'),
(4, 'Suman', 'Patel', 'suman.patel@example.com', 'Finance', 60000.00, '2018-07-30'),
(5, 'Kavita', 'Rao', 'kavita.rao@example.com', 'HR', 47000.00, '2020-11-10'),
(6, 'Amit', 'Gupta', 'amit.gupta@example.com', 'Marketing', 52000.00, '2020-09-25'),
(7, 'Neha', 'Desai', 'neha.desai@example.com', 'IT', 48000.00, '2019-05-18'),
(8, 'Rahul', 'Kumar', 'rahul.kumar@example.com', 'IT', 53000.00, '2021-02-14'),
(9, 'Anjali', 'Mehta', 'anjali.mehta@example.com', 'Finance', 61000.00, '2018-12-03'),
(10, 'Vijay', 'Nair', 'vijay.nair@example.com', 'Marketing', 50000.00, '2020-04-19');


-- for delete table
drop table employees;

-- for select data
select * from employees


-- sql clause   --> mens to apply some condition on data
-- 1. where clause
-- 2. Distinct clause
-- 3. Order by clause
-- 4. Limit clause
-- 5. Like clause


------------------------------------------- section 4 data refining ------------------------
-- where clause
select * from employees where emp_id=5;

select * from employees where dept='HR';

select * from employees where salary >=50000;
select * from employees where salary < 50000;
select * from employees where salary = 50000;
select * from employees where dept='HR' or dept='Finance';
select * from employees where dept ='IT' and salary > 55000;


-- in and not in
select * from employees where dept IN ('IT','Finance','HR','Marketing');
select * from employees where dept Not IN ('IT','Finance','HR');
-- Between-----
select * from employees where salary between 40000 and 50000;



-- distinct-
select dept from employees;         -- to get all value from column
-- to get unique value 
select distinct  dept from employees;     -- to unique dept value from column




-- to get unique value 
select distinct  dept from employees;
SELECT DISTINCT fname, salary FROM employees;
select distinct fname,salary,email from employees;


-- Order by - assending 
select * from employees ORDER BY fname;
select * from employees order by salary;
select * from employees order by dept;

-- Order by -decending 
select * from employees order by salary desc;
select * from employees order by fname desc;
select * from employees order by emp_id desc;


-- Limit
select * from employees limit 2;
select * from employees order by fname desc limit 4;


-- Like------ 

select * from employees where fname like 'A%';     --from start
select * from employees where fname like '%a';     -- in last end with a

select * from employees where fname like '_a%'; 

select * from employees where fname like '%i%';

select * from employees where dept Like '__';         --- dept name only two word'--------


----------------------------------------section 5 -------------------
----------------------------------------Aggregation -----------------

select count(emp_id) from employees;

select sum(salary) from employees;

select avg(salary) from employees;

select min(salary) from employees;

select max(salary) from employees;


---------------------------------------- grouping ---------------------------------

select dept from employees group by dept;

select dept, count(fname)  from employees group by dept;

select dept, count(fname), sum(salary), min(salary) from employees group by dept;


dept   | count | sum | min
-------|-------|-----|------------
HR     | 2     | 92000 | 45000
IT     | 4     | 206000 | 48000
Finance| 2     | 121000 | 60000
Marketing| 2    | 102000 | 50000






---------------------------------------- string function ----------------------------
-- concat ,concat_ws(with seprater)
--SUBSTR
--LENGTH
--UPPER
--LOWER
--REVERSE
--TRIM
--LTRIM
--RTRIM
--REPLACE
--POSITION
--STRING_AGG


select concat('hello','world');
select * from employees;
select concat(fname,lname) from employees;
select concat(fname,lname) as full_name from employees;
select emp_id ,concat(fname,lname) as full_name,email from employees;
select emp_id ,concat(fname,' ',lname) as full_name,email from employees;

-- concat_ws --> ws stands for with seprater
select emp_id ,concat_ws('-',fname,lname) as full_name,email from employees;
select emp_id ,concat_ws('  ',fname,lname) as full_name,email from employees;
select emp_id,concat_ws(',',fname,lname,salary) as full_name,email from employees;


-- SUBSTR
select substr('hello buddy',1,6);
select replace ('ABCDEFG','ABC','PQR')
select * from employees;

-- replace
select replace ('ABCDEFG','ABC','PQR')
select replace (dept ,'IT','Tech') from employees;


-- reverse
select reverse('hello');
select length('hello');
select length(fname) from employees;
select * from employees where length(fname) > 5;
select upper(fname) from employees;
select lower(fname) from employees;
select left('hello',2);
select right('hello',2);
select left(fname,2) from employees;
select length('     hello world           ');
select length(trim('     hello world           '));
select position('om' in 'Thomas');
select * from employees order by salary desc limit 1;

select concat(left(dept,1),emp_id),fname from employees;


select dept ,count(emp_id) from employees group by dept;




-- sub query
-- sub query
select * from employees where salary =(select min(salary) from employees);
select * from employees where salary =(select max(salary) from employees); --- 1st run inner query select the max salary 
select * from employees where salary =(select max(salary) from employees where dept='IT'); --- 1st run inner query select the max salary means 55000 then outer query run and get the data of 55000 salary
select * from employees where salary =(select max(salary) from employees where dept='HR'); --- 1st run inner query select the max salary means 55000 then outer query run and get the data of 55000 salary




---------------------------------------- section 7 -----------------------------------
---------------------------------------- Expression case ---------------------------------
-- case expression is used to check the condition and return the value based on the condition   

fname | salary | salary_category
--------------------------------
abhishek | 50000 | high
rajesh | 40000 | medium
suman | 30000 | low
neha | 60000 | high
vikas | 35000 | low
priya | 45000 | medium


select fname,salary, case when salary >=50000 THEN 'High'
Else 'Low' END as salary_category from employees;


select fname,salary,
case salary > 0  then round(salary*10)
END as bonus from employees;


SELECT fname, salary,
CASE 
    WHEN salary > 55000 THEN 'HIGH'
    WHEN salary BETWEEN 45000 AND 50000 THEN 'MID'
    ELSE 'LOW'
END AS salary_category 
FROM employees;



SELECT 
    fname,
    salary,
    CASE 
        WHEN salary > 55000 THEN 'high'
        WHEN salary BETWEEN 45000 AND 50000 THEN 'mid'
        ELSE 'low'
    END AS salary_category,
    CASE 
        WHEN salary > 0 THEN ROUND(salary * 0.10)
        ELSE 0
    END AS bonus
FROM employees;


-- bonus  |count of employee
---HIGH | 3
---MID  | 2
---LOW  | 5

SELECT 
    CASE 
        WHEN salary > 55000 THEN 'HIGH'
        WHEN salary BETWEEN 45000 AND 50000 THEN 'MID'
        ELSE 'LOW'
    END AS salary_category,
    COUNT(emp_id) AS count_of_employee
FROM employees
GROUP BY salary_category;




======================================
-- Stored Routine is a set of SQL statements that can be stored in the database server and called from the client application.
-- Types of STORED Routine
-- 1. Stored Procedure - perform a specific task like insert, update, delete, select
-- 2. Stored Function /User defined Functions

----------------------update procedure---------------------
CREATE OR REPLACE PROCEDURE update_emp_salary(
    p_employee_id INT,
    p_new_salary NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE employees
    SET salary = p_new_salary
    WHERE emp_id = p_employee_id;
END;
$$;


-- call procedure
CALL update_emp_salary(5,200000)


----------------------Create Procedure---------------------

CREATE OR REPLACE PROCEDURE add_employee(
    p_fname VARCHAR,
    p_lname VARCHAR,
    p_email VARCHAR,
    p_dept VARCHAR,
    p_salary NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO employees (fname, lname, email, dept, salary)
    VALUES (p_fname, p_lname, p_email, p_dept, p_salary);
END;
$$;

CALL add_employee('abc1', 'Kumar1', 'abc1@gmail.com', 'IT', 50000);



SELECT setval('employees_emp_id_seq', (SELECT MAX(emp_id) FROM employees) + 1);  -- set the next value of sequence
SELECT currval('employees_emp_id_seq'); -- get the current value of sequence



-----------------------2. Stored Function /User defined Functions---------------------

-- find the number of employee in the department having maximum salary
-- sub Query

SELECT e.emp_id,e.fname,e.salary FROM employees e where e.dept ='HR' AND
e.salary =(
	SELECT MAX(emp.salary) FROM employees emp
	WHERE emp.dept ='HR'
);

CREATE OR REPLACE FUNCTION dept_max_sal_emp1(dept_name VARCHAR)
RETURNS TABLE(emp_id INT, fname VARCHAR, salary NUMERIC) 
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        e.emp_id,  e.fname, e.salary
    FROM 
        employees e
    WHERE 
        e.dept = dept_name
        AND e.salary = (
            SELECT MAX(emp.salary)
            FROM employees emp
            WHERE emp.dept = dept_name
        );
END;

$$ LANGUAGE plpgsql;

-- call function
select * from dept_max_sal_emp1('IT');




-----------------------------------------------------------------
-- Window functions, also known as analytic functions allow you to perform calculations across a set of rows related to the current row. 
-- Defined by an OVER() clause.
-- ROW_NUMBER()
-- RANK()
-- DENSE_RANK()
-- LAG()
-- LEAD()




------OVER() clause

SELECT SUM(salary) FROM employees;

SELECT fname, salary, SUM(salary) OVER() FROM employees;

SELECT fname, salary, SUM(salary) OVER(ORDER BY salary) FROM employees;

SELECT fname, salary, AVG(salary) OVER(ORDER BY salary) FROM employees;


----- ROW_NUMBER() function - assigns a unique sequential integer to each row within the partition of a result set.

SELECT fname,salary from employees;

SELECT ROW_NUMBER() OVER() ,fname,salary from employees;

SELECT ROW_NUMBER() OVER(ORDER BY fname) ,fname,salary from employees;

SELECT ROW_NUMBER() OVER(PARTITION BY dept) ,fname,salary ,dept from employees;

----- RANK() function - assigns a unique integer to each distinct row within the partition of a result set.
SELECT fname,salary,dept  from employees;

SELECT fname,salary, RANK() OVER(ORDER BY salary DESC) FROM employees;

SELECT fname,salary, DENSE_RANK() OVER(ORDER BY salary DESC) FROM employees;


----- LAG() function - access data from a previous row in the same result set without the use of a self-join.
-----LEAD() function - access data from a subsequent row in the same result set without the use of a self-join.

SELECT * FROM employees;

SELECT fname,salary FROM employees;

SELECT fname,salary, LAG(salary) OVER() FROM employees;

SELECT fname,salary, LEAD(salary) OVER(ORDER BY salary DESC) FROM employees;

SELECT fname,salary, (salary-LEAD(salary) OVER(ORDER BY salary DESC)) as salay_diff FROM employees;



---------------------------------------- CTA -----------------------------------
--common table expression

WITH avg_salary AS (
    SELECT dept, AVG(salary) AS average_salary 
    FROM employees 
    GROUP BY dept
)
SELECT
    e.emp_id,
    e.fname,
    e.dept,
    e.salary,
    a.average_salary
FROM 
    employees e
JOIN
    avg_salary a ON e.dept = a.dept 
WHERE 
    e.salary > a.average_salary;


-- case 2: we want to find high salary employee in each department

WITH dept_max_sal AS (
    SELECT 
        dept, 
        MAX(salary) AS max_salary
    FROM 
        employees
    GROUP BY 
        dept
)

SELECT 
    e.emp_id,
    e.fname,
    e.dept,
    e.salary
FROM
    employees e
JOIN
    dept_max_sal d ON e.dept = d.dept AND e.salary = d.max_salary;






---------------------------------------- TRIGGERS -----------------------------------
-- Trigger is a set of SQL statements that automatically "fires" when a specified event occurs on a specified table or view.

SELECT * FROM employees;

CALL update_emp_salary(1,40000);

CREATE OR REPLACE FUNCTION check_salary()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.salary < 0 THEN
        NEW.salary = 0;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;



CREATE TRIGGER before_update_salary
BEFORE UPDATE ON employees
FOR EACH ROW
EXECUTE FUNCTION check_salary();

