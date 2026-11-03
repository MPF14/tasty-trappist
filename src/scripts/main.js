import { Renderer } from "./engine/renderer.js";
import { AnimationController } from "./engine/animation.js";
import { cat } from "./characters/catImage.js";

const canvas = document.getElementById("world");

const renderer = new Renderer(canvas, 320, 180);

// Create animation controller
const catAnimation = new AnimationController(cat.animations);
catAnimation.play(0, true);
const catObject = {
    x: 140,
    y: 70,
    pixelSize: 3,

    width: 16 * 3,
    height: 13 * 3
};
canvas.addEventListener("click", (event) => {

    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const mouseX = (event.clientX - rect.left) * scaleX;
    const mouseY = (event.clientY - rect.top) * scaleY;

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
        if (catAnimation.animationIndex === catAnimation.animationDict.length - 1) {
            catAnimation.play(0, true);
        } else {
            catAnimation.play(catAnimation.animationIndex + 1, true);
        }
    }
});
// Game loop
let lastTime = 0;

function update(timestamp) {

    // Calculate elapsed time
    const deltaTime = lastTime
        ? (timestamp - lastTime) / 1000
        : 0;

    lastTime = timestamp;

    // Update animation
    catAnimation.update(deltaTime);

    // Draw world
    renderer.clear("#d8d0bd");

    renderer.drawSprite(
    cat,
    catAnimation.getFrame(),
    catObject.x,
    catObject.y,
    catObject.pixelSize
);

    requestAnimationFrame(update);
}

requestAnimationFrame(update);