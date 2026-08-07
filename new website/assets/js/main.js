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

if(topBtn){

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};

}











/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if(menuBtn && navMenu){

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

}

/*=========================================
        PORTFOLIO FILTER
=========================================*/

console.log("Portfolio Filter Loaded");

const filterButtons = document.querySelectorAll(".portfolio-filter button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {
        console.log("Clicked:", button.dataset.filter);
        console.log(button.dataset.filter);

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioCards.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

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

if(modal && closeButton){

    openButtons.forEach(button=>{

        button.addEventListener("click",(e)=>{

            e.preventDefault();

            modal.classList.add("active");

        });

    });

    closeButton.addEventListener("click",()=>{

        modal.classList.remove("active");

    });

    modal.addEventListener("click",(e)=>{

        if(e.target===modal){

            modal.classList.remove("active");

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

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