import { BackgroundLayer } from "./background.js"
import { Bird } from "./bird.js"
import { Pipe } from "./pipe.js"

const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');
canvas.width = Math.min(500, window.innerWidth * 0.9)
canvas.height = Math.min(800, window.innerHeight * 0.9)

const width = canvas.width
const height = canvas.height
let score = 0;
let pScore = document.querySelector("p.score")
let img_sky = new Image();
img_sky.src = "./img/background.png"
let img_bird = new Image();
img_bird.src = "./img/bird.png"
let img_ground = new Image();
img_ground.src = "./img/ground.png"

let img_pipe = new Image();
img_pipe.src = "./img/pipe.png"
let img_pipeup = new Image();
img_pipeup.src = "./img/pipeup.png"


let ground_height = 100
let s = false;
let click = false;
let pipes = [];
let Gap = 200;
let hit = false;


class Game {
    constructor(width, height, context) {
        this.width = width
        this.height = height
        this.context = context
        this.speed = 3
        this.sky = new BackgroundLayer(img_sky, this.speed, width, height - ground_height, 0, context)
        this.ground = new BackgroundLayer(img_ground, this.speed, width, ground_height, height - ground_height, context)
        this.bird = new Bird(img_bird, this.context, width / 3.5, height / 2.5)
    }

    animate() {
        this.context.clearRect(0, 0, width, height)
        this.sky.draw()
        this.ground.draw();
        this.bird.draw();
        this.pipeGone()
        pipes.forEach(p => {
            p.draw(this.context, canvas);
            hit = p.hits(this.bird, this.height);
        })
        if (click) {
            this.bird.update(this.height - ground_height)
            this.score()
        }
        this.sky.update()
        this.ground.update();
    }

    genratePipe() {
        let randomHeight = (Math.floor(Math.random() * (2 - 5 + 1)) + 3) * 100;
        let UpPipe = new Pipe(img_pipeup, this.width / 7, randomHeight, width, 0, this.speed)
        let downh = (this.height - ground_height) - (randomHeight + Gap)
        let downPipe = new Pipe(img_pipe, this.width / 7, downh, width, randomHeight + Gap, this.speed)
        s = true
        pipes.push(UpPipe, downPipe);
    }

    pipeGone() {
        if (pipes.length && pipes[0].x <= -pipes[0].width) {
            pipes = [];
            s = false;
            this.genratePipe()
        }
    }

    score() {
        if (this.bird.x > pipes[0].x && s) {
            score++;
            pScore.innerHTML = `Score : ${score} `
            s = false;
        }
    }

    gameOver() {
        if (this.bird.y <= 0 || this.bird.y >= this.height - ground_height - this.bird.width || hit) return true;
    }
}


let game = new Game(width, height, context)
function Main() {
    let animation;
    if (game.gameOver()) {
        console.log("gameover")
        window.cancelAnimationFrame(animation);
        alert('GameOver! Score : ' + score)
    } else {
        game.animate()
        animation = window.requestAnimationFrame(Main);
    }

}
canvas.onclick = () => {
    if (!click) {

        game.genratePipe();
        click = true;
    }
    game.bird.jump();
}


Main()
