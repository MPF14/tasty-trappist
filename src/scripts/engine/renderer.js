
export class Renderer {
    constructor(canvas, width = 320, height = 180) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.width = width;
        this.height = height;

        this.canvas.width = width;
        this.canvas.height = height;
    }

    resize(width, height) {
        this.width = width;
        this.height = height;

        this.canvas.width = width;
        this.canvas.height = height;
    }

    clear(color = "#d8d0bd") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawSprite(character, sprite, x, y, pixelSize = 1) {
        if (!sprite) return;

        const ctx = this.ctx;

        sprite.forEach((row, py) => {
            [...row].forEach((pixel, px) => {
                if (pixel === ".") return;

                const color = character.colors[pixel];
                if (!color) return;

                ctx.fillStyle = color;

                ctx.fillRect(
                    px * pixelSize + x,
                    py * pixelSize + y,
                    pixelSize,
                    pixelSize
                );
            });
        });
    }

    isPixelAt(character, sprite, x, y, pixelSize, mouseX, mouseY) {
        if (!sprite) return false;

        const spriteX = Math.floor((mouseX - x) / pixelSize);
        const spriteY = Math.floor((mouseY - y) / pixelSize);

        if (
            spriteY < 0 ||
            spriteY >= sprite.length ||
            spriteX < 0 ||
            spriteX >= sprite[spriteY].length
        ) {
            return false;
        }

        const pixel = sprite[spriteY][spriteX];

        return pixel !== "." && character.colors[pixel] !== undefined;
    }
}
