var tl = gsap.timeline()

tl.from("#nav1 h3",{
    y:-5,
    opacity:0,
    delay:0.3,
    duration:0.8,
    stagger:0.4
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4
    
})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.4,
    stagger:0.5
})