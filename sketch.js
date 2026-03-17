let PlanetX;

function preload() {
  PlanetX = loadImage(window.currentPlanetPath || "assets/jupiter.jpg");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);

  // expose function to update texture dynamically
  window.updatePlanetTexture = function (path) {
    loadImage(path, (img) => {
      PlanetX = img;
    });
  };
}

function draw() {
  background(5, 5, 15);

  orbitControl();

  ambientLight(40);
  pointLight(255, 255, 255, 300, -200, 400);

  rotateZ(0.47);

  // Planet
  push();
  noStroke();
  rotateY(frameCount * 0.003);
  texture(PlanetX);
  sphere(100, 64, 64);
  pop();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
