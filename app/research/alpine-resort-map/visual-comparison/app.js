const dialog = document.querySelector(".lightbox");
const dialogImage = dialog.querySelector("img");
const dialogCaption = dialog.querySelector("p");
const dialogOfficialLink = dialog.querySelector(".lightbox-meta a");

const officialPages = {
  setting: {
    forsthofgut: "https://www.forsthofgut.at/en/naturhotel-forsthofgut/",
    habachklause: "https://www.habachklause.com/en/",
    moargut: "https://www.moargut.com/en/",
  },
  room: {
    forsthofgut: "https://www.forsthofgut.at/en/rooms/",
    habachklause: "https://www.habachklause.com/en/rooms-offers/rooms-suites/3-room-suite-edelweiss",
    moargut: "https://www.moargut.com/suiten/suite-vergissmeinnicht/",
  },
  family: {
    forsthofgut: "https://www.forsthofgut.at/en/family/",
    habachklause: "https://www.habachklause.com/en/babies-kids-teens/babies-from-0-years",
    moargut: "https://www.moargut.com/en/family-holidays/holidays-with-baby-and-toddler/",
  },
  water: {
    forsthofgut: "https://www.forsthofgut.at/en/waldspa/family-kids/",
    habachklause: "https://www.habachklause.com/en/wellness-spa/water-world",
    moargut: "https://www.moargut.com/en/wellness/world-of-water/",
  },
  farm: {
    forsthofgut: "https://www.forsthofgut.at/en/family/minigut/",
    habachklause: "https://www.habachklause.com/en/family-farm-resort/farm-animals",
    moargut: "https://www.moargut.com/en/farm/",
  },
  dining: {
    forsthofgut: "https://www.forsthofgut.at/en/cuisine/",
    habachklause: "https://www.habachklause.com/en/culinary-delights/alpine-cuisine-restaurant",
    moargut: "https://www.moargut.com/en/cuisine/gourmet-full-board/",
  },
  mountain: {
    forsthofgut: "https://www.forsthofgut.at/en/nature-active/summeractive/",
    habachklause: "https://www.habachklause.com/en/experiences/excursions-adventures",
    moargut: "https://www.moargut.com/en/active/active-in-summer/",
  },
  adult: {
    forsthofgut: "https://www.forsthofgut.at/en/waldspa/adults-only/",
    habachklause: "https://www.habachklause.com/en/wellness-spa/adults-only-spa",
    moargut: "https://www.moargut.com/en/wellness/",
  },
};

const hotelFromImage = (source) => {
  if (source.includes("forsthofgut-")) return "forsthofgut";
  if (source.includes("habachklause-")) return "habachklause";
  return "moargut";
};

document.querySelectorAll(".photo-button").forEach((button) => {
  const image = button.querySelector("img");
  const hotel = hotelFromImage(image.src);
  const category = button.closest(".photo-category").getAttribute("aria-labelledby").replace("-label", "");
  const categoryName = button.closest(".photo-category").querySelector("h2").textContent;
  const officialUrl = officialPages[category][hotel];
  const officialLink = document.createElement("a");
  officialLink.className = "official-link";
  officialLink.href = officialUrl;
  officialLink.target = "_blank";
  officialLink.rel = "noreferrer";
  officialLink.textContent = `${categoryName} page ↗`;
  button.closest("figure").append(officialLink);

  button.addEventListener("click", () => {
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogCaption.textContent = button.dataset.caption;
    dialogOfficialLink.href = officialUrl;
    dialogOfficialLink.textContent = `${categoryName} on hotel site ↗`;
    dialog.showModal();
  });
});

dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
