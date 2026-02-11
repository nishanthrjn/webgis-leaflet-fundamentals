/**
 * Internet-GIS Exercise 4 - Parsing and Map Styling
 * Author: Nishanth Rajan (10050369)
 */

// ============================================
// 1. Existing Island Data (from Exercise 3)
// ============================================
const islandsData = [
    { name: "Borkum", coords: [53.5878, 6.6675], description: "The westernmost and largest East Frisian Island." },
    { name: "Juist", coords: [53.6784, 6.9967], description: "Completely car-free island." },
    { name: "Norderney", coords: [53.7067, 7.1800], description: "Germany's oldest seaside resort." },
    { name: "Baltrum", coords: [53.7244, 7.3733], description: "The smallest inhabited island." },
    { name: "Langeoog", coords: [53.7456, 7.4967], description: "Famous for its water tower." },
    { name: "Spiekeroog", coords: [53.7675, 7.6967], description: "Preserves traditional island character." },
    { name: "Wangerooge", coords: [53.7925, 7.9017], description: "The easternmost island." }
];

// ============================================
// 2. Initialize Map
// ============================================
// Center shifted slightly to accommodate global data for Task 4
const map = L.map('map').setView([50, 10], 4); 

const baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// ============================================
// 3. Task 4.1: Parse XML file
// ============================================
// Iterate through "Feature" objects in countries_xml [cite: 20]
$(countries_xml).find("Feature").each(function() {
    const name = $(this).find("Name").text();
    const geomStr = $(this).find("Geometry").text();
    
    // Parse the geometry string into a Leaflet-compatible [lat, lon] array [cite: 22, 23]
    const coords = JSON.parse(geomStr);

    const xmlPolygon = L.polygon(coords, {
        color: "#1f3a5f",
        fillColor: "#4a90e2",
        fillOpacity: 0.3,
        weight: 1
    }).addTo(map);
    xmlPolygon.on('mouseover', function(e) {
        this.setStyle({ weight: 4, color: '#ffd166', fillOpacity: 0.7 });
        this.bringToFront();
        document.getElementById('featureInfo').innerHTML = "XML Feature: " + name;
    });
    
    xmlPolygon.on('mouseout', function(e) {
        this.setStyle({ color: "#1f3a5f", weight: 1, fillOpacity: 0.3 });
        document.getElementById('featureInfo').innerHTML = "Click on a feature";
    });

    xmlPolygon.bindPopup("XML Feature: " + name);
});

// ============================================
// 4. Task 4.2 & 4.3: Parse GeoJSON and Map Styling
// ============================================
// Note: GeoJSON coordinates are [lon, lat], requiring conversion or GeoJSON layer handling 
const geojsonLayer = L.geoJSON(JSON.parse(countries_json), {
    // Task 4.3.1: Style depending on properties 
    style: function(feature) {
        return {
            fillColor: feature.properties.name === "Germany" ? "#ffd166" : "#2d5a88",
            color: "white",
            weight: 2,
            fillOpacity: 0.6
        };
    },
    // Task 4.3.2: Mouseover and Mouseout events [cite: 36, 37, 38]
    onEachFeature: function(feature, layer) {
        layer.on({
            mouseover: function(e) {
                const l = e.target;
                l.setStyle({
                    weight: 4,
                    color: '#ffd166',
                    fillOpacity: 0.9
                });
                l.bringToFront();
                document.getElementById('featureInfo').innerHTML = "Hovering over: " + feature.properties.name;
            },
            mouseout: function(e) {
                geojsonLayer.resetStyle(e.target);
                document.getElementById('featureInfo').innerHTML = "Click on a feature";
            }
        });
        layer.bindPopup("GeoJSON Country: " + feature.properties.name);
    }
}).addTo(map);

// ============================================
// 5. Island Markers 
// ============================================
islandsData.forEach(island => {
    const islandIcon = L.divIcon({
        className: 'custom-island-marker',
        html: `<div style="background:#1f3a5f; color:white; padding:2px 5px; border-radius:4px; font-size:10px;">${island.name}</div>`,
        iconSize: [60, 20]
    });
    L.marker(island.coords, { icon: islandIcon }).addTo(map).bindPopup(island.description);
});

// ============================================
// 6. Map Events 
// ============================================
function updateMapInfo() {
    document.getElementById('zoomLevel').textContent = map.getZoom();
    const bounds = map.getBounds();
    document.getElementById('mapBounds').innerHTML = 
        `NE: ${bounds.getNorthEast().lat.toFixed(3)}, ${bounds.getNorthEast().lng.toFixed(3)}<br>` +
        `SW: ${bounds.getSouthWest().lat.toFixed(3)}, ${bounds.getSouthWest().lng.toFixed(3)}`;
}

map.on('moveend zoomend', updateMapInfo);
map.on('click', function(e) {
    document.getElementById('clickCoords').textContent = `${e.latlng.lat.toFixed(4)}°N, ${e.latlng.lng.toFixed(4)}°E`;
});

// Initial call
updateMapInfo();
console.log('Exercise 4 layers initialized');