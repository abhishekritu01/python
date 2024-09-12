

-- Find the names of the customer that are not referred by the customer with id = 2.

SELECT name
FROM Customer
WHERE id NOT IN (
    SELECT id
    FROM Customer
    WHERE referee_id = 2
);


SELECT name
FROM Customer c
WHERE NOT EXISTS (
    SELECT 1
    FROM Customer
    WHERE referee_id = 2
    AND id = c.id
);


-- A country is big if:

-- it has an area of at least three million (i.e., 3000000 km2), or
-- it has a population of at least twenty-five million (i.e., 25000000).
-- Write a solution to find the name, population, and area of the big countries.


select name , population, area  from World where area >= 3000000 or population >= 25000000;



-- 3. Write a solution to find all the authors that viewed at least one of their own articles.

-- Return the result table sorted by id in ascending order.

SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY author_id;
 

 -- 4 Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15.

 select tweet_id from Tweets where LENGTH(content) > 15;



 ONSIF

