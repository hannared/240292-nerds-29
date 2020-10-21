const catalogItem = document.querySelectorAll(".catalog-item");
const catalogItemHeader = document.querySelectorAll(".catalog-item-header");

catalogItem.forEach(element => {
    element.addEventListener("mouseout", showOut);
    element.addEventListener("mouseover", showOver);
});

function showOver(e) {
    console.log(e.target);
}

function showOut(e) {

}