const nav_link = document.querySelectorAll(".my-nav-link a");

nav_link.forEach(link=>{
    link.addEventListener("click", event=>{
        nav_link.forEach(l=> l.classList.remove("active"));
        event.currentTarget.classList.add("active");
    });
});

// animation part 
gsap.from(".my-nav-link a", {
    top: -70,
    duration: .3,
    stagger: .4,
});

const tl = gsap.timeline({repeat: -1});
// tl.to(".bg.bg4", {opacity: 0, scale:1.2, duration: 2}, "+=2");
// tl.to(".bg.bg3", {opacity: 0, scale:1.2, duration: 2}, "+=2");
tl.to(".bg.bg2", {opacity: 0, scale:1.2, duration: 5}, "+=2");
tl.to(".bg.bg1", {opacity: 0, scale:1.2, duration: 5}, "+=2");
// tl.to(".bg.bg1", {opactiy: 0, duration: 1});