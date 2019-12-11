class Ball {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.rotating = false;
  }

  static get radius() {
    return RADIUS;
  }

  draw() {
    const image = new Image();
    image.src = 'images/ball.png';

    image.addEventListener('load', () => {
      this.ctx.drawImage('')
    })
  }

}