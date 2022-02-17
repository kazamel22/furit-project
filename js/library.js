$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        780: {
            items: 2
        },
        1140: {
            items: 3
        }
    }
})