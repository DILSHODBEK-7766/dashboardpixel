

const mainImage = document.getElementById("mainImage");

const swiperImg = document.querySelectorAll(".swiperImg");

swiperImg.forEach(swiper =>{

    swiper.addEventListener("click", () =>{

        const mainUrl = swiper.dataset.main;

        mainImage.src = mainUrl;

    });

});