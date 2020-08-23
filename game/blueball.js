// The "scene" is where stuff in our game will happen:
var scene2 = new THREE.Scene();
var flat = {flatShading: true};
var light = new THREE.AmbientLight('white', 0.8);
scene2.add(light);
// The "camera" is what sees the stuff:
var aspectRatio = window.innerWidth / window.innerHeight;
var camera2 = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
camera2.position.z = 500;
scene2.add(camera2);
// The "renderer" draws what the camera sees onto the screen:
var renderer2 = new THREE.WebGLRenderer({antialias: true});
renderer2.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer2.domElement);
// ******** START CODING ON THE NEXT LINE ********

var shape = new THREE.SphereGeometry(50,100,100);
var cover = new THREE.MeshPhongMaterial({color: 'blue'});
var ball2 = new THREE.Mesh(shape, cover);

scene2.add(ball2);

// Now, show what the camera sees on the screen:
renderer2.render(scene2, camera2);

/*** DeviceOrientation PART ***/
function permission () {
  if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
      // (optional) Do something before API request prompt.
      DeviceMotionEvent.requestPermission().then( response => {
          // (optional) Do something after API prompt dismissed.
          if ( response == "granted" ) {
              document.getElementById('permButton').style.display ='none';
          }
      }).catch( console.error )
  } else {
      alert( "DeviceMotionEvent is not defined" );
  }
}
function handleOrientation2(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  // Do stuff with the new orientation data
  if (Math.abs(window.orientation) === 90) {
    // Landscape
    ball2.position.x += beta;
    ball2.position.y += gamma;
  } else {
    // Portrait
    ball2.position.x += gamma;
    ball2.position.y -= beta;
  }
  renderer2.render(scene2, camera2);
}
window.addEventListener("deviceorientation", handleOrientation2, true);
