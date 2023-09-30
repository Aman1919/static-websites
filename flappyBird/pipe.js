class Pipe {
    constructor(image, width, height, x, y, speed) {
        this.width = width,
            this.height = height
        this.x = x,
            this.y = y
        this.image = image;
        this.speed = speed

    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        this.update()
    }
    update() {
        this.x -= this.speed;
    }

    hits(bird, height, gap) {
        if ((bird.y < this.height && this.y === 0) || bird.y > height - this.height) {
            if (bird.x + bird.width >= this.x && bird.x <= this.x + this.width) {
                console.log(this, bird)
                return true;
            }
        }
        return false;
    }

}


export { Pipe }