class Game {
  constructor() {
    this.colour = 'rgb(0,0,0)';
    this.colours = [0, 0, 0];
    this.shifts = [1, 1, 1];
    this.world = {
      backgroundColor: 'rgba(40,48,56,0.25)',
      friction: 0.9,
      gravity: 3,
      player: new Game.Player(),
      height: 72,
      width: 128,
      collideObject: function (object) {
        if (object.x < 0) {
          object.x = 0;
          object.velocityX = 0;
        } else if (object.x + object.width > this.width) {
          object.x = this.width - object.width;
          object.velocityX = 0;
        }

        if (object.y < 0) {
          object.y = 0;
          object.velocityY = 0;
        } else if (object.y + object.height > this.height) {
          object.jumping = false;
          object.y = this.height - object.height;
          object.velocityY = 0;
        }
      },

      update: function () {
        this.player.velocityY += this.gravity;
        this.player.update();
        this.player.velocityX *= this.friction;
        this.player.velocityY *= this.friction;
        this.collideObject(this.player);
      }
    }
  }

  update() {
    this.world.update();
  }
}

Game.Player = class {
  constructor(x, y) {
    this.colour = '#ff00ff';
    this.height = 16;
    this.jumping = true;
    this.velocityX = 0;
    this.velocityY = 0;
    this.width = 16;
    this.x = 100;
    this.y = 50;
  }
  jump() {
    if (!this.jumping) {
      this.colour = "#" + Math.floor(Math.random() * 16777216).toString(16);
      if (this.colour.length !== 7) {
        this.colour = this.colour.slice(0, 1) + '0' + this.colour.slice(1, 6);
      }
      this.jumping = true;
      this.velocityY -= 20;
    }
  }
  moveLeft() {
    this.velocityX -= 0.5;
  }
  moveRight() {
    this.velocityX += 0.5;
  }
  update() {
    this.x += this.velocityX;
    this.y += this.velocityY
  }
}