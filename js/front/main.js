// Header scroll class
//  $(window).scroll(function() {
//   if ($(this).scrollTop() > 50) {
//     $('.header').addClass('header-sticky');
//   } else {
//     $('.header').removeClass('header-sticky');
//   }
// });

function myCoolSlider() {

  $('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 5, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: false, // Adds arrows to sides of slider
    dots: false, // Adds the dots on the bottom
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false, 
          dots: true,
          arrows: true,
        }
      }
    ]
  });


  // RoadMap
  $('#roadmap_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

      .slick('slickPause');
  // A function that start autoplay when entering the viewport

  // let targetName = targetObj.attr("id"); //for console.log
  let targetName = document.getElementById('roadmap_slider');
  let targetObj = targetName;
  let targetFlag = false;
  let scrollTop = $(window).scrollTop();
  let scrollBottom = scrollTop + $(window).height();
  let targetTop = targetObj.offsetTop;
  // alert(targetTop);
  let targetBottom = targetTop + targetObj.offsetHeight;
  // while loading
  function triggerScroll(targetObj) {
    $(window).on('scroll', function () {
      scrollTop = $(window).scrollTop();
      scrollBottom = scrollTop + $(window).height();
      targetTop = targetObj.offset().top;
      targetBottom = targetTop + targetObj.height();
      if (scrollBottom > targetTop && scrollTop < targetBottom) {
        // Start autoplay when entering the viewport
        if (!targetFlag) {
          console.log(targetName + ' is in > in sight12');//ç¢ºèªç”¨
          targetObj.slick('slickPlay');
          targetFlag = true;
          // $('#roadmap_slider').slick('reinit'); //slick('unslick').
          // $('#roadmap_slider').slick('slickSetOption', 'autoplay', true);
        }
      } else {
        // Stop autoplay when you get out of the viewport
        if (targetFlag) {
          console.log(targetName + ' is not > in sight');//for console.log
          targetObj.slick('slickPause');
          targetFlag = false;
        }
      }
    });
  }
  // Execute function
  triggerScroll($('#roadmap_slider'));



  // GabiMon Slider
  $('.gabimon_slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // Team Slider
  $('.team_slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1
        }
      }
    ]
  });

}