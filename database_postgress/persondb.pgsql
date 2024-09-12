CREATE TABLE person (
    id INT,
    name VARCHAR(100),
    city VARCHAR(50)
);
-- insert dat into database
INSERT INTO person(id, name, city)
VALUES (101, 'abhishek', 'sitamarhi');
INSERT INTO person(id, name, city)
VALUES (102, 'rajesh', 'patna'),
    (103, 'suman', 'gaya'),
    (104, 'neha', 'bhagalpur'),
    (105, 'vikas', 'muzaffarpur'),
    (106, 'priya', 'darbhanga'),
    (107, 'ravi', 'samastipur'),
    (108, 'pankaj', 'madhubani'),
    (109, 'anita', 'ara'),
    (110, 'manoj', 'buxar');
	
	
-- get data 
select * from person;

select name from person;

select city from person;

select name,city from person;

-- update 
update person set city = 'usa' where id = 104;
-- delete data
delete from person where id = 104;

update person set city='sitamarhi' where id=102;

update person set name ='abhishek' where id =102;

UPDATE person 
SET name = 'rajesh', city = 'patna' 
WHERE id = 102;


-- change column name
------------------------------------ using alter table----------------------

select * from person;
alter table person add column age int;  -- add column age
alter table person drop age; -- drop column age
alter table person rename column name to fullname; -- rename column name to fullname
alter table person rename to employee; -- rename table person to employee
select * from  employee; -- select all data from employee table
alter table  employee alter column fullname set DATA TYPE VARCHAR(200); -- change column fullname data type to varchar(200)
alter table  employee alter column fullname set default 'unknown'; -- set default value to column fullname
alter table person add column age int default 0; -- add column age with default value 0

rename column name to fullname; -- rename column name to fullnamen








--------------------------------check constraint---------------------------
-- check constraint is used to check the value of column or validate the value of column
ALTER TABLE employee ADD COLUMN mob VARCHAR(15) CHECK (LENGTH(mob) >= 10);

INSERT INTO employee(mob) values (1234567890);

ALTER TABLE employee DROP CONSTRAINT mob;

-- NAMED CONSTRAINT
ALTER TABLE employee ADD CONSTRAINT mob_check CHECK (LENGTH(mob) >= 10);

create table person (
    id int,
    name varchar(100),
    mob varchar(15) check (length(mob) >= 10)
    constraint mob_check_less_than_10_digit check (length(mob) >= 10)
);








