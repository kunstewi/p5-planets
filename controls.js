const planetMap = {
  mercury: "assets/mercury.jpg",
  venus: "assets/venus.jpg",
  earth: "assets/earth.jpg",
  mars: "assets/mars.jpg",
  jupiter: "assets/jupiter.jpg",
  saturn: "assets/saturn.jpg",
  uranus: "assets/uranus.jpg",
  nepture: "assets/nepture.jpg",
};

// default
window.currentPlanetPath = planetMap.jupiter;

// function to update texture
window.changePlanet = function (key) {
  window.currentPlanetPath = planetMap[key];

  // tell p5 to update texture
  if (window.updatePlanetTexture) {
    window.updatePlanetTexture(window.currentPlanetPath);
  }

  // update UI highlight
  document.querySelectorAll("#planetBar span").forEach((el) => {
    el.classList.remove("active");
  });

  document.querySelector(`[data-planet="${key}"]`).classList.add("active");
};

// attach click listeners
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#planetBar span").forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.dataset.planet;
      changePlanet(key);
    });
  });
});
