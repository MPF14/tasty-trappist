export class Renderer {
    constructor(canvas, width = 320, height = 180, scale = 4) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.width = width;
        this.height = height;
        this.scale = scale;

        this.canvas.width = width;
        this.canvas.height = height;

        this.ctx.imageSmoothingEnabled = false;
    }

    clear(color = "#d8d0bd") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
    
    drawSprite(character, sprite, x, y, pixelSize = 1) {
        const ctx = this.ctx;
        if (!sprite) return;
        sprite.forEach((row, py) => {
            [...row].forEach((pixel, px) => {
                if (pixel === ".") return;
                ctx.fillStyle = character.colors[pixel];
                ctx.fillRect(
                    x + px * pixelSize,
                    y + py * pixelSize,
                    pixelSize,
                    pixelSize
                );
            });
        });
        
}
    isPixelAt(character, sprite, x, y, pixelSize, mouseX, mouseY) {
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