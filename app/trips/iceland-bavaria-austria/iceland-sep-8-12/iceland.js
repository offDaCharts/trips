const image = (path) => `../../../assets/${path}`;

const stops = {
  kef: {
    name: "Keflavík Airport",
    eyebrow: "Start + finish",
    lat: 63.985,
    lon: -22.6056,
    image: image("iceland-golden-circle-south-coast-days/day-01-fly-atl-to-keflavik-via-jfk.jpg"),
    summary: "Collect the rental at KEF and leave the Reykjavík hotel strategy behind. The route begins southeast the same morning.",
    duration: "60–90 min for bags + car",
    child: "Pre-book the child seat; photograph its installation before leaving.",
    why: "One car for the entire Iceland leg keeps luggage and nap timing simple.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Keflavik+International+Airport"
  },
  seljalandsfoss: {
    name: "Seljalandsfoss",
    eyebrow: "Ryan chapter · 3:19",
    lat: 63.6156,
    lon: -19.9886,
    image: image("iceland-golden-circle-south-coast-days/day-07-transfer-south-via-seljalandsfoss.jpg"),
    summary: "The cleanest first reveal: a 60-meter ribbon of water visible from Route 1, with the setting sun sometimes cutting through the spray.",
    duration: "35–60 min",
    child: "Front viewpoint is the family move. The path behind the falls is slick, wet, and carrier-only.",
    why: "It gives the arrival day a genuine headline without a long hike.",
    videoUrl: "https://www.youtube.com/watch?v=iBSbD_7bvE8&t=199s",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Seljalandsfoss"
  },
  skogafoss: {
    name: "Skógafoss + Kvernufoss",
    eyebrow: "Ryan chapter · 3:44",
    lat: 63.5321,
    lon: -19.5114,
    image: image("iceland-golden-circle-south-coast-days/day-08-skogafoss-and-reynisfjara-viewing-day.jpg"),
    summary: "Skógafoss is the power shot; nearby Kvernufoss is the quieter walk. Do one on arrival and save the other for the next morning.",
    duration: "45 min to 2 hr",
    child: "Skógafoss base is simple. The staircase and Kvernufoss trail need the carrier.",
    why: "Sleeping nearby turns two crowded stops into an evening-and-morning pair.",
    videoUrl: "https://www.youtube.com/watch?v=iBSbD_7bvE8&t=224s",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Skogafoss"
  },
  dyrholaey: {
    name: "Dyrhólaey",
    eyebrow: "Coast reveal",
    lat: 63.4025,
    lon: -19.1306,
    image: image("iceland-sep-8-12/dyrholaey.jpg"),
    summary: "A high, wind-burnished view over the black shoreline and the natural sea arch—more scale and less surf exposure than the beach below.",
    duration: "35–60 min",
    child: "Hold the child at cliff viewpoints; wind is the deciding factor.",
    why: "This is the safer panoramic complement to Reynisfjara.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dyrholaey+Iceland"
  },
  reynisfjara: {
    name: "Reynisfjara",
    eyebrow: "Ryan chapter · 4:12",
    lat: 63.404,
    lon: -19.044,
    image: image("iceland-golden-circle-south-coast-days/day-09-jokulsarlon-decision-or-vik-slow-day.jpg"),
    summary: "Basalt columns, jet-black sand, and Reynisdrangar sea stacks. It is a viewing stop, never a water-play stop.",
    duration: "25–45 min",
    child: "Keep the child held and stay high. Red warning means do not enter; yellow still demands the marked setback.",
    why: "Ryan calls it one of his favorite southern destinations, but current warning lights control the visit.",
    videoUrl: "https://www.youtube.com/watch?v=iBSbD_7bvE8&t=252s",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Reynisfjara+Beach"
  },
  vik: {
    name: "Vík",
    eyebrow: "Food + sleep base",
    lat: 63.419,
    lon: -19.006,
    image: image("iceland-golden-circle-south-coast-days/day-09-jokulsarlon-decision-or-vik-slow-day.jpg"),
    summary: "The practical South Coast hinge: fuel, food, an indoor reset, and the best sleep base for the three-night route.",
    duration: "Lunch + overnight",
    child: "Use the town for a warm meal, diaper reset, and a weather decision before going farther east.",
    why: "It keeps the route moving without turning every day into a Reykjavík out-and-back.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Vik+Iceland"
  },
  fjadrargljufur: {
    name: "Fjaðrárgljúfur",
    eyebrow: "Ryan chapter · 4:35",
    lat: 63.7713,
    lon: -18.1718,
    image: image("iceland-sep-8-12/fjadrargljufur.jpg"),
    summary: "A moss-lined canyon with a rim trail and a sequence of viewpoints. It is the natural eastern edge of the shorter plan.",
    duration: "45–90 min",
    child: "Carrier-first; stay behind every fence and keep clear of the exposed rim.",
    why: "It adds a new landscape without committing the three-night plan to the glacier lagoon.",
    videoUrl: "https://www.youtube.com/watch?v=iBSbD_7bvE8&t=275s",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Fjadrargljufur"
  },
  skaftafell: {
    name: "Skaftafellsjökull",
    eyebrow: "Glacier day · park-managed",
    lat: 64.0165,
    lon: -16.9665,
    image: image("iceland-sep-8-12/svinafellsjokull.jpg"),
    summary: "Ryan’s film uses Svínafellsjökull. The plan uses Skaftafell’s signed S1 trail for a current, managed way to meet the outlet ice.",
    duration: "S1: 4.1 km · 1–1½ hr",
    child: "Rated easy by the park, but still carrier territory on gravel and changing weather.",
    why: "It creates a real glacier experience without booking an age-restricted ice walk.",
    videoUrl: "https://www.youtube.com/watch?v=iBSbD_7bvE8&t=307s",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Skaftafell+Visitor+Centre"
  },
  jokulsarlon: {
    name: "Jökulsárlón + Diamond Beach",
    eyebrow: "Four-night reward",
    lat: 64.0484,
    lon: -16.179,
    image: image("iceland-golden-circle-south-coast-days/day-10-south-coast-weather-buffer.jpg"),
    summary: "Icebergs drift through the lagoon toward the ocean, then wash onto black sand across Route 1. This is the reason to stay until September 12.",
    duration: "75–120 min",
    child: "Easy viewpoints; use the carrier near water and skip boat-tour complexity on this short family leg.",
    why: "It is the biggest visual escalation in Ryan’s south-and-glaciers sequence.",
    videoUrl: "https://www.youtube.com/watch?v=iBSbD_7bvE8&t=333s",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Jokulsarlon"
  },
  kirkju: {
    name: "Kirkjubæjarklaustur",
    eyebrow: "East-side sleep base",
    lat: 63.791,
    lon: -18.056,
    image: image("iceland-sep-8-12/fjadrargljufur.jpg"),
    summary: "The practical overnight between Vík and Skaftafell. It avoids a late two-hour backtrack after the glacier lagoon.",
    duration: "Middle-night base",
    child: "A real room and early dinner are more useful than squeezing another roadside stop into the evening.",
    why: "It makes Jökulsárlón a three-and-a-half-hour driving day instead of an endurance run from Vík.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kirkjubaejarklaustur"
  },
  reykjadalur: {
    name: "Reykjadalur",
    eyebrow: "Ryan chapter · optional",
    lat: 64.0234,
    lon: -21.2115,
    image: image("iceland-sep-8-12/reykjadalur.jpg"),
    summary: "A geothermal valley and warm river reached by a sustained uphill walk. Ryan found it magical; this plan treats it as a weather-and-energy bonus.",
    duration: "About 1 hr uphill each way",
    child: "Carrier only. Skip in hard wind, heavy rain, or when the westbound drive has already been long.",
    why: "It is the best Ryan-inspired add-on near the route—but not worth making the schedule brittle.",
    videoUrl: "https://www.youtube.com/watch?v=iBSbD_7bvE8&t=101s",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Reykjadalur+Hot+Spring+Thermal+River"
  },
  reykjavik: {
    name: "Reykjavík / KEF-side finish",
    eyebrow: "Protected final night",
    lat: 64.1466,
    lon: -21.9426,
    image: image("iceland-golden-circle-south-coast-days/day-02-reykjavik-soft-landing.jpg"),
    summary: "Return west before the Europe flight. Use the evening for the harbor, Hallgrímskirkja, Perlan, or simply a good meal—not a recovery day.",
    duration: "Final overnight",
    child: "Choose Reykjavík for dinner and walking, or KEF-side lodging for a very early departure.",
    why: "It removes the only truly bad gamble: a five-hour flight-day drive from the glacier region.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Reykjavik+Iceland"
  }
};

const routes = {
  short: {
    title: "Three-night essential South",
    subtitle: "September 8–11 · turn at Fjaðrárgljúfur",
    distance: "~635 km",
    roadTime: "~10 hr",
    bases: "Skógar · Vík · west",
    order: ["kef", "seljalandsfoss", "skogafoss", "dyrholaey", "reynisfjara", "vik", "fjadrargljufur", "reykjadalur", "reykjavik", "kef"],
    sleeps: ["skogafoss", "vik", "reykjavik"],
    days: [
      {
        number: "01",
        date: "Tue · Sep 8",
        title: "Airport → the first waterfalls",
        meta: "KEF to Seljalandsfoss and Skógar · sleep near Skógar/Hvolsvöllur",
        drive: "About 3 hr driving",
        image: stops.seljalandsfoss.image,
        text: "Collect the car, eat on the road, and drive southeast. Use Seljalandsfoss as the main arrival-day stop, then choose Skógafoss or Kvernufoss before dinner. This is an active day, not a hotel recovery block.",
        bullets: ["Core: Seljalandsfoss front viewpoint", "Add only if timing is strong: Gljúfrabúi or Kvernufoss", "Sleep east of Hella so tomorrow starts close to the scenery"]
      },
      {
        number: "02",
        date: "Wed · Sep 9",
        title: "Waterfall power → black coast",
        meta: "Skógafoss, Dyrhólaey, Reynisfjara, Vík · sleep Vík",
        drive: "About 1½ hr driving",
        image: stops.dyrholaey.image,
        text: "Catch whichever Skógar waterfall you missed, then let wind and surf decide the coast order. Dyrhólaey gives the wide overhead view; Reynisfjara is a short, controlled look only when the warning system allows it.",
        bullets: ["Best dawn stop: Skógafoss base", "Best family panorama: Dyrhólaey lower area", "Reynisfjara: stay high, held child, obey warning lights"]
      },
      {
        number: "03",
        date: "Thu · Sep 10",
        title: "Canyon east, then back west",
        meta: "Fjaðrárgljúfur → optional Reykjadalur → Reykjavík/KEF-side sleep",
        drive: "About 5 hr driving",
        image: stops.fjadrargljufur.image,
        text: "Drive one hour east for the canyon rim, then reverse toward the airport side. Reykjadalur is only for a dry, low-wind day with energy left; otherwise use Reykjavík for Perlan, the harbor, and dinner.",
        bullets: ["Do not continue to Jökulsárlón on this version", "Carrier for the canyon viewpoints", "Finish west before bed, regardless of flight time"]
      },
      {
        number: "04",
        date: "Fri · Sep 11",
        title: "Fly to mainland Europe",
        meta: "Return car at KEF · no long road leg",
        drive: "Airport transfer only",
        image: stops.kef.image,
        text: "The road trip is already finished. Allow rental return time and use any later departure for a Reykjavík breakfast or Reykjanes viewpoint—not a far-flung excursion.",
        bullets: ["Refuel before the airport", "Photograph the rental on return", "Keep passports and flight gear outside the road-trip luggage"]
      }
    ]
  },
  long: {
    title: "Four-night glacier extension",
    subtitle: "September 8–12 · recommended",
    distance: "~900 km",
    roadTime: "~14 hr",
    bases: "Skógar · Kirkjubæjarklaustur · west",
    order: ["kef", "seljalandsfoss", "skogafoss", "dyrholaey", "reynisfjara", "vik", "fjadrargljufur", "kirkju", "skaftafell", "jokulsarlon", "kirkju", "reykjadalur", "reykjavik", "kef"],
    sleeps: ["skogafoss", "kirkju", "reykjavik"],
    days: [
      {
        number: "01",
        date: "Tue · Sep 8",
        title: "Airport → the first waterfalls",
        meta: "KEF to Seljalandsfoss and Skógar · sleep near Skógar/Hvolsvöllur",
        drive: "About 3 hr driving",
        image: stops.seljalandsfoss.image,
        text: "Collect the car and go. Seljalandsfoss is the guaranteed payoff; add Gljúfrabúi only if conditions are calm, then reach the Skógar area for one more waterfall or an early dinner.",
        bullets: ["No Reykjavík hotel detour", "Front view is enough if spray and wind are high", "Sleep close to tomorrow’s first stop"]
      },
      {
        number: "02",
        date: "Wed · Sep 9",
        title: "Skógar → canyon country",
        meta: "Skógafoss, Dyrhólaey, Reynisfjara, Vík, Fjaðrárgljúfur · sleep Kirkjubæjarklaustur",
        drive: "About 2¼ hr driving",
        image: stops.dyrholaey.image,
        text: "This is the dense Ryan day. Start with waterfall mist, move through the cliff and black-sand coast, warm up in Vík, then finish on the Fjaðrárgljúfur rim before a short run to the hotel.",
        bullets: ["Windy coast: Dyrhólaey first, beach only if open", "Food and fuel in Vík", "Canyon can move to Sep 10 if the day runs long"]
      },
      {
        number: "03",
        date: "Thu · Sep 10",
        title: "Walk to ice → watch it drift",
        meta: "Skaftafell S1 trail, Jökulsárlón, Diamond Beach · sleep east-side base",
        drive: "About 3¾ hr driving",
        image: stops.jokulsarlon.image,
        text: "Use the park’s signed Skaftafellsjökull S1 trail for the morning glacier contact, then continue one hour to Jökulsárlón. Walk both the lagoon and Diamond Beach before returning west to the same general base.",
        bullets: ["S1: 4.1 km, 1–1½ hours, rated easy", "Skip a boat tour unless its age policy and schedule truly fit", "Carry food so lunch timing does not control the ice-light window"]
      },
      {
        number: "04",
        date: "Fri · Sep 11",
        title: "Weather recovery → protected finish",
        meta: "Return west via anything missed · sleep Reykjavík or near KEF",
        drive: "About 4 hr driving",
        image: stops.reykjadalur.image,
        text: "This is not an empty buffer. Revisit the best weather-missed stop, take the Reykjadalur hike if dry and energetic, or use Reykjavík’s Perlan and waterfront. Be west before dinner.",
        bullets: ["Move one missed coast stop here", "Reykjadalur is optional, never owed", "Choose KEF-side hotel for a very early Sep 12 flight"]
      },
      {
        number: "05",
        date: "Sat · Sep 12",
        title: "Fly to mainland Europe",
        meta: "Return car at KEF · onward flight",
        drive: "Airport transfer only",
        image: stops.kef.image,
        text: "The rental return and airport are now the only logistics. The glacier day is safely behind you and the Europe flight is not exposed to a cross-island drive.",
        bullets: ["Refuel before the airport", "Allow time for child-seat and luggage repack", "Keep the onward airline’s baggage rules handy"]
      }
    ]
  }
};

const map = L.map("route-map", { scrollWheelZoom: false, zoomControl: true });
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let routeLine;
let currentRoute = "long";
let activeStopId;
const markerLayer = L.layerGroup().addTo(map);
const markers = {};

function markerIcon(number, isSleep) {
  return L.divIcon({
    className: "route-marker-wrap",
    html: `<span class="route-marker${isSleep ? " sleep" : ""}">${number}</span>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });
}

function showStop(stopId) {
  const stop = stops[stopId];
  if (!stop) return;
  activeStopId = stopId;
  document.querySelectorAll(".route-marker").forEach((node) => node.classList.remove("active"));
  const markerNode = markers[stopId]?.getElement()?.querySelector(".route-marker");
  if (markerNode) markerNode.classList.add("active");

  const detail = document.querySelector("#map-detail");
  detail.innerHTML = `
    <img src="${stop.image}" alt="${stop.name}" />
    <div class="map-detail-body">
      <span>${stop.eyebrow}</span>
      <h3>${stop.name}</h3>
      <p>${stop.summary}</p>
      <dl>
        <div><dt>Time</dt><dd>${stop.duration}</dd></div>
        <div><dt>With baby</dt><dd>${stop.child}</dd></div>
        <div><dt>Why here</dt><dd>${stop.why}</dd></div>
      </dl>
      <div class="detail-links">
        <a href="${stop.mapUrl}" target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
        ${stop.videoUrl ? `<a href="${stop.videoUrl}" target="_blank" rel="noreferrer">Ryan chapter ↗</a>` : `<a href="#field-notes">Open field notes ↓</a>`}
      </div>
    </div>`;
}

function renderDays(route) {
  const dayList = document.querySelector("#day-list");
  dayList.innerHTML = route.days.map((day, index) => `
    <details class="day-card" ${index === 0 ? "open" : ""}>
      <summary>
        <span>${day.number}</span>
        <time>${day.date}</time>
        <div><strong>${day.title}</strong><small>${day.meta}</small></div>
        <b>Details</b>
      </summary>
      <div class="day-card-body">
        <div>
          <p><strong>${day.drive}.</strong> ${day.text}</p>
          <ul>${day.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
        </div>
        <img src="${day.image}" alt="${day.title}" loading="lazy" />
      </div>
    </details>`).join("");
}

function renderRoute(routeKey) {
  const route = routes[routeKey];
  currentRoute = routeKey;
  markerLayer.clearLayers();
  Object.keys(markers).forEach((key) => delete markers[key]);
  if (routeLine) routeLine.remove();

  const uniqueIds = [...new Set(route.order)];
  uniqueIds.forEach((stopId, index) => {
    const stop = stops[stopId];
    const marker = L.marker([stop.lat, stop.lon], {
      icon: markerIcon(index + 1, route.sleeps.includes(stopId)),
      title: stop.name,
      keyboard: true
    }).addTo(markerLayer);
    marker.on("click", () => showStop(stopId));
    markers[stopId] = marker;
  });

  const points = route.order.map((stopId) => [stops[stopId].lat, stops[stopId].lon]);
  routeLine = L.polyline(points, {
    color: "#d8663f",
    weight: 4,
    opacity: .9,
    dashArray: "1 9",
    lineCap: "round"
  }).addTo(map);
  map.fitBounds(routeLine.getBounds(), { padding: [28, 28] });

  document.querySelector("#route-summary").innerHTML = `
    <div><span>Selected field plan</span><strong>${route.title}</strong></div>
    <div><span>Dates</span><strong>${route.subtitle.split(" · ")[0]}</strong></div>
    <div><span>Road</span><strong>${route.distance} · ${route.roadTime}</strong></div>
    <div><span>Sleep line</span><strong>${route.bases}</strong></div>`;

  renderDays(route);
  showStop(uniqueIds[1] || uniqueIds[0]);

  document.querySelectorAll("[data-route]").forEach((button) => {
    const selected = button.dataset.route === routeKey;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", selected ? "true" : "false");
  });
  document.querySelectorAll("[data-route-select]").forEach((button) => {
    button.classList.toggle("active", button.dataset.routeSelect === routeKey);
  });

  window.setTimeout(() => map.invalidateSize(), 80);
}

document.querySelectorAll("[data-route]").forEach((button) => {
  button.addEventListener("click", () => renderRoute(button.dataset.route));
});

document.querySelectorAll("[data-route-select]").forEach((button) => {
  button.addEventListener("click", () => {
    renderRoute(button.dataset.routeSelect);
    document.querySelector("#map-plan").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderRoute(currentRoute);
