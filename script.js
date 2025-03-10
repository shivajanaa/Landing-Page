



function page1Animation(){


 let tl = gsap.timeline();
tl.from("nav h1 , nav a ,nav .btn1",{
    y: -40,
    delay:0.5,
    stagger:0.1,
    opacity:0,
})

tl.from(".contentP1  h1,.contentP1 p, .contentP1 .btn2, .sec3 h1, .sec3 p, .sec3 button", {
    x:-290,
    stagger:0.1,
    opacity:0,
})
tl.from(".contentP2 .image1",{
   
    opacity:0,
    stagger:0.2,
})






function animateSection(section) {
    gsap.from(`${section} h1, ${section} p, ${section}h1`, {
        y: 20,
        opacity: 0,
        delay: 0.2,
        stagger: 0.2,
        scrollTrigger: {
            trigger: `${section} h1`,
            scroller: "body",
            
            start: "top 80%"
        }
    });
}

animateSection(".section2");
animateSection(".section3");
animateSection(".section4");


}










page1Animation();







