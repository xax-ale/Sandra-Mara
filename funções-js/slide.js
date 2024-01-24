$(".cards").slick({
    dots:false,
    infinite: true,
    autoplay:1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 900,
            settings: {
              centerMode: true,
              centerPadding: '20px',
              dots:false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
});