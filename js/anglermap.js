//Map Generation ------------------------------------------------------------------------------------
let mapMinZoom = 1;
let mapMaxZoom = 4;

let southWest = L.latLng(-300, -100),
    northEast = L.latLng(50, 300),
    bounds = L.latLngBounds(southWest, northEast);

let map = L.map('map', {
    maxZoom: mapMaxZoom,
    minZoom: mapMinZoom,
    maxBounds: bounds,
    attributionControl: false,
    zoomControl: false,
    crs: L.CRS.Simple
})

let mapBounds = new L.LatLngBounds( // ?
    map.unproject([0, 16384], mapMaxZoom),
    map.unproject([16384, 0], mapMaxZoom));

map.fitBounds(mapBounds);

// const SilverStrand = [
//     [75.672197, -176.484375],
//     [78.630006, -163.828125],
//     [79.624056, -149.765625],
//     [79.687184, -140.449219],
//     [74.959392, -99.667969],
//     [52.375599, -52.558594],
//     [42.163403, -66.269531],
//     [25.799891, -45.351562],
//     [7.710992, -50.625],
//     [4.740675, -55.722656],
//     [-33.870416, -62.929688],
//     [-39.232253, -82.265625],
//     [-42.163403, -85.253906],
//     [-45.336702, -60.644531],
//     [-48.458352, -58.710938],
//     [-73.627789, -92.109375],
//     [-75.364506, -110.566406],
//     [-72.448792, -120.9375],
// ]

// var polyline = L.polyline(SilverStrand, { color: 'red' }).addTo(map);

// zoom the map to the polyline


L.tileLayer('https://www.anglermap.fr/map/{z}/{x}/{y}.png', {
    minZoom: 1,
    maxZoom: 5,
    tms: false,
    noWrap: true
}).addTo(map);

map.addControl(L.control.zoom({ // Add zoom controller to top-right.
    position: 'bottomright'
}));

map.setView(new L.LatLng(-125, 125), 2); // Set view to centre(ish) of map.

const blueGillLayer = L.layerGroup()
const catfishLayer = L.layerGroup()
const pikeLayer = L.layerGroup()
const goldenTroutLayer = L.layerGroup()
const kokaneeSalmonLayer = L.layerGroup()
const lakeTroutLayer = L.layerGroup()
const largemouthBassLayer = L.layerGroup()
const mountainWhitefishLayer = L.layerGroup()
const rainbowTroutLayer = L.layerGroup()
const saugerLayer = L.layerGroup()
const smallmouthBassLayer = L.layerGroup()
const yellowPerchLayer = L.layerGroup()

//Map Markers -------------------------------------------------------------------------------------
let fishIcon = L.icon({
    iconUrl: '../img/marker.png',
    iconSize: [50, 50],
});

//Markers -----------------------------------------------------------------------------------------
let markersList = {
    "Blue Gill": [
        // {
        //     "lat": 40.123456,
        //     "lng": -90.123456,
        //     "popup": "Blue Gill",
        //     "isDiamond": false,
        //     "layer": blueGillLayer
        // },
        // {
        //     "lat": -80.123456,
        //     "lng": 40.123456,
        //     "popup": "Blue Gill",
        //     "isDiamond": true,
        //     "layer": blueGillLayer

        // }
    ],
    "Catfish": [
        // {
        //     "lat": -24.607069,
        //     "lng": 129.375,
        //     "popup": "Catfish",
        //     "isDiamond": true,
        //     "layer": catfishLayer
        // },
        {
            "lat": -147.125,
            "lng": 218.375,
            "popup": "Catfish <br> Baitcasting / Frog 1 <br> Speed x1 - lunched : Max <br> <a href='/img/catfish.png'> Image </a>",
            "isDiamond": true,
            "layer": catfishLayer
        }
    ],
    "Golden Trout": [
        // {
        //     "lat": 10,
        //     "lng": 32,
        //     "popup": "Golden Trout",
        //     "isDiamond": false,
        //     "layer": goldenTroutLayer
        // },
        // {
        //     "lat": 18.123456,
        //     "lng": -8.123456,
        //     "popup": "Golder Trout",
        //     "isDiamond": false,
        //     "layer": goldenTroutLayer
        // }
    ],
    "Kokanee Salmon": [
        // {
        //     "lat": -80,
        //     "lng": -90.123456,
        //     "popup": "Kokanee Salmon",
        //     "isDiamond": false,
        //     "layer": kokaneeSalmonLayer
        // },
        // {
        //     "lat": 90,
        //     "lng": 80.123456,
        //     "popup": "Kokanee Salmon",
        //     "isDiamond": false,
        //     "layer": kokaneeSalmonLayer
        // }
    ],
    "Lake Trout": [
        {
            "lat": -96.25,
            "lng": 32.375,
            "popup": "Lake Trout <br> Baitcasting / Grub  <br> Jigging - depth : Max <br> <a class='pic' href='/img/laketrout/laketrout3.jpg'> Image1 </a> <a class='pic' href='/img/laketrout/laketrout1.jpg'> Image2 </a> <a class='pic' href='/img/laketrout/laketrout4.jpg'> Image3 </a>",
            "isDiamond": true,
            "layer": lakeTroutLayer
        },
        {
            "lat": -189.375,
            "lng": 60.875,
            "popup": "Lake Trout <br> baitcasting / Swimbait",
            "isDiamond": true,
            "layer": lakeTroutLayer
        }
    ],
    "Largemouth Bass": [
        {
            "lat": -168.3125,
            "lng": 221.875,
            "popup": "Largemouth Bass <br> Float fishing- minnow",
            "isDiamond": true,
            "layer": largemouthBassLayer
        },
        // {
        //     "lat": 45.89654,
        //     "lng": 12.89654,
        //     "popup": "Largemouth Bass",
        //     "isDiamond": false,
        //     "layer": largemouthBassLayer
        // }
    ],
    "Mountain Whitefish": [
        // {
        //     "lat": 56.89654,
        //     "lng": -95.89654,
        //     "popup": "Mountain Whitefish",
        //     "isDiamond": false,
        //     "layer": mountainWhitefishLayer
        // },
        // {
        //     "lat": -28.89654,
        //     "lng": 74.89654,
        //     "popup": "Mountain Whitefish",
        //     "isDiamond": false,
        //     "layer": mountainWhitefishLayer
        // }
    ],
    "Pike": [
        {
            "lat": -96.25,
            "lng": 87.5,
            "popup": "Pike",
            "isDiamond": true,
            "layer": pikeLayer
        },
        // {
        //     "lat": 25,
        //     "lng": 50,
        //     "popup": "Pike",
        //     "isDiamond": true,
        //     "layer": pikeLayer
        // }
    ],
    "Rainbow Trout": [
        {
            'lat': -74.5625,
            'lng': 119.75,
            'popup': 'Rainbow Trout',
            'isDiamond': true,
            'layer': rainbowTroutLayer
        },
        {
            'lat': -191.5,
            'lng': 83.25,
            'popup': 'Rainbow Trout <br> Baitcasting - turning 5',
            'isDiamond': true,
            'layer': rainbowTroutLayer
        }
    ],
    "Sauger": [
        {
            'lat': -167,
            'lng': 217.875,
            'popup': 'Sauger <br> Float fishing- minnow',
            'isDiamond': true,
            'layer': saugerLayer
        },
        {
            'lat': -169.3125,
            'lng': 220.6875,
            'popup': 'Sauger <br> Float fishing- minnow',
            'isDiamond': true,
            'layer': saugerLayer
        },
        {
            'lat': -106.3125,
            'lng': 224.75,
            'popup': 'Sauger <br> Baitcasting - spinner size 7',
            'isDiamond': true,
            'layer': saugerLayer
        },

    ],
    "Smallmouth Bass": [
        // {
        //     'lat': -28.465219,
        //     'lng': -91.123456,
        //     'popup': 'Smallmouth Bass',
        //     'isDiamond': false,
        //     'layer': smallmouthBassLayer
        // },
        // {
        //     'lat': -84.465219,
        //     'lng': -26.123456,
        //     'popup': 'Smallmouth Bass',
        //     'isDiamond': false,
        //     'layer': smallmouthBassLayer
        // }
    ],
    "Yellow Perch": [
        // {
        //     'lat': 42.417954,
        //     'lng': -71.123456,
        //     'popup': 'Yellow Perch',
        //     'isDiamond': false,
        //     'layer': yellowPerchLayer
        // }
    ]
}

const displayLayer = (fish, button) => {
    switch (map.hasLayer(fish)) {
        case true:
            map.removeLayer(fish)
            console.log('removed')
            break;
        case false:
            map.addLayer(fish)
            console.log("Layer added")
            break;
    }
}

for (let fish in markersList) {
    for (let marker of markersList[fish]) {
        if (marker.isDiamond) {
            L.marker([marker.lat, marker.lng], { icon: fishIcon }).bindPopup(marker.popup).addTo(marker.layer)
        }
    }
}

document.addEventListener('click', function handleClick(e) {
    let target = e.target;
    switch (target.id) {
        case 'blueGill':
            console.log(blueGillLayer)
            displayLayer(blueGillLayer)
            break;
        case 'catfish':
            displayLayer(catfishLayer)
            break;
        case 'goldenTrout':
            displayLayer(goldenTroutLayer)
            break;
        case 'kokaneeSalmon':
            displayLayer(kokaneeSalmonLayer)
            break;
        case 'lakeTrout':
            displayLayer(lakeTroutLayer)
            break;
        case 'rainbowTrout':
            displayLayer(rainbowTroutLayer)
            break;
        case 'smallmouthBass':
            displayLayer(smallmouthBassLayer)
            break;
        case 'yellowPerch':
            displayLayer(yellowPerchLayer)
            break;
        case 'mountainWhitefish':
            displayLayer(mountainWhitefishLayer)
            break;
        case 'pike':
            displayLayer(pikeLayer)
            break;
        case 'sauger':
            displayLayer(saugerLayer)
            break;
        case 'largemouthBass':
            displayLayer(largemouthBassLayer)
            break;
        default:
            return;
    }
});

// add selected class when a button is clicked
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', function () {
        button.classList.toggle('selected')
    })
})


let displayCoords = false
function toggleCoord() {
    let plus = document.getElementById('plustoggle');
    plus.classList.toggle("mystyle");

    let active = document.getElementById('activecoord');
    active.classList.toggle("test");



    displayCoords = !displayCoords;

}

var popup = L.popup();
function onMapClick(e) {
    if (displayCoords === true) {
        popup
            .setLatLng(e.latlng)
            .setContent(e.latlng.toString())
            .openOn(map);
    }
}
map.on('click', onMapClick);

