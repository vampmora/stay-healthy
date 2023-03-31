$(document).ready(function(){

    $('.text h1').lettering();
    let tl = gsap.timeline();

    tl.from('header .logo', {
        y:-100,
        opacity:0,
        duration:1,
    })

    .from('header nav', {
        y:-100,
        opacity:0,
        duration:1,
    })

    .from('.text .btn', {
        y:100,
        opacity:0,
        duration:1,
    })
    
    .from('.text p', {
        y:100,
        opacity:0,
        duration:1,
    }, '-=.3')

    
    .from('.text h1 span', {
        y:100,
        opacity:0,
        stagger:.04,
    })

    .from('.images img', {
        y:100,
        opacity:0,
        duration:2,
        stagger:.04,
    })
});


// gsap.from('.logo', {duration:.7, y:'-100', stagger: .5})
// gsap.from('li', {duration: 1, y:'-200%', stagger: .5 });






 