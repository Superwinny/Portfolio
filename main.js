
(function($){

// Function Pour Jquery Modal 


  $(function() {
    $(".listprojets article").each(function() {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Superwinny</small>';
          }
        }
        
      });

    })
   
  });
  
  
})(jQuery)


// Fonction pour dark/light mode

 const btnToggle = document.querySelector(".btn-toggle");
 btnToggle.addEventListener("click", () =>{

    const body = document.body;
      if (body.classList.contains("dark")){
        body.classList.add("light")
        body.classList.remove("dark")
        btnToggle.innerHTML = "Go Dark"

    }else if(body.classList.contains("light")){
        body.classList.add("dark")
        body.classList.remove("light")
        btnToggle.innerHTML = "Go Light"
    }


})





const menuburger = document.querySelector(".menuburger");
const navbar = document.getElementById("navbar");
const linknav = document.querySelectorAll(".menuheader a");



linknav.forEach((link) => {
  link.addEventListener("click" , () => {
    navbar.classList.remove("mobile-menu")
  })
})


menuburger.addEventListener("click",() => {
  navbar.classList.toggle("mobile-menu")
})


// Initialize and add the map
function initMap() {
  // The location of Geneva
  const uluru = {
    lat: 46.2043907,
    lng: 6.1431577,
  };
  // The map, centered at Geneva
  const map = new google.maps.Map(document.getElementById("imgcontact"), {
    zoom: 13,
    center: uluru,
    gestureHandling: "none",
    zoomControl: false,
    streetViewControl: false,
    disableDefaultUI: true,
    // Style Trouvé sur Snazzy Map
    styles:
      [
        {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f1f1f1"
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#1cf9d4"
            },
            {
              "saturation": "100"
            },
            {
              "lightness": "-4"
            },
            {
              "gamma": "1.00"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#e80606"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#1d1d1d"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ff52b4"
            },
            {
              "visibility": "on"
            },
            {
              "saturation": "100"
            },
            {
              "lightness": "0"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": 45
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#1cf9db"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "color": "#f1f1f1"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]

  });


}

window.initMap = initMap;