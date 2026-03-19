const viewer = document.getElementById("viewer");

// Correct paths (VERY IMPORTANT)
viewer.src = "../model/Dazzle Soap Dish.glb";
viewer.setAttribute("ios-src", "../model/Dazzle Soap Dish.usdz");

viewer.alt = "Dazzle Soap Dish";

// AR setup
viewer.setAttribute("ar", "");
viewer.setAttribute("ar-modes", "scene-viewer quick-look webxr");

// Controls
viewer.setAttribute("camera-controls", "");
viewer.setAttribute("auto-rotate", "");
viewer.setAttribute("shadow-intensity", "1");
viewer.setAttribute("exposure", "1");

// Fullscreen
viewer.style.width = "100vw";
viewer.style.height = "100vh";

// AR Button
const arButton = document.createElement("button");
arButton.innerText = "View in your space 🚀";

arButton.style.position = "absolute";
arButton.style.bottom = "20px";
arButton.style.right = "20px";
arButton.style.padding = "12px 18px";
arButton.style.borderRadius = "30px";
arButton.style.background = "#ff3b3b";
arButton.style.color = "#fff";
arButton.style.border = "none";

arButton.slot = "ar-button";
viewer.appendChild(arButton);
