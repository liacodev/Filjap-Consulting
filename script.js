
// =====================================
// FILJAP CONSULTING
// WEBSITE INTERACTIONS
// =====================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


// CLOSE MENU WHEN A NAVIGATION LINK IS CLICKED

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {
        closeMenu();
    });

});


// CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", function(event) {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
    }

});


// CLOSE MENU WHEN SCREEN IS RESIZED TO DESKTOP

window.addEventListener("resize", function() {

    if (window.innerWidth > 800) {
        closeMenu();
    }

});


// AUTOMATIC COPYRIGHT YEAR

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// SMOOTH SCROLL FOR INTERNAL LINKS

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});
