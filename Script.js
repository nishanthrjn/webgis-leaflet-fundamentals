/**
 * Exercise 2 - Interactive Features
 * Author: Nishanth Rajan (10050369)
 */

// Get DOM elements
const mainMap = document.getElementById('mainMap');
const islandTitle = document.getElementById('islandTitle');
const islandDescription = document.getElementById('islandDescription');
const mapCaption = document.getElementById('mapCaption');
const infoSection = document.getElementById('infoSection');
const customForm = document.getElementById('customForm');
const resetBtn = document.getElementById('resetBtn');
const customTitle = document.getElementById('customTitle');
const customDesc = document.getElementById('customDesc');

let isCustomActive = false;

// ============================================
// Task 1a: Interactive hover/click updates
// ============================================

function updateContent(islandKey) {
    // Don't update if custom content is active
    if (isCustomActive) return;
    
    const data = islandsData[islandKey] || islandsData.default;
    const worldPic = document.getElementById('worldPic');
    
    // Smooth fade effect
    islandTitle.style.opacity = '0';
    islandDescription.style.opacity = '0';
    mapCaption.style.opacity = '0';
    worldPic.style.opacity = '0';
    
    setTimeout(() => {
        islandTitle.textContent = data.title;
        islandDescription.innerHTML = data.description;
        mapCaption.textContent = data.caption;

        if (data.image) {
            worldPic.src = data.image;
        } else {
            worldPic.src = "assets/East_Frisian_Islands.png";
        }

        worldPic.alt = "Image of " + data.title;
        
        islandTitle.style.opacity = '1';
        islandDescription.style.opacity = '1';
        mapCaption.style.opacity = '1';
        worldPic.style.opacity = '1';
    }, 150);
}

// Set up hover interactions
const areas = document.querySelectorAll('area');
areas.forEach(area => {
    const island = area.getAttribute('data-island');
    
    // Hover - show island info
    area.addEventListener('mouseenter', () => {
        updateContent(island);
    });
    
    // Click - update info and open link
    area.addEventListener('click', (e) => {
        updateContent(island);
    });
});

// Reset to default when mouse leaves map
mainMap.addEventListener('mouseleave', () => {
    if (!isCustomActive) {
        updateContent('default');
    }
});

// ============================================
// Task 1b: User input form
// ============================================

customForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = customTitle.value.trim();
    const desc = customDesc.value.trim();
    
    if (!title && !desc) {
        alert('Please enter a title or description.');
        return;
    }
    
    isCustomActive = true;
    infoSection.classList.add('custom-active');
    
    // Update display
    islandTitle.style.opacity = '0';
    islandDescription.style.opacity = '0';
    mapCaption.style.opacity = '0';
    
    setTimeout(() => {
        // Update title if provided
        if (title) {
            islandTitle.textContent = title;
        }
        
        // Update description if provided
        if (desc) {
            // Handle line breaks - convert to paragraphs
            const paragraphs = desc.split('\n\n').filter(p => p.trim());
            if (paragraphs.length > 0) {
                islandDescription.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
                document.getElementById('worldPic').src = "assets/default_overview.png"; 
                mapCaption.textContent = 'Custom Content Displayed';
            } else {
                islandDescription.innerHTML = `<p>${desc}</p>`;
            }
        }
        
        // Update caption
        mapCaption.textContent = 'Custom Content Displayed';
        
        islandTitle.style.opacity = '1';
        islandDescription.style.opacity = '1';
        mapCaption.style.opacity = '1';
    }, 150);
});

// Reset button
resetBtn.addEventListener('click', () => {
    customTitle.value = '';
    customDesc.value = '';
    isCustomActive = false;
    infoSection.classList.remove('custom-active');
    updateContent('default');
});

// ============================================
// Task 2: Map Scaling Logic (Manual Engineering)
// ============================================

// CRITICAL: These MUST match the coordinates provided in the assignment hint
const MASTER_WIDTH = 1495;
const MASTER_HEIGHT = 998;

function storeOriginalCoords() {
    document.querySelectorAll("area").forEach(area => {
        // Only store them if we haven't already
        if (!area.dataset.originalCoords) {
            area.dataset.originalCoords = area.coords;
        }
    });
}

function resizeMapAreas() {
    const img = document.getElementById("mainMap");
    if (!img.clientWidth) return; // Prevent division by zero

    const widthRatio = img.clientWidth / MASTER_WIDTH;
    const heightRatio = img.clientHeight / MASTER_HEIGHT;

    document.querySelectorAll("area").forEach(area => {
        const original = area.dataset.originalCoords.split(",").map(Number);
        const scaled = original.map((coord, index) => {
            // Even index = X coordinate, Odd index = Y coordinate
            return Math.round(coord * (index % 2 === 0 ? widthRatio : heightRatio));
        });
        area.coords = scaled.join(",");
    });
}

// THE MISSING LINK: You must call the functions!
document.addEventListener("DOMContentLoaded", () => {
    storeOriginalCoords();
    
    // Initial scale check
    if (mainMap.complete) {
        resizeMapAreas();
    } else {
        mainMap.onload = resizeMapAreas;
    }
    
    // Update on every window resize
    window.addEventListener("resize", resizeMapAreas);
});