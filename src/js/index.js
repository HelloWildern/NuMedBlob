import '../css/reset.css';
import '../css/style.css';
import * as THREE from 'three';
import frag from './shaders/frag2.glsl';
import vert from './shaders/vert.glsl';
import Renderer from './renderer';
import Scene from './scene';
import RenderLoop from './render-loop';
import Sphere from './sphere';
import 'three/OrbitControls';

const containerEl = document.getElementsByClassName('blobWrapper')[0];

const renderer = Renderer({containerEl});
const { scene, camera } = Scene({
  // cameraPos: [10, 0, 0],
  cameraPos: [70, 0, 0],
  cameraAspect: containerEl.offsetWidth / containerEl.offsetHeight,
  cameraFov: 45
});

const controls = new THREE.OrbitControls(camera);
controls.enableDamping = true;
controls.rotateSpeed = 0.5;
controls.dampingFactor = .25;
controls.enabled = false; //changhe to false for production

const sphere = Sphere({
  fragmentShader: frag,
  vertexShader: vert
});

scene.add(sphere);
window.addEventListener('resize', () => {
  renderer.setSize(containerEl.offsetWidth, containerEl.offsetHeight);
  camera.aspect = containerEl.offsetWidth / containerEl.offsetHeight;
  camera.updateProjectionMatrix();
});

RenderLoop({ renderer, scene, camera, controls, time: sphere.material.uniforms.time, u_time: sphere.material.uniforms.u_time});
