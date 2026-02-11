/**
 * Internet-GIS Exercise 3 - Leaflet Web Map
 * Author: Nishanth Rajan (10050369)
 * 
 * Task 3.1: Embed Web Map into Website
 * Task 3.2: Map Events
 */

// ============================================
// Island Data with Coordinates
// ============================================

const islandsData = [
    {
        name: "Borkum",
        coords: [53.5878, 6.6675],
        population: "~5,200",
        area: "36.1 km²",
        description: "The westernmost and largest East Frisian Island, known for its therapeutic sea climate.",
        wiki: "https://en.wikipedia.org/wiki/Borkum"
    },
    {
        name: "Juist",
        coords: [53.6784, 6.9967],
        population: "~1,500",
        area: "17 km long",
        description: "Called 'Töwerland' (Magic Land), completely car-free island.",
        wiki: "https://en.wikipedia.org/wiki/Juist"
    },
    {
        name: "Norderney",
        coords: [53.7067, 7.1800],
        population: "~6,000",
        area: "26.3 km²",
        description: "Germany's oldest seaside resort, established in 1797.",
        wiki: "https://en.wikipedia.org/wiki/Norderney"
    },
    {
        name: "Baltrum",
        coords: [53.7244, 7.3733],
        population: "~500",
        area: "6.5 km²",
        description: "The smallest inhabited island, known as 'Sleeping Beauty'.",
        wiki: "https://en.wikipedia.org/wiki/Baltrum"
    },
    {
        name: "Langeoog",
        coords: [53.7456, 7.4967],
        population: "~1,800",
        area: "19.67 km²",
        description: "Means 'long island' in Low German, famous for its water tower.",
        wiki: "https://en.wikipedia.org/wiki/Langeoog"
    },
    {
        name: "Spiekeroog",
        coords: [53.7675, 7.6967],
        population: "~800",
        area: "18.25 km²",
        description: "Preserves traditional island character with historic buildings.",
        wiki: "https://en.wikipedia.org/wiki/Spiekeroog"
    },
    {
        name: "Wangerooge",
        coords: [53.7925, 7.9017],
        population: "~900",
        area: "7.94 km²",
        description: "The easternmost island with a historic lighthouse from 1856.",
        wiki: "https://en.wikipedia.org/wiki/Wangerooge"
    }
];

// ============================================
// Task 3.1.1 & 3.1.2: Initialize Map with Tile Layer
// ============================================

// Initialize the map centered on East Frisian Islands
const map = L.map('map', {
    center: [53.7, 7.3],
    zoom: 10,
    zoomControl: true
});

// Add OpenStreetMap tile layer (suitable for coastal/island areas)
const baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    minZoom: 5
}).addTo(map);

// Alternative tile layers (commented out, can be uncommented to use)
/*
// Satellite imagery
const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});

// Watercolor style
const watercolorLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>'
});
*/

// ============================================
// Task 3.1.3: Add Scale Control
// ============================================

L.control.scale({
    position: 'bottomleft',
    metric: true,
    imperial: false,
    maxWidth: 200
}).addTo(map);

// ============================================
// Task 3.1.4 & 3.1.5: Create Vector Layer with Features
// ============================================

// Create a layer group for vector features
const vectorLayer = L.layerGroup().addTo(map);

// Add a polygon for the Wadden Sea area FIRST (bottom layer)
const waddenSeaArea = L.polygon([
    [53.4, 6.5],
    [53.4, 8.0],
    [53.9, 8.0],
    [53.9, 6.5]
], {
    color: '#2d5a88',
    fillColor: '#4a90e2',
    fillOpacity: 0.15,
    weight: 2,
    dashArray: '5, 5'
}).bindPopup('<strong>Wadden Sea UNESCO World Heritage Site</strong><br>Protected coastal ecosystem');

// Add click event listener to polygon
waddenSeaArea.on('click', function(e) {
    L.DomEvent.stopPropagation(e); // Prevents map click from firing
    document.getElementById('featureInfo').innerHTML = 
        "<strong>Wadden Sea Area (Polygon)</strong><br>UNESCO World Heritage Site<br>Protected coastal ecosystem";
});

vectorLayer.addLayer(waddenSeaArea);

// Add island markers (Points) - TOP LAYER for easy clicking
islandsData.forEach(island => {
    // Custom icon for islands
    const islandIcon = L.divIcon({
        className: 'custom-island-marker',
        html: `<div style="background-color: #1f3a5f; color: white; padding: 5px 10px; border-radius: 12px; font-size: 11px; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.3); white-space: nowrap;">${island.name}</div>`,
        iconSize: [80, 30],
        iconAnchor: [40, 15]
    });
    
    const marker = L.marker(island.coords, { icon: islandIcon })
        .bindPopup(`
            <h3>${island.name}</h3>
            <p><strong>Population:</strong> ${island.population}</p>
            <p><strong>Area:</strong> ${island.area}</p>
            <p>${island.description}</p>
            <p><a href="${island.wiki}" target="_blank" rel="noopener noreferrer">Learn more on Wikipedia →</a></p>
        `);
    
    // Task 3.2.4: Add click event listener to vector features
    marker.on('click', function(e) {
        L.DomEvent.stopPropagation(e); // Prevents map click from firing
        const info = `
            <strong>${island.name}</strong><br>
            Coordinates: ${island.coords[0].toFixed(4)}°N, ${island.coords[1].toFixed(4)}°E<br>
            ${island.description}
        `;
        document.getElementById('featureInfo').innerHTML = info;
    });
    
    vectorLayer.addLayer(marker);
});

// Add a polyline connecting the islands (Line feature) - MIDDLE LAYER
const islandCoords = islandsData.map(island => island.coords);
const islandPath = L.polyline(islandCoords, {
    color: '#ffd166',
    weight: 3,
    opacity: 0.7,
    dashArray: '10, 10'
}).bindPopup('East Frisian Islands Chain');

// Add click event listener to polyline
islandPath.on('click', function(e) {
    L.DomEvent.stopPropagation(e); // Prevents map click from firing
    document.getElementById('featureInfo').innerHTML = 
        "<strong>Island Chain Polyline</strong><br>Connects all 7 East Frisian Islands";
});

vectorLayer.addLayer(islandPath);

// ============================================
// Task 3.1.4: Add Layer Control to Toggle Vector Layer
// ============================================

const overlayLayers = {
    "Island Markers & Features": vectorLayer
};

L.control.layers(null, overlayLayers, {
    position: 'topright',
    collapsed: false
}).addTo(map);

// ============================================
// Task 3.2.1 & 3.2.2: Map Click Event - Display Coordinates
// ============================================

map.on('click', function(e) {
    const lat = e.latlng.lat.toFixed(5);
    const lng = e.latlng.lng.toFixed(5);
    
    // Update info panel
    document.getElementById('clickCoords').textContent = `${lat}°N, ${lng}°E`;
    
    // Optional: Add a temporary marker at click location
    const clickMarker = L.circleMarker(e.latlng, {
        radius: 6,
        fillColor: "#ffd166",
        color: "#1f3a5f",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);
    
    // Remove the marker after 2 seconds
    setTimeout(() => {
        map.removeLayer(clickMarker);
    }, 2000);
});

// ============================================
// Task 3.2.3: Zoom and Move Events - Display Zoom Level and Bounds
// ============================================

function updateMapInfo() {
    // Update zoom level
    const zoom = map.getZoom();
    document.getElementById('zoomLevel').textContent = zoom;
    
    // Update map bounds (GIS standard: NorthEast and SouthWest corners)
    const bounds = map.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    
    const boundsText = `
        NE: ${ne.lat.toFixed(4)}°N, ${ne.lng.toFixed(4)}°E<br>
        SW: ${sw.lat.toFixed(4)}°N, ${sw.lng.toFixed(4)}°E
    `;
    document.getElementById('mapBounds').innerHTML = boundsText;
}

// Listen to zoom events
map.on('zoomend', updateMapInfo);

// Listen to move events (pan)
map.on('moveend', updateMapInfo);

// Initial update
updateMapInfo();

// Fix potential tile loading issues
setTimeout(() => {
    map.invalidateSize();
}, 100);

// ============================================
// Additional Enhancements
// ============================================

// Add a custom control for resetting view
L.Control.ResetView = L.Control.extend({
    onAdd: function(map) {
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        
        container.innerHTML = '🏠';
        container.style.backgroundColor = 'white';
        container.style.width = '30px';
        container.style.height = '30px';
        container.style.lineHeight = '30px';
        container.style.textAlign = 'center';
        container.style.cursor = 'pointer';
        container.title = 'Reset to default view';
        
        container.onclick = function() {
            map.setView([53.7, 7.3], 10);
        };
        
        return container;
    }
});

L.control.resetView = function(opts) {
    return new L.Control.ResetView(opts);
};

L.control.resetView({ position: 'topleft' }).addTo(map);

// ============================================
// Console Logging for Debugging
// ============================================

console.log('Leaflet map initialized successfully');
console.log('Map center:', map.getCenter());
console.log('Initial zoom:', map.getZoom());
console.log('Islands loaded:', islandsData.length);
console.log('Vector layer features:', vectorLayer.getLayers().length);