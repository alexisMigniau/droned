import City from "./City.js";
import Drone from "./Drone.js";

document.addEventListener("DOMContentLoaded", () => {
    init()
});

// Initialisation de la carte et de tous les objets
function init() {

    // Carte
    var map = L.map('map').setView([46.91507, 2.9323614], 7);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10,
        minZoom : 6,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Villes
    var citys = [];
    citys.push(new City('Paris', 48.866667 , 2.333333))
    citys.push(new City('Marseille', 43.300000 , 5.400000))

    citys.forEach(city => {
       city.setMarker(map) 
    });

    // Drones
    var drones = [];
    drones.push(new Drone(citys[0], citys[1]))

    drones.forEach(drone => {
        drone.init(map)
    })
}