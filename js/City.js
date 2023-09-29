export default class City {
    constructor(name, lat, lng) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }

    // Ajoute le marqueur sur la carte
    setMarker(map) {
        this.marker = L.marker([this.lat, this.lng], {
            'title' : this.name
        }).addTo(map)
    }

    // Format tableau avec lat et lng
    getLatLng() {
        return L.latLng(this.lat, this.lng)
    }
}