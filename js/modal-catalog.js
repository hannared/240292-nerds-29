const buttons = document.querySelectorAll(".catalog-item-price-title");
const contactPopup = document.querySelector(".modal-catalog-item");
const contactClose = contactPopup.querySelector(".modal-close");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener("click", function(evt) {
        evt.preventDefault();
        contactPopup.classList.add("modal-show");
    });
}

if (contactClose) {
    contactClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        contactPopup.classList.remove("modal-show");
    });
}