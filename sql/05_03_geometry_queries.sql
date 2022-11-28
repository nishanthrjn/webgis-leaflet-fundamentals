-- Task 5.3: Geometry column access (use osm_id to limit output)
SELECT osm_id FROM planet_osm_point LIMIT 20;

-- Replace <OSM_ID> with a real value from the line above
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

-- Leaflet uses EPSG:4326, DB uses EPSG:3857 -> transform
SELECT ST_AsEWKT(ST_Transform(way, 4326))
FROM planet_osm_point
WHERE osm_id = <OSM_ID>;
