// src/pages/app-home.ts
export function startEEGStream(
  callback: (eegData: { state: string }) => void
): void {
  // Simulate EEG data stream for demo purposes
  const states = ['ATTENTION', 'DROWSY', 'RELAXED'];
  let index = 0;
  setInterval(() => {
    callback({ state: states[index % states.length] });
    index++;
  }, 3000);
}
import * as THREE from 'three';


// --- SCENE SETUP ---
const canvas = document.getElementById('ar-canvas') as HTMLCanvasElement;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a simple object for our intervention
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// This is our "generative AR" intervention function.
function triggerARIntervention(concept: string) {
  console.log(`Displaying intervention for: ${concept}`);
  material.opacity = 1; // Make the cube visible
  setTimeout(() => {
    material.opacity = 0; // Fade the cube out after 2 seconds
  }, 2000);
}

// Get references to our HTML elements
const stateText = document.getElementById('state-text');
const flashcard = document.getElementById('flashcard');
let taggedConcept: string | null = null;

console.log('App started. Connecting to EEG stream...');

// This is our fake "AI model" that reacts to the learner's state.
startEEGStream((eegData: { state: string }) => {
  // Update the UI to show the current state
  if (stateText) {
    stateText.textContent = eegData.state;
  }

  // When the user is paying attention, "neurally tag" the content.
  if (eegData.state === 'ATTENTION' && flashcard) {
    taggedConcept = flashcard.textContent;
    console.log(`Tagged concept: ${taggedConcept}`);
  }

  // When the user becomes drowsy, trigger the intervention.
  if (eegData.state === 'DROWSY' && taggedConcept) {
    console.log('Drowsiness detected! Triggering intervention...');
    // This line is now active and will call the function.
    triggerARIntervention(taggedConcept);
    taggedConcept = null; // Reset tag after use
  }
});
