// swiper slide side bar
var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
});


// swiper slide sale slidek
var swiper = new Swiper(".sale_sec", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },  
    loop: true,
});

// swiper slide sale slidek
var swiper = new Swiper(".product_swp", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".n",
        prevEl: ".p"
    },  
    loop: true,
});
var swiper = new Swiper(".product_swp1", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".n1",
        prevEl: ".p1"
    },  
    loop: true,
});