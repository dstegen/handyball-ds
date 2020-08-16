// The "scene" is where stuff in our game will happen:
var scene = new THREE.Scene();
var flat = {flatShading: true};
var light = new THREE.AmbientLight('white', 0.8);
scene.add(light);
// The "camera" is what sees the stuff:
var aspectRatio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
camera.position.z = 500;
scene.add(camera);
// The "renderer" draws what the camera sees onto the screen:
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// ******** START CODING ON THE NEXT LINE ********

var shape = new THREE.SphereGeometry(50,100,100);
var cover = new THREE.MeshPhongMaterial({color: 'blue'});
var ball = new THREE.Mesh(shape, cover);

scene.add(ball);

// Now, show what the camera sees on the screen:
renderer.render(scene, camera);

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
function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
  //alert(absolute);
  // Do stuff with the new orientation data
  if (Math.abs(window.orientation) === 90) {
    // Landscape
    ball.position.x += beta;
    ball.position.y += gamma;
  } else {
    // Portrait
    ball.position.x += gamma;
    ball.position.y -= beta;
  }
  renderer.render(scene, camera);
}
window.addEventListener("deviceorientation", handleOrientation, true);
