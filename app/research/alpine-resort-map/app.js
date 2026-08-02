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
    statusText: "5-night projection from live quote",
    nightly: "€852.50",
    nightlyValue: 852.5,
    rateBasis: "live nightly benchmark",
    price: "€4,262.50",
    priceLine: "5-night planning total · Sep 11–16",
    priceDetail: "Nature Room Berglust · 2 adults + child age 1 · ForsthofgutKÜCHE half board",
    caveat: "The €4,262.50 planning total is the checked €852.50 nightly benchmark multiplied by five. The original live four-night Berglust quote was €3,410; local tax may be added at checkout, and a fresh five-night quote may differ.",
    intro: "A design-led nature hotel that does not make you choose between a serious adult retreat and a genuinely useful family resort.",
    verdict: "Choose it when the hotel itself should feel special, but you still want easy mountain days rather than five days inside a sealed resort bubble.",
    familyRead: "Excellent shared family facilities; supervised Rocky’s Kids Club starts at age 2, so the one-year-old is too young for standard club care.",
    meals: "Half board",
    mealPlan: "Breakfast + afternoon snack + 5-course dinner",
    foodCoverage: {
      breakfast: "included",
      lunch: "not included",
      afternoon: "included",
      dinner: "included",
      childDrinks: "not included",
      infantCare: "not included",
    },
    valueGap: "Allow for lunch, drinks and any childcare for the one-year-old. The afternoon KüchenGRUSS may be enough on lighter days.",
    knownAddOn: "No fixed food add-on published",
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
      { label: "Food + resort inclusions", url: "https://www.forsthofgut.at/en/rooms/included-services/?consent_edit=1" },
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
    status: "live",
    statusText: "5-night projection from nearby quote",
    nightly: "€1,040",
    nightlyValue: 1040,
    rateBasis: "live nightly benchmark",
    price: "€5,200",
    priceLine: "5-night planning total · Sep 13–18",
    priceDetail: "Suite Vergissmeinnicht · 2 adults + child age 1 · gourmet full board. Suite Lilie and Suite Lavendel were shown at the same starting total.",
    caveat: "The €5,200 planning total is the checked €1,040 nightly benchmark multiplied by five. The original engine result was €4,160 for Sep 13–17; a fresh five-night quote may differ. Local tax of €3.15 per adult per day is excluded: €31.50 for two adults over five nights.",
    intro: "The most purpose-built family luxury resort here: 46 suites on a car-free, ten-hectare estate that grew from an organic farm.",
    verdict: "Choose it when baby care and frictionless full-board family life matter more than getting the lowest transparent online price.",
    familyRead: "The strongest one-year-old fit in the set: baby care begins at 30 days, baby equipment is extensive, and the daily program runs 9 a.m.–9 p.m.",
    meals: "Gourmet full board",
    mealPlan: "Breakfast + lunch + afternoon desserts + 6-course dinner",
    foodCoverage: {
      breakfast: "included",
      lunch: "included",
      afternoon: "included",
      dinner: "included",
      childDrinks: "included",
      infantCare: "included",
    },
    valueGap: "Adult drinks, optional sports lessons and local tax remain extra; core meals, baby food, child drinks and infant care are bundled.",
    knownAddOn: "+ €31.50 local tax",
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
      { label: "Full-board + childcare inclusions", url: "https://www.moargut.com/en/suites-offers/included-services/" },
      { label: "Pricing + baby FAQ", url: "https://www.moargut.com/en/faq/" },
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
    price: "€4,618.75 / room",
    priceLine: "5-night planning total · Sep 11–16",
    priceDetail: "Projected from the published FamilyMOMENTS starting rate valid through Oct 31, 2026; an exact Sep 11–16 family total requires a request.",
    caveat: "The €4,618.75 planning total is the published €923.75 nightly package benchmark multiplied by five, not a date-locked checkout total. Infant care from age 0 is available for an extra charge; included Kids Club care starts at age 3.",
    intro: "A polished five-star mountain resort with the biggest indoor-water-world energy on this list and direct village/lift convenience.",
    verdict: "Choose it for bad-weather-proof pools, slides, restaurants and spa—especially if resort amenities matter more than an intimate farm atmosphere.",
    familyRead: "Very strong shared facilities for a toddler, but standard included supervision starts at age 3; younger care is an added-cost service.",
    meals: "Half board on this offer",
    mealPlan: "Breakfast + 4-course dinner",
    foodCoverage: {
      breakfast: "included",
      lunch: "not included",
      afternoon: "not included",
      dinner: "included",
      childDrinks: "not included",
      infantCare: "paid",
    },
    valueGap: "Allow for lunch, drinks and infant care. Care under age 3 costs €25 for one hour, €50 for two or €60 for three.",
    knownAddOn: "+ €300 for five 3-hour infant-care sessions",
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
      { label: "Official included services", url: "https://www.edelweiss-grossarl.com/en/accommodations-offers/inclusive-services" },
      { label: "Infant-care prices", url: "https://www.edelweiss-grossarl.com/en/family-time/luxury-family-hotel-salzburger-land-austria/edelweiss-children-youth-area" },
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
    statusText: "5-night projection from live quote",
    nightly: "€667.60",
    nightlyValue: 667.6,
    rateBasis: "live nightly benchmark",
    price: "€3,338",
    priceLine: "5-night planning total · Sep 11–16",
    priceDetail: "Edelweiß three-room family suite · 2 adults + child age 1 · non-alcoholic all-inclusive",
    caveat: "The €3,338 planning total is the checked €667.60 nightly benchmark multiplied by five. The original official-engine result was €2,646 room price plus €24.40 listed taxes and fees for four nights; a fresh five-night quote may differ.",
    intro: "A small, family-run farm resort that trades grand-lobby drama for unusually complete baby care, all-inclusive ease and hands-on outdoor space.",
    verdict: "Choose it when you want the practical benefits of a Kinderhotel and farm resort, but at a smaller scale and a materially lower live price.",
    familyRead: "Outstanding: daily baby and child care, indoor play, a 4,000 m² outdoor area, animal feeding and family wellness are core inclusions.",
    meals: "Non-alcoholic all-inclusive",
    mealPlan: "Breakfast + lunch + afternoon food + dinner",
    foodCoverage: {
      breakfast: "included",
      lunch: "included",
      afternoon: "included",
      dinner: "included",
      childDrinks: "included",
      infantCare: "included",
    },
    valueGap: "Alcohol and anything ordered from table service or the Kristallbar cost extra; the self-serve juice bar and baby-food bar are included.",
    knownAddOn: "No required meal add-on",
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
      { label: "Food + drink inclusions", url: "https://www.habachklause.com/en/culinary-delights/catering-all-inclusive-vip" },
      { label: "Baby-care inclusions", url: "https://www.habachklause.com/en/rooms-offers/included-services" },
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
    statusText: "5-night projection from exact package",
    nightly: "€708",
    nightlyValue: 708,
    rateBasis: "package nightly benchmark",
    price: "€3,540",
    priceLine: "5-night planning total · Sep 13–18",
    priceDetail: "Family downtime package · studio · 2 adults + up to 2 children under 7",
    caveat: "The €3,540 planning total is the checked €708 package-night benchmark multiplied by five. The original official offer was a four-night package within Sep 13–18; a five-night quote may differ. Breakfast is included, but dinner is not: published Dreiklang prices add €154 nightly, or €770 over five nights.",
    intro: "The most grown-up grand resort of the five: a Wilder Kaiser institution with an organic farm, Lipizzaner stud and a vast wellness world.",
    verdict: "Choose it when the adults’ hotel experience matters as much as the family infrastructure—and when Munich is likely to be the arrival or departure airport.",
    familyRead: "Strong facilities. This package includes the crèche for children over 12 months from 2–5 p.m.; registration is required the day before.",
    meals: "Breakfast only",
    mealPlan: "Luxury breakfast; lunch and dinner extra",
    foodCoverage: {
      breakfast: "included",
      lunch: "not included",
      afternoon: "kids only",
      dinner: "not included",
      childDrinks: "not included",
      infantCare: "included",
    },
    valueGap: "Allow for lunch, dinner and drinks. Five Dreiklang dinners raise the five-night planning cost from €3,540 to €4,310 before lunch and beverages.",
    knownAddOn: "+ €770 for five hotel dinners",
    babyFit: "Included crèche from 12 months",
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
      { label: "Published dinner prices", url: "https://www.stanglwirt.com/en/hotel/agbs/general-terms-and-conditions.html" },
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
const mealMatrixBody = document.querySelector("#meal-matrix-body");
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
            <span>Family rate · normalized</span>
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
        <td>${hotel.mealPlan}</td>
        <td>${hotel.babyFit}</td>
        <td><strong>${hotel.knownAddOn}</strong><small>${hotel.valueGap}</small></td>
        <td>${hotel.animals}<small>${hotel.spa}</small></td>
      </tr>`,
  )
  .join("");

const coverageLabels = {
  included: { symbol: "✓", label: "Included", className: "included" },
  paid: { symbol: "€", label: "Paid add-on", className: "paid" },
  "not included": { symbol: "—", label: "Not included", className: "missing" },
  "kids only": { symbol: "Kids", label: "Children only", className: "partial" },
};

function coverageCell(value) {
  const item = coverageLabels[value];
  return `<span class="coverage ${item.className}" aria-label="${item.label}"><b>${item.symbol}</b><small>${item.label}</small></span>`;
}

mealMatrixBody.innerHTML = hotels
  .map(
    (hotel) => `
      <tr data-open-hotel="${hotel.id}" tabindex="0" role="button" aria-label="Open ${hotel.name}">
        <th scope="row"><span>${hotel.number}</span>${hotel.shortName}<small>${hotel.nightly} / night</small></th>
        <td>${coverageCell(hotel.foodCoverage.breakfast)}</td>
        <td>${coverageCell(hotel.foodCoverage.lunch)}</td>
        <td>${coverageCell(hotel.foodCoverage.afternoon)}</td>
        <td>${coverageCell(hotel.foodCoverage.dinner)}</td>
        <td>${coverageCell(hotel.foodCoverage.childDrinks)}</td>
        <td>${coverageCell(hotel.foodCoverage.infantCare)}</td>
        <td class="value-gap"><strong>${hotel.knownAddOn}</strong><small>${hotel.valueGap}</small></td>
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
          <span>Family rate · normalized</span>
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

      <div class="modal-value">
        <div>
          <span>Included meal plan</span>
          <strong>${hotel.mealPlan}</strong>
        </div>
        <div>
          <span>Known add-on</span>
          <strong>${hotel.knownAddOn}</strong>
        </div>
        <p>${hotel.valueGap}</p>
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
