// To add click event to menu icon on mobile view

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector(".nav-list");

    menuIcon.addEventListener("click", function() {
        navList.classList.toggle("show");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".nav-list a");

    // Add click event to navbar links
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove("active"));

            // Add active class to the clicked link
            this.classList.add("active");
        });
    });

    // Add scroll event to change navbar background color
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});



// To add fading effect to containers when it load

document.addEventListener('DOMContentLoaded', function () {
    var containers = document.querySelectorAll('.container');

    containers.forEach(function (container) {
        container.classList.add('loaded');
    });
});


// to add arrow button to web page

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scroll-to-top");

    // Show or hide the scroll-to-top button based on scroll position
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.opacity = "1";
        } else {
            scrollToTopButton.style.opacity = "0";
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});