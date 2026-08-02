const hotels = [
  {
    id: "forsthofgut",
    name: "Naturhotel Forsthofgut",
    area: "Leogang · Salzburg",
    address: "Hütten 2, 5771 Leogang",
    locationRead: "Saalfelden–Leogang / Saalbach orbit",
    lat: 47.4396558,
    lng: 12.7156898,
    website: "https://www.forsthofgut.at/",
  },
  {
    id: "moargut",
    name: "Familien Natur Resort Moar Gut",
    area: "Großarl · Salzburg",
    address: "Moargasse 22, 5611 Großarl",
    locationRead: "Southern, more rural end of the Großarl pair",
    lat: 47.2134383,
    lng: 13.1936141,
    website: "https://www.moargut.com/",
  },
  {
    id: "edelweiss",
    name: "DAS EDELWEISS Salzburg Mountain Resort",
    area: "Großarl · Salzburg",
    address: "Unterbergstraße 65, 5611 Großarl",
    locationRead: "Main village and lift-zone end of the Großarl pair",
    lat: 47.2426454,
    lng: 13.1948027,
    website: "https://www.edelweiss-grossarl.com/en/",
  },
  {
    id: "habachklause",
    name: "Habachklause Familien Bauernhof Resort",
    area: "Bramberg am Wildkogel · Salzburg",
    address: "Habach 17, 5733 Bramberg am Wildkogel",
    locationRead: "Oberpinzgau and the entrance to Habachtal",
    lat: 47.2465206,
    lng: 12.3210542,
    website: "https://www.habachklause.com/de/",
  },
  {
    id: "stanglwirt",
    name: "Bio- und Wellnessresort Stanglwirt",
    area: "Going am Wilden Kaiser · Tyrol",
    address: "Kaiserweg 1, 6353 Going am Wilden Kaiser",
    locationRead: "Wilder Kaiser / Kitzbühel orbit",
    lat: 47.5156787,
    lng: 12.3437818,
    website: "https://www.stanglwirt.com/",
  },
];

const map = L.map("map", {
  scrollWheelZoom: false,
  minZoom: 7,
}).setView([47.34, 12.77], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.control.scale({ imperial: false, position: "bottomleft" }).addTo(map);

const hotelList = document.querySelector("#hotel-list");
const bounds = L.latLngBounds(hotels.map((hotel) => [hotel.lat, hotel.lng]));
const markers = new Map();

const markerIcon = (number) =>
  L.divIcon({
    className: "",
    html: `<div class="hotel-marker"><span>${number}</span></div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -33],
  });

const mapsUrl = (hotel) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hotel.lat},${hotel.lng}`)}`;

hotels.forEach((hotel, index) => {
  const marker = L.marker([hotel.lat, hotel.lng], { icon: markerIcon(index + 1) }).addTo(map);
  marker.bindPopup(`
    <article class="popup-copy">
      <span class="popup-kicker">${String(index + 1).padStart(2, "0")} · ${hotel.area}</span>
      <h3>${hotel.name}</h3>
      <p>${hotel.address}<br />${hotel.locationRead}</p>
      <div class="popup-actions">
        <a href="${hotel.website}" target="_blank" rel="noreferrer">Hotel site ↗</a>
        <a href="${mapsUrl(hotel)}" target="_blank" rel="noreferrer">Directions ↗</a>
      </div>
    </article>
  `);
  marker.on("click", () => setActive(hotel.id));
  markers.set(hotel.id, marker);
});

const moarGut = hotels.find((hotel) => hotel.id === "moargut");
const edelweiss = hotels.find((hotel) => hotel.id === "edelweiss");

L.polyline(
  [
    [moarGut.lat, moarGut.lng],
    [edelweiss.lat, edelweiss.lng],
  ],
  {
    color: "#ad5e3e",
    weight: 3,
    opacity: 0.8,
    dashArray: "8 8",
  },
).addTo(map);

hotelList.innerHTML = hotels
  .map(
    (hotel, index) => `
      <button class="hotel-card" type="button" data-hotel="${hotel.id}">
        <span class="hotel-number">${String(index + 1).padStart(2, "0")}</span>
        <span>
          <strong>${hotel.name}</strong>
          <span>${hotel.area}</span>
          <small>${hotel.locationRead}</small>
        </span>
      </button>
    `,
  )
  .join("");

function setActive(hotelId) {
  document.querySelectorAll(".hotel-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.hotel === hotelId);
  });
}

function focusHotel(hotelId) {
  const hotel = hotels.find((item) => item.id === hotelId);
  const marker = markers.get(hotelId);
  if (!hotel || !marker) return;

  setActive(hotelId);
  map.setView([hotel.lat, hotel.lng], 12, { animate: true });
  marker.openPopup();
}

hotelList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-hotel]");
  if (card) focusHotel(card.dataset.hotel);
});

document.querySelector("#fit-all").addEventListener("click", () => {
  setActive("");
  map.fitBounds(bounds, { padding: [48, 48] });
});

window.addEventListener("resize", () => map.invalidateSize());

map.fitBounds(bounds, { padding: [48, 48] });
