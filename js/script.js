document.addEventListener("DOMContentLoaded", function () {
    const menuPanel = document.querySelector(".menu-panel");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            menuPanel.classList.add("visible");
        } else {
            menuPanel.classList.remove("visible");
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const toTop = document.getElementById("to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTop.classList.add("visible");
    } else {
        toTop.classList.remove("visible");
    }
});

toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


const sectionHeadings = document.querySelectorAll("section h2");

window.addEventListener("scroll", () => {
    sectionHeadings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            heading.classList.add("visible");
        } else {
            heading.classList.remove("visible");
        }
    });
});
