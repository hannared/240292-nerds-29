const buttonContact = document.querySelector(".button-contact");
const contactPopup = document.querySelector(".modal-contact");
const contactClose = contactPopup.querySelector(".modal-close");
const contactName = contactPopup.querySelector(".contact-user-name");
const contactForm = contactPopup.querySelector(".contact-form");

if (buttonContact) {
    buttonContact.addEventListener("click", function(evt) {
        evt.preventDefault();
        contactPopup.classList.add("modal-show");
        contactName.focus();
    });
}
if (contactClose) {
    contactClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        contactPopup.classList.remove("modal-show");
        contactPopup.classList.remove("modal-error");
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", function(evt) {
        if (!contactName.value) {
            contactName.classList.add("missing-value-error");
            evt.preventDefault();
            contactPopup.classList.remove("modal-error");
            contactPopup.offsetWidth = contactPopup.offsetWidth;
            contactPopup.classList.add("modal-error");
        }
    });
}

window.addEventListener("keydown", function(evt) {
    if (evt.key === "Escape" && contactPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        contactPopup.classList.remove("modal-show");
        contactPopup.classList.remove("modal-error");

        contactName.classList.remove("missing-value-error");
    }
});