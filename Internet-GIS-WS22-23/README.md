# WebGIS Foundations – Interactive Maps & Spatial Data Handling

This repository contains a structured WebGIS foundation project developed through a sequence of practical exercises.  
The focus is on **interactive web maps**, **spatial data parsing**, and **map-based UI logic**, using standard WebGIS technologies that are commonly integrated with backend systems.

The project builds step by step from static web maps to interactive Leaflet-based applications and spatial database exploration, reflecting a typical WebGIS learning and prototyping workflow.

---

## Scope & Learning Objectives

This project demonstrates:

- Core WebGIS concepts and map-based user interaction
- Client-side spatial data handling (XML, GeoJSON)
- Interactive map rendering with Leaflet
- Map events, styling, and layer management
- Practical exposure to spatial databases (PostGIS)
- Clean separation of presentation logic and data logic

The exercises are intentionally kept **framework-light** to focus on fundamentals that translate well into production systems and backend-driven GIS applications.

---

## Technologies Used

- HTML5 / CSS3
- JavaScript (ES6)
- Leaflet.js
- GeoJSON
- XML
- OpenStreetMap tiles
- PostGIS (SQL exploration)
- PostgreSQL
- Basic jQuery (for XML parsing)

---

## Exercises Overview

### Exercise 1 – Static Web Map & HTML Layout

- Built a semantic HTML5 page with header, content section, and footer
- Embedded a static world map image with responsive layout
- Implemented image maps to make continents clickable
- Linked map regions to external GIS-related resources (e.g. Wikipedia)
- Focus on clean structure, layout separation, and browser compatibility

**Key concepts**

- HTML semantics
- Image maps
- Responsive layout basics
- Separation of content and presentation

---

### Exercise 2 – User Interaction & Responsive Map Areas

- Added interactive behavior to a static map using JavaScript
- Dynamically updated descriptive content based on user interaction
- Introduced form-based input to influence map-related information
- Solved coordinate scaling issues caused by responsive resizing
- Converted hard-coded image map coordinates into scale-aware logic

**Key concepts**

- Event-driven UI logic
- Coordinate transformation
- Responsive design constraints in map applications

---

### Exercise 3 – Interactive Web Maps with Leaflet

- Replaced static maps with an interactive Leaflet map
- Integrated external tile providers (OpenStreetMap)
- Added scale controls and layer toggles
- Created vector layers (points, lines, polygons)
- Implemented map and feature event handling
- Displayed cursor coordinates, zoom levels, and map bounds dynamically

**Key concepts**

- Leaflet API fundamentals
- Map events and state handling
- Vector feature interaction
- Layer management

---

### Exercise 4 – Parsing Spatial Data (XML & GeoJSON)

- Parsed spatial data from XML and GeoJSON sources
- Converted geometry data into Leaflet-compatible layers
- Handled coordinate order differences (lat/lon vs lon/lat)
- Applied data-driven styling during parsing
- Implemented hover and mouseout interactions with style restoration

**Key concepts**

- Client-side spatial data parsing
- Geometry handling
- Feature styling based on attributes
- Interactive map feedback

---

### Exercise 5 – Spatial Database Exploration with PostGIS

- Connected to a PostGIS database using SQL
- Explored OpenStreetMap-derived spatial tables
- Filtered and aggregated spatial features using SQL
- Converted geometries to WKT and GeoJSON formats
- Applied coordinate reference system transformations (EPSG:3857 ↔ EPSG:4326)
- Prepared spatial queries suitable for backend-driven WebGIS applications

**Key concepts**

- Spatial SQL
- PostGIS geometry functions
- Bounding box queries
- Data preparation for web map clients

---

## Relevance for GIS & Software Engineering Roles

While this project focuses on client-side WebGIS fundamentals, the concepts directly translate to:

- GIS-backed web applications
- Backend-driven map services (e.g. .NET + PostGIS)
- REST-based spatial data delivery
- Map-centric UI components in enterprise systems
- Modernization of desktop GIS workflows into web-based solutions

The structured approach mirrors how GIS features are incrementally introduced in real-world systems.

---

## Project Status

This repository is intended as a **learning and reference project** showcasing WebGIS fundamentals.  
It does not aim to be a full production system but provides a solid base for integration with backend services and APIs.

---

## Notes

- Exercises were developed as part of an Internet-GIS university course
- Code is intentionally kept explicit and readable
- No frameworks beyond Leaflet are used to keep concepts transparent
