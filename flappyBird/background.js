class BackgroundLayer {
    constructor(image, speed, width, height, y, context) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = y;
        this.context = context
        this.x2 = this.width;
        this.speed = speed;
    }
    update() {
        if (this.x < -this.width) {
            this.x = this.width + this.x2 - this.speed
        }
        if (this.x2 < -this.width) {
            this.x2 = this.width + this.x - this.speed
        }
        this.x = this.x - this.speed
        this.x2 = this.x2 - this.speed
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.context.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

export { BackgroundLayer };