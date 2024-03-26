class MovingObject extends Object {
  constructor(x, y, width, height, velocityMax = 12) {
    super(x, y, width, height);
    this.jumping = false;
    this.velocityMax = velocityMax;
    this.velocityX = 0;
    this.velocityY = 0;
    this.xOld = x;
    this.yOld = y;
  }
  get oldTop() {
    return this.yOld;
  }
  get oldBottom() {
    return this.yOld + this.height;
  }
  get oldLeft() {
    return this.xOld;
  }
  get oldRight() {
    return this.xOld + this.width;
  }
  get oldCenterX() {
    return this.xOld + this.width * 0.5;
  }
  get oldCenterY() {
    return this.yOld + this.height * 0.5;
  }

  set oldTop(y) {
    this.yOld = y;
  }
  set oldBottom(y) {
    this.yOld = y - this.height;
  }
  set oldLeft(x) {
    this.xOld = x;
  }
  set oldRight(x) {
    this.xOld = x - this.width;
  }
  set oldCenterX(x) {
    this.xOld = x - this.width * 0.5;
  }
  set oldCenterY(y) {
    this.yOld = y - this.height * 0.5;
  }
}
