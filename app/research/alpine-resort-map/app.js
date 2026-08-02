const assetRoot = "../../assets/alpine-family-resorts/";

const hotels = [
  {
    id: "forsthofgut",
    number: "01",
    name: "Naturhotel Forsthofgut",
    shortName: "Forsthofgut",
    area: "Leogang · Salzburg",
    address: "Hütten 2, 5771 Leogang",
    lat: 47.4396558,
    lng: 12.7156898,
    label: "Best all-around balance",
    status: "live",
    statusText: "Live checkout price",
    nightly: "€852.50",
    nightlyValue: 852.5,
    rateBasis: "exact family nightly",
    price: "€3,410",
    priceLine: "4-night total · Sep 11–15",
    priceDetail: "Nature Room Berglust · 2 adults + child age 1 · ForsthofgutKÜCHE half board",
    caveat: "The €3,410 Berglust rate was the cheapest instant-bookable option returned. Landidyll appeared at €3,330 but only on request. Local tax may be added at checkout.",
    intro: "A design-led nature hotel that does not make you choose between a serious adult retreat and a genuinely useful family resort.",
    verdict: "Choose it when the hotel itself should feel special, but you still want easy mountain days rather than four days inside a sealed resort bubble.",
    familyRead: "Excellent shared family facilities; supervised Rocky’s Kids Club starts at age 2, so the one-year-old is too young for standard club care.",
    meals: "Half board",
    babyFit: "Strong; club from 2",
    animals: "miniGUT farm + horses",
    spa: "5,700 m² · split family/adults",
    highlights: [
      "waldSPA Family & Kids with a 21 m indoor pool, baby pool and three slides",
      "miniGUT with sheep, rabbits, ponies, pigs, goats, donkeys and alpacas",
      "Separate 3,500 m² adults-only spa with 25 m infinity pool",
      "Riding stable plus indoor and outdoor arena",
      "Direct Leogang mountain access and a beautifully resolved alpine design",
    ],
    images: [
      { src: "forsthofgut-farm.jpg", alt: "Forsthofgut children’s farm", caption: "miniGUT children’s farm" },
      { src: "forsthofgut-spa.jpg", alt: "Forsthofgut family spa pool", caption: "waldSPA Family & Kids" },
      { src: "forsthofgut-resort.jpg", alt: "Forsthofgut alpine resort grounds", caption: "Leogang resort setting" },
    ],
    website: "https://www.forsthofgut.at/",
    booking: "https://www.forsthofgut.at/en/booking/",
    sources: [
      { label: "Family + miniGUT", url: "https://www.forsthofgut.at/en/family/" },
      { label: "waldSPA Family & Kids", url: "https://www.forsthofgut.at/en/waldspa/family-kids/" },
      { label: "Rooms + published rates", url: "https://www.forsthofgut.at/en/rooms/" },
    ],
  },
  {
    id: "moargut",
    number: "02",
    name: "Familien Natur Resort Moar Gut",
    shortName: "Moar Gut",
    area: "Großarl · Salzburg",
    address: "Moargasse 22, 5611 Großarl",
    lat: 47.2134383,
    lng: 13.1936141,
    label: "Best baby-first luxury",
    status: "request",
    statusText: "Published lead · family quote required",
    nightly: "€630+*",
    nightlyValue: 630,
    rateBasis: "double-room nightly lead",
    price: "No family checkout total",
    priceLine: "Current published double-room lead",
    priceDetail: "A July 2026 hotel review reports rooms from €630 per night, including full board and childcare. The official engine returned no family inventory for September, even across multiple four- and seven-night searches.",
    caveat: "Use €630 only as a floor, not as a 2-adult + infant quote. Moar Gut invited a tailored request. Its official FAQ says quoted prices are per suite up to full occupancy and include gourmet full board; local tax is €3.15 per adult per day.",
    intro: "The most purpose-built family luxury resort here: 46 suites on a car-free, ten-hectare estate that grew from an organic farm.",
    verdict: "Choose it when baby care and frictionless full-board family life matter more than getting the lowest transparent online price.",
    familyRead: "The strongest one-year-old fit in the set: baby care begins at 30 days, baby equipment is extensive, and the daily program runs 9 a.m.–9 p.m.",
    meals: "Gourmet full board",
    babyFit: "Exceptional; care from 30 days",
    animals: "Organic farm + riding stable",
    spa: "Nature spa + 25 m pool",
    highlights: [
      "Baby care from 30 days to age 2; separate childcare programs beyond that",
      "Organic baby buffet, cots, changing gear, bottle equipment, carriers and strollers",
      "Nature Children’s Farm, horses, indoor riding arena and carriage rides",
      "25 m outdoor infinity pool, indoor family pool and natural swimming lake",
      "Only 46 family suites on a car-free ten-hectare resort",
    ],
    images: [
      { src: "moargut-resort.jpg", alt: "Moar Gut pool and mountain setting", caption: "Nature spa and mountain setting" },
      { src: "moargut-family.jpg", alt: "Family time at Moar Gut", caption: "Family-first resort life" },
      { src: "moargut-spa.jpg", alt: "Moar Gut spa and wellness area", caption: "Wellness and spa" },
    ],
    website: "https://www.moargut.com/en/",
    booking: "https://booking.moargut.com/",
    sources: [
      { label: "Official resort overview", url: "https://www.moargut.com/en/moar-gut/" },
      { label: "Suites + inclusions", url: "https://www.moargut.com/en/suites-offers/suites/" },
      { label: "Pricing + baby FAQ", url: "https://www.moargut.com/en/faq/" },
      { label: "Current €630 nightly lead", url: "https://moneyweek.com/spending-it/travel-holidays/review-moar-gut-is-a-first-class-choice-for-a-family-holiday-in-austria" },
    ],
  },
  {
    id: "edelweiss",
    number: "03",
    name: "DAS EDELWEISS Salzburg Mountain Resort",
    shortName: "DAS EDELWEISS",
    area: "Großarl · Salzburg",
    address: "Unterbergstraße 65, 5611 Großarl",
    lat: 47.2426454,
    lng: 13.1948027,
    label: "Best water-world resort",
    status: "request",
    statusText: "Published family offer",
    nightly: "€923.75*",
    nightlyValue: 923.75,
    rateBasis: "family-package nightly",
    price: "€3,695 / room",
    priceLine: "FamilyMOMENTS · 4–7 nights",
    priceDetail: "Published starting price valid through Oct 31, 2026; exact Sep 11–15 family total requires a request.",
    caveat: "The €3,695 figure is the hotel’s published starting price for its FamilyMOMENTS room package, not a date-locked checkout total. Infant care from age 0 is available for an extra charge; included Kids Club care starts at age 3.",
    intro: "A polished five-star mountain resort with the biggest indoor-water-world energy on this list and direct village/lift convenience.",
    verdict: "Choose it for bad-weather-proof pools, slides, restaurants and spa—especially if resort amenities matter more than an intimate farm atmosphere.",
    familyRead: "Very strong shared facilities for a toddler, but standard included supervision starts at age 3; younger care is an added-cost service.",
    meals: "EDELWEISS culinary delights",
    babyFit: "Strong; paid care from 0",
    animals: "Not the core proposition",
    spa: "7,000 m² · five-slide water park",
    highlights: [
      "7,000 m² Mountain Spa with distinct family and adults-only areas",
      "Five slides over three levels; the longest is 105 m",
      "Baby pool, sports pool and year-round indoor water park",
      "FamilyMOMENTS includes a private-spa treatment for the adults",
      "At the Panoramabahn and near the village core—easier than a remote estate",
    ],
    images: [
      { src: "edelweiss-resort.jpg", alt: "Family in a room at DAS EDELWEISS", caption: "Family rooms and suites" },
      { src: "edelweiss-spa.jpg", alt: "DAS EDELWEISS Mountain Spa", caption: "7,000 m² Mountain Spa" },
      { src: "edelweiss-family.jpg", alt: "Family moment at DAS EDELWEISS", caption: "Five-star family resort" },
    ],
    website: "https://www.edelweiss-grossarl.com/en/",
    booking: "https://www.edelweiss-grossarl.com/en/accommodations-offers/offers/offer-details/familymoments",
    sources: [
      { label: "FamilyMOMENTS offer", url: "https://www.edelweiss-grossarl.com/en/accommodations-offers/offers/offer-details/familymoments" },
      { label: "Family hotel details", url: "https://www.edelweiss-grossarl.com/en/family-time/luxury-family-hotel-salzburger-land-austria" },
      { label: "Family Mountain Spa", url: "https://www.edelweiss-grossarl.com/en/mountain-spa/family-spa-hotel-austria" },
    ],
  },
  {
    id: "habachklause",
    number: "04",
    name: "Habachklause Familien Bauernhof Resort",
    shortName: "Habachklause",
    area: "Bramberg am Wildkogel · Salzburg",
    address: "Habach 17, 5733 Bramberg am Wildkogel",
    lat: 47.2465206,
    lng: 12.3210542,
    label: "Best transparent value",
    status: "live",
    statusText: "Live checkout price",
    nightly: "€667.60",
    nightlyValue: 667.6,
    rateBasis: "exact family nightly",
    price: "€2,670.40",
    priceLine: "4-night total · Sep 11–15",
    priceDetail: "Edelweiß three-room family suite · 2 adults + child age 1 · non-alcoholic all-inclusive",
    caveat: "The official engine showed €2,646 room price plus €24.40 listed taxes and fees. This was the only instant-bookable room category returned for the exact family search.",
    intro: "A small, family-run farm resort that trades grand-lobby drama for unusually complete baby care, all-inclusive ease and hands-on outdoor space.",
    verdict: "Choose it when you want the practical benefits of a Kinderhotel and farm resort, but at a smaller scale and a materially lower live price.",
    familyRead: "Outstanding: daily baby and child care, indoor play, a 4,000 m² outdoor area, animal feeding and family wellness are core inclusions.",
    meals: "Non-alcoholic all-inclusive",
    babyFit: "Exceptional; daily baby care",
    animals: "Working farm program",
    spa: "Family wellness + adults-only",
    highlights: [
      "Just 40 rooms and more than 100 years of family ownership",
      "Daily baby and child care plus age-aware activities",
      "Farm animals, feeding, nature programs and large outdoor play grounds",
      "Water playground, family wellness and an adults-only retreat",
      "Three-room suite gives the one-year-old a genuinely separate sleep setup",
    ],
    images: [
      { src: "habachklause-resort.jpg", alt: "Habachklause resort and play grounds", caption: "Resort and 4,000 m² outdoor area" },
      { src: "habachklause-farm.jpg", alt: "Farm life at Habachklause", caption: "Farm and animal experiences" },
      { src: "habachklause-room.jpg", alt: "Edelweiß family suite at Habachklause", caption: "Edelweiß family suite" },
    ],
    website: "https://www.habachklause.com/en",
    booking: "https://www.habachklause.com/en/rooms-offers/rooms-suites",
    sources: [
      { label: "Official family resort", url: "https://www.habachklause.com/en" },
      { label: "Rooms + suites", url: "https://www.habachklause.com/en/rooms-offers/rooms-suites" },
      { label: "Summer + farm experiences", url: "https://www.habachklause.com/en/experiences/summer" },
    ],
  },
  {
    id: "stanglwirt",
    number: "05",
    name: "Bio- und Wellnessresort Stanglwirt",
    shortName: "Stanglwirt",
    area: "Going am Wilden Kaiser · Tyrol",
    address: "Kaiserweg 1, 6353 Going am Wilden Kaiser",
    lat: 47.5156787,
    lng: 12.3437818,
    label: "Best full-scale luxury resort",
    status: "live",
    statusText: "Exact family package",
    nightly: "€708",
    nightlyValue: 708,
    rateBasis: "exact family nightly",
    price: "€2,832",
    priceLine: "4 nights · Sep 13–17",
    priceDetail: "Family downtime package · studio · 2 adults + up to 2 children under 7",
    caveat: "The qualifying package begins September 13, so this comparison shifts two nights later than the target window. A suite starts at €4,060. Confirm board details and any local tax before payment.",
    intro: "The most grown-up grand resort of the five: a Wilder Kaiser institution with an organic farm, Lipizzaner stud and a vast wellness world.",
    verdict: "Choose it when the adults’ hotel experience matters as much as the family infrastructure—and when Munich is likely to be the arrival or departure airport.",
    familyRead: "Strong family resort facilities and a dedicated children’s world, though the exact care setup for a one-year-old should be confirmed directly.",
    meals: "Package inclusions; confirm board",
    babyFit: "Strong facilities; confirm care age",
    animals: "Organic farm + Lipizzaners",
    spa: "12,000 m² wellness world",
    highlights: [
      "Around 12,000 m² of wellness with separate family areas",
      "Dedicated children’s water world with pools, cinema and long slide",
      "Organic dairy farm, children’s farm and in-house alpine cheese production",
      "Austria’s first private Lipizzaner stud, with 24 purebred horses",
      "Wilder Kaiser and Kitzbühel access plus serious tennis and golf facilities",
    ],
    images: [
      { src: "stanglwirt-resort.jpg", alt: "Stanglwirt below the Wilder Kaiser", caption: "Wilder Kaiser resort setting" },
      { src: "stanglwirt-horses.jpg", alt: "Lipizzaner horses at Stanglwirt", caption: "Private Lipizzaner stud" },
      { src: "stanglwirt-spa.webp", alt: "Rock pool at Stanglwirt", caption: "Rock and brine wellness world" },
    ],
    website: "https://www.stanglwirt.com/",
    booking: "https://www.stanglwirt.com/en/offers/family-downtime-with-your-little-ones.html",
    sources: [
      { label: "Exact family package", url: "https://www.stanglwirt.com/en/offers/family-downtime-with-your-little-ones.html" },
      { label: "Organic farming", url: "https://www.stanglwirt.com/en/about-us/farming.html" },
      { label: "Children’s water world", url: "https://www.stanglwirt.com/en/wellnesshotel/water-worlds/childrens-water-world.html" },
    ],
  },
];

const modal = document.querySelector("#resort-modal");
const modalContent = document.querySelector("#modal-content");
const resortGrid = document.querySelector("#resort-grid");
const mapList = document.querySelector("#map-list");
const scorecardBody = document.querySelector("#scorecard-body");
const rateBars = document.querySelector("#rate-bars");
let lastFocusedElement = null;

const imageUrl = (image) => `${assetRoot}${image.src}`;
const mapsUrl = (hotel) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hotel.lat},${hotel.lng}`)}`;

function resortCard(hotel) {
  return `
    <article class="resort-card ${hotel.status === "live" ? "is-live" : "is-request"}">
      <button class="card-open" type="button" data-open-hotel="${hotel.id}" aria-label="Open details for ${hotel.name}">
        <div class="card-image">
          <img src="${imageUrl(hotel.images[0])}" alt="${hotel.images[0].alt}" loading="lazy" />
          <span class="card-number">${hotel.number}</span>
          <span class="card-label">${hotel.label}</span>
        </div>
        <div class="card-body">
          <p class="card-area">${hotel.area}</p>
          <h3>${hotel.shortName}</h3>
          <p class="card-intro">${hotel.intro}</p>
          <div class="card-price">
            <span>Starting at · normalized rate</span>
            <strong>${hotel.nightly}<sup>/night</sup></strong>
            <small>${hotel.price} · ${hotel.priceLine}</small>
          </div>
          <div class="status ${hotel.status}"><i></i>${hotel.statusText}</div>
          <span class="card-cta">See gallery + full details <b>↗</b></span>
        </div>
      </button>
    </article>
  `;
}

resortGrid.innerHTML = hotels.map(resortCard).join("");

mapList.innerHTML = `
  <div class="map-list-heading">
    <div><p class="section-label">The shortlist</p><h3>Choose a hotel</h3></div>
    <button type="button" id="fit-all">Fit all</button>
  </div>
  ${hotels
    .map(
      (hotel) => `
        <button class="map-hotel" type="button" data-open-hotel="${hotel.id}">
          <img src="${imageUrl(hotel.images[0])}" alt="" />
          <span><b>${hotel.number} · ${hotel.shortName}</b><small>${hotel.area}</small><em>${hotel.nightly} / night</em></span>
        </button>`,
    )
    .join("")}
`;

scorecardBody.innerHTML = hotels
  .map(
    (hotel) => `
      <tr data-open-hotel="${hotel.id}" tabindex="0" role="button" aria-label="Open ${hotel.name}">
        <th scope="row"><span>${hotel.number}</span>${hotel.shortName}</th>
        <td><strong>${hotel.nightly} / night</strong><small>${hotel.price} · ${hotel.rateBasis}</small></td>
        <td>${hotel.meals}</td>
        <td>${hotel.babyFit}</td>
        <td>${hotel.animals}</td>
        <td>${hotel.spa}</td>
      </tr>`,
  )
  .join("");

const highestNightly = Math.max(...hotels.map((hotel) => hotel.nightlyValue));
rateBars.innerHTML = [...hotels]
  .sort((a, b) => a.nightlyValue - b.nightlyValue)
  .map(
    (hotel) => `
      <button type="button" class="rate-row" data-open-hotel="${hotel.id}">
        <span class="rate-name"><b>${hotel.shortName}</b><small>${hotel.rateBasis}</small></span>
        <span class="rate-track"><i style="width:${Math.round((hotel.nightlyValue / highestNightly) * 100)}%"></i></span>
        <strong>${hotel.nightly}<small>/night</small></strong>
      </button>`,
  )
  .join("");

function modalMarkup(hotel) {
  return `
    <div class="modal-hero">
      <img id="modal-main-image" src="${imageUrl(hotel.images[0])}" alt="${hotel.images[0].alt}" />
      <div class="modal-hero-overlay">
        <p>${hotel.number} · ${hotel.area}</p>
        <h2 id="modal-title">${hotel.name}</h2>
        <span>${hotel.label}</span>
      </div>
    </div>

    <div class="modal-thumbs" aria-label="Hotel photo gallery">
      ${hotel.images
        .map(
          (image, index) => `
            <button type="button" data-gallery-index="${index}" class="${index === 0 ? "active" : ""}" aria-label="Show ${image.caption}">
              <img src="${imageUrl(image)}" alt="" />
              <span>${image.caption}</span>
            </button>`,
        )
        .join("")}
    </div>

    <div class="modal-body">
      <div class="modal-lead">
        <p>${hotel.intro}</p>
        <aside class="modal-price">
          <span>Starting at · normalized</span>
          <strong>${hotel.nightly}<small> / night</small></strong>
          <p>${hotel.price} · ${hotel.priceLine}</p>
          <small class="status ${hotel.status}"><i></i>${hotel.statusText}</small>
        </aside>
      </div>

      <div class="quote-detail">
        <span>What was priced</span>
        <p>${hotel.priceDetail}</p>
        <small>${hotel.caveat}</small>
      </div>

      <div class="modal-columns">
        <div>
          <p class="modal-kicker">Why it earns the stint</p>
          <h3>${hotel.verdict}</h3>
          <ul>${hotel.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <aside>
          <p class="modal-kicker">With a one-year-old</p>
          <p>${hotel.familyRead}</p>
          <dl>
            <div><dt>Meals</dt><dd>${hotel.meals}</dd></div>
            <div><dt>Animals</dt><dd>${hotel.animals}</dd></div>
            <div><dt>Spa</dt><dd>${hotel.spa}</dd></div>
          </dl>
        </aside>
      </div>

      <div class="modal-actions">
        <a class="button button-primary" href="${hotel.booking}" target="_blank" rel="noreferrer">Check hotel price ↗</a>
        <a class="button button-outline" href="${mapsUrl(hotel)}" target="_blank" rel="noreferrer">Map + directions ↗</a>
      </div>

      <div class="modal-sources">
        <span>Official sources</span>
        ${hotel.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label} ↗</a>`).join("")}
      </div>
    </div>
  `;
}

function openModal(hotelId, trigger = null) {
  const hotel = hotels.find((item) => item.id === hotelId);
  if (!hotel) return;

  lastFocusedElement = trigger || document.activeElement;
  modalContent.innerHTML = modalMarkup(hotel);
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-panel").scrollTop = 0;
  modal.querySelector(".modal-close").focus();

  const mainImage = modal.querySelector("#modal-main-image");
  modal.querySelector(".modal-thumbs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-index]");
    if (!button) return;
    const image = hotel.images[Number(button.dataset.galleryIndex)];
    mainImage.src = imageUrl(image);
    mainImage.alt = image.alt;
    modal.querySelectorAll("[data-gallery-index]").forEach((item) => item.classList.toggle("active", item === button));
  });
}

function closeModal() {
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-open-hotel]");
  if (opener) openModal(opener.dataset.openHotel, opener);
  if (event.target.closest("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
  const row = event.target.closest("tr[data-open-hotel]");
  if (row && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openModal(row.dataset.openHotel, row);
  }
});

const map = L.map("map", { scrollWheelZoom: false, minZoom: 7, zoomControl: true });

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const bounds = L.latLngBounds(hotels.map((hotel) => [hotel.lat, hotel.lng]));
const markers = new Map();

hotels.forEach((hotel) => {
  const icon = L.divIcon({
    className: "photo-marker-shell",
    html: `<div class="photo-marker"><img src="${imageUrl(hotel.images[0])}" alt="" /><span>${hotel.number}</span></div>`,
    iconSize: [58, 68],
    iconAnchor: [29, 62],
    tooltipAnchor: [0, -56],
  });
  const marker = L.marker([hotel.lat, hotel.lng], { icon, riseOnHover: true }).addTo(map);
  marker.bindTooltip(
    `<div class="map-tooltip"><img src="${imageUrl(hotel.images[0])}" alt="" /><div><b>${hotel.shortName}</b><span>${hotel.area}</span><strong>Starting at ${hotel.nightly} / night</strong><small>Tap pin for full details</small></div></div>`,
    { direction: "top", offset: [0, -4], opacity: 1, className: "resort-tooltip" },
  );
  marker.on("click", () => openModal(hotel.id));
  markers.set(hotel.id, marker);
});

L.polyline(
  [
    [hotels[1].lat, hotels[1].lng],
    [hotels[2].lat, hotels[2].lng],
  ],
  { color: "#c46c4f", weight: 3, opacity: 0.75, dashArray: "7 7" },
).addTo(map);

function fitAll() {
  map.fitBounds(bounds, { padding: [54, 54] });
}

document.querySelector("#fit-all").addEventListener("click", fitAll);
window.addEventListener("resize", () => map.invalidateSize());
fitAll();
