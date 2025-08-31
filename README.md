🧠 Cognitive Echo: A Neuroadaptive Learning Prototype
Submission for the NALLAS Hackathon

Cognitive Echo is a functional, open-source prototype that explores the future of personalized education. It tackles the challenge of static learning by creating a dynamic experience that adapts to a user's cognitive state in real-time. This prototype simulates a Brain-Computer Interface (BCI) to understand when a learner is focused, distracted, or drowsy, and uses that data to trigger a simple yet effective visual intervention to enhance memory.

✨ Key Innovations & Features
This prototype demonstrates a complete, end-to-end neuroadaptive feedback loop, fulfilling the core requirements of the hackathon challenge.

1. Neuro-Sensing & State Detection (Simulation)
The application includes a one-click simulation of EEG streams that requires no hardware or setup. The system automatically cycles through three distinct cognitive states every 3 seconds, with the UI dynamically adapting to each one.

🔵 ATTENTION: The user is focused on the learning material. The system "tags" this moment for memory reinforcement.

🟠 DISTRACTED: The user's focus has lapsed.

🟣 DROWSY: The user is transitioning towards sleep, a key moment for memory consolidation.

2. Adaptive Intervention
When the DROWSY state is detected, the app triggers a subconscious micro-intervention.

Visual Cue: Instead of complex libraries, the main card begins to pulse with a gentle glow using pure CSS animations.

Non-Intrusive Design: This subtle visual cue is designed to reinforce the memory of the word tagged during the ATTENTION state without disrupting the user, fulfilling the "subconscious coaching" goal of the hackathon.

🚀 Live Demo
See Cognitive Echo in action as it cycles through its adaptive states. Notice how the UI colors and visual effects change based on the simulated brainwave data.

(This is a placeholder for a GIF. You can create one using a tool like GIPHY Capture or ScreenToGif and drag it into this README on GitHub)
[GIF of the app cycling through ATTENTION (blue), DISTRACTED (orange), and DROWSY (pulsing purple)]

🛠️ Technology Stack & Tools
This prototype was built with a focus on stability and accessibility, using a clean, browser-native stack with no external libraries.

Category

Technology

Purpose

Core Frontend

HTML5, CSS3, JavaScript

Building the responsive UI and core application logic.

Simulation

Custom JavaScript

A one-click simulation of EEG streams as required.

Intervention

CSS Animations

Providing the non-intrusive, visual "pulsing glow" effect.

✅ Hackathon Submission Checklist
This project fulfills all the requirements outlined in the "What to Submit" section.

[✅] Code Repository: You are viewing it. It contains a clear README and all source code in a single, easy-to-run file.

[✅] Interactive Prototype: The index.html file is a live, interactive demo.

[✅] Flow Diagram: The logic flows from the BCI Simulator → State Classification → Intervention Logic → Deliverable UI (CSS Animation).

[✅] Ethics & Safety Brief: All data is 100% local-only. The prototype is designed for user comfort with minimal-intrusion interventions, and a full version would include an explicit consent flow.

⚙️ How to Run
This project is designed for maximum simplicity.

No Build Required: The entire application is self-contained in index.html.

Run: Simply open the index.html file in a modern web browser (like Chrome, Firefox, or Edge).
