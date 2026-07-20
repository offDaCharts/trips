const routeModes = {
  full: {
    endAirport: "VCE · Venice",
    note: "Best scenery-to-logistics ratio · one airport buffer night",
    description:
      "The full route moves east and south: urban reset, western peaks, Austrian lake country, then the Julian Alps. The only deliberate pause is the Venice airport night before the flight home.",
    distance: "≈ 1,250 km",
    days: [
      ["Overnight", "ATL → Zürich", "Let the overnight flight do the first long move.", "In flight", "travel", "atl-zurich"],
      ["Zürich", "Lakefront reset", "Limmat River, old town, early dinner, and a real night of sleep.", "Zürich · 1 night", "", "zurich-reset"],
      ["East Switzerland", "Appenzell → Vaduz", "Pastures and painted houses, then a tiny-country lunch en route.", "Brand · 2 nights", "travel", "appenzell-vaduz"],
      ["Vorarlberg", "Lünersee", "Cable car up; easy lakeshore miles; a huge first alpine reveal.", "Brand", "highlight", "lunersee"],
      ["Tyrol", "Innsbruck transfer", "Break the drive with old town and Nordkette views before Gosau.", "Gosau · 4 nights", "travel", "innsbruck-transfer"],
      ["Salzkammergut", "Hallstatt at dawn", "Arrive before the buses, then leave room for a lakeside nap.", "Gosau", "", "hallstatt"],
      ["Dachstein", "Gosausee slow day", "Flat shoreline, glacier reflections, and no need to over-program it.", "Gosau", "highlight", "gosausee"],
      ["Lake country", "Wolfgangsee + Salzburg", "Schafberg if skies are clear; Salzburg lanes if they are not.", "Gosau", "", "wolfgangsee-schafberg"],
      ["Austria → Slovenia", "Salzburg → Kranjska", "Two and a half scenic hours into the sharper Julian Alps.", "Kranjska Gora · 2 nights", "travel", "salzburg-kranjska"],
      ["Julian Alps", "Jasna + Zelenci", "A gentle lake-and-springs day with room to reset outdoors.", "Kranjska Gora", "", "jasna-zelenci"],
      ["The wild line", "Vršič → Soča", "Cross the pass once, trace the turquoise river, and continue to Bled.", "Bled · 2 nights", "highlight", "vrsic-soca"],
      ["Slovenia icon", "Lake Bled", "Island boat, castle views, cream cake, and the easy lake loop.", "Bled", "", "lake-bled"],
      ["Quiet finale", "Bohinj → Venice", "Morning at the quieter lake, then cross to a protected airport night.", "VCE airport · 1 night", "travel", "bohinj-venice"],
      ["Open-jaw home", "Venice → ATL", "Drop the car the night before and keep departure morning simple.", "Fly home", "", "venice-flight"]
    ],
    points: [
      { name: "Zürich", country: "Switzerland", lat: 47.3769, lon: 8.5417, airport: true, id: "zurich-reset" },
      { name: "Appenzell", country: "Switzerland", lat: 47.331, lon: 9.4099, id: "appenzell-vaduz" },
      { name: "Vaduz", country: "Liechtenstein", lat: 47.141, lon: 9.5215, id: "appenzell-vaduz" },
      { name: "Brand / Lünersee", country: "Austria", lat: 47.104, lon: 9.742, id: "lunersee" },
      { name: "Innsbruck", country: "Austria", lat: 47.2692, lon: 11.4041, id: "innsbruck-transfer" },
      { name: "Gosau", country: "Austria", lat: 47.584, lon: 13.534, id: "gosau-base" },
      { name: "Salzburg", country: "Austria", lat: 47.8095, lon: 13.055, id: "salzburg" },
      { name: "Kranjska Gora", country: "Slovenia", lat: 46.4854, lon: 13.7854, id: "jasna-zelenci" },
      { name: "Vršič Pass", country: "Slovenia", lat: 46.4329, lon: 13.7436, id: "vrsic-soca" },
      { name: "Soča / Bovec", country: "Slovenia", lat: 46.3376, lon: 13.5527, id: "vrsic-soca" },
      { name: "Lake Bled", country: "Slovenia", lat: 46.3692, lon: 14.1136, id: "lake-bled" },
      { name: "Lake Bohinj", country: "Slovenia", lat: 46.276, lon: 13.889, id: "bohinj-venice" },
      { name: "Venice Airport", country: "Italy", lat: 45.5053, lon: 12.3519, airport: true, id: "venice-flight" }
    ]
  },
  austria: {
    endAirport: "MUC · Munich",
    note: "Three fewer days · simpler rental · no Slovenia chapter",
    description:
      "The shorter version keeps the same western start, adds a slower Tyrol base, and turns north after Salzburg for Munich. It is easier—but gives up the Soča-to-Bled finale.",
    distance: "≈ 795 km",
    days: [
      ["Overnight", "ATL → Zürich", "Start with the same open-jaw flight into Switzerland.", "In flight", "travel", "atl-zurich"],
      ["Zürich", "Lakefront reset", "Limmat River, old town, early dinner, and sleep.", "Zürich · 1 night", "", "zurich-reset"],
      ["East Switzerland", "Appenzell → Vaduz", "Pastures, painted houses, and a Liechtenstein lunch.", "Brand · 2 nights", "travel", "appenzell-vaduz"],
      ["Vorarlberg", "Lünersee", "The cable-car lake day that makes the western detour worthwhile.", "Brand", "highlight", "lunersee"],
      ["Tyrol", "Innsbruck", "Old town and Nordkette, then settle under the Wilder Kaiser.", "Wilder Kaiser · 2 nights", "travel", "innsbruck-transfer"],
      ["Tyrol", "Farm + spa reset", "Horses, meadow paths, pool time, and one deliberately slow day.", "Wilder Kaiser", "", "wilder-kaiser"],
      ["Salzkammergut", "Transfer to Gosau", "Kufstein coffee stop, then settle into lake country.", "Gosau · 4 nights", "travel", "gosau-base"],
      ["Lake country", "Hallstatt at dawn", "See the icon before the crowds and leave before lunch.", "Gosau", "", "hallstatt"],
      ["Dachstein", "Gosausee", "Flat shoreline, glacier views, and a perfect picnic day.", "Gosau", "highlight", "gosausee"],
      ["Wolfgangsee", "Schafberg + lake", "Cog railway for the big view; lakeside reset below.", "Gosau", "", "wolfgangsee-schafberg"],
      ["Salzburg", "Old town finale", "Fortress views and one last Austrian dinner.", "Salzburg · 1 night", "", "salzburg"],
      ["Fly home", "Salzburg → Munich", "About 1h 45m to MUC; choose a later departure or airport night.", "MUC → ATL", "travel", "munich-flight"]
    ],
    points: [
      { name: "Zürich", country: "Switzerland", lat: 47.3769, lon: 8.5417, airport: true, id: "zurich-reset" },
      { name: "Appenzell", country: "Switzerland", lat: 47.331, lon: 9.4099, id: "appenzell-vaduz" },
      { name: "Vaduz", country: "Liechtenstein", lat: 47.141, lon: 9.5215, id: "appenzell-vaduz" },
      { name: "Brand / Lünersee", country: "Austria", lat: 47.104, lon: 9.742, id: "lunersee" },
      { name: "Innsbruck", country: "Austria", lat: 47.2692, lon: 11.4041, id: "innsbruck-transfer" },
      { name: "Wilder Kaiser", country: "Austria", lat: 47.5132, lon: 12.3009, id: "wilder-kaiser" },
      { name: "Gosau", country: "Austria", lat: 47.584, lon: 13.534, id: "gosau-base" },
      { name: "Salzburg", country: "Austria", lat: 47.8095, lon: 13.055, id: "salzburg" },
      { name: "Munich Airport", country: "Germany", lat: 48.3538, lon: 11.7861, airport: true, id: "munich-flight" }
    ]
  }
};

const routeAsset = path => `../../assets/${path}`;
const mapStopDetails = {
  "Zürich": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/A_Portrait_of_Zurich_%2849760690567%29.jpg/1920px-A_Portrait_of_Zurich_%2849760690567%29.jpg",
    label: "Arrival reset",
    summary: "A lakefront and old-town soft landing after the overnight flight—beautiful at very low effort.",
    meta: "1 night · walk + tram"
  },
  "Appenzell": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Appenzell_houses_20210528.jpg/1920px-Appenzell_houses_20210528.jpg",
    label: "Painted-village morning",
    summary: "Pastures, ornate houses, and an easy village wander before the road bends into the Alps.",
    meta: "Morning stop · scenic drive"
  },
  "Vaduz": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Liechtenstein_asv2022-10_img01_Vaduz_Schloss.jpg/1920px-Liechtenstein_asv2022-10_img01_Vaduz_Schloss.jpg",
    label: "Tiny-country interlude",
    summary: "A compact lunch and castle-view stop that breaks the drive without consuming the afternoon.",
    meta: "1–2 hours · transfer stop"
  },
  "Brand / Lünersee": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/L%C3%BCnersee_vom_Saulakopf_1.JPG/1920px-L%C3%BCnersee_vom_Saulakopf_1.JPG",
    label: "First alpine reveal",
    summary: "Ride the cable car into a turquoise high basin, then choose as much—or as little—shoreline as feels good.",
    meta: "2-night base · big-view day"
  },
  "Innsbruck": {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Innsbruck_Panorama_Nordkette_3.jpg/1920px-Innsbruck_Panorama_Nordkette_3.jpg",
    label: "Tyrol transfer break",
    summary: "Old-town lanes and Nordkette views turn the longest Austrian drive into a worthwhile stop.",
    meta: "2–4 hours · lunch + walk"
  },
  "Gosau": {
    image: routeAsset("austria-days/day-07-gosausee-real.jpg"),
    label: "Lake-country anchor",
    summary: "The quiet four-night base for Hallstatt, Gosausee, Dachstein, Wolfgangsee, and weather pivots.",
    meta: "4 nights · trip anchor"
  },
  "Salzburg": {
    image: routeAsset("austria-days/day-13-salzburg-real.jpg"),
    label: "Culture + weather pivot",
    summary: "Fortress views, gardens, river walks, and a compact old town that works in sun or cloud.",
    meta: "Full day or transfer stop"
  },
  "Kranjska Gora": {
    image: routeAsset("slovenia-julian-alps-venice-days/day-07-kranjska-gora-and-lake-jasna-alpine-picnic.jpg"),
    label: "Julian Alps base",
    summary: "A gentle two-night reset for Lake Jasna, Zelenci, easy walks, and the approach to Vršič.",
    meta: "2 nights · lakes + easy walks"
  },
  "Vršič Pass": {
    image: routeAsset("slovenia-julian-alps-venice-days/day-08-vrsic-pass-to-soca-valley-and-bovec.jpg"),
    label: "The wild crossing",
    summary: "A high, switchback road through limestone peaks that turns a transfer into one of the trip’s defining days.",
    meta: "Scenic crossing · weather dependent"
  },
  "Soča / Bovec": {
    image: routeAsset("slovenia-julian-alps-venice-days/day-09-soca-river-kobarid-and-kozjak-waterfall.jpg"),
    label: "Emerald-river chapter",
    summary: "Choose two river stops and one good meal; the valley rewards restraint more than checklist driving.",
    meta: "Half day · selective pullouts"
  },
  "Lake Bled": {
    image: routeAsset("slovenia-julian-alps-venice-days/day-03-lake-bled-island-castle-views-and-cream-cake.jpg"),
    label: "Slovenia icon",
    summary: "Island boat, castle viewpoints, cream cake, and an easy lakeside loop from a practical two-night base.",
    meta: "2 nights · icon day"
  },
  "Lake Bohinj": {
    image: routeAsset("slovenia-julian-alps-venice-days/day-05-transfer-to-bohinj-and-vogel-mountain-views.jpg"),
    label: "Quiet finale",
    summary: "A calmer, wilder lake for one last shoreline morning before the route turns toward the airport.",
    meta: "Half day · slow shore"
  },
  "Venice Airport": {
    image: routeAsset("slovenia-julian-alps-venice-days/day-13-trieste-coast-or-venice-airport-buffer.jpg"),
    label: "Protected departure",
    summary: "The airport-buffer night separates a beautiful final day from rental return and transatlantic check-in.",
    meta: "1 night · logistics buffer"
  },
  "Wilder Kaiser": {
    image: routeAsset("austria-days/day-03-wilder-kaiser.jpg"),
    label: "Slow Tyrol base",
    summary: "Horses, meadow paths, mountain views, and pool time create the shortest route’s deliberate pause.",
    meta: "2 nights · farm + spa reset"
  },
  "Munich Airport": {
    image: routeAsset("austria-days/day-02-munich-airport.jpg"),
    label: "Simpler Austrian exit",
    summary: "A straightforward rental return and nonstop-flight option after the Austria-only version.",
    meta: "Optional airport night · flight buffer"
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
    <a class="day-card ${day[4]}" href="./details/?id=${day[5]}" aria-label="Open details for day ${index + 1}: ${day[1]}">
      <div class="day-top"><span>Day ${String(index + 1).padStart(2, "0")}</span><span>${day[0]}</span></div>
      <h3>${day[1]}</h3>
      <p>${day[2]}</p>
      <div class="day-bottom">
        <div><span>Overnight</span><strong>${day[3]}</strong></div>
        <div><span>View details</span><strong class="day-open">Open ↗</strong></div>
      </div>
    </a>
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

function popupContent(point, index) {
  const detail = mapStopDetails[point.name];
  const detailUrl = `./details/?id=${point.id}`;
  return `
    <article class="route-popup">
      <a class="route-popup-image" href="${detailUrl}" aria-label="Open full details for ${point.name}">
        <img src="${detail.image}" alt="${point.name}" loading="lazy" />
      </a>
      <div class="route-popup-body">
        <span class="route-popup-kicker">Stop ${String(index + 1).padStart(2, "0")} · ${point.country}</span>
        <strong>${point.name}</strong>
        <em>${detail.label}</em>
        <p>${detail.summary}</p>
        <div class="route-popup-meta">${detail.meta}</div>
        <a class="route-popup-link" href="${detailUrl}">Open full details <span aria-hidden="true">→</span></a>
      </div>
    </article>`;
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
    const marker = L.marker([point.lat, point.lon], { icon, keyboard: true })
      .bindPopup(popupContent(point, index), {
        className: "route-popup-shell",
        minWidth: 270,
        maxWidth: 300,
        offset: [0, -10],
        autoPanPadding: [28, 28],
        closeButton: true
      })
      .addTo(markerLayer);

    // Desktop hover reveals the card, but it remains open so its links are reachable.
    marker.on("mouseover", () => marker.openPopup());
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
