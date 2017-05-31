onkeydown = function (event) {
  switch (event.keyCode) {
    case 40: panDown(); break;
    case 39: panRight(); break;
    case 38: panUp(); break;
    case 37: panLeft(); break;
  }
};

function panDown () {
  if (map.getBounds().f.f > 47.6) {
    map.panBy(0, 100);
  }
}
function panRight () {
  if (map.getBounds().b.b < -88) {
    map.panBy(100, 0);
  }
}
function panUp () {
  if (map.getBounds().f.b < 47.8) {
    map.panBy(0, -100);
  }
}
function panLeft () {
  if (map.getBounds().b.b > -92) {
    map.panBy(-100, 0);
  }
}
