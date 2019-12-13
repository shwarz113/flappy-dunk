class Ball {
  constructor(x, y, radius, acceleration) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    // this.rotating = false;
    this.currentFrame = 0;
    this.acceleration = acceleration;
    this.velocityX = 0;
    this.velocityY = 0;
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
}