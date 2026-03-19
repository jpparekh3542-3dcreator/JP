const viewer = document.getElementById("viewer");

// Set attributes dynamically
viewer.src = "Model/Dazzle Soap Dish.glb";
viewer.setAttribute("ios-src", "Model/Dazzle Soap Dish.usdz");
viewer.alt = "3D Model";

// Enable AR
viewer.setAttribute("ar", "");
viewer.setAttribute("ar-modes", "scene-viewer quick-look webxr");

// Controls
viewer.setAttribute("camera-controls", "");
viewer.setAttribute("auto-rotate", "");
viewer.setAttribute("shadow-intensity", "1");
viewer.setAttribute("exposure", "1");

// Fullscreen styling
viewer.style.width = "100vw";
viewer.style.height = "100vh";

// Create AR Button
const arButton = document.createElement("button");
arButton.innerText = "View in your space 🚀";

// Style button
arButton.style.position = "absolute";
arButton.style.bottom = "20px";
arButton.style.right = "20px";
arButton.style.padding = "12px 18px";
arButton.style.borderRadius = "30px";
arButton.style.background = "#ff3b3b";
arButton.style.color = "#fff";
arButton.style.border = "none";
arButton.style.fontSize = "14px";
arButton.style.cursor = "pointer";

// Attach button to model-viewer
arButton.slot = "ar-button";
viewer.appendChild(arButton);
