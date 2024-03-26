class Ball {
  constructor(x,
    y,
    radius,
    velocityX = 0,
    velocityY = 0
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    // this.rotating = false;
    this.currentFrame = 0;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.directionX = 1;
  }

  get width() {
    return this.diameter;
  }

  get height() {
    return this.diameter;
  }

  get diameter() {
    return this.radius * 2;
  }
  bounce() {
    this.velocityY -= 10;
  }
  update() {
    this.y += this.velocityY;
  }
}