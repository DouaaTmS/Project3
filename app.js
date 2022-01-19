/*-----------  Nav ----------*/

const Nav = document.querySelector(".nav-list");
const closeNav = document.querySelector(".ri-close-line");
const openNav = document.querySelector(".ri-menu-2-line");

closeNav.addEventListener("click",()=>{
    Nav.classList.remove("show-nav");
})

openNav.addEventListener("click",()=>{
    Nav.classList.add("show-nav");
})

// ---------- Scroll Reveal ---------

const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration: 1000,
    reset: false
});

sr.reveal(".hero-title,.hero-description,.hero-btn, .section-title , .work-description , .testimonials-description, .pricing-description, .blog-description");

sr.reveal(".about-img1, .about-info2, .contact-top",{origin:"left"});
sr.reveal(".about-img2, .about-info1, .contact-bottom ",{origin:"right"})

sr.reveal(".about-card, .work-card, .testimonial-card, .pricing-card, .blog-card, .counter-grid article,footer article", {interval:200})