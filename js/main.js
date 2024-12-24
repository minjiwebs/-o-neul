//fullpage 초기화
$('#fullpage').fullpage({
  //options here
  responsiveWidth: 1024,
  navigation: true, //기본값 false
  navigationPosition: 'right', //기본값 right
  navigationTooltips: ['o’neul', 'Value', 'Menu', 'Room'],

  showActiveTooltip: true, //네비 글자 노출
  onLeave: function (origin, destination, direction, trigger) {
    var origin = this;

    if (destination == 5) {
      $("#fp-nav").fadeOut();

    } else {
      $("#fp-nav").fadeIn();
    }
  }


});


const menu_list = new Swiper(".menu_list", {

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    574: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }

});


const room_list = new Swiper(".room_list", {
  autoplay: {
    delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
  },

  speed: 1000, // 슬라이드 동작 속도
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
