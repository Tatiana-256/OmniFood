// ______________FOR THE STICKY NAVIGATION________________________

$(document).ready(function() {
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px"
    }
  );

  // _____________SKROLL ON BUTTONS________________________
  $(".js--scroll-to-plans").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  // _____________NAVIGATION SKROLL________________________

  $(() => {
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top
              },
              1000,
              function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });
  });

  //   _____________animation on scroll______________________

  $(".js-wp-1").waypoint(
    function(direction) {
      $(".js-wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js-wp-2").waypoint(
    function(direction) {
      $(".js-wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js-wp-3").waypoint(
    function(direction) {
      $(".js-wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js-wp-4").waypoint(
    function(direction) {
      $(".js-wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  //   _____________ mobile nav ______________________
  $(".js--nav-icon").click(() => {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon ion-icon");
    nav.slideToggle(200);
    if (icon.hasName("menu")) {
      icon.addName("close-circle-outline");
      icon.removeName("menu");
    } else {
      icon.addName("menu");
      icon.removeName("close-circle-outline");
    }
  });

  var map = new GMaps({
    div: ".map",
    lat: 50.4297007,
    lng: 30.5170596,
    zoom: 12
  });

  map.addMarker({
    lat: 50.4297007,
    lng: 30.4,
    title: "Kiev",
    infoWindow: {
      content: "<p>Hi there</p>"
    }
  });
});
