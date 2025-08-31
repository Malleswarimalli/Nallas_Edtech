🧠 Cognitive Echo - Neuroadaptive EdTech Prototype
Submission for the NALLAS Hackathon

Cognitive Echo is an open-source prototype that explores the future of education by creating a learning experience that adapts to the user's cognitive state in real-time. It moves beyond static content by simulating a Brain-Computer Interface (BCI) to detect a learner's focus and triggers context-aware, generative AI interventions to make learning more personal, engaging, and effective.

✨ Core Features
This prototype directly addresses the hackathon's suggested focus areas by integrating a multi-layered neuroadaptive system.

1. Neuro-Sensing & State Detection (Simulation)
The application includes a one-click simulation of EEG streams that requires no hardware. The system automatically cycles through three distinct cognitive states, with the UI dynamically adapting to each one.

🔵 ATTENTION: The user is focused on the learning material. The system prepares to tag the content for memory reinforcement.

🟠 DISTRACTED: The user's focus has lapsed. The system initiates a re-engagement protocol.

🟣 DROWSY: The user is transitioning towards sleep, a key moment for memory consolidation.

2. Adaptive Intervention & Content Generation
Cognitive Echo uses a variety of interventions tailored to the detected cognitive state.

🤖 Gen AI Mood-to-Mnemonic Generator (ATTENTION state):
When the user is attentive, they can click a button to call the Gemini API. The application sends the vocabulary word and a simulated "mood" (e.g., calm or playful) to the model, which generates a unique, personalized mnemonic in real-time. This showcases an AI-driven pipeline for creating custom learning artifacts.

🎮 Brain-Triggered Micro-Game (DISTRACTED state):
To combat distraction, the lesson is paused and a 10-second interactive "catch the orb" game is launched. This converts a moment of boredom into a play-driven re-engagement loop, bringing the user's focus back to the screen.

🔮 AR/3D Subconscious Cue (DROWSY state):
To enhance long-term retention, the app triggers a subconscious micro-intervention. A dream-like 3D visual, rendered with Three.js, gently appears and rotates on screen, accompanied by a subtle audio chime from Tone.js. This is designed to reinforce the tagged memory without disrupting the user's descent into sleep.

3. Ethical & Comfortable UX
The prototype is built with user privacy and comfort as a priority.

Local-Only Data: All simulated brainwave data is generated and processed entirely in the browser and is never sent to a server.

Minimal-Intrusion Design: The UI is clean and the interventions (especially the subconscious cue) are designed to be gentle and non-disruptive.

Consent Model: While the prototype runs automatically, a production version would require explicit user consent before any monitoring begins.

🚀 How to Run the Prototype
This project is built as a single, self-contained file for maximum portability and ease of use.

Prerequisites
A modern web browser (e.g., Google Chrome, Firefox, Microsoft Edge).

Build & Deploy Instructions
No Build Step Needed: The entire application is self-contained within the index.html file.

Run Locally: Simply open the index.html file directly in your web browser. For the best experience (especially for loading the 3D models and audio), it is recommended to use a simple local server. The easiest way is with the "Live Server" extension in VS Code.

📊 Project Flow Diagram
This diagram illustrates the data flow from the simulated BCI to the user interface.

BCI Signal (Simulator) → State Classification → Adaptive Intervention Logic → Deliverable UI

BCI Signal: The startEEGStream function simulates a new cognitive state every 3 seconds.

Classification: The updateUI function receives the state and identifies it.

Intervention Logic: Based on the state, the system decides which intervention to trigger (Mnemonic Button, Game, or 3D Cue).

UI Update: The application's UI dynamically
