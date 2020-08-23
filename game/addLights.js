function addLights(scene) {
  var lights = new THREE.Object3D();
  var light1 = new THREE.PointLight('white', 0.4);
  light1.position.set(50, 50, 175);
  light1.castShadow = true;
  lights.add(light1);

  var light2 = new THREE.PointLight('white', 0.5);
  light2.position.set(-50, 50, 175);
  light2.castShadow = true;
  lights.add(light2);

  scene.add(lights);
  return lights;
}
