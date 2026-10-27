const autoType = document.querySelector(".auto-type");

if (autoType) {

    var typed = new Typed(".auto-type", {
        strings: [
            "SEO Expert",
            "WordPress Developer",
            "Digital Marketing Mentor",
            "Google Ads Expert",
            "Facebook Ads Expert"
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });

}


const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    };

}





/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/*=========================================*
        PORTFOLIO FILTER
        All = First 6 Projects Only
        Category = All Projects
*=========================================*/

const filterButtons = document.querySelectorAll(".portfolio-filter button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove Active Class */
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add Active Class */
        button.classList.add("active");

        /* Get Selected Filter */
        const filter = button.dataset.filter;

        portfolioCards.forEach((card, index) => {

            /* =========================
               ALL BUTTON
               Only First 6 Projects
            ========================== */

            if (filter === "all") {

                if (index < 6) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            }

            /* =========================
               CATEGORY BUTTON
               Show ALL Matching Projects
            ========================== */

            else if (card.classList.contains(filter)) {

                card.style.display = "block";

            }

            /* =========================
               OTHER PROJECTS HIDE
            ========================== */

            else {

                card.style.display = "none";

            }

        });

    });

});






/*=========================================
        PROJECT MODAL
=========================================*/

const modal = document.getElementById("projectModal");
const openButtons = document.querySelectorAll(".project-btn");
const closeButton = document.querySelector(".close-modal");

if (modal && closeButton) {

    openButtons.forEach(button => {

        button.addEventListener("click", (e) => {

            e.preventDefault();

            modal.classList.add("active");

        });

    });

    closeButton.addEventListener("click", () => {

        modal.classList.remove("active");

    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("active");

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            modal.classList.remove("active");

        }

    });

}


/*=========================================
        SKILL BAR ANIMATION
=========================================*/

const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress-bar");

let skillsAnimated = false;

window.addEventListener("scroll", () => {

    if (!skillSection || skillsAnimated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        progressBars.forEach(bar => {

            if (bar.classList.contains("html")) {
                bar.style.width = "85%";
            }

            if (bar.classList.contains("css")) {
                bar.style.width = "80%";
            }

            if (bar.classList.contains("javascript")) {
                bar.style.width = "75%";
            }

            if (bar.classList.contains("wordpress")) {
                bar.style.width = "90%";
            }

            if (bar.classList.contains("seo")) {
                bar.style.width = "95%";
            }

        });

        skillsAnimated = true;

    }

});


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 80;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector("#stats");

if (statsSection) {

    let counterStarted = false;

    window.addEventListener("scroll", () => {

        const top = statsSection.getBoundingClientRect().top;

        if (top < window.innerHeight - 100 && !counterStarted) {

            startCounter();

            counterStarted = true;

        }

    });

}

/* =========================================
   SCROLL PROGRESS BAR
========================================= */

const scrollProgress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width = scrollPercentage + "%";

});

/* =========================================
   PREMIUM LOADING SCREEN
========================================= */

window.addEventListener("load", () => {

    const pageLoader = document.querySelector(".page-loader");

    if (pageLoader) {

        setTimeout(() => {

            pageLoader.classList.add("hide");

        }, 1800);

    }

});

/* =========================================
   MOUSE GLOW EFFECT
========================================= */

const mouseGlow = document.querySelector(".mouse-glow");

if (mouseGlow) {

    document.addEventListener("mousemove", (e) => {

        mouseGlow.style.left = e.clientX + "px";

        mouseGlow.style.top = e.clientY + "px";

        mouseGlow.style.opacity = "1";

    });

}



/*=========================================
        EMAILJS INITIALIZATION
=========================================*/

emailjs.init({
    publicKey: "CaqEs1fhS5Bbptl0t"
});

/*=========================================
        CONTACT FORM VALIDATION
=========================================*/

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const submitButton =
            contactForm.querySelector("button[type='submit']");


        /* Clear previous message */

        formMessage.textContent = "";
        formMessage.className = "form-message";


        /* Name */

        if (name.length < 2) {

            formMessage.textContent =
                "Please enter your name.";

            formMessage.classList.add("error");

            return;

        }


        /* Email */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.classList.add("error");

            return;

        }


        /* Subject */

        if (subject.length < 3) {

            formMessage.textContent =
                "Please enter a subject.";

            formMessage.classList.add("error");

            return;

        }


        /* Message */

        if (message.length < 10) {

            formMessage.textContent =
                "Please write at least 10 characters.";

            formMessage.classList.add("error");

            return;

        }


        /* Loading */

        submitButton.disabled = true;

        submitButton.textContent = "Sending...";


        /*=========================================
        EMAILJS SEND
=========================================*/

        emailjs.send(
            "service_rahmat",
            "template_rahmat",
            {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        )
            .then(function (response) {

                formMessage.textContent =
                    "✓ Message sent successfully! I'll get back to you soon.";

                formMessage.classList.add("success");

                contactForm.reset();

            })
            .catch(function (error) {

                console.error("EmailJS Error:", error);

                formMessage.textContent =
                    "✕ Message could not be sent. Please try again.";

                formMessage.classList.add("error");

            })
            .finally(function () {

                submitButton.disabled = false;

                submitButton.textContent = "Send Message";

            });

    });

}
