class Object {
  constructor(x, y, width, height) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  collideObject() {
    if (this.right() < object.left() ||
      this.bottom() < object.top() ||
      this.left() > object.right() ||
      this.top > object.bottom()) {
      return false;
    }
    return true;
  }

  collideObjectCenter() {
    let centerX = object.centerX();
    let centerY = object.centerY();

    if (centerX < this.left() || centerX > this.right() ||
      centerY < this.top() || centerY > bottom()) {
      return false;
    }
    return true;
  }

  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width
  }
  get centerX() {
    return this.x + this.width * 0.5;
  }
  get centerY() {
    return this.y + this.height * 0.5;
  }

  set top(y) {
    this.y = y;
  }
  set bottom(y) {
    this.y = y - this.height;
  }
  set left(x) {
    this.x = x;
  }
  set right(x) {
    this.x = x - this.width;
  }
  set centerX(x) {
    this.x = x - this.width * 0.5;
  }
  set centerY(y) {
    this.y = y - this.height * 0.5;
  }
}