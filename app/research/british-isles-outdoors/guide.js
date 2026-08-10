(() => {
  const guide = window.outdoorGuide;
  if (!guide) return;

  const daysRoot = document.querySelector("#days-root");
  guide.days.forEach((day, index) => {
    const section = document.createElement("section");
    section.className = "day-block";
    section.id = `day-${index + 1}`;
    section.innerHTML = `
      <div class="day-copy">
        <span class="day-number">Day ${String(index + 1).padStart(2, "0")} · ${day.kicker}</span>
        <h2>${day.title}</h2>
        <p class="day-pitch">${day.pitch}</p>
        <div class="day-details">
          <div class="detail-row"><span>Do</span><b>${day.activity}</b></div>
          <div class="detail-row"><span>Baby fit</span><b>${day.baby}</b></div>
          <div class="detail-row"><span>Drive / base</span><b>${day.logistics}</b></div>
          <div class="detail-row"><span>Bad weather</span><b>${day.weather}</b></div>
        </div>
        <a class="official-link" href="${day.source.url}" target="_blank" rel="noreferrer">Official trail details ↗</a>
      </div>
      <div class="day-gallery">
        ${day.images.map((photo) => `
          <button class="photo-button" type="button" data-full="${photo.src}" data-alt="${photo.alt}" data-caption="${photo.caption}">
            <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
          </button>
        `).join("")}
      </div>`;
    daysRoot.append(section);
  });

  if (window.L) {
    const map = L.map("route-map", { scrollWheelZoom: false, zoomControl: true });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const points = guide.days.map((day) => day.coords);
    L.polyline(guide.route || points, { color: "#d36f46", weight: 4, opacity: .9, dashArray: "8 9" }).addTo(map);
    const bounds = L.latLngBounds(points);

    guide.days.forEach((day, index) => {
      const marker = L.marker(day.coords, {
        icon: L.divIcon({ className: "map-number", html: String(index + 1), iconSize: [36,36], iconAnchor: [18,18] })
      }).addTo(map);
      marker.bindPopup(`
        <div class="map-popup">
          <img src="${day.images[0].src}" alt="" />
          <div class="map-popup-copy">
            <small>Day ${String(index + 1).padStart(2, "0")}</small>
            <strong>${day.title}</strong>
            <p>${day.mapCopy}</p>
            <a href="#day-${index + 1}">Open the day ↓</a>
          </div>
        </div>`, { maxWidth: 260 });
    });
    map.fitBounds(bounds.pad(.12));
  }

  const dialog = document.querySelector("#photo-lightbox");
  const dialogImage = dialog?.querySelector("img");
  const dialogCaption = dialog?.querySelector("p");
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".photo-button");
    if (!button || !dialog || !dialogImage) return;
    dialogImage.src = button.dataset.full;
    dialogImage.alt = button.dataset.alt || "";
    dialogCaption.textContent = button.dataset.caption || "";
    dialog.showModal();
  });
  dialog?.querySelector(".lightbox-close")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
