export class AnimationController {

    constructor(animations) {
        this.animations = animations;
        this.animationDict = ["walking", "sleeping", "standing", "sitting", "pouncing"];
        this.animationIndex = 0;
        this.currentAnimation = null;
        this.frameIndex = 0;
        this.elapsed = 0;
        this.playing = false;
    }

    play(indexNumber, restart = false) {
        if (!this.animations[this.animationDict[indexNumber]]) {
            console.error(`Animation "${this.animationDict[indexNumber]}" does not exist.`);
            return;
        }

        // Don't restart an animation that is already playing
        if (this.currentAnimation === this.animationDict[indexNumber] && !restart) {
            return;
        }

        this.currentAnimation = this.animationDict[indexNumber];
        this.animationIndex = indexNumber;
        this.frameIndex = 0;
        this.elapsed = 0;
        this.playing = true;
        console.log(`Playing animation: ${this.currentAnimation}`);
    }

    update(deltaTime) {
        if (!this.playing) return;

        const animation = this.animations[this.currentAnimation];
        const frameDuration = 1 / animation.fps;

        this.elapsed += deltaTime;

        while (this.elapsed >= frameDuration) {
            this.elapsed -= frameDuration;
            this.frameIndex++;

            if (this.frameIndex >= animation.frames.length) {

                if (animation.loop) {
                    this.frameIndex = 0;
                } else {
                    this.frameIndex = animation.frames.length - 1;
                    this.playing = false;
                    break;
                }
            }
        }
    }

    getFrame() {
        if (!this.currentAnimation) return null;

        return this.animations[this.currentAnimation]
            .frames[this.frameIndex];
    }

    isFinished() {
        return !this.playing;
    }
}