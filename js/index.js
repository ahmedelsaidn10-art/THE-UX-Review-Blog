const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sideBar = document.getElementById("sideBar");

openMenu.addEventListener("click", () => {
    sideBar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    sideBar.classList.remove("active");
});