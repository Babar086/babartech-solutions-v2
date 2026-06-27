// ==========================
// BABARTECH SOLUTIONS V2
// script.js
// ==========================

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.display = "none";

    }, 1200);

});

// ==========================
// Scroll Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// Sticky Header
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.1)";

    }

});

// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML='<i class="fas fa-sun"></i>';

    }else{

        themeBtn.innerHTML='<i class="fas fa-moon"></i>';

    }

});

// ==========================
// Login Form
// ==========================

const loginForm=document.querySelector("#login form");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Login Successful!");

loginForm.reset();

});

}

// ==========================
// Client Request Form
// ==========================

const requestForm=document.querySelector(".request-form");

if(requestForm){

requestForm.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Your request has been submitted successfully!");

requestForm.reset();

});

}

// ==========================
// Card Hover Animation
// ==========================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ==========================
// Counter Animation
// ==========================

const counters=document.querySelectorAll(".box h2");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

const current=+counter.getAttribute("data-count")||0;

if(current<target){

counter.setAttribute("data-count",current+1);

counter.innerText=(current+1)+"+";

setTimeout(update,30);

}else{

counter.innerText=target+"+";

}

};

update();

});

// ==========================
// Active Navigation
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// Fade Animation
// ==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.box,.dashboard-card,.about,.contact-box").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});

// ==========================
// Console Message
// ==========================

console.log("🚀 Welcome to BabarTech Solutions V2");
console.log("Designed by Babar Akram");

// ==========================
// END
// ==========================
