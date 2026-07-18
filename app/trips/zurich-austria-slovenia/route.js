const routeModes = {
  full: {
    endAirport: "VCE · Venice",
    note: "Best scenery-to-logistics ratio · one airport buffer night",
    description:
      "The full route moves east and south: urban reset, western peaks, Austrian lake country, then the Julian Alps. The only deliberate pause is the Venice airport night before the flight home.",
    distance: "≈ 1,250 km",
    days: [
      ["Overnight", "ATL → Zürich", "Let the overnight flight do the first long move.", "In flight", "travel"],
      ["Zürich", "Lakefront reset", "Limmat River, old town, early dinner, and a real night of sleep.", "Zürich · 1 night", ""],
      ["East Switzerland", "Appenzell → Vaduz", "Pastures and painted houses, then a tiny-country lunch en route.", "Brand · 2 nights", "travel"],
      ["Vorarlberg", "Lünersee", "Cable car up; easy lakeshore miles; a huge first alpine reveal.", "Brand", "highlight"],
      ["Tyrol", "Innsbruck transfer", "Break the drive with old town and Nordkette views before Gosau.", "Gosau · 4 nights", "travel"],
      ["Salzkammergut", "Hallstatt at dawn", "Arrive before the buses, then leave room for a lakeside nap.", "Gosau", ""],
      ["Dachstein", "Gosausee slow day", "Flat shoreline, glacier reflections, and no need to over-program it.", "Gosau", "highlight"],
      ["Lake country", "Wolfgangsee + Salzburg", "Schafberg if skies are clear; Salzburg lanes if they are not.", "Gosau", ""],
      ["Austria → Slovenia", "Salzburg → Kranjska", "Two and a half scenic hours into the sharper Julian Alps.", "Kranjska Gora · 2 nights", "travel"],
      ["Julian Alps", "Jasna + Zelenci", "A gentle lake-and-springs day with room to reset outdoors.", "Kranjska Gora", ""],
      ["The wild line", "Vršič → Soča", "Cross the pass once, trace the turquoise river, and continue to Bled.", "Bled · 2 nights", "highlight"],
      ["Slovenia icon", "Lake Bled", "Island boat, castle views, cream cake, and the easy lake loop.", "Bled", ""],
      ["Quiet finale", "Bohinj → Venice", "Morning at the quieter lake, then cross to a protected airport night.", "VCE airport · 1 night", "travel"],
      ["Open-jaw home", "Venice → ATL", "Drop the car the night before and keep departure morning simple.", "Fly home", ""]
    ],
    points: [
      { name: "Zürich", country: "Switzerland", lat: 47.3769, lon: 8.5417, airport: true },
      { name: "Appenzell", country: "Switzerland", lat: 47.331, lon: 9.4099 },
      { name: "Vaduz", country: "Liechtenstein", lat: 47.141, lon: 9.5215 },
      { name: "Brand / Lünersee", country: "Austria", lat: 47.104, lon: 9.742 },
      { name: "Innsbruck", country: "Austria", lat: 47.2692, lon: 11.4041 },
      { name: "Gosau", country: "Austria", lat: 47.584, lon: 13.534 },
      { name: "Salzburg", country: "Austria", lat: 47.8095, lon: 13.055 },
      { name: "Kranjska Gora", country: "Slovenia", lat: 46.4854, lon: 13.7854 },
      { name: "Vršič Pass", country: "Slovenia", lat: 46.4329, lon: 13.7436 },
      { name: "Soča / Bovec", country: "Slovenia", lat: 46.3376, lon: 13.5527 },
      { name: "Lake Bled", country: "Slovenia", lat: 46.3692, lon: 14.1136 },
      { name: "Lake Bohinj", country: "Slovenia", lat: 46.276, lon: 13.889 },
      { name: "Venice Airport", country: "Italy", lat: 45.5053, lon: 12.3519, airport: true }
    ]
  },
  austria: {
    endAirport: "MUC · Munich",
    note: "Three fewer days · simpler rental · no Slovenia chapter",
    description:
      "The shorter version keeps the same western start, adds a slower Tyrol base, and turns north after Salzburg for Munich. It is easier—but gives up the Soča-to-Bled finale.",
    distance: "≈ 795 km",
    days: [
      ["Overnight", "ATL → Zürich", "Start with the same open-jaw flight into Switzerland.", "In flight", "travel"],
      ["Zürich", "Lakefront reset", "Limmat River, old town, early dinner, and sleep.", "Zürich · 1 night", ""],
      ["East Switzerland", "Appenzell → Vaduz", "Pastures, painted houses, and a Liechtenstein lunch.", "Brand · 2 nights", "travel"],
      ["Vorarlberg", "Lünersee", "The cable-car lake day that makes the western detour worthwhile.", "Brand", "highlight"],
      ["Tyrol", "Innsbruck", "Old town and Nordkette, then settle under the Wilder Kaiser.", "Wilder Kaiser · 2 nights", "travel"],
      ["Tyrol", "Farm + spa reset", "Horses, meadow paths, pool time, and one deliberately slow day.", "Wilder Kaiser", ""],
      ["Salzkammergut", "Transfer to Gosau", "Kufstein coffee stop, then settle into lake country.", "Gosau · 4 nights", "travel"],
      ["Lake country", "Hallstatt at dawn", "See the icon before the crowds and leave before lunch.", "Gosau", ""],
      ["Dachstein", "Gosausee", "Flat shoreline, glacier views, and a perfect picnic day.", "Gosau", "highlight"],
      ["Wolfgangsee", "Schafberg + lake", "Cog railway for the big view; lakeside reset below.", "Gosau", ""],
      ["Salzburg", "Old town finale", "Fortress views and one last Austrian dinner.", "Salzburg · 1 night", ""],
      ["Fly home", "Salzburg → Munich", "About 1h 45m to MUC; choose a later departure or airport night.", "MUC → ATL", "travel"]
    ],
    points: [
      { name: "Zürich", country: "Switzerland", lat: 47.3769, lon: 8.5417, airport: true },
      { name: "Appenzell", country: "Switzerland", lat: 47.331, lon: 9.4099 },
      { name: "Vaduz", country: "Liechtenstein", lat: 47.141, lon: 9.5215 },
      { name: "Brand / Lünersee", country: "Austria", lat: 47.104, lon: 9.742 },
      { name: "Innsbruck", country: "Austria", lat: 47.2692, lon: 11.4041 },
      { name: "Wilder Kaiser", country: "Austria", lat: 47.5132, lon: 12.3009 },
      { name: "Gosau", country: "Austria", lat: 47.584, lon: 13.534 },
      { name: "Salzburg", country: "Austria", lat: 47.8095, lon: 13.055 },
      { name: "Munich Airport", country: "Germany", lat: 48.3538, lon: 11.7861, airport: true }
    ]
  }
};

const track = document.querySelector("#itinerary-track");
const endAirport = document.querySelector("#end-airport");
const routeNote = document.querySelector("#route-note");
const mapDescription = document.querySelector("#map-description");
const mapDistance = document.querySelector("#map-distance strong");
const choiceButtons = [...document.querySelectorAll(".route-choice")];
let currentMode = "full";
let map;
let routeLayer;
let markerLayer;
let requestToken = 0;

function renderDays(mode) {
  const config = routeModes[mode];
  track.innerHTML = config.days.map((day, index) => `
    <article class="day-card ${day[4]}">
      <div class="day-top"><span>Day ${String(index + 1).padStart(2, "0")}</span><span>${day[0]}</span></div>
      <h3>${day[1]}</h3>
      <p>${day[2]}</p>
      <div class="day-bottom">
        <div><span>Overnight</span><strong>${day[3]}</strong></div>
        <div class="day-index">${String(index + 1).padStart(2, "0")}</div>
      </div>
    </article>
  `).join("");
  track.scrollTo({ left: 0, behavior: "smooth" });
}

function initMap() {
  if (!window.L) return;
  map = L.map("route-map", { scrollWheelZoom: false, zoomControl: true, attributionControl: true });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  drawMap(currentMode);
}

async function drawMap(mode) {
  if (!map) return;
  const token = ++requestToken;
  const config = routeModes[mode];
  if (routeLayer) routeLayer.remove();
  if (markerLayer) markerLayer.remove();
  markerLayer = L.layerGroup().addTo(map);

  config.points.forEach((point, index) => {
    const icon = L.divIcon({
      className: `route-marker${point.airport ? " airport" : ""}`,
      html: String(index + 1),
      iconSize: [29, 29]
    });
    L.marker([point.lat, point.lon], { icon })
      .bindTooltip(`<div class="route-tooltip"><strong>${point.name}</strong>${point.country}</div>`, { direction: "top", offset: [0, -12] })
      .addTo(markerLayer);
  });

  const fallback = config.points.map(point => [point.lat, point.lon]);
  const coords = config.points.map(point => `${point.lon},${point.lat}`).join(";");
  let line = fallback;
  try {
    const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson&steps=false`);
    if (!response.ok) throw new Error("Route unavailable");
    const data = await response.json();
    if (token !== requestToken || !data.routes?.[0]) return;
    line = data.routes[0].geometry.coordinates.map(([lon, lat]) => [lat, lon]);
  } catch (error) {
    // The map remains useful with the direct reference line if the public router is busy.
  }
  if (token !== requestToken) return;
  routeLayer = L.polyline(line, { color: "#e66c3b", weight: 4, opacity: .92, lineJoin: "round" }).addTo(map);
  const bounds = L.latLngBounds(fallback);
  map.fitBounds(bounds, { padding: [38, 38] });
}

function setMode(mode) {
  currentMode = mode;
  const config = routeModes[mode];
  choiceButtons.forEach(button => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  endAirport.textContent = config.endAirport;
  routeNote.textContent = config.note;
  mapDescription.textContent = config.description;
  mapDistance.textContent = config.distance;
  renderDays(mode);
  drawMap(mode);
}

choiceButtons.forEach(button => button.addEventListener("click", () => setMode(button.dataset.mode)));
document.querySelector(".scroll-prev").addEventListener("click", () => track.scrollBy({ left: -500, behavior: "smooth" }));
document.querySelector(".scroll-next").addEventListener("click", () => track.scrollBy({ left: 500, behavior: "smooth" }));

renderDays(currentMode);
initMap();
