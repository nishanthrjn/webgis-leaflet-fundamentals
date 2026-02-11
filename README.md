# WebGIS & Leaflet Fundamentals

This repository contains a collection of **Internet-GIS exercises** developed as part of coursework at  
**Leibniz University Hannover – Institute for Cartography and Geoinformatics (IKG)**.

The repository is intentionally structured to document:
- **Older coursework (WS 2022/23)** based on static maps and early Leaflet integration
- **Recent coursework (WS 2025/26)** focusing on modern WebGIS concepts with Leaflet, GeoJSON, and XML parsing

The exercises progress from basic HTML layouting to interactive web maps with vector layers and user interaction.

---

## Technology Stack

- HTML5 / CSS3
- JavaScript (ES6)
- Leaflet.js
- OpenStreetMap tile services
- GeoJSON
- XML parsing (client-side)
- jQuery (used where required by exercise specification)

---
## Old Exercises – Internet-GIS WS 2022/23  
*(moved to Internet-GIS-WS22-23`)*

These exercises represent the **initial WebGIS learning phase**, starting from static map visualization and gradually introducing interaction and Leaflet-based web maps.

### WS22/23 – Exercise 1  
**Static Map with Image Map**

- HTML5 page with semantic structure (`header`, `section`, `footer`)
- Static world map image
- Image map with clickable continents
- External links to Wikipedia articles
- Responsive layout basics

**Key concepts:**  
HTML semantics, image maps, basic cartographic interaction

---

### WS22/23 – Exercise 2  
**User Interaction & Map Scaling**

- Dynamic update of descriptive text based on user interaction
- Form-based text updates
- JavaScript-based correction of image map coordinates on resize
- Handling absolute vs relative coordinate issues

**Key concepts:**  
DOM manipulation, responsive scaling, event handling

---

### WS22/23 – Exercise 3  
**Introduction to Leaflet**

- Replacement of static image with a Leaflet web map
- Integration of external tile layers
- Vector layers (points, lines, polygons)
- Layer control and scale bar
- Map events (click, zoom, move)
- Feature interaction

**Key concepts:**  
Leaflet fundamentals, vector layers, map events

---

### WS22/23 – Exercise 4  
**Parsing External Spatial Data**

- Parsing XML-based country geometries
- Parsing GeoJSON country data
- Adding multiple data layers to a Leaflet map
- Styling layers based on feature properties
- Mouseover and mouseout highlighting

**Key concepts:**  
Data formats (XML, GeoJSON), client-side parsing, thematic styling

---

### WS22/23 – Exercise 5  
**Spatial Databases (PostGIS – SQL focus)**

- Connecting to a PostGIS database
- Inspecting spatial tables using SQL
- Filtering OpenStreetMap data
- Geometry extraction and transformation
- Preparation for server-side WebGIS exercises

**Key concepts:**  
PostGIS, spatial SQL, data exploration  
*(No frontend implementation required for this exercise)*

---

## New Exercises – Internet-GIS WS 2025/26  
*(Exercise 1–4)*

These exercises represent a **more modern WebGIS workflow**, with improved layouting, interaction design, and structured data handling.

---

### Exercise 1 – HTML & Image Map (East Frisian Islands)

- Semantic HTML5 page structure
- Static map of the East Frisian Islands
- Image map with clickable islands
- External links to Wikipedia
- Clean layout using modern CSS

**Focus:**  
HTML fundamentals, image-based spatial interaction

---

### Exercise 2 – Interaction & Responsive Behavior

- Dynamic content updates based on user interaction
- Improved handling of image scaling
- JavaScript-based adjustment of interaction areas
- Separation of content and interaction logic

**Focus:**  
User interaction, responsive design, robustness

---

### Exercise 3 – Leaflet Web Map

- Replacement of static image with Leaflet map
- OpenStreetMap base layer
- Custom vector features
- Map event handling (click, zoom, bounds)
- Feature-level interaction

**Focus:**  
Modern WebGIS foundations using Leaflet

---

### Exercise 4 – Parsing & Styling Spatial Data

- Parsing XML geometries from `countries_xml`
- Parsing GeoJSON data from `countries_json`
- Automatic creation of polygon layers
- Feature-based thematic styling
- Mouseover highlighting and style reset
- Combined visualization of local (islands) and global datasets

**Focus:**  
Client-side spatial data handling, multi-layer maps, interaction design

---

## Notes

- The exercises are **course-driven** and follow the official task descriptions provided by IKG.
- Some solutions intentionally favor clarity and correctness over abstraction, in line with academic requirements.
- Server-side components (PHP, PostGIS integration) are outside the scope of this repository.

---

## Author

**Nishanth Rajan**  
M.Sc. Geodesy & Geoinformatics  
Leibniz University Hannover  

---

## License

This repository is intended for **educational and demonstration purposes**.