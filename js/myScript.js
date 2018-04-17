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

 /* WOW */
function wow() {
	 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
}

// =============================
// Video PLAY
// =============================
// Show Video Description

  



/* ======================================== */
/* End of File */
