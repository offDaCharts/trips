const config = window.ROUTE_CONFIG;

const map = L.map("route-map", {
  scrollWheelZoom: false,
  zoomControl: true,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const bounds = [];
config.stops.forEach((stop, index) => {
  bounds.push([stop.lat, stop.lng]);
  const icon = L.divIcon({
    className: "leaflet-div-icon",
    html: `<span class="map-marker">${index + 1}</span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
  L.marker([stop.lat, stop.lng], { icon })
    .bindPopup(`<strong>${stop.name}</strong><br>${stop.note}`)
    .addTo(map);
});

L.polyline(config.outbound, {
  color: "#a85f43",
  weight: 4,
  opacity: 0.85,
}).addTo(map);

if (config.returnRoute) {
  L.polyline(config.returnRoute, {
    color: "#203d31",
    weight: 3,
    opacity: 0.7,
    dashArray: "8 8",
  }).addTo(map);
}

map.fitBounds(bounds, { padding: [34, 34] });
