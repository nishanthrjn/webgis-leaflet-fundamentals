-- Exercise 5.3
-- Geometry access + output formats + SRID transform

-- Pick one object id for single-object inspection:
SELECT osm_id
FROM planet_osm_point
WHERE shop IS NOT NULL
LIMIT 10;

-- Replace <OSM_ID> with one id from above:
SELECT way
FROM planet_osm_point
WHERE osm_id = <OSM_ID>;

SELECT ST_AsText(way)
FROM planet_osm_point
WHERE osm_id = <OSM_ID>;

SELECT ST_AsEWKT(way)
FROM planet_osm_point
WHERE osm_id = <OSM_ID>;

SELECT ST_AsGeoJSON(way)
FROM planet_osm_point
WHERE osm_id = <OSM_ID>;

-- Leaflet uses EPSG:4326, DB uses EPSG:3857 -> transform:
SELECT ST_AsEWKT(ST_Transform(way, 4326))
FROM planet_osm_point
WHERE osm_id = <OSM_ID>;

SELECT ST_AsGeoJSON(ST_Transform(way, 4326))
FROM planet_osm_point
WHERE osm_id = <OSM_ID>;