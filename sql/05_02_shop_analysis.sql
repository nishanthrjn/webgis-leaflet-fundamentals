-- Task 5.2: Example topic "shops" (adapt later if you have a final topic)
SELECT * FROM planet_osm_point WHERE shop IS NOT NULL;
SELECT count(*) FROM planet_osm_point WHERE shop IS NOT NULL;

SELECT shop
FROM planet_osm_point
WHERE shop IS NOT NULL;

SELECT shop, count(*)
FROM planet_osm_point
WHERE shop IS NOT NULL
GROUP BY shop
ORDER BY count(*) DESC;

SELECT name
FROM planet_osm_point
WHERE shop IS NOT NULL;
