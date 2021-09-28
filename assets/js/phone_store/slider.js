// Glide JS Carousel
const slider1 = document.getElementById('glide_1')
const slider2 = document.getElementById('glide_2')

// Hero area
if(slider1) {
    new Glide(slider1, {
        type: 'carousel',
        startAt: 0,
        autoplay: 3000,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: 'linear',
    }).mount()
}

// Latest Product
if(slider2) {
    new Glide(slider2, {
        type: 'carousel',
        startAt: 0,
        // autoplay: 3000,
        hoverpause: true,
        perView: 4,
        animationDuration: 800,
        animationTimingFunc: 'ease-in-out',
        breakpoints: {
            1200: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
        }
    }).mount()
}