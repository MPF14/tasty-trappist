
import { Renderer } from "./engine/renderer.js";
import { AnimationController } from "./engine/animation.js";
import { cat } from "./characters/catImage.js";

const canvas = document.getElementById("world");
const ctx = canvas.getContext("2d");

// Create a separate canvas for drawing the world.
const worldCanvas = document.createElement("canvas");
const renderer = new Renderer(worldCanvas, 320, 180);

// World dimensions
let worldWidth = 320;
let worldHeight = 180;

// Device pixel ratio
let dpr = window.devicePixelRatio || 1;

// Cat
const catAnimation = new AnimationController(cat.animations);
catAnimation.play(0, true);

const catObject = {
    x: 140,
    y: 70,
    pixelSize: 3,
    width: 16 * 3,
    height: 13 * 3
};

// Resize the world to match the window.
function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();

    dpr = window.devicePixelRatio || 1;

    // The logical world uses CSS-pixel-sized units.
    worldWidth = Math.max(1, Math.round(rect.width));
    worldHeight = Math.max(1, Math.round(rect.height));

    // Resize the offscreen world.
    renderer.resize(worldWidth, worldHeight);

    // Resize the visible canvas to the physical screen resolution.
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    // Disable smoothing when displaying the finished world.
    ctx.imageSmoothingEnabled = false;

    // Center the cat in the world.
    catObject.x = Math.floor((worldWidth - catObject.width) / 2);
    catObject.y = Math.floor((worldHeight - catObject.height) / 2);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Mouse interaction
canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();

    // Convert mouse coordinates into world coordinates.
    const mouseX =
        (event.clientX - rect.left) * (worldWidth / rect.width);

    const mouseY =
        (event.clientY - rect.top) * (worldHeight / rect.height);

    const currentFrame = catAnimation.getFrame();

    if (
        renderer.isPixelAt(
            cat,
            currentFrame,
            catObject.x,
            catObject.y,
            catObject.pixelSize,
            mouseX,
            mouseY
        )
    ) {
        if (
            catAnimation.animationIndex ===
            catAnimation.animationDict.length - 1
        ) {
            catAnimation.play(0, true);
        } else {
            catAnimation.play(
                catAnimation.animationIndex + 1,
                true
            );
        }
    }
});

// Game loop
let lastTime = 0;

function update(timestamp) {
    const background = getComputedStyle(document.documentElement)
        .getPropertyValue("--theme-bg-300")
        .trim();

    const deltaTime = lastTime
        ? (timestamp - lastTime) / 1000
        : 0;

    lastTime = timestamp;

    // Update animation.
    catAnimation.update(deltaTime);

    // Draw the world at its logical resolution.
    renderer.clear(background);

    renderer.drawSprite(
        cat,
        catAnimation.getFrame(),
        catObject.x,
        catObject.y,
        catObject.pixelSize
    );

    // Draw the finished world onto the visible canvas.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
        worldCanvas,
        0,
        0,
        canvas.width,
        canvas.height
    );

    requestAnimationFrame(update);
}

requestAnimationFrame(update);
