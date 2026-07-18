const videoBase = "https://youtu.be/tl223Zu09CE";

const places = [
  {
    id: "hallstatt",
    name: "Hallstatt",
    region: "Upper Austria · Salzkammergut",
    seconds: 26,
    time: "00:26",
    lat: 47.5347939,
    lng: 13.5988875,
    image: "./assets/hallstatt.jpg",
    tags: ["town", "heritage", "lake"],
    label: "Lakeside village",
    effort: "Easy village walking",
    summary: "The video’s fairytale opener: timber houses squeezed between Hallstätter See and the Dachstein, with the church-view photo point, market square, Skywalk, and salt-mine history.",
    note: "Ryan’s useful move is the ferry from Obertraun, which turns arrival into the classic lake view and can avoid Hallstatt’s tight parking situation.",
    official: "https://www.hallstatt.net/",
  },
  {
    id: "gosau",
    name: "Gosau",
    region: "Upper Austria · Salzkammergut",
    seconds: 91,
    time: "01:31",
    lat: 47.5851071,
    lng: 13.5362156,
    image: "./assets/gosau.jpg",
    tags: ["town"],
    label: "Alpine village",
    effort: "Easy scenic stop",
    summary: "A quiet valley village framed by church spires, meadows, and the jagged Gosaukamm—the kind of place the creator says he discovered simply by driving through.",
    note: "Treat Gosau and Gosausee as two distinct stops: the village delivers rural atmosphere; the lake delivers the big Dachstein composition.",
    official: "https://www.dachstein-salzkammergut.com/en/",
  },
  {
    id: "gosausee",
    name: "Vorderer Gosausee",
    region: "Upper Austria · Salzkammergut",
    seconds: 107,
    time: "01:47",
    lat: 47.5277481,
    lng: 13.508147,
    image: "./assets/gosausee.jpg",
    tags: ["lake", "alpine"],
    label: "Mountain lake",
    effort: "Easy lake trail",
    summary: "Clear blue water beneath the Gosaukamm and Dachstein. The film emphasizes the shoreline walk, water clarity, and how quickly the mountains fill the frame.",
    note: "This is the accessible lake foreground for the much bigger Dachstein landscape; walking can be scaled from a short shore pause to a fuller loop.",
    official: "https://www.dachstein-salzkammergut.com/en/",
  },
  {
    id: "sky-ladder",
    name: "Donnerkogel Sky Ladder",
    region: "Upper Austria · Gosaukamm",
    seconds: 122,
    time: "02:02",
    lat: 47.524282,
    lng: 13.4813818,
    image: "./assets/sky-ladder.jpg",
    tags: ["alpine"],
    label: "Via ferrata",
    effort: "Technical · exposed · 4–6 hours",
    summary: "The 40-metre ‘Stairway to Heaven’ hangs between rock towers on the Donnerkogel via ferrata. It is the video’s signature adrenaline sequence, reached after sustained climbing.",
    note: "This is not a scenic walk. It requires via-ferrata equipment, comfort with exposure, appropriate weather, fitness, and ideally local instruction if experience is limited.",
    warning: true,
    official: "https://www.dachstein.at/en/summer/activities/climbing",
  },
  {
    id: "dachstein",
    name: "Dachstein Glacier",
    region: "Styria · Dachstein massif",
    seconds: 210,
    time: "03:30",
    lat: 47.4680233,
    lng: 13.6262432,
    image: "./assets/dachstein.jpg",
    tags: ["alpine"],
    label: "Glacier station",
    effort: "Cable car · high altitude",
    summary: "A cable car rises to roughly 2,700 metres for glacier-scale scenery, the suspension bridge, and the glass ‘Stairway to Nothingness’ above the south face.",
    note: "Lift access makes the viewpoint easy to reach, but altitude, wind, snow, and operating windows make this a weather-dependent high-mountain stop.",
    official: "https://www.derdachstein.at/en",
  },
  {
    id: "salzburg",
    name: "Salzburg",
    region: "Salzburg",
    seconds: 246,
    time: "04:06",
    lat: 47.7981346,
    lng: 13.0464806,
    image: "./assets/salzburg.jpg",
    tags: ["town", "heritage"],
    label: "Baroque city",
    effort: "Easy city exploration",
    summary: "The video centers Salzburg’s preserved Baroque core and Hohensalzburg Fortress, the immense hilltop landmark that has watched over the city for nearly a millennium.",
    note: "This is the strongest urban base in the western half of the video and a practical gateway to Wolfgangsee, Werfen, and the Salzkammergut.",
    official: "https://www.salzburg.info/en",
  },
  {
    id: "wolfgangsee",
    name: "Wolfgangsee",
    region: "Salzburg / Upper Austria · Salzkammergut",
    seconds: 281,
    time: "04:41",
    lat: 47.7457501,
    lng: 13.4033498,
    image: "./assets/wolfgangsee.jpg",
    tags: ["lake", "town"],
    label: "Lake district",
    effort: "Flexible lakeside day",
    summary: "A luminous lake ringed by mountains and villages such as St. Wolfgang, St. Gilgen, and Strobl. In the film it acts as both a destination and the foreground to Schafberg.",
    note: "Ferries connect the principal lake towns, making this one of the few clusters in the video that can be enjoyed without treating every view as a car stop.",
    official: "https://www.5schaetze.at/en/wolfgangsee-shipping",
  },
  {
    id: "schafberg",
    name: "Schafberg",
    region: "Salzburg · Wolfgangsee",
    seconds: 300,
    time: "05:00",
    lat: 47.7765811,
    lng: 13.4334854,
    image: "./assets/schafberg.jpg",
    tags: ["alpine", "lake"],
    label: "Cog railway summit",
    effort: "Railway + short summit walks",
    summary: "The steep red SchafbergBahn climbs from St. Wolfgang to a summit panorama where multiple Salzkammergut lakes spread out below sheer grass-and-rock ridges.",
    note: "The creator’s payoff is not only the train: walk between the summit hotel, restaurant, and east ridge for changing perspectives over Wolfgangsee and the lake district.",
    official: "https://www.5schaetze.at/en/schafbergbahn",
  },
  {
    id: "traunkirchen",
    name: "Traunkirchen",
    region: "Upper Austria · Traunsee",
    seconds: 349,
    time: "05:49",
    lat: 47.8448255,
    lng: 13.7902844,
    image: "./assets/traunkirchen.jpg",
    tags: ["town", "lake"],
    label: "Peninsula village",
    effort: "Easy village walking",
    summary: "A compact village on a small Traunsee peninsula, backed by the enormous wall of Traunstein. The film lingers on the waterfront and the church above town.",
    note: "Best understood as a slow shoreline-and-village stop rather than a checklist attraction; the composition changes dramatically with lake light and cloud cover.",
    official: "https://traunsee-almtal.salzkammergut.at/en/",
  },
  {
    id: "attersee",
    name: "Attersee",
    region: "Upper Austria · Salzkammergut",
    seconds: 378,
    time: "06:18",
    lat: 47.9143904,
    lng: 13.5356091,
    image: "./assets/attersee.jpg",
    tags: ["lake", "road"],
    label: "Large alpine lake",
    effort: "Scenic drive or water day",
    summary: "A vast blue-green lake between the Schafberg and Höllengebirge. Ryan highlights its sheer scale and the varied mountain views along the roads that follow its shores.",
    note: "Attersee is too large for a single generic pin. Pick a shore town, swimming area, boat segment, or viewpoint rather than trying to ‘do the lake’ all at once.",
    official: "https://attersee-attergau.salzkammergut.at/en/",
  },
  {
    id: "grundlsee",
    name: "Grundlsee",
    region: "Styria · Ausseerland",
    seconds: 398,
    time: "06:38",
    lat: 47.6272662,
    lng: 13.837928,
    image: "./assets/grundlsee.jpg",
    tags: ["lake"],
    label: "Styrian lake",
    effort: "Easy shore time",
    summary: "Styria’s largest lake sits beneath the Totes Gebirge. The video’s scene is deliberately simple: clear water, mountain walls, and time on the shore.",
    note: "Grundlsee is the accessible anchor for the more tucked-away Toplitzsee immediately east; together they make one coherent Ausseerland lake cluster.",
    official: "https://www.ausseerland.at/en",
  },
  {
    id: "toplitzsee",
    name: "Toplitzsee",
    region: "Styria · Ausseerland",
    seconds: 413,
    time: "06:53",
    lat: 47.643769,
    lng: 13.9277784,
    image: "./assets/toplitzsee.jpg",
    tags: ["lake"],
    label: "Forest lake",
    effort: "Short approach + lakeside",
    summary: "A smaller, darker lake enclosed by steep forest and mountain walls beyond Grundlsee. The film particularly likes its mirrored autumn atmosphere.",
    note: "Access tightens near Gößl; think of this as the quiet, enclosed counterpoint to broad-open Grundlsee, not an interchangeable second lake.",
    official: "https://www.ausseerland.at/en",
  },
  {
    id: "hohenwerfen",
    name: "Hohenwerfen Castle",
    region: "Salzburg · Werfen",
    seconds: 423,
    time: "07:03",
    lat: 47.48272,
    lng: 13.18821,
    image: "./assets/hohenwerfen.jpg",
    tags: ["heritage"],
    label: "Medieval fortress",
    effort: "Touring + uphill access",
    summary: "An 11th-century fortress poised on a rock above the Salzach Valley. Its mountain setting and layered defensive silhouette make it one of the video’s strongest architectural frames.",
    note: "It is more than a roadside photo: the preserved fortress operates as a museum with tours and seasonal programming. Check the day’s access and timetable.",
    official: "https://www.burg-hohenwerfen.at/en",
  },
  {
    id: "hochosterwitz",
    name: "Hochosterwitz Castle",
    region: "Carinthia",
    seconds: 454,
    time: "07:34",
    lat: 46.7559578,
    lng: 14.4522119,
    image: "./assets/hochosterwitz.jpg",
    tags: ["heritage"],
    label: "Hilltop castle",
    effort: "Steep approach or lift",
    summary: "A dramatic Carinthian stronghold whose approach passes through 14 fortified gates—successive layers of defense that are the feature Ryan finds most unusual.",
    note: "This is a significant geographic detour from the Salzburg lake cluster. Public visiting is seasonal, so verify opening dates before treating it as a fixed stop.",
    official: "https://www.burg-hochosterwitz.com/",
  },
  {
    id: "vienna",
    name: "Vienna",
    region: "Vienna",
    seconds: 489,
    time: "08:09",
    lat: 48.2083537,
    lng: 16.3725042,
    image: "./assets/vienna.jpg",
    tags: ["town", "heritage"],
    label: "Capital city",
    effort: "Multi-day city",
    summary: "The film’s eastern urban counterweight: imperial architecture, music history, and modern city life. Schönbrunn Palace and its extensive gardens carry the visual sequence.",
    note: "Vienna is a destination at a completely different scale from the villages and viewpoints. The center pin is orientation only; Schönbrunn sits west of it.",
    official: "https://www.wien.info/en",
  },
  {
    id: "wachau",
    name: "Wachau Valley",
    region: "Lower Austria · Danube",
    seconds: 517,
    time: "08:37",
    lat: 48.3275518,
    lng: 15.4116456,
    image: "./assets/wachau.jpg",
    tags: ["heritage", "road"],
    label: "River landscape",
    effort: "Flexible valley day",
    summary: "Vineyards, villages, abbeys, and castle ruins line the Danube west of Vienna. Ryan singles out Dürnstein and Göttweig Abbey as the valley’s cultural anchors.",
    note: "The map pin marks the landscape’s center, not a single sight. Boat, rail, bike, and road all reveal different pieces of the UNESCO-listed corridor.",
    official: "https://www.donau.com/en/wachau-nibelungengau-kremstal/",
  },
  {
    id: "innsbruck",
    name: "Innsbruck",
    region: "Tyrol",
    seconds: 544,
    time: "09:04",
    lat: 47.2654296,
    lng: 11.3927685,
    image: "./assets/innsbruck.jpg",
    tags: ["town", "alpine"],
    label: "Alpine city",
    effort: "Easy city + lift options",
    summary: "A true city inside the mountains, known in the video for colorful buildings along the Inn and its deep winter-sports identity, including multiple Olympic Games.",
    note: "Innsbruck works as a transport and culture base as well as a mountain stop; the Nordkette lifts can convert a city day into a high-alpine viewpoint quickly.",
    official: "https://www.innsbruck.info/en/",
  },
  {
    id: "kufstein",
    name: "Kufstein",
    region: "Tyrol",
    seconds: 566,
    time: "09:26",
    lat: 47.582996,
    lng: 12.1692134,
    image: "./assets/kufstein.jpg",
    tags: ["town", "heritage"],
    label: "Fortress town",
    effort: "Easy town + fortress",
    summary: "A compact Inn Valley town near the Bavarian border, dominated by the 800-year-old Kufstein Fortress and a history that shifts between Bavarian and Tyrolean rule.",
    note: "Its scale makes Kufstein easier to absorb than Innsbruck, but the two are not adjacent sightseeing stops—the video compresses a meaningful Tyrol transfer.",
    official: "https://www.kufstein.com/en",
  },
  {
    id: "stillup",
    name: "Stillup Reservoir",
    region: "Tyrol · Zillertal",
    seconds: 582,
    time: "09:42",
    lat: 47.119178,
    lng: 11.873206,
    image: "./assets/stillup.jpg",
    tags: ["lake", "alpine"],
    label: "Reservoir valley",
    effort: "Walks and longer hikes",
    summary: "A slender reservoir in the Stilluptal, enclosed by sharp walls and waterfalls. The film compares the valley’s scale and green-water drama to a fantasy landscape.",
    note: "A seasonal toll road and transport restrictions shape access. The reservoir is an excursion base; deeper valley hikes and huts require more time than the video montage suggests.",
    official: "https://www.mayrhofen.at/en/",
  },
  {
    id: "krimml",
    name: "Krimml Waterfalls",
    region: "Salzburg · Hohe Tauern",
    seconds: 600,
    time: "10:00",
    lat: 47.2083756,
    lng: 12.1702241,
    image: "./assets/krimml.jpg",
    tags: ["lake", "alpine"],
    label: "Tiered waterfall",
    effort: "Uphill waterfall path",
    summary: "Austria’s tallest waterfall system drops 380 metres in three major stages. The video focuses on the force and scale as the trail climbs beside the cascades.",
    note: "The lowest viewpoint is not the whole experience. Seeing successive stages means sustained uphill walking on a wet, busy, and sometimes slippery path.",
    official: "https://www.wasserfaelle-krimml.at/en/",
  },
  {
    id: "zell-am-see",
    name: "Zell am See",
    region: "Salzburg",
    seconds: 621,
    time: "10:21",
    lat: 47.3239636,
    lng: 12.7963165,
    image: "./assets/zell-am-see.jpg",
    tags: ["town", "lake"],
    label: "Lake resort town",
    effort: "Easy resort base",
    summary: "An elegant town on the shore of Zeller See, framed as a long-established four-season resort: water and promenade life in summer, skiing in winter.",
    note: "The compact town is the easy part; the larger Zell am See–Kaprun area includes mountain lifts, glacier access, and lakeshore experiences that need separate choices.",
    official: "https://www.zellamsee-kaprun.com/en",
  },
  {
    id: "grossglockner-road",
    name: "Grossglockner High Alpine Road",
    region: "Salzburg / Carinthia · Hohe Tauern",
    seconds: 643,
    time: "10:43",
    lat: 47.1237732,
    lng: 12.8314232,
    image: "./assets/grossglockner-road.jpg",
    tags: ["road", "alpine"],
    label: "Panoramic toll road",
    effort: "Seasonal mountain drive",
    summary: "A 48-kilometre alpine road with 36 bends, climbing through the Hohe Tauern. Ryan highlights the cobbled spur to Edelweißspitze and the rapidly changing high-mountain color.",
    note: "The pin marks Edelweißspitze, one highlight rather than the whole road. Snow, weather, seasonal opening, traffic, and toll rules need a live check.",
    official: "https://www.grossglockner.at/gg/en/index",
  },
  {
    id: "pasterze",
    name: "Pasterze Glacier",
    region: "Carinthia · Hohe Tauern",
    seconds: 684,
    time: "11:24",
    lat: 47.0847867,
    lng: 12.7215572,
    image: "./assets/pasterze.jpg",
    tags: ["alpine"],
    label: "Glacier viewpoint",
    effort: "Viewpoint + optional descent",
    summary: "Austria’s largest glacier landscape, viewed from Kaiser-Franz-Josefs-Höhe near the end of the Grossglockner road. The film descends toward the blue-green meltwater below.",
    note: "Glacier retreat means the current ice edge is much farther from historic viewpoints than older descriptions imply; allow real time and elevation for any descent.",
    official: "https://www.grossglockner.at/gg/en/index",
  },
  {
    id: "vorarlberg",
    name: "Vorarlberg",
    region: "Far western Austria",
    seconds: 703,
    time: "11:43",
    lat: 47.25,
    lng: 9.9166667,
    image: "./assets/vorarlberg.jpg",
    tags: ["alpine", "town"],
    label: "Region",
    effort: "Multi-base region",
    summary: "Austria’s western edge, bordering Switzerland, Liechtenstein, and Germany. In the video it is the umbrella for Lünersee, Silvretta, and the Lake Constance viewpoints that follow.",
    note: "This is a regional orientation pin only. Vorarlberg’s named highlights span very different valleys; it should not be counted as one additional attraction.",
    official: "https://www.vorarlberg.travel/en/",
  },
  {
    id: "luenersee",
    name: "Lünersee",
    region: "Vorarlberg · Brandnertal",
    seconds: 711,
    time: "11:51",
    lat: 47.0536812,
    lng: 9.7548663,
    image: "./assets/luenersee.jpg",
    tags: ["lake", "alpine"],
    label: "High mountain lake",
    effort: "Cable car + lake loop",
    summary: "A turquoise, heart-shaped reservoir at roughly 1,970 metres beneath the Rätikon. The cable car opens an accessible shoreline loop and higher viewpoints reveal the shape.",
    note: "The heart view requires elevation above the lake, not only the flat shore circuit. Lift dates, weather, and mountain conditions remain the deciding factors.",
    official: "https://www.luenerseebahn.at/en",
  },
  {
    id: "silvretta-road",
    name: "Silvretta High Alpine Road",
    region: "Vorarlberg / Tyrol",
    seconds: 724,
    time: "12:04",
    lat: 46.9069667,
    lng: 10.0935231,
    image: "./assets/silvretta-road.jpg",
    tags: ["road", "alpine", "lake"],
    label: "Closed panoramic road",
    effort: "Not driveable in 2026",
    summary: "The video shows 34 hairpins climbing past Vermunt and Silvretta reservoirs toward Bielerhöhe—one of western Austria’s classic mountain-road sequences.",
    note: "Official update: the road is closed to public through-traffic until summer 2030 after rockfalls and mudslides. Do not plan the filmed drive for 2026.",
    warning: true,
    official: "https://www.silvretta-bielerhoehe.at/en/silvretta-hochalpenstrasse",
  },
  {
    id: "lake-constance",
    name: "Lake Constance",
    region: "Vorarlberg · Bregenz",
    seconds: 742,
    time: "12:22",
    lat: 47.5025779,
    lng: 9.7472924,
    image: "./assets/lake-constance.jpg",
    tags: ["lake", "town"],
    label: "Tri-national lake",
    effort: "Flexible city and water day",
    summary: "A huge Rhine-fed lake shared by Austria, Germany, and Switzerland, with Bregenz as Austria’s principal lakeside city and the Pfänder rising immediately behind it.",
    note: "The pin sits in Bregenz because ‘Lake Constance’ is far too large for one point. Pair a specific shore experience with the Pfänder panorama.",
    official: "https://www.bodensee-vorarlberg.com/en",
  },
  {
    id: "pfaender",
    name: "Pfänder",
    region: "Vorarlberg · Bregenz",
    seconds: 758,
    time: "12:38",
    lat: 47.5073712,
    lng: 9.7802047,
    image: "./assets/pfaender.jpg",
    tags: ["alpine", "lake"],
    label: "Lake viewpoint",
    effort: "Cable car or hike",
    summary: "Bregenz’s local mountain gives the video its scale-revealing view over Lake Constance, the Rhine Valley, and the meeting point of three countries.",
    note: "The Pfänderbahn is the direct sightseeing version; hiking routes create a different time commitment. Visibility matters more here than raw elevation.",
    official: "https://www.pfaenderbahn.at/en/",
  },
  {
    id: "olpererhuette",
    name: "Olpererhütte",
    region: "Tyrol · Zillertal Alps",
    seconds: 769,
    time: "12:49",
    lat: 47.0420135,
    lng: 11.6883677,
    image: "./assets/olpererhuette.jpg",
    tags: ["alpine", "lake"],
    label: "Mountain hut hike",
    effort: "Steep alpine hike",
    summary: "A mountain hut high above the Schlegeis Reservoir, best known online for the small suspension bridge whose compressed camera angle makes it appear to float over the valley.",
    note: "The bridge is a photo detail, not the reason the hike is serious. Expect a steep climb, mountain weather, seasonal hut operations, and a separate reservoir-access plan.",
    warning: true,
    official: "https://www.olpererhuette.de/en/",
  },
];

const filters = {
  all: () => true,
  town: (place) => place.tags.includes("town"),
  lake: (place) => place.tags.includes("lake"),
  alpine: (place) => place.tags.includes("alpine"),
  heritage: (place) => place.tags.includes("heritage"),
  road: (place) => place.tags.includes("road"),
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const videoUrl = (seconds) => `${videoBase}?t=${seconds}`;

const placeGrid = document.querySelector("#place-grid");
const resultCount = document.querySelector("#result-count");
const filterButtons = [...document.querySelectorAll(".filter-button")];

const map = L.map("map", {
  scrollWheelZoom: false,
  zoomControl: true,
  minZoom: 6,
}).setView([47.47, 12.65], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const markers = new Map();

const markerIcon = (place, number) =>
  L.divIcon({
    className: "",
    html: `<div class="place-marker ${place.warning ? "is-warning" : ""}"><span>${number}</span></div>`,
    iconSize: [31, 31],
    iconAnchor: [15, 31],
    popupAnchor: [0, -29],
  });

places.forEach((place, index) => {
  const marker = L.marker([place.lat, place.lng], { icon: markerIcon(place, index + 1) });
  marker.bindPopup(`
    <article class="map-popup">
      <img src="${place.image}" alt="${escapeHtml(place.name)} as shown in the source video" />
      <div class="map-popup-copy">
        <span>${String(index + 1).padStart(2, "0")} · ${escapeHtml(place.time)} · ${escapeHtml(place.label)}</span>
        <h3>${escapeHtml(place.name)}</h3>
        <p>${escapeHtml(place.region)}</p>
      </div>
    </article>
  `);
  markers.set(place.id, marker);
});

const cardMarkup = (place) => {
  const index = places.indexOf(place) + 1;
  return `
    <article class="place-card" id="place-${place.id}">
      <a class="place-media" href="${videoUrl(place.seconds)}" target="_blank" rel="noreferrer" aria-label="Watch ${escapeHtml(place.name)} in the source video at ${place.time}">
        <img src="${place.image}" alt="${escapeHtml(place.name)} as shown in Ryan Shirley's Austria video" loading="lazy" />
        <span class="place-number">${String(index).padStart(2, "0")}</span>
        <span class="video-time">▶ ${place.time}</span>
      </a>
      <div class="place-copy">
        <div class="place-topline"><span>${escapeHtml(place.region)}</span><span>${escapeHtml(place.label)}</span></div>
        <h3>${escapeHtml(place.name)}</h3>
        <p>${escapeHtml(place.summary)}</p>
        <div class="place-note ${place.warning ? "is-warning" : ""}">
          <span><strong>${escapeHtml(place.effort)}.</strong> ${escapeHtml(place.note)}</span>
        </div>
        <div class="place-actions">
          <button class="locate-button" type="button" data-locate="${place.id}">Locate on map</button>
          <a href="${place.official}" target="_blank" rel="noreferrer">Official info ↗</a>
          <a href="${videoUrl(place.seconds)}" target="_blank" rel="noreferrer">Video ↗</a>
        </div>
      </div>
    </article>
  `;
};

let activeFilter = "all";

const visiblePlaces = () => places.filter(filters[activeFilter]);

const fitVisibleMarkers = (items) => {
  if (!items.length) return;
  const bounds = L.latLngBounds(items.map((place) => [place.lat, place.lng]));
  map.fitBounds(bounds, { padding: [45, 45], maxZoom: items.length === 1 ? 11 : 9 });
};

const render = () => {
  const items = visiblePlaces();
  placeGrid.innerHTML = items.length ? items.map(cardMarkup).join("") : '<p class="empty-state">No places match this lens.</p>';
  resultCount.textContent = activeFilter === "all" ? "Showing all 29 places" : `Showing ${items.length} of 29 places`;

  markerLayer.clearLayers();
  items.forEach((place) => markerLayer.addLayer(markers.get(place.id)));
  fitVisibleMarkers(items);
};

const locatePlace = (placeId) => {
  const place = places.find((item) => item.id === placeId);
  const marker = markers.get(placeId);
  if (!place || !marker) return;

  document.querySelector("#atlas").scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    map.invalidateSize();
    map.setView([place.lat, place.lng], 11, { animate: true });
    marker.openPopup();
  }, 420);
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});

placeGrid.addEventListener("click", (event) => {
  const locateButton = event.target.closest("[data-locate]");
  if (!locateButton) return;
  locatePlace(locateButton.dataset.locate);
});

window.addEventListener("resize", () => map.invalidateSize());

render();
