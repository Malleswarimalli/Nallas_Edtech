// eeg-simulator.js
// This simulates the BCI classifying the user's cognitive state in real time.
const states = ['ATTENTION', 'ATTENTION', 'DISTRACTED', 'DROWSY'];
let currentIndex = 0;

export function startEEGStream(callback) {
  setInterval(() => {
    const currentState = states[currentIndex];
    callback({ state: currentState });
    currentIndex = (currentIndex + 1) % states.length;
  }, 2000); // Emits a new state every 2 seconds
}