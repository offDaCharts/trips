const rooms = [
  {
    slug: "bergbalance",
    eyebrow: "Current lean · strongest view claim",
    name: "Family Suite “Bergbalance”",
    price: "€3,780",
    usd: "≈ $4,372",
    base: "Plain Half Board is €3,780",
    area: "52 m²",
    capacity: "4–5 people",
    separation: "Child room + lounge",
    cooling: "Gentle room cooling",
    summary: "Warm loden, hotel-forest wood and direct Leogang views make this the most elevated of the three available family suites.",
    read: "The €160 premium over Glück buys the strongest mountain-view language, lounge seating, two extra square metres and another child bed. It is a reasonable splurge if the room’s atmosphere is already pulling you in.",
    features: ["Balcony with direct mountain views", "King bed + separate child room", "Bunk bed plus a single child bed", "Spacious bathroom + separate WC", "Living area with lounge seating", "Gentle cooling; layouts vary by location"],
    captions: ["Primary bedroom", "Children’s bunk + single room", "Marble bathroom", "Lounge area", "Official room sketch"]
  },
  {
    slug: "glueck",
    eyebrow: "Best like-for-like value",
    name: "Family Suite “Glück”",
    price: "€3,620",
    usd: "≈ $4,187",
    base: "Plain Half Board is €3,620",
    area: "50 m²",
    capacity: "3–4 people",
    separation: "Two bedrooms",
    cooling: "Gentle room cooling",
    summary: "Clear room separation, hotel-forest wood and a marble bathroom make this the polished family option without Bergbalance’s premium.",
    read: "The rational alternative to Bergbalance. It keeps cooling, a separate child room and the pale-wood finish while saving €160; the compromise is weaker view wording, no lounge and one fewer child bed.",
    features: ["Balcony or terrace with mountain views", "Primary room + child room with bunk bed", "Marble bath with double vanity, shower + tub", "Modern coffered wood paneling", "Gentle in-room cooling", "AquaClean toilet; minibar for a charge; coffee + kettle"],
    captions: ["Primary bedroom", "Marble bathroom", "Children’s bunk room", "Official room sketch"]
  },
  {
    slug: "heimatgefuehl",
    eyebrow: "Most room for the money",
    name: "Family Suite “Heimatgefühl”",
    price: "€3,620",
    usd: "≈ $4,187",
    base: "Plain Half Board is €3,620",
    area: "60 m²",
    capacity: "5–6 people",
    separation: "Child room + living room",
    cooling: "No climate-control",
    summary: "Two bedrooms, a separate living area and two bathrooms create the easiest daily routine of the shortlist.",
    read: "Best pure spec sheet. It costs the same as Glück and is 10 m² larger, but it has no cooling and the exact layout depends on its location.",
    features: ["Balcony with Leogang mountain views", "Primary room + child room with two bunk beds", "Separate living area", "Two separate bathrooms", "Oak floor + hayflower wallpaper", "Minibar for a charge; coffee machine + kettle"],
    captions: ["Primary bedroom", "Living area and child-room connection", "Desk and media area", "Bathroom", "Children’s bunk room", "Official room sketch"]
  }
];

const roomList = document.querySelector("#room-list");
const assetRoot = "../../../../assets/forsthofgut-room-options";

roomList.innerHTML = rooms.map((room, roomIndex) => {
  const images = room.captions.map((caption, index) => {
    const number = String(index + 1).padStart(2, "0");
    const src = `${assetRoot}/${room.slug}/${room.slug}-${number}.jpg`;
    const isPlan = index === room.captions.length - 1;
    return `<button class="gallery-image${isPlan ? " plan-image" : ""}" type="button" data-room-index="${roomIndex}" data-image-index="${index}" aria-label="Open ${room.name}, ${caption}">
      <img src="${src}" alt="${room.name}: ${caption}" loading="lazy" decoding="async" />
      <span>${String(index + 1).padStart(2, "0")} · ${caption}${isPlan ? " ↗" : ""}</span>
    </button>`;
  }).join("");

  return `<article class="room-chapter" id="${room.slug}">
    <div class="room-heading">
      <div><p class="section-label">${String(roomIndex + 1).padStart(2, "0")} / ${room.eyebrow}</p><span class="availability-pill">Available · Sep 14–18</span><h3>${room.name}</h3></div>
      <div class="room-price"><strong>${room.price}</strong><span>${room.usd}</span><small>${room.base}</small></div>
    </div>
    <div class="room-facts" aria-label="${room.name} facts">
      <span><small>Size</small>${room.area}</span><span><small>Capacity</small>${room.capacity}</span><span><small>Sleep</small>${room.separation}</span><span><small>Temperature</small>${room.cooling}</span>
    </div>
    <div class="room-story"><div><p class="room-summary">${room.summary}</p><p class="room-read"><strong>Our read:</strong> ${room.read}</p></div><ul>${room.features.map(feature => `<li>${feature}</li>`).join("")}</ul></div>
    <div class="room-gallery" aria-label="All official ${room.name} gallery images">${images}</div>
    <div class="gallery-hint"><span>Swipe the gallery →</span><span>${room.captions.length} official images · tap to enlarge</span></div>
  </article>`;
}).join("");

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("figcaption");
let activeRoom = 0;
let activeImage = 0;

function showImage(roomIndex, imageIndex) {
  activeRoom = roomIndex;
  const room = rooms[roomIndex];
  activeImage = (imageIndex + room.captions.length) % room.captions.length;
  const number = String(activeImage + 1).padStart(2, "0");
  lightboxImage.src = `${assetRoot}/${room.slug}/${room.slug}-${number}.jpg`;
  lightboxImage.alt = `${room.name}: ${room.captions[activeImage]}`;
  lightboxCaption.textContent = `${room.name} · ${room.captions[activeImage]} · ${activeImage + 1} of ${room.captions.length}`;
}

document.querySelectorAll(".gallery-image").forEach(button => {
  button.addEventListener("click", () => {
    showImage(Number(button.dataset.roomIndex), Number(button.dataset.imageIndex));
    lightbox.showModal();
    document.body.classList.add("modal-open");
  });
});

function closeLightbox() {
  lightbox.close();
  document.body.classList.remove("modal-open");
}

lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".prev").addEventListener("click", () => showImage(activeRoom, activeImage - 1));
lightbox.querySelector(".next").addEventListener("click", () => showImage(activeRoom, activeImage + 1));
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
lightbox.addEventListener("close", () => document.body.classList.remove("modal-open"));
document.addEventListener("keydown", event => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") showImage(activeRoom, activeImage - 1);
  if (event.key === "ArrowRight") showImage(activeRoom, activeImage + 1);
});
