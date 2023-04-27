import { useEffect } from 'react';

import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


import SceneInit from './lib/SceneInit';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    //New model 
    let loadedModel;

    //load model 

    
    const glftLoader = new GLTFLoader();
    glftLoader.load('./assets/earth_globe/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      // console.log(loadedModel);

      //=====scene=====
      gltfScene.scene.rotation.y = Math.PI / 6;
      gltfScene.scene.position.y = 2;
      gltfScene.scene.scale.set(10, 10, 10);
      gltfScene.scene.background = '0xffffff'; //change background color to white 
      test.scene.add(gltfScene.scene);
    });

      //camera 
      const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
      scene.add( camera );


    //====orbit disabled =====
    controls = new THREE.OrbitControls (camera); 
    // to disable zoom
    controls.enableZoom = false;

    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.x += 0.0;
        loadedModel.scene.rotation.y += 0.0;
        loadedModel.scene.rotation.z += 0.0;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
