function ResponsiveMap() {
    var x = document.forms["submitform"]["form1"].value;
    document.getElementsByTagName("p")[0];
    if (x == "Europe" || x =="europe") {
		Europe();}
    else if (x == "Asia" || x == "asia") {
		Asia();}
    else if (x == "North America" || x=="north america") {
		NorthAmerica();}
    else if (x == "Africa" || x=="africa") {
		Africa();}
    else if (x == "South America" || x =="south america") {
		SouthAmerica();}
    else if (x == "Australia" || x=="australia") {
		Australia();}
    else if (x == "Antarctica" || x=="antarctica") {
		Antartica();}
    else {
		document.innerHTML = "Invalid Input";}
    }
function showoriginal(){
	document.getElementsByTagName("p")[0];
	document.getElementById("Map").src="World.png";
}
function NorthAmerica(){
    document.getElementById("Map"). src="World-NA.png";
    document.getElementsByTagName("p")[0].innerHTML = "North America is a continent in the Northern Hemisphere and almost entirely within the Western Hemisphere. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean. Because it is on the North American Tectonic Plate, Greenland is included as a part of North America geographically.<a href='https://en.wikipedia.org/wiki/North_America' target='new'> Wikipedia </a>";}
function SouthAmerica(){
    document.getElementById("Map").src = "World-SA.png";
    document.getElementsByTagName("p")[0].innerHTML = "South America is a continent entirely in the Western Hemisphere and mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere at the northern tip of the continent. It can also be described as the southern subregion of a single continent called America. South America has an area of 17,840,000 square kilometers (6,890,000 sq mi). Its population as of 2021 has been estimated at more than 434 million. South America is bordered on the west by the Pacific Ocean and on the north and east by the Atlantic Ocean; North America and the Caribbean Sea lie to the northwest. <a href='https://en.wikipedia.org/wiki/South_America' target='new'> Wikipedia </a>";}
function Africa(){
    document.getElementById("Map").src = "World-AF.png";
    document.getElementsByTagName("p")[0].innerHTML = "Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.4 billion people as of 2021, it accounts for about 18% of the world's human population. Africa's population is the youngest amongst all the continents; the median age in 2012 was 19.7, when the worldwide median age was 30.4. Despite a wide range of natural resources, Africa is the least wealthy continent per capita and second-least wealthy by total wealth, behind Oceania. Scholars have attributed this to different factors including geography, climate, tribalism, colonialism, the Cold War, neocolonialism, lack of democracy, and corruption. Despite this low concentration of wealth, recent economic expansion and the large and young population make Africa an important economic market in the broader global context.<a href='https://en.wikipedia.org/wiki/Africa' target='new'> Wikipedia </a>";}
function Europe(){
    document.getElementById("Map").src = "World-EU.png";
    document.getElementsByTagName("p")[0].innerHTML = "Europe is a landmass conventionally considered a continent in its own right because of its great physical size and the weight of its history and traditions. Europe is also a subcontinent of Eurasia and it's located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Comprising the westernmost peninsulas of Eurasia, it shares the continental landmass of Afro-Eurasia with both Africa and Asia. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south and Asia to the east. Europe is commonly considered to be separated from Asia by the watershed of the Ural Mountains, the Ural River, the Caspian Sea, the Greater Caucasus, the Black Sea and the waterways of the Turkish Straits. <a href='https://en.wikipedia.org/wiki/Europe' target='new'> Wikipedia </a>";}
function Asia(){
    document.getElementById("Map").src = "World-AS.png";
    document.getElementsByTagName("p")[0].innerHTML = "Asia is a landmass, which is either considered a continent in its own right or a subcontinent of Eurasia, which shares the continental landmass of Afro-Eurasia with Africa. Asia covers an area of 44,579,000 square kilometres (17,212,000 sq mi), about 30% of Earth's total land area and 8.7% of the Earth's total surface area. The continent, which has long been home to the majority of the human population, was the site of many of the first civilizations. Its 4.7 billion people constitute roughly 60% of the world's population.<a href='https://en.wikipedia.org/wiki/Asia' target='new'> Wikipedia </a>";}
function Antartica(){
    document.getElementById("Map").src = "World-AN.png";
    document.getElementsByTagName("p")[0].innerHTML = "Antarctica is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean, it contains the geographic South Pole. Antarctica is the fifth-largest continent, being about 40% larger than Europe, and has an area of 14,200,000 km2 (5,500,000 sq mi). Most of Antarctica is covered by the Antarctic ice sheet, with an average thickness of 1.9 km (1.2 mi).<a href='https://en.wikipedia.org/wiki/Antarctica' target='new'> Wikipedia </a>";}
function Australia(){
    document.getElementById("Map").src = "World-AU.png";
    document.getElementsByTagName("p")[0].innerHTML ="The continent of Australia, sometimes known in technical contexts by the names Sahul, Australia-New Guinea, Australinea, Meganesia, or Papualand to distinguish it from the country of Australia, is located within the Southern and Eastern hemispheres. The name Sahul takes its name from the Sahul Shelf, which is a part of the continental shelf of the Australian continent. The continent includes mainland Australia, Tasmania, the island of New Guinea (Papua New Guinea and Indonesian West Papua), the Aru Islands, the Ashmore and Cartier Islands, most of the Coral Sea Islands, and some other nearby islands. Situated in the geographical region of Oceania, Australia is the smallest of the seven traditional continents. <a href='https://en.wikipedia.org/wiki/Australia_(continent)' target='new'> Wikipedia </a>";}

function ImageMapResize(){
  window.onresize = function () {
    var ImageMap = function (Map) {
    var n,
    areas = Map.getElementsById('boundary'),
    len = areas.length,
    coords = [],
    previousWidth = 1498;
for (n = 0; n < len; n++) {
    coords[n] = areas[n].coords.split(',');
}
this.onresize = function () {
    var n, m, clen,
        x = document.body.clientWidth / previousWidth;
    for (n = 0; n < len; n++) {
        clen = coords[n].length;
        for (m = 0; m < clen; m++) {
            coords[n][m] *= x;
        }
        areas[n].coords = coords[n].join(',');
    }
    previousWidth = document.body.clientWidth;
};
window.onresize = this.onresize;
}
ImageMap = new ImageMap(document.getElementById('Map'));
ImageMap.ImageMapResize();
return;
}
}
