function addBall(scene) {
  var shape = new THREE.SphereGeometry(10, 25, 21);
  var cover = new THREE.MeshPhongMaterial({color: 'blue'});
  cover.specular.setRGB(0.6, 0.6, 0.6);

  var ball = new Physijs.SphereMesh(shape, cover);
  ball.castShadow = true
  ball.position.set(-33, 200, -65);
  scene.add(ball);
  return ball;
}
