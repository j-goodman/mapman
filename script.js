var map;

function initMap () {
  map = new google.maps.Map(document.getElementById('map'), {
    // center: {lat: 34.397, lng: 250.644}, // <-- desert
    center: {lat: 47.5, lng: -88},
    disableDefaultUI: true,
    zoom: 8,
  });
  map.mapTypeId = 'satellite';
  map.setOptions({
    draggable: false,
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
  });
  // console.log(Object.getOwnPropertyNames(map));
}

function clearOverlays () {
  var buttons;
  var i;
  buttons = document.getElementsByClassName('gm-style-cc');
  for (i=0 ; i<buttons.length ; i++) {
    buttons[i].style.display = 'none';
  }
  buttons = document.getElementsByTagName('img');
  buttons[buttons.length - 3].style.display = 'none';
}

window.onload = function () {
  clearOverlays();
  setInterval(function () {
    clearOverlays();
  }, 1000);
};
