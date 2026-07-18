const money = (amount) => `$${Number(amount).toLocaleString("en-US")}`;

const pathPartsForTrip = window.location.pathname.split("/").filter(Boolean);
const appPathIndex = pathPartsForTrip.indexOf("app");
const tripsPathIndex = appPathIndex >= 0 ? appPathIndex + 1 : pathPartsForTrip.lastIndexOf("trips");
const tripIdFromPath = pathPartsForTrip[tripsPathIndex + 1] || "austria-switzerland-germany";
const appBasePath =
  appPathIndex >= 0
    ? `/${pathPartsForTrip.slice(0, appPathIndex + 1).join("/")}`
    : `/${pathPartsForTrip.slice(0, tripsPathIndex).join("/")}`;
const siteBasePath = appPathIndex >= 0 ? `/${pathPartsForTrip.slice(0, appPathIndex).join("/")}` : appBasePath;
const withBasePath = (base, path) => `${base === "/" ? "" : base}${path}`;
const normalizeAppPaths = (value) => {
  if (Array.isArray(value)) return value.map(normalizeAppPaths);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeAppPaths(item)]));
  }
  if (typeof value === "string" && value.startsWith("/app/")) {
    return withBasePath(appBasePath, value.slice(4));
  }
  return value;
};
const sourceMap = new Map();
const response = await fetch(withBasePath(siteBasePath, `/data/${tripIdFromPath}-bookable.json?v=route-map-9`), { cache: "no-store" });
const trip = normalizeAppPaths(await response.json());
trip.sourceLinks.forEach((source) => sourceMap.set(source.label, source));

const sourceLinks = (labels) =>
  labels
    .map((label) => sourceMap.get(label))
    .filter(Boolean)
    .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
    .join("");

const imageCaption = (image) =>
  image.sourceUrl
    ? `<a href="${image.sourceUrl}" target="_blank" rel="noreferrer">${escapeHtml(image.caption || image.alt || "Image source")}</a>`
    : `<span>${escapeHtml(image.caption || image.alt || "")}</span>`;

const renderPhotoTiles = (images, className = "photo-grid") =>
  (images || [])
    .map(
      (image) => `
        <figure class="${className}__item">
          <img src="${image.url}" alt="${escapeHtml(image.alt || "")}" loading="lazy" />
          ${image.caption || image.sourceUrl ? `<figcaption>${imageCaption(image)}</figcaption>` : ""}
        </figure>
      `,
    )
    .join("");

const renderVisualStory = () => {
  if (!trip.visualStory?.length) return "";

  return `
    <section class="section visual-story-section">
      <div class="section-heading">
        <p class="eyebrow">See the trip first</p>
        <h2>Photo Story</h2>
      </div>
      <div class="visual-story">
        ${trip.visualStory
          .map(
            (chapter, index) => `
              <article class="visual-story-chapter ${index === 0 ? "feature" : ""}">
                <img src="${chapter.image}" alt="${escapeHtml(chapter.alt || "")}" loading="${index === 0 ? "eager" : "lazy"}" />
                <div>
                  <span>${escapeHtml(chapter.kicker || `Chapter ${index + 1}`)}</span>
                  <h3>${escapeHtml(chapter.title)}</h3>
                  <p>${escapeHtml(chapter.copy)}</p>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
};

const renderOverviewGallery = () => {
  if (!trip.overviewGallery?.length) return "";

  return `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Why it sells</p>
        <h2>Newfoundland In Pictures</h2>
      </div>
      <div class="photo-grid overview-photo-grid">${renderPhotoTiles(trip.overviewGallery)}</div>
    </section>
  `;
};

const renderPremiumStays = () => {
  if (!trip.premiumStayStrategy?.length) return "";

  return `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Resort / spa version</p>
        <h2>Really Nice Stay Swaps</h2>
      </div>
      <div class="premium-stay-grid">
        ${trip.premiumStayStrategy
          .map(
            (stay) => `
              <article>
                <a class="premium-stay-image" href="${stay.slug ? `./stays/${stay.slug}/` : stay.url}">
                  <img src="${stay.cardImage || stay.heroImage || stay.images?.[0]?.url || trip.overviewHeroImage}" alt="${escapeHtml(stay.cardAlt || stay.name)}" loading="lazy" />
                </a>
                <span>${escapeHtml(stay.base)}</span>
                <h3>${escapeHtml(stay.name)}</h3>
                <p class="premium-price">${escapeHtml(stay.priceDisplay || "Rate varies by date")}</p>
                <p>${escapeHtml(stay.vibe)}</p>
                <div class="premium-stay-meta">
                  <div><strong>Use it for</strong><em>${escapeHtml(stay.useFor)}</em></div>
                  <div><strong>Budget effect</strong><em>${escapeHtml(stay.budgetEffect)}</em></div>
                  <div><strong>Baby note</strong><em>${escapeHtml(stay.babyNote)}</em></div>
                </div>
                <div class="premium-actions">
                  ${stay.slug ? `<a href="./stays/${stay.slug}/">View photo story</a>` : ""}
                  <a href="${stay.url}" target="_blank" rel="noreferrer">Check stay</a>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
};

const renderPremiumStayPage = async (staySlug) => {
  const stay = trip.premiumStayStrategy?.find((item) => item.slug === staySlug);
  if (!stay) {
    document.body.innerHTML = `<main class="section"><h1>Stay not found</h1><p><a href="../../">Back to trip overview</a></p></main>`;
    return;
  }

  document.title = `${stay.name} · ${trip.name}`;
  document.querySelector("#hero").style.backgroundImage =
    `linear-gradient(180deg, rgba(11, 24, 21, 0.12), rgba(11, 24, 21, 0.78)), url("${stay.heroImage || stay.images?.[0]?.url || trip.overviewHeroImage}")`;
  document.querySelector("#eyebrow").textContent = `${stay.base} · Premium stay`;
  document.querySelector("#title").textContent = stay.name;
  document.querySelector("#subtitle").textContent = stay.vibe;
  document.querySelector("#summaryStats").innerHTML = `
    <article><span>Nightly price</span><strong>${escapeHtml(stay.priceDisplay || "Rate varies")}</strong></article>
    <article><span>Best role</span><strong>${escapeHtml(stay.useFor)}</strong></article>
    <article><span>Baby fit</span><strong>${escapeHtml(stay.babyNote)}</strong></article>
  `;
  document.querySelector("#stayDetail").innerHTML = `
    <section class="section stay-showcase-section">
      <div class="section-heading">
        <p class="eyebrow">Rooms + Amenities</p>
        <h2>Hotel Lookbook</h2>
      </div>
      <div class="stay-photo-story">
        ${renderPhotoTiles(stay.images || [], "stay-photo-story")}
      </div>
    </section>
    <section class="section stay-decision-grid">
      <article>
        <p class="eyebrow">Why this stay</p>
        <h2>The Upgrade Case</h2>
        <p class="lead-copy">${escapeHtml(stay.story || stay.vibe)}</p>
        ${stay.highlights ? `<ul class="moment-list">${bulletList(stay.highlights.map(escapeHtml))}</ul>` : ""}
      </article>
      <article>
        <p class="eyebrow">Price snapshot</p>
        <h2>Nightly Cost</h2>
        <div class="rate-card">
          <strong>${escapeHtml(stay.priceDisplay || "Rate varies by date")}</strong>
          <p>${escapeHtml(stay.priceNote || "Re-check exact dates before booking.")}</p>
        </div>
        <p><strong>Budget effect:</strong> ${escapeHtml(stay.budgetEffect)}</p>
        <p><strong>Booking posture:</strong> ${escapeHtml(stay.bookingNote || "Use the direct hotel page for current rates, cancellation rules, child policy, and room availability.")}</p>
        <div class="premium-actions">
          <a href="${stay.url}" target="_blank" rel="noreferrer">Open hotel page</a>
          <a href="../../">Back to itinerary</a>
        </div>
      </article>
      <article>
        <p class="eyebrow">Family logistics</p>
        <h2>Baby + Comfort Notes</h2>
        <p>${escapeHtml(stay.babyNote)}</p>
        <p>${escapeHtml(stay.logistics || "Confirm crib, room layout, parking, restaurant timing, and whether the nicest experiences work around nap windows.")}</p>
      </article>
      <article>
        <p class="eyebrow">Sources</p>
        <h2>Verify Before Booking</h2>
        <div class="source-pills">${sourceLinks(stay.sourceLinks || [])}</div>
      </article>
    </section>
  `;
};

const renderDayGallery = (day) => {
  if (!day.gallery?.length) return "";

  return `
    <section class="detail-panel day-photo-panel">
      <p class="eyebrow">Picture the day</p>
      <h2>Photo Set</h2>
      <div class="day-photo-grid">${renderPhotoTiles(day.gallery, "day-photo-grid")}</div>
    </section>
  `;
};

const renderCostRows = (items) =>
  items
    .map(([label, value]) => `<div><span>${label}</span><strong>${money(value)}</strong></div>`)
    .join("");

const bulletList = (items) => items.map((item) => `<li>${item}</li>`).join("");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const routePoints = () =>
  trip.dailyItinerary
    .filter((day) => day.mapPoint)
    .map((day) => ({
      day: day.day,
      slug: day.slug,
      title: day.title,
      date: day.date,
      label: day.mapPoint.label,
      heroImage: day.heroImage,
      snippet: day.why || day.primaryActivity || day.babyPlan,
      lat: Number(day.mapPoint.lat),
      lon: Number(day.mapPoint.lon),
    }));

const loadRouteCache = async () => {
  try {
    const response = await fetch(withBasePath(siteBasePath, `/data/routes/${tripIdFromPath}-route.json?v=route-map-9`), { cache: "no-store" });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
};

const renderRouteMap = (activeDay = null) => {
  const points = routePoints();
  if (points.length < 2) {
    return `<article class="route-map-card"><p>Map points are not available yet for this itinerary.</p></article>`;
  }

  const active = points.find((point) => point.day === activeDay);

  const activeSummary = active
    ? `Day ${String(active.day).padStart(2, "0")} · ${escapeHtml(active.date)} · ${escapeHtml(active.label)}`
    : `Full route · ${escapeHtml(trip.routeLabel)}`;

  const stopList = points
    .map(
      (point) => `
        <li class="${point.day === activeDay ? "active" : ""}">
          <span>Day ${String(point.day).padStart(2, "0")}</span>
          <strong>${escapeHtml(point.label)}</strong>
        </li>
      `,
    )
    .join("");

  return `
    <article class="route-map-card">
      <div class="route-map-copy">
        <p class="eyebrow">${active ? "Current location" : "Full route"}</p>
        <h3>${activeSummary}</h3>
        <p>${escapeHtml(trip.routeMap?.note || "Real OpenStreetMap route view with cached driving route geometry where available.")}</p>
      </div>
      <div class="route-map-layout">
        <div class="leaflet-route-map" role="img" aria-label="${escapeHtml(trip.name)} route map" data-active-day="${activeDay || ""}"></div>
        <ol class="route-stop-list">${stopList}</ol>
      </div>
    </article>
  `;
};

const ensureLeaflet = async () => {
  if (!document.querySelector('link[data-leaflet="true"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.dataset.leaflet = "true";
    document.head.append(link);
  }

  if (window.L) return window.L;

  await new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-leaflet="true"]');
    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.dataset.leaflet = "true";
    script.addEventListener("load", resolve, { once: true });
    script.addEventListener("error", reject, { once: true });
    document.head.append(script);
  });

  return window.L;
};

const initializeRouteMaps = async (activeDay = null) => {
  const containers = [...document.querySelectorAll(".leaflet-route-map")];
  if (!containers.length) return;

  const points = routePoints();
  if (points.length < 2) return;

  const L = await ensureLeaflet();
  const latLngs = points.map((point) => [point.lat, point.lon]);
  const routeCache = await loadRouteCache();
  const routeSegments = (routeCache?.segments || []).filter(
    (segment) => segment.mode !== "none" && Array.isArray(segment.geometry) && segment.geometry.length > 1,
  );
  const routeBoundsPoints = routeSegments.flatMap((segment) => segment.geometry);
  const spreadPoints = (map) => {
    const groups = [];
    const markerPoints = points.map((point) => ({
      ...point,
      layerPoint: map.latLngToLayerPoint([point.lat, point.lon]),
    }));

    markerPoints.forEach((point) => {
      const group = groups.find((candidate) => candidate.center.distanceTo(point.layerPoint) < 84);
      if (group) {
        group.points.push(point);
        group.center = group.points
          .reduce((sum, item) => sum.add(item.layerPoint), L.point(0, 0))
          .divideBy(group.points.length);
      } else {
        groups.push({ center: point.layerPoint, points: [point] });
      }
    });

    const placedPoints = groups.flatMap((group) => {
      if (group.points.length === 1) {
        return [
          {
            ...group.points[0],
            displayPoint: group.points[0].layerPoint,
            clustered: false,
          },
        ];
      }
      const radius = Math.min(132, 60 + group.points.length * 11);
      return group.points.map((point, index) => {
        const angle = -Math.PI / 2 + (Math.PI * 2 * index) / group.points.length;
        const displayPoint = L.point(
          group.center.x + Math.cos(angle) * radius,
          group.center.y + Math.sin(angle) * radius,
        );
        return {
          ...point,
          displayPoint,
          clustered: true,
        };
      });
    });

    const minimumSpacing = 58;
    for (let pass = 0; pass < 140; pass += 1) {
      let moved = false;
      for (let i = 0; i < placedPoints.length; i += 1) {
        for (let j = i + 1; j < placedPoints.length; j += 1) {
          const first = placedPoints[i];
          const second = placedPoints[j];
          const dx = second.displayPoint.x - first.displayPoint.x;
          const dy = second.displayPoint.y - first.displayPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 0.01;
          if (distance >= minimumSpacing) continue;

          const push = (minimumSpacing - distance) / 2;
          const ux = dx / distance;
          const uy = dy / distance;
          first.displayPoint = L.point(first.displayPoint.x - ux * push, first.displayPoint.y - uy * push);
          second.displayPoint = L.point(second.displayPoint.x + ux * push, second.displayPoint.y + uy * push);
          first.clustered = true;
          second.clustered = true;
          moved = true;
        }
      }
      if (!moved) break;
    }

    return placedPoints.map((point) => {
      const displayLatLng = map.layerPointToLatLng(point.displayPoint);
      return {
        ...point,
        displayLatLng: [displayLatLng.lat, displayLatLng.lng],
      };
    });
  };

  containers.forEach((container) => {
    if (container.dataset.initialized === "true") return;
    container.dataset.initialized = "true";

    const map = L.map(container, {
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    if (routeSegments.length) {
      routeSegments.forEach((segment) => {
        const isActiveLeg = activeDay && (segment.fromDay === activeDay || segment.toDay === activeDay);
        const isDirect = !segment.routed || segment.mode !== "car";
        L.polyline(segment.geometry, {
          className: `trip-route-line ${isActiveLeg ? "active" : ""}`,
          color: isActiveLeg ? "#d19b3d" : isDirect ? "#a45f42" : "#286a73",
          weight: isActiveLeg ? 7 : 5,
          opacity: isActiveLeg ? 0.98 : 0.88,
          dashArray: isDirect ? "8 8" : null,
          lineJoin: "round",
          lineCap: "round",
        })
          .bindPopup(
            `<strong>Day ${String(segment.fromDay).padStart(2, "0")} → Day ${String(segment.toDay).padStart(2, "0")}</strong><br>${escapeHtml(segment.label)}<br>${segment.routed ? `${segment.distanceKm} km · approx ${segment.durationMinutes} min driving` : `${segment.distanceKm} km reference line`}`,
          )
          .addTo(map);
      });
    } else {
      L.polyline(latLngs, {
        color: "#286a73",
        weight: 5,
        opacity: 0.9,
        lineJoin: "round",
        lineCap: "round",
      }).addTo(map);
    }

    let bounds = L.latLngBounds(routeBoundsPoints.length ? [...routeBoundsPoints, ...latLngs] : latLngs);
    map.fitBounds(bounds, { padding: [44, 44] });

    let displayPoints = spreadPoints(map);
    const displayLatLngs = displayPoints.map((point) => point.displayLatLng);
    bounds = L.latLngBounds([...(routeBoundsPoints.length ? routeBoundsPoints : latLngs), ...latLngs, ...displayLatLngs]);
    map.fitBounds(bounds, { padding: [44, 44] });
    const markerOverlay = document.createElement("div");
    markerOverlay.className = "route-marker-overlay";
    container.append(markerOverlay);

    let openDay = null;
    const concise = (value) => {
      const text = String(value || "").trim();
      return text.length > 132 ? `${text.slice(0, 129).trim()}...` : text;
    };

    const renderMarkerOverlay = () => {
      const updatedPoints = spreadPoints(map);
      const leaderLines = updatedPoints
        .filter((point) => point.clustered)
        .map((point) => {
          const start = map.latLngToContainerPoint([point.lat, point.lon]);
          const end = map.layerPointToContainerPoint(point.displayPoint);
          return `<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" />`;
        })
        .join("");
      const popupPoint = updatedPoints.find((point) => point.day === openDay);
      const markers = updatedPoints
        .map((point) => {
          const isActive = point.day === activeDay;
          const isOpen = point.day === openDay;
          const position = map.layerPointToContainerPoint(point.displayPoint);
          const title = `Day ${String(point.day).padStart(2, "0")} · ${escapeHtml(point.label)} · ${escapeHtml(point.title)}`;
          return `
            <button
              class="leaflet-day-pin route-day-label${isActive ? " active" : ""}${isOpen ? " open" : ""}"
              style="left: ${position.x}px; top: ${position.y}px;"
              type="button"
              data-route-day="${point.day}"
              title="${title}"
              aria-label="${title}"
              aria-expanded="${isOpen ? "true" : "false"}"
            ><span>${point.day}</span></button>
          `;
        })
        .join("");
      const popup = popupPoint
        ? (() => {
            const position = map.layerPointToContainerPoint(popupPoint.displayPoint);
            const mapSize = map.getSize();
            const horizontal = position.x > mapSize.x - 280 ? "left" : "right";
            const vertical = position.y > mapSize.y - 190 ? "up" : "down";
            const dayUrl = withBasePath(appBasePath, `/trips/${tripIdFromPath}/${popupPoint.slug}/?v=route-map-9`);
            return `
              <article
                class="route-pin-popover ${horizontal} ${vertical}"
                style="left: ${position.x}px; top: ${position.y}px;"
              >
                <img src="${escapeHtml(popupPoint.heroImage)}" alt="" />
                <div>
                  <p class="eyebrow">Day ${String(popupPoint.day).padStart(2, "0")} · ${escapeHtml(popupPoint.date)}</p>
                  <h4>${escapeHtml(popupPoint.title)}</h4>
                  <p>${escapeHtml(concise(popupPoint.snippet))}</p>
                  <a href="${dayUrl}">Open full day</a>
                </div>
              </article>
            `;
          })()
        : "";
      const active = updatedPoints.find((point) => point.day === activeDay);
      const activeRing = active
        ? (() => {
            const position = map.layerPointToContainerPoint(active.displayPoint);
            return `<span class="route-active-ring" style="left: ${position.x}px; top: ${position.y}px;"></span>`;
          })()
        : "";
      markerOverlay.innerHTML = `<svg aria-hidden="true">${leaderLines}</svg>${activeRing}${markers}${popup}`;
      markerOverlay.querySelectorAll("[data-route-day]").forEach((button) => {
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          const day = Number(button.dataset.routeDay);
          openDay = openDay === day ? null : day;
          renderMarkerOverlay();
        });
      });
      markerOverlay.querySelectorAll(".route-pin-popover").forEach((popover) => {
        popover.addEventListener("click", (event) => event.stopPropagation());
      });
    };

    renderMarkerOverlay();
    map.on("zoomend moveend", renderMarkerOverlay);
    map.on("click", () => {
      if (openDay !== null) {
        openDay = null;
        renderMarkerOverlay();
      }
    });

    setTimeout(() => map.invalidateSize(), 120);
  });
};

const renderOverview = async () => {
  document.title = `${trip.name} | Bookable Itinerary`;
  document.querySelector("#hero").style.backgroundImage =
    `linear-gradient(180deg, rgba(11, 24, 21, 0.1), rgba(11, 24, 21, 0.76)), url("${trip.overviewHeroImage || trip.dailyItinerary[6].heroImage}")`;
  document.querySelector("#eyebrow").textContent = `${trip.dates.depart} to ${trip.dates.return} · ${trip.travelers}`;
  document.querySelector("#title").textContent = trip.name;
  document.querySelector("#subtitle").textContent = trip.positioning;
  document.querySelector("#summaryStats").innerHTML = `
    <article><span>Exact flight pick</span><strong>${trip.flights.recommended.outbound.flight} / ${trip.flights.recommended.return.flight}</strong></article>
    <article><span>Planning total</span><strong>${money(trip.budget.estimatedTripTotal)}</strong></article>
    <article><span>Route</span><strong>${trip.routeLabel}</strong></article>
  `;
  document.querySelector("#summaryStats").insertAdjacentHTML("afterend", renderVisualStory() + renderOverviewGallery());
  document.querySelector("#routeRationale").innerHTML = trip.routeRationale.map((item) => `<li>${item}</li>`).join("");
  const routeMap = document.querySelector("#routeMap");
  if (routeMap) {
    routeMap.innerHTML = renderRouteMap();
  }
  document.querySelector("#flightCard").innerHTML = `
    <h3>${trip.flights.recommended.label}</h3>
    <p><strong>Outbound:</strong> ${trip.flights.recommended.outbound.date} · ${trip.flights.recommended.outbound.flight} · ${trip.flights.recommended.outbound.from} → ${trip.flights.recommended.outbound.to} · ${trip.flights.recommended.outbound.depart} → ${trip.flights.recommended.outbound.arrive}</p>
    <p><strong>Return:</strong> ${trip.flights.recommended.return.date} · ${trip.flights.recommended.return.flight} · ${trip.flights.recommended.return.from} → ${trip.flights.recommended.return.to} · ${trip.flights.recommended.return.depart} → ${trip.flights.recommended.return.arrive}</p>
    <p><strong>Cash snapshot:</strong> ${money(trip.flights.recommended.fareSnapshotPerAdultRoundTrip)} per adult round trip; ${money(trip.flights.recommended.totalFlightBudget)} total flight budget including infant-in-lap estimate.</p>
    <p>${trip.flights.recommended.infantNote}</p>
    <div class="source-pills">${sourceLinks(trip.flights.recommended.sourceLinks || [])}</div>
  `;
  document.querySelector("#budgetGrid").innerHTML = renderCostRows([
    ["Flights", trip.budget.flightTotal],
    ["Lodging", trip.budget.lodgingTotal],
    ["Car + transport", trip.budget.carTransportTotal],
    ["Activities", trip.budget.activitiesTotal],
    ["Food", trip.budget.foodTotal],
    ["Trip total", trip.budget.estimatedTripTotal],
  ]);
  document.querySelector("#baseGrid").innerHTML = trip.bases
    .map(
      (base) => `
        <article>
          <span>${base.dates} · ${base.nights} night${base.nights === 1 ? "" : "s"}</span>
          <h3>${base.name}</h3>
          <p><strong>${base.hotel}</strong> · ${base.room}</p>
          <p>${money(base.nightlyRate)} / night · ${money(base.total)} total</p>
          <p>${base.why}</p>
          <a href="${base.bookingUrl}" target="_blank" rel="noreferrer">Book / verify rate</a>
        </article>
      `,
    )
    .join("");
  document.querySelector("#baseGrid").closest(".section").insertAdjacentHTML("afterend", renderPremiumStays());
  document.querySelector("#dayRows").innerHTML = trip.dailyItinerary
    .map(
      (day) => `
        <a class="itinerary-row" href="./${day.slug}/">
          <img src="${day.thumbnailImage || day.heroImage}" alt="" />
          <span>Day ${String(day.day).padStart(2, "0")}</span>
          <strong>${day.date}: ${day.title}</strong>
          <em>${money(day.dayTotal)}</em>
        </a>
      `,
    )
    .join("");
  document.querySelector("#sourceGrid").innerHTML = trip.sourceLinks
    .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
    .join("");
  await initializeRouteMaps();
};

const renderDay = async (daySlug) => {
  const day = trip.dailyItinerary.find((item) => item.slug === daySlug);
  if (!day) {
    document.body.innerHTML = `<main class="section"><h1>Day not found</h1><p><a href="../">Back to trip overview</a></p></main>`;
    return;
  }
  const previous = trip.dailyItinerary[day.day - 2];
  const next = trip.dailyItinerary[day.day];
  document.title = `${trip.name} · Day ${day.day}`;
  document.querySelector("#hero").style.backgroundImage =
    `linear-gradient(180deg, rgba(11, 24, 21, 0.12), rgba(11, 24, 21, 0.78)), url("${day.heroImage}")`;
  document.querySelector("#eyebrow").textContent = `${day.date} · Day ${String(day.day).padStart(2, "0")}`;
  document.querySelector("#title").textContent = day.title;
  document.querySelector("#subtitle").textContent = `${day.overnight} · ${money(day.dayTotal)} planned day cost`;
  document.querySelector("#summaryStats").innerHTML = `
    <article><span>Overnight</span><strong>${day.overnight}</strong></article>
    <article><span>Day cost</span><strong>${money(day.dayTotal)}</strong></article>
    <article><span>Baby mode</span><strong>${day.babyPlan}</strong></article>
  `;
  document.querySelector("#dayDetail").innerHTML = `
    <section class="detail-panel map-detail-panel">
      <p class="eyebrow">Where we are</p>
      <h2>Route Position</h2>
      ${renderRouteMap(day.day)}
    </section>
    ${renderDayGallery(day)}
    <section class="detail-panel">
      <p class="eyebrow">${day.pitchTitle || "Why this day is worth it"}</p>
      <h2>The Pitch</h2>
      <p class="lead-copy">${day.why || day.primaryActivity}</p>
      ${day.moments ? `<ul class="moment-list">${bulletList(day.moments)}</ul>` : ""}
    </section>
    <section class="detail-panel">
      <h2>What We Do</h2>
      <p><strong>Transport:</strong> ${day.transport}</p>
      <p><strong>Main plan:</strong> ${day.primaryActivity}</p>
      <p><strong>Backup:</strong> ${day.backupActivity}</p>
      <p><strong>Food:</strong> ${day.foodPlan}</p>
      <p><strong>Booking priority:</strong> ${day.bookingPriority}</p>
    </section>
    <section class="detail-panel">
      <h2>Cost Stack</h2>
      <div class="cost-stack">
        ${renderCostRows([
          ["Lodging", day.lodgingCost],
          ["Transport", day.transportCost],
          ["Activities", day.activityCost],
          ["Food", day.foodCost],
          ["Day total", day.dayTotal],
        ])}
      </div>
      ${day.costNote ? `<p class="cost-note">${day.costNote}</p>` : ""}
    </section>
    <section class="detail-panel">
      <h2>Sources</h2>
      <div class="source-pills">${sourceLinks(day.sourceLinks)}</div>
      <p><a href="${day.imageSource}" target="_blank" rel="noreferrer">Image/source reference</a></p>
    </section>
  `;
  document.querySelector("#dayNav").innerHTML = `
    ${previous ? `<a href="../${previous.slug}/">Previous day</a>` : "<span></span>"}
    <a href="../">Back to overview</a>
    ${next ? `<a href="../${next.slug}/">Next day</a>` : "<span></span>"}
  `;
  await initializeRouteMaps(day.day);
};

const pageKind = document.body.dataset.page;
if (pageKind === "overview") {
  await renderOverview();
} else if (pageKind === "stay") {
  const parts = window.location.pathname.split("/").filter(Boolean);
  await renderPremiumStayPage(parts.at(-1));
} else {
  const parts = window.location.pathname.split("/").filter(Boolean);
  await renderDay(parts.at(-1));
}
