export default class Drone {
    constructor(startCity, endCity, icon, speed = 5000) {
        this.startCity = startCity;
        this.endCity = endCity;
        this.speed = speed;
        this.icon = icon;
    }

    init(map, comeback = true) {
        let points = [this.startCity.getLatLng(), this.endCity.getLatLng()]

        if(comeback)
        {
            points.push(this.startCity.getLatLng())
        }

        // Calcul de la vitesse
        const duration = (this.startCity.getLatLng().distanceTo(this.endCity.getLatLng()) / 1000) / this.speed;

        this.marker = L.Marker.movingMarker(points, duration * 360000, { icon : this.icon, zIndexOffset : 1000 }).addTo(map)
        this.marker.start();
    }
}