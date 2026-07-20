const asset = path => `../../assets/${path}`;

const stops = [
  {
    number: 1,
    name: "Keflavík Airport",
    region: "iceland",
    country: "Iceland",
    lat: 63.985,
    lon: -22.6056,
    airport: true,
    image: asset("iceland-golden-circle-south-coast-days/day-01-fly-atl-to-keflavik-via-jfk.jpg"),
    summary: "The Iceland gateway, 45–55 minutes from central Reykjavík. Collect the rental here only for the Iceland chapter.",
    href: "#day-reykjavik"
  },
  {
    number: 2,
    name: "Reykjavík",
    region: "iceland",
    country: "Iceland",
    lat: 64.1466,
    lon: -21.9426,
    image: asset("iceland-golden-circle-south-coast-days/day-02-reykjavik-soft-landing.jpg"),
    summary: "Four-night base: restaurants, harbor walks, and one place to return after every weather-dependent day trip.",
    href: "#day-reykjavik"
  },
  {
    number: 3,
    name: "Golden Circle",
    region: "iceland",
    country: "Iceland",
    lat: 64.2558,
    lon: -20.3958,
    image: asset("iceland-golden-circle-south-coast-days/day-04-geysir-gullfoss-cows-and-ice-cream.jpg"),
    summary: "Þingvellir, Geysir, and Gullfoss form the classic high-payoff loop; food and farm stops keep it human-sized.",
    href: "#day-golden-circle"
  },
  {
    number: 4,
    name: "South Coast",
    region: "iceland",
    country: "Iceland",
    lat: 63.5321,
    lon: -19.5114,
    image: asset("iceland-golden-circle-south-coast-days/day-07-transfer-south-via-seljalandsfoss.jpg"),
    summary: "Seljalandsfoss and Skógafoss deliver the wild Iceland chapter without committing the trip to the Ring Road.",
    href: "#day-south-coast"
  },
  {
    number: 5,
    name: "Munich",
    region: "alps",
    country: "Germany",
    lat: 48.1374,
    lon: 11.5755,
    airport: true,
    image: asset("austria-days/day-02-munich-airport.jpg"),
    summary: "The hinge: nonstop from Keflavík, relaxed city reset, German rental pickup, and Delta nonstop back to Atlanta.",
    href: "#day-munich"
  },
  {
    number: 6,
    name: "Berchtesgaden",
    region: "alps",
    country: "Germany",
    lat: 47.6302,
    lon: 13.0001,
    image: asset("austria-days/day-11-berchtesgaden-real.jpg"),
    summary: "Two-night Bavarian base for valley scenery, Ramsau, Hintersee, and a first-boat start at Königssee.",
    href: "#day-berchtesgaden"
  },
  {
    number: 7,
    name: "Königssee",
    region: "alps",
    country: "Germany",
    lat: 47.5547,
    lon: 12.9781,
    image: asset("austria-days/day-12-konigssee-real.jpg"),
    summary: "A silent electric-boat crossing beneath near-vertical mountains—the easiest big alpine payoff in Bavaria.",
    href: "#day-konigssee"
  },
  {
    number: 8,
    name: "Salzburg",
    region: "alps",
    country: "Austria",
    lat: 47.8095,
    lon: 13.055,
    image: asset("austria-days/day-13-salzburg-real.jpg"),
    summary: "A natural lunch-and-culture stop between Bavaria and the lake district; it does not need its own hotel change.",
    href: "#day-gosau-transfer"
  },
  {
    number: 9,
    name: "Gosau",
    region: "alps",
    country: "Austria",
    lat: 47.584,
    lon: 13.534,
    image: asset("austria-days/day-07-gosausee-real.jpg"),
    summary: "The best Salzkammergut base: quieter than Hallstatt and positioned for three distinct lake-and-mountain days.",
    href: "#day-gosausee"
  },
  {
    number: 10,
    name: "Hallstatt",
    region: "alps",
    country: "Austria",
    lat: 47.5622,
    lon: 13.6493,
    image: asset("austria-days/day-08-hallstatt-real.jpg"),
    summary: "Worth seeing once and early. The waterfront is magical before tour traffic; the slower afternoon belongs back in Gosau.",
    href: "#day-hallstatt"
  },
  {
    number: 11,
    name: "Schafberg",
    region: "alps",
    country: "Austria",
    lat: 47.775,
    lon: 13.433,
    image: asset("austria-days/day-10-schafberg.jpg"),
    summary: "A weather-dependent summit railway above Wolfgangsee. Save it for the clearest morning; skip it without regret under cloud.",
    href: "#day-schafberg"
  },
  {
    number: 12,
    name: "Munich Airport",
    region: "alps",
    country: "Germany",
    lat: 48.3538,
    lon: 11.7861,
    airport: true,
    image: asset("austria-days/day-14-munich-airport-return.jpg"),
    summary: "The protected finish: return the car the evening before or on a calm departure morning, then fly nonstop to Atlanta.",
    href: "#day-fly-home"
  }
];

const regionRoutes = {
  iceland: [
    [63.985, -22.6056],
    [64.1466, -21.9426],
    [64.2558, -20.3958],
    [63.5321, -19.5114],
    [64.1466, -21.9426],
    [63.985, -22.6056]
  ],
  alps: [
    [48.3538, 11.7861],
    [48.1374, 11.5755],
    [47.6302, 13.0001],
    [47.5547, 12.9781],
    [47.8095, 13.055],
    [47.584, 13.534],
    [47.5622, 13.6493],
    [47.775, 13.433],
    [48.3538, 11.7861]
  ]
};

let map;
let layers;

function popupFor(stop) {
  return `
    <article class="route-popup">
      <img src="${stop.image}" alt="${stop.name}" loading="lazy" />
      <div class="route-popup-body">
        <span>Stop ${String(stop.number).padStart(2, "0")} · ${stop.country}</span>
        <strong>${stop.name}</strong>
        <p>${stop.summary}</p>
        <a href="${stop.href}">Open the day plan <b aria-hidden="true">→</b></a>
      </div>
    </article>`;
}

function initMap() {
  if (!window.L || !document.querySelector("#route-map")) return;

  map = L.map("route-map", {
    scrollWheelZoom: false,
    closePopupOnClick: false,
    zoomControl: true
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const markers = L.layerGroup().addTo(map);
  stops.forEach(stop => {
    const icon = L.divIcon({
      className: `route-marker${stop.airport ? " airport" : ""}`,
      html: String(stop.number),
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
    const marker = L.marker([stop.lat, stop.lon], { icon, keyboard: true })
      .bindPopup(popupFor(stop), {
        className: "route-popup-shell",
        minWidth: 240,
        maxWidth: 285,
        closeButton: true,
        autoPanPadding: [25, 25],
        offset: [0, -10]
      })
      .addTo(markers);

    marker.on("mouseover", () => marker.openPopup());
  });

  const icelandLine = L.polyline(regionRoutes.iceland, { color: "#153a36", weight: 4, opacity: .88 }).addTo(map);
  const alpineLine = L.polyline(regionRoutes.alps, { color: "#ef6b42", weight: 4, opacity: .92 }).addTo(map);
  const flightLine = L.polyline([[63.985, -22.6056], [55.5, -7], [48.3538, 11.7861]], {
    color: "#688b89",
    weight: 2,
    opacity: .8,
    dashArray: "8 10"
  }).addTo(map);

  layers = { markers, icelandLine, alpineLine, flightLine };
  setMapView("all");
}

function setMapView(view) {
  if (!map) return;
  const visibleStops = view === "all" ? stops : stops.filter(stop => stop.region === view);
  const bounds = L.latLngBounds(visibleStops.map(stop => [stop.lat, stop.lon]));
  const padding = window.innerWidth < 700 ? [24, 95] : [55, 55];
  map.fitBounds(bounds, { padding, maxZoom: view === "all" ? 4 : 8 });

  document.querySelectorAll(".map-control").forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".map-control").forEach(button => {
  button.addEventListener("click", () => setMapView(button.dataset.view));
});

document.querySelectorAll(".day-row").forEach(row => {
  row.addEventListener("toggle", () => {
    if (!row.open) return;
    document.querySelectorAll(".day-row[open]").forEach(other => {
      if (other !== row) other.open = false;
    });
  });
});

initMap();
