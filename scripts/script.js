
function myFunction() {
    
    var x = document.forms["myForm"]["fname"].value;
    const element = document.getElementById("map");
    if (x == "Europe" || x =="europe") {
      myFunction6();
      
   }
    else if (x == "Asia" || x == "asia") {
        myFunction7();
        
    }
    else if (x == "North America" || x=="north america") {
    myFunction2();
    
    }
    else if (x == "Africa" || x=="africa") {
    myFunction5();
    
    }
    else if (x == "South America" || x =="south america") {
    myFunction4();
    
    }
    else if (x == "Australia" || x=="australia") {
       myFunction8();
       
    }
    else if (x == "Antarctica" || x=="antarctica") {
        myFunction3();
       
    }
    else
    {
        element.innerHTML = "Provide a valid imput";
    }
    
  }

  function myFunction2(){
    document.getElementById("myImg").src = "World-NA.png";
    const element = document.getElementById("map");
    element.innerHTML = "North America is a continent in the Northern Hemisphere and almost entirely within the Western Hemisphere. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean. Because it is on the North American Tectonic Plate, Greenland is included as a part of North America geographically.[Wikipedia]";
  resize();
  }
  function myFunction3(){
    document.getElementById("myImg").src = "World-AN.png";
    const element = document.getElementById("map");
    element.innerHTML = "Antarctica is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean, it contains the geographic South Pole. Antarctica is the fifth-largest continent, being about 40% larger than Europe, and has an area of 14,200,000 km2 (5,500,000 sq mi). Most of Antarctica is covered by the Antarctic ice sheet, with an average thickness of 1.9 km (1.2 mi).[Wikipedia]";
    resize();
  }
  function myFunction4(){
    document.getElementById("myImg").src = "World-SA.png";
    const element = document.getElementById("map");
    element.innerHTML = "South America is bordered on the west by the Pacific Ocean and on the north and east by the Atlantic Ocean; North America and the Caribbean Sea lie to the northwest. The continent generally includes twelve sovereign states: Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname, Uruguay, and Venezuela; two dependent territories: the Falkland Islands and South Georgia and the South Sandwich Islands; and one internal territory: French Guiana. In addition, the ABC islands of the Kingdom of the Netherlands, Ascension Island (dependency of Saint Helena, Ascension and Tristan da Cunha, a British Overseas Territory), Bouvet Island (dependency of Norway), Panama, and Trinidad and Tobago may also be considered parts of South America.[Wikipedia]";
    resize();
  }
  function myFunction5(){
    document.getElementById("myImg").src = "World-AF.png";
    const element = document.getElementById("map");
    element.innerHTML = "Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.4 billion people as of 2021, it accounts for about 18% of the world's human population. Africa's population is the youngest amongst all the continents; the median age in 2012 was 19.7, when the worldwide median age was 30.4. Despite a wide range of natural resources, Africa is the least wealthy continent per capita and second-least wealthy by total wealth, behind Oceania. Scholars have attributed this to different factors including geography, climate, tribalism, colonialism, the Cold War, neocolonialism, lack of democracy, and corruption. Despite this low concentration of wealth, recent economic expansion and the large and young population make Africa an important economic market in the broader global context.[Wikipedia]";
    resize();
  }
  function myFunction6(){
    document.getElementById("myImg").src = "World-EU.png";
    const element = document.getElementById("map");
    element.innerHTML = "Europe is a landmass conventionally considered a continent in its own right because of its great physical size and the weight of its history and traditions. Europe is also a subcontinent of Eurasia and it's located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Comprising the westernmost peninsulas of Eurasia, it shares the continental landmass of Afro-Eurasia with both Africa and Asia. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south and Asia to the east. Europe is commonly considered to be separated from Asia by the watershed of the Ural Mountains, the Ural River, the Caspian Sea, the Greater Caucasus, the Black Sea and the waterways of the Turkish Straits. [Wikipedia]";
    resize();
  }
  function myFunction7(){
    document.getElementById("myImg").src = "World-AS.png";
    const element = document.getElementById("map");
    element.innerHTML = "Asia is a landmass, which is either considered a continent in its own right or a subcontinent of Eurasia, which shares the continental landmass of Afro-Eurasia with Africa. Asia covers an area of 44,579,000 square kilometres (17,212,000 sq mi), about 30% of Earth's total land area and 8.7% of the Earth's total surface area. The continent, which has long been home to the majority of the human population, was the site of many of the first civilizations. Its 4.7 billion people constitute roughly 60% of the world's population.[Wikipedia]";
    resize();
  }
  function myFunction8(){
    document.getElementById("myImg").src = "World-AU.png";
    const element = document.getElementById("map");
    element.innerHTML ="Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. With an area of 7,617,930 square kilometres (2,941,300 sq mi), Australia is the largest country by area in Oceania and the world's sixth-largest country. Australia is the oldest, flattest, and driest inhabited continent, with the least fertile soils. It is a megadiverse country, and its size gives it a wide variety of landscapes and climates, with deserts in the centre, tropical rainforests in the north-east, and mountain ranges in the south-east.[Wikipedia]";
    resize();
  }

function resize()
{
  window.onresize = function () {
    var ImageMap = function (continents) {
    var n,
    areas = continents.getElementsByTagName('area'),
    len = areas.length,
    coords = [],
    previousWidth = 1424;
for (n = 0; n < len; n++) {
    coords[n] = areas[n].coords.split(',');
}
this.resize = function () {
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
    console.log(previousWidth);
    return true;
};
window.onresize = this.resize;
}
imageMap = new ImageMap(document.getElementById('myImg'));
imageMap.resize();
return;
}
}