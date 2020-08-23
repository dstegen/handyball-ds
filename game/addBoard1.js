function addBoard1(scene) {
  var cover = new THREE.MeshPhongMaterial({color: 'gold'});
  cover.specular.setRGB(0.9, 0.9, 0.9);

  var shape = new THREE.CubeGeometry(50, 2, 200)

  var beam1 = new Physijs.BoxMesh(shape, cover, 0);
  beam1.position.set(-37, 0, 0);
  beam1.receiveShadow = true;

  var beam2 = new Physijs.BoxMesh(shape, cover, 0);
  beam2.position.set(75, 0, 0)
  beam2.receiveShadow = true;
  beam1.add(beam2);

  shape = new THREE.CubeGeometry(200, 2, 50);
  var beam3 = new Physijs.BoxMesh(shape, cover, 0);
  beam3.position.set(40, 0, -40);
  beam3.receiveShadow = true;
  beam1.add(beam3);

  var beam4 = new Physijs.BoxMesh(shape, cover, 0);
  beam4.position.set(40, 0, 40);
  beam4.receiveShadow = true;
  beam1.add(beam4);

  beam1.rotation.set(0.1, 0, 0);
  beam1.name = 'board1';
  scene.add(beam1);
  return beam1;
}
