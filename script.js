// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {

    document.getElementById("loader").style.display = "none";

});

// ==========================
// Sticky Header
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// ==========================
// Typing Animation
// ==========================

const text = [

    "SEO Expert",

    "Digital Marketing Specialist",

    "WordPress Developer",

    "Google Ads Expert",

    "Facebook Ads Expert",

    "Digital Marketing Mentor"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1500);

    }else{

        setTimeout(type,100);

    }

})();

// ==========================
// Scroll To Top
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

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

// ==========================
// Skills Animation
// ==========================

const bars=document.querySelectorAll(".progress span");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width=entry.target.style.width;

}

});

});

bars.forEach(bar=>{

let width=bar.style.width;

bar.style.width="0";

observer.observe(bar);

setTimeout(()=>{

bar.style.width=width;

},500);

});

// ==========================
// Reveal Animation
// ==========================

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

let top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.classList.add("show");

}

});

});

// ==========================
// Counter Animation
// ==========================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const inc=target/100;

if(c<target){

counter.innerText=Math.ceil(c+inc);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

// ==========================
// Dark Mode
// ==========================

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.className="darkBtn";

document.body.appendChild(darkBtn);

darkBtn.onclick=()=>{

document.body.classList.toggle("light");

};

// ==========================
// Smooth Navigation
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
