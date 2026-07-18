const params = new URLSearchParams(window.location.search);
const requestedId = params.get("id") || "gosausee";
const data = window.detailData[requestedId] || window.detailData.gosausee;
const activeId = window.detailData[requestedId] ? requestedId : "gosausee";

const text = (selector, value) => {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
};

document.title = `${data.title} · Alpine Thread`;
text("#detail-eyebrow", data.eyebrow);
text("#detail-title", data.title);
text("#detail-dek", data.dek);
text("#why-title", data.whyTitle);
text("#plan-intro", data.planIntro);

const heroImage = document.querySelector("#hero-image");
heroImage.src = data.hero.src;
heroImage.alt = data.hero.alt;
text("#hero-credit", data.hero.credit || "Trip research image");

document.querySelector("#detail-tags").innerHTML = data.tags
  .map(tag => `<span>${tag}</span>`)
  .join("");

document.querySelector("#fact-strip").innerHTML = data.facts
  .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
  .join("");

document.querySelector("#why-body").innerHTML = data.why
  .map(paragraph => `<p>${paragraph}</p>`)
  .join("");

document.querySelector("#editor-note").innerHTML = `
  <span>${data.note[0]}</span>
  <strong>${data.note[1]}</strong>
  <p>${data.note[2]}</p>
`;

document.querySelector("#detail-gallery").innerHTML = data.gallery
  .map(image => `
    <a href="${image.src}" target="_blank" rel="noreferrer" aria-label="Open full-size image: ${image.caption}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy" />
      <span>${image.caption}${image.credit ? ` · ${image.credit}` : ""}</span>
    </a>
  `)
  .join("");

document.querySelector("#timeline").innerHTML = data.schedule
  .map(([time, title, body]) => `
    <li>
      <time>${time}</time>
      <div><strong>${title}</strong><p>${body}</p></div>
    </li>
  `)
  .join("");

document.querySelector("#practical-grid").innerHTML = data.practical
  .map(([title, body, link], index) => `
    <article class="practical-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${title}</h3>
      <p>${body}</p>
      ${link ? `<a href="${link}" target="_blank" rel="noreferrer">Official details ↗</a>` : ""}
    </article>
  `)
  .join("");

document.querySelector("#tips-list").innerHTML = data.tips
  .map(tip => `<li>${tip}</li>`)
  .join("");

const relatedIds = data.related.filter(id => window.detailData[id]);
document.querySelector("#related-grid").innerHTML = relatedIds
  .map(id => {
    const item = window.detailData[id];
    return `
      <a class="related-card" href="./?id=${id}">
        <img src="${item.hero.src}" alt="${item.hero.alt}" loading="lazy" />
        <div><span>${item.eyebrow}</span><strong>${item.title}</strong><b>Open details ↗</b></div>
      </a>
    `;
  })
  .join("");

const ordered = window.detailOrder.filter(id => window.detailData[id]);
const currentIndex = ordered.indexOf(activeId);
const previousId = ordered[(currentIndex - 1 + ordered.length) % ordered.length];
const nextId = ordered[(currentIndex + 1) % ordered.length];
const previous = window.detailData[previousId];
const next = window.detailData[nextId];

const previousLink = document.querySelector("#previous-detail");
previousLink.href = `./?id=${previousId}`;
previousLink.querySelector("strong").textContent = `← ${previous.title}`;

const nextLink = document.querySelector("#next-detail");
nextLink.href = `./?id=${nextId}`;
nextLink.querySelector("strong").textContent = `${next.title} →`;
