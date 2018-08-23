function RenderLoop({renderer, scene, camera, controls, time, u_time}) {
  if (controls) {
    controls.update();
  }
  time.value += 0.0025;
  u_time.value += 0.01;
  window.requestAnimationFrame(() => RenderLoop({renderer, scene, camera, controls, time, u_time}));
  renderer.render(scene, camera);
}

export default RenderLoop;
