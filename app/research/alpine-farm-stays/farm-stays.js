const filterButtons = document.querySelectorAll(".filter-button");
const stayCards = document.querySelectorAll(".stay-card");
const emptyState = document.querySelector(".filter-empty");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    stayCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.tags.split(" ").includes(filter);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    emptyState.hidden = visibleCount !== 0;
  });
});
