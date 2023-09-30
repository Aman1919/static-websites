class Bird {
    constructor(image, context, x, y) {
        this.width = Math.min(82, window.innerWidth * 0.07),
            this.height = Math.min(64, this.width - 8),
            this.image = image
        this.x = x,
            this.y = y
        this.v = 0
        this.wg = 0.4
        this.lift = -13
        this.context = context;
    }
    draw() {
        this.context.drawImage(this.image, 0, 0, 92, 64, this.x, this.y, this.width, this.height);

    }

    jump() {
        this.v += this.lift;
        if (this.v >= 3 * this.lift) {
            this.v = this.lift
        }
        if (!this.moving) this.moving = true
    }
    update(height) {
        this.y += this.v
        this.v += this.wg
        this.v *= 0.95
        if (this.y >= height - this.width) {
            this.y = height - this.width + 10
            // console.log(this.v)
        }
        if (this.y <= 0) {
            this.y = 0
        }
    }
}

export { Bird }
