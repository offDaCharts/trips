const dialog = document.querySelector(".lightbox");
const dialogImage = dialog.querySelector("img");
const dialogCaption = dialog.querySelector("p");

document.querySelectorAll(".photo-button").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogCaption.textContent = button.dataset.caption;
    dialog.showModal();
  });
});

dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
