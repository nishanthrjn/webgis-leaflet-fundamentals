-- Task 5.3: Bounding box selection
-- Option A: Build bbox in SRID 3857 directly (fill xmin/ymin/xmax/ymax)
SELECT ST_AsEWKT(ST_GeomFromText('LINESTRING(xmin ymin, xmax ymax)', 3857));

-- Option B: Build bbox in WGS84 and transform to 3857
SELECT ST_AsEWKT(
  ST_Transform(ST_GeomFromText('LINESTRING(xmin ymin, xmax ymax)', 4326), 3857)
);

-- Use bbox for selecting features (example for shops)
SELECT *
FROM planet_osm_point
WHERE shop IS NOT NULL
  AND way && ST_GeomFromText('LINESTRING(xmin ymin, xmax ymax)', 3857);
