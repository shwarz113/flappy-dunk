class BasicGame {
  constructor(
    accelerationX = 3,
    gravity = 3,
    velocityX = 0,
    velocityY = 0,
    noOfHoops = -1,
    invertGravity = false,
    madHoop = false
  ) {
    this.backgroundColor = 'rgba(40,48,56,0.25)';
    // this.friction = 0.9;
    this.accelerationX = accelerationX;
    this.gravity = gravity;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.noOfHoops = noOfHoops;
    // this.hopX = 10;
    // this.hopY = 10;
    this.height = 480;
    this.width = 640;
    this.ball = new Ball(20, 20, 56, this.velocityX, this.velocityY);
    this.invertGravity = invertGravity;
    this.madHoop = madHoop;
  }
  update() {
    this.ball.velocityY += this.gravity;
    this.ball.update();
    // if (active) {
    //   this.ball.velocityX += this.accelerationX;
    // }
  }

}