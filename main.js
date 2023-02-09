// Get the modal
const projets = document.querySelectorAll(`.listprojets article`);
const modal = document.getElementById(`myModal`);
const modalImg = document.getElementById(`modal-content`);
const captionText = document.getElementById(`caption`);

projets.forEach(projet => {
  const img = projet.querySelector(`.imgProjet`)
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.getElementById(`navbar`).style.display = "none"
    document.body.style.overflow = "hidden";
  }
})
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  document.getElementById(`navbar`).style.display = "flex"

}
const menuburger = document.querySelector(".menuburger")
const navbar = document.querySelector("#navbar")

menuburger.addEventListener('click',()=>{
navbar.classList.toggle('mobile-menu')
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