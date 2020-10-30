const catalogButtons = document.querySelectorAll(".catalog-item-price-title");
const catalogPopup = document.querySelector(".modal-catalog-item");
if (catalogPopup) {
    const catalogContactClose = catalogPopup.querySelector(".modal-close");

    for (let i = 0; i < catalogButtons.length; i++) {
        const button = catalogButtons[i];

        button.addEventListener("click", function(evt) {
            evt.preventDefault();
            catalogPopup.classList.add("modal-show");
        });
    }

    if (catalogContactClose) {
        catalogContactClose.addEventListener("click", function(evt) {
            evt.preventDefault();
            catalogPopup.classList.remove("modal-show");
        });
    }

}