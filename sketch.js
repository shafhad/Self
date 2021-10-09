//write code here
var PLAY = 1
var END = 0

var gameState = PLAY
var mario, mario_running, mario_collided
var ground, invisibleground, groundImg
var obstaclesGroup, obstacles1, obstacles2, obstacles3, obstacles4, obstacles5
var score = 0
var mario1
var obstacle1img,obstacle2img,obstacle3img,obstacle4img,obstacle5img
var gameOver, restart
var coinGroup, coinImg, coin
var bgImg

function preload() {
    mario_running = loadAnimation("./mario.png")
    mario1=loadImage("./mario.png");
    mario_collided = loadAnimation("./mario_colided.png")
    groundImg = loadImage("./ground2.jpg")
    obstacle1img = loadImage("./obstacle1.png")
    obstacle2img = loadImage("./obstacle2.jpg")
    obstacle3img = loadImage("./obstacle3.png")
    obstacle4img = loadImage("./obstacle4.png")
    obstacle5img = loadImage("./obstacle5.png")
    coinImg = loadImage("./coin.png")
    bgImg = loadImage("./bg.png")
}

function setup() {
    createCanvas(800, 800)
    mario = createSprite(50, 170, 20, 50)
    mario.addAnimation("running", mario_running)
    console.log(mario);
    console.log("mario image loaded !");
    mario.addAnimation("collided", mario_collided)
    mario.scale = 0.1

    ground = createSprite(400, 400, 400, 20)
    ground.addImage("ground", groundImg)
    ground.x = ground.width / 2


    obstaclesGroup = new Group()
    coinGroup = new Group()

    score = 0




}


function draw() {
    background("white")
    text("score" + score, 500, 50);
    if (gameState === PLAY) {
        score = score + Math.round(getFrameRate() / 600)
        mario.changeAnimation("running", mario_running)

        if (keyDown(UP_ARROW) && mario.y >= 150) {
            mario.velocityY = -12

        }
        mario.velocityY = mario.velocityY + 0.8
        if (keyDown(RIGHT_ARROW)) {
            mario.velocityX = +5
        }
      //  if (ground.x < 0) {
        //    ground.x = ground.width / 2
        //}
        mario.collide(ground)
        obstacles1()
        obstacles2()
        obstacles3()
        obstacles4()
        obstacles5()

        if (obstaclesGroup.isTouching(mario)) {
            gameState = END
        }

    }
    drawSprites()


}
function obstacles1() {
    if (frameCount % 100 === 0) {
        var obstacle1 = createSprite(600, 500, 10, 40)
        obstacle1.velocityX = -1

        obstacle1.y = Math.round(random(120, 150));
        obstacle1.addImage(obstacle1img)

        obstacle1.scale = 0.3
        obstacle1.lifetime = 300
    }

}

function obstacles2() {
    if (frameCount % 80 === 0) {
        var obstacle2 = createSprite(500, 500, 10, 40)
        obstacle2.velocityX = -3

        obstacle2.y = Math.round(random(300, 300));
        obstacle2.addImage(obstacle2img)

        obstacle2.scale = 0.3
        obstacle2.lifetime = 300
    }

}
function obstacles3() {
    if (frameCount % 150 === 0) {
        var obstacle3 = createSprite(700, 500, 10, 40)
        obstacle3.velocityX = -2

        obstacle3.y = Math.round(random(80, 90));
        obstacle3.addImage(obstacle3img)

        obstacle3.scale = 0.08
        obstacle3.lifetime = 300
    }

}
function obstacles4() {
    if (frameCount % 120 === 0) {
        var obstacle4 = createSprite(700, 120, 10, 40)
        obstacle4.velocityX = -1

        obstacle4.x = Math.round(random(120, 300));
        obstacle4.addImage(obstacle4img)

        obstacle4.scale = 0.3
        obstacle4.lifetime = 300
    }

}
function obstacles5() {
    if (frameCount % 300 === 0) {
        var obstacle5 = createSprite(600, 165, 10, 40)
        obstacle5.velocityX = -1

        obstacle5.y = Math.round(random(10, 120));
        obstacle5.addImage(obstacle5img)

        obstacle5.scale = 0.3
        obstacle5.lifetime = 300

    }

}