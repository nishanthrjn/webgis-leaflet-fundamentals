-- Exercise 5.3
-- Bounding box selection using &&

-- Build bbox geometry (examples from sheet concept)
-- Use WGS84 bbox (lon/lat) and transform to 3857:
SELECT ST_AsEWKT(
  ST_Transform(
    ST_GeomFromText('LINESTRING(5 47, 16 55)', 4326),
    3857
  )
);

-- Select objects within bbox (example: shops)
SELECT count(*)
FROM planet_osm_point
WHERE shop IS NOT NULL
  AND way && ST_Transform(
    ST_GeomFromText('LINESTRING(5 47, 16 55)', 4326),
    3857
  );

SELECT osm_id, name, shop
FROM planet_osm_point
WHERE shop IS NOT NULL
  AND way && ST_Transform(
    ST_GeomFromText('LINESTRING(5 47, 16 55)', 4326),
    3857
  )
LIMIT 50;
