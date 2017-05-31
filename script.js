var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.397, lng: 250.644},
    disableDefaultUI: true,
    zoom: 11,
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

window.onload = function () {
  var buttons;
  var i;
  buttons = document.getElementsByClassName('gm-style-cc');
  for (i=0 ; i<buttons.length ; i++) {
    buttons[i].style.display = 'none';
  }
  buttons = document.getElementsByTagName('img');
  buttons[13].style.display = 'none';
};
