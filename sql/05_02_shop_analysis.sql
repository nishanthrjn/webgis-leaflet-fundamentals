-- Exercise 5.2
-- Example topic from sheet: shops

SELECT count(*)
FROM planet_osm_point
WHERE shop IS NOT NULL;

SELECT shop, count(*)
FROM planet_osm_point
WHERE shop IS NOT NULL
GROUP BY shop
ORDER BY count(*) DESC;

SELECT osm_id, name, shop
FROM planet_osm_point
WHERE shop IS NOT NULL
LIMIT 50;

SELECT name
FROM planet_osm_point
WHERE shop IS NOT NULL
LIMIT 50;
