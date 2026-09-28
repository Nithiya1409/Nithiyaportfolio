/* =========================================
   THREE-DOT NAVIGATION
========================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");


/* OPEN / CLOSE MENU */

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        navMenu.classList.toggle("active");

    });

}


/* =========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function (event) {

    if (
        navMenu &&
        menuButton &&
        !navMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        navMenu.classList.remove("active");

    }

});


/* =========================================
   CLOSE MENU AFTER SELECTING A SECTION
========================================= */

if (navMenu) {

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

        });

    });

}


/* =========================================
   PROJECT VIEW BUTTONS
========================================= */

const projectButtons =
    document.querySelectorAll(".project-button");


projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const projectName =
            button.getAttribute("data-project");

        const projectDetails =
            document.getElementById(
                projectName + "-details"
            );


        if (!projectDetails) {
            return;
        }


        /* Close all other project details */

        document
            .querySelectorAll(".project-details")
            .forEach(function (details) {

                if (details !== projectDetails) {

                    details.classList.remove("active");

                }

            });


        /* Toggle selected project */

        projectDetails.classList.toggle("active");


        /* Change button text */

        if (projectDetails.classList.contains("active")) {

            button.textContent = "Hide Project";

        } else {

            button.textContent = "View Project";

        }


        /* Reset other button text */

        projectButtons.forEach(function (otherButton) {

            const otherProject =
                otherButton.getAttribute("data-project");

            const otherDetails =
                document.getElementById(
                    otherProject + "-details"
                );


            if (
                otherButton !== button &&
                otherDetails &&
                !otherDetails.classList.contains("active")
            ) {

                otherButton.textContent = "View Project";

            }

        });

    });

});


/* =========================================
   CLOSE PROJECT DETAILS WHEN CLICKING
   ANOTHER PROJECT BUTTON
========================================= */

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const currentProject =
            button.getAttribute("data-project");

        document
            .querySelectorAll(".project-details")
            .forEach(function (details) {

                const detailsProject =
                    details.id.replace("-details", "");

                if (
                    detailsProject !== currentProject &&
                    details.classList.contains("active")
                ) {

                    details.classList.remove("active");

                }

            });

    });

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active-link");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active-link");

        }

    });

});


/* =========================================
   PREVENT EMPTY FORM SUBMISSION
========================================= */

const contactForm =
    document.querySelector("#contact form");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const message =
            document.getElementById("message");


        if (
            !name.value.trim() ||
            !email.value.trim() ||
            !message.value.trim()
        ) {

            event.preventDefault();

            alert("Please fill in all the fields.");

        }

    });

}
