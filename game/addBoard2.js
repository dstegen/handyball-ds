function addBoard2() {
  var cover = new THREE.MeshPhongMaterial({color: 'gold'});
  var cover2 = new THREE.MeshPhongMaterial({color: 'red'});
  cover.specular.setRGB(0.9, 0.9, 0.9);

  var shape = new THREE.CubeGeometry(50, 2, 300)

  var beam1a = new Physijs.BoxMesh(shape, cover, 0);
  beam1a.position.set(-37, 0, 0);
  beam1a.receiveShadow = true;

  shape = new THREE.CubeGeometry(200, 2, 100)
  var beam2 = new Physijs.BoxMesh(shape, cover, 0);
  beam2.position.set(75, 0, 0)
  beam2.receiveShadow = true;
  beam1a.add(beam2);

  shape = new THREE.CubeGeometry(200, 2, 50);
  var beam3 = new Physijs.BoxMesh(shape, cover, 0);
  beam3.position.set(40, 0, -100);
  beam3.receiveShadow = true;
  beam1a.add(beam3);

  var beam4 = new Physijs.BoxMesh(shape, cover, 0);
  beam4.position.set(40, 0, 100);
  beam4.receiveShadow = true;
  beam1a.add(beam4);

  shape = new THREE.CubeGeometry(50, 2, 300)
  var beam5 = new Physijs.BoxMesh(shape, cover, 0);
  beam5.position.set(80, 0, 50);
  beam5.receiveShadow = true;
  beam1a.add(beam5);

  beam1a.rotation.set(0.1, 0, 0);
  beam1a.name = 'board2';
  scene.add(beam1a);
  return beam1a;
}
