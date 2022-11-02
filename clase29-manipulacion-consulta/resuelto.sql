use movies_db;

-- Microdesafio paso 1:

-- SELECT * FROM genres;

INSERT INTO genres(name, ranking, active)
VALUES ("Investigación", 13, 1);

UPDATE genres SET name = "Investigación Científica"
WHERE (name = "Investigación" AND id > 0);

DELETE FROM genres WHERE id = 13;	

SELECT * FROM movies;

SELECT first_name, last_name, rating FROM actors;

SELECT title AS titulo FROM series AS SerieTelevisiva;

-- Microdesafio paso 2:

SELECT first_name, last_name FROM actors WHERE rating > 7.5;

SELECT title, rating, awards FROM movies WHERE (rating > 7.5 AND awards > 2);

SELECT title, rating FROM movies ORDER BY rating ASC;

-- Microdesafio paso 3:

SELECT title FROM movies LIMIT 3;

SELECT id, title, rating FROM movies ORDER BY rating DESC LIMIT 5;

SELECT id,title, rating FROM movies ORDER BY rating DESC LIMIT 5 OFFSET 6;

SELECT id, first_name, last_name, rating FROM actors ORDER BY id LIMIT 10;

SELECT id, first_name, last_name, rating FROM actors ORDER BY id LIMIT 10 OFFSET 20;

-- Microdesafio paso 4:

SELECT title, rating FROM movies WHERE title LIKE "Harry Potter%";

SELECT * FROM actors WHERE first_name LIKE "Sam%";

SELECT title,release_date FROM movies WHERE YEAR(release_date) BETWEEN "2004" AND "2008";