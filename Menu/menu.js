// ================================
// Herfy Landing Page JavaScript
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Sticky Navbar
    // ==========================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    // ==========================
    // Smooth Scroll
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    // ==========================
    // Active Navbar Link
    // ==========================

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => item.classList.remove("active"));

            this.classList.add("active");

        });

    });


    // ==========================
    // Reveal Animation
    // ==========================

    const revealElements = document.querySelectorAll(".hero-content, .hero-image");

    const reveal = () => {

        revealElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (top < windowHeight - 100) {

                element.style.opacity = "1";
                element.style.transform = "translateY(0)";

            }

        });

    };

    reveal();

    window.addEventListener("scroll", reveal);


    // ==========================
    // Button Ripple Effect
    // ==========================

    const buttons = document.querySelectorAll(".btn-main, .btn-outline-custom, .contact-btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-5px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translateY(0px)";

        });

    });