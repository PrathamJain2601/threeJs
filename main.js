import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define different colors for each face
const materials = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),  // Red
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),  // Green
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),  // Blue
  new THREE.MeshBasicMaterial({ color: 0xffff00 }),  // Yellow
  new THREE.MeshBasicMaterial({ color: 0xff00ff }),  // Magenta
  new THREE.MeshBasicMaterial({ color: 0x00ffff }),  // Cyan
];

// Create a cube geometry
const geometry = new THREE.BoxGeometry();

// Create the cube mesh with different materials for each face
const cube = new THREE.Mesh(geometry, materials);

// Add the cube to the scene
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Movement controls (key press tracking)
const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

// Event listeners for keydown and keyup
window.addEventListener('keydown', (event) => {
  if (event.key in keys) keys[event.key] = true;
});

window.addEventListener('keyup', (event) => {
  if (event.key in keys) keys[event.key] = false;
});

// Movement function to move the cube based on key presses
function updateMovement() {
  const speed = 0.1;

  if (keys.ArrowUp) cube.position.z -= speed;  // Move forward
  if (keys.ArrowDown) cube.position.z += speed;  // Move backward
  if (keys.ArrowLeft) cube.position.x -= speed;  // Move left
  if (keys.ArrowRight) cube.position.x += speed;  // Move right
}

// Animation loop to rotate and move the cube
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Update movement based on key presses
  updateMovement();

  // Render the scene from the camera's perspective
  renderer.render(scene, camera);
}

animate();
