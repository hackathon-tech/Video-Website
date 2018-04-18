/*
 * BS Sidebar MENu Plugin v1.0
 * Copyright 2013-2017 Ayub Khan
 * Licensed under  ()
 */


   /* Enable tooltips everywhere */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  // CAROUSEL Slider 
  $('.carousel').carousel({
    interval: false
  })

// Sidebar NAV 
$(".left-nav-open").click(function(){
    $(".left-aside").toggleClass('collapsed');
    $(".main-content").toggleClass('left-menu-opened');
     // $(".main-content").toggleClass('left-menu-opened');
     });


// =============================
// Video PLAY
// =============================
// Show Video Description


// =================================
// SLIDER CAROUSELS
// =================================

// Landing Page Sliders
/* ======================================== */

// LANDING PAGE Popular Slider Start
 $('.main-popular-slider').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    350: {
      items: 2,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    800: {
      items: 3,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      loop: false,
      margin: 20
    }
  }
})
// LANDING PAGE Popular Slider End
// LANDING PAGE Trending Slider Start
 $('.main-trending-slider').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    350: {
      items: 2,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    800: {
      items: 3,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      loop: false,
      margin: 20
    }
  }
})
// LANDING PAGE Trending Slider End
// FFEATURED PAGE Trending Slider Start
 $('.main-featured-slider').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    350: {
      items: 2,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    800: {
      items: 3,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      loop: false,
      margin: 20
    }
  }
})
// FEATURED PAGE Trending Slider End
// TRAILERS BY MOVIES Trending Slider Start
 $('.main-movies-trailers-slider').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    350: {
      items: 2,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    800: {
      items: 3,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      loop: false,
      margin: 20
    }
  }
})
// TRAILERS BY MOVIES Trending Slider End
// Recomended For You Trending Slider Start
 $('.main-recomended-slider').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    350: {
      items: 2,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    800: {
      items: 3,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      loop: false,
      margin: 20
    }
  }
})
// Recomended For You Trending Slider End
// Live Pakistani Channels Slider Start
 $('.main-channels-slider').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    350: {
      items: 2,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    800: {
      items: 4,
      nav: false
    },
    1000: {
      items: 4,
      nav: false,
      loop: false,
      margin: 20
    }
  }
})
// Live Pakistani Channels Slider End
// New Uploaded Slider Start
 $('.main-new-uploaded-slider').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    350: {
      items: 2,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    800: {
      items: 4,
      nav: false
    },
    1000: {
      items: 4,
      nav: false,
      loop: false,
      margin: 20
    }
  }
})
// New Uploaded Slider End
// RANDOM VIDEOs Slider Start
 $('.main-random-videos-slider').owlCarousel({
  loop: true,
  stagePadding: 50,
  nav: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    350: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 4
    },
    1000: {
      items: 5,
      loop: false,
      margin: 20
    }
  }
})
// RANDOM VIDEOs Slider End


// Video Play Page Sliders
/* ======================================== */
// Video Play Page Popular Slider Start
$('.page-vidplay-popular-sliders').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      350: {
        items: 2,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      800: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: false,
        loop: false,
        margin: 20
      }
    }
  })
// Video Play Page Popular Slider End

// Video Play Page Trending Slider Start
$('.page-vidplay-trending-sliders').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      350: {
        items: 2,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      800: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: false,
        loop: false,
        margin: 20
      }
    }
  })
// Video Play Page Trending Slider End


/* ======================================== */
/* End of File */
