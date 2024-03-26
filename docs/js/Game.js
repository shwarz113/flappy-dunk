class Game {
  constructor() {
    // this.game = new BasicGame();
    this.numberOfHoops = -1;
    this.gravity = 3;
    this.accelerationX = 3;
    this.velocityX = 0;
    this.velocityY = 0;
    this.height = 400;
    this.width = 400;
    this.invertGravity = false;
    this.madHoop = false;
    this.world = new BasicGame(
      this.accelerationX,
      this.gravity,
      this.velocityX,
      this.velocityY,
      this.numberOfHoops,
      this.invertGravity,
      this.madHoop
    );
  }
  update() {
    this.world.update();
  }
}

// class Game {
//   constructor() {
//     this.colour = 'rgb(0,0,0)';
//     this.colours = [0, 0, 0];
//     this.shifts = [1, 1, 1];
//     this.world = {
//       backgroundColor: 'rgba(40,48,56,0.25)',
//       friction: 0.9,
//       gravity: 3,
//       player: new Game.Player(),
//       height: 72,
//       width: 128,
//       collideObject: function (object) {
//         if (object.x < 0) {
//           object.x = 0;
//           object.velocityX = 0;
//         } else if (object.x + object.width > this.width) {
//           object.x = this.width - object.width;
//           object.velocityX = 0;
//         }

//         if (object.y < 0) {
//           object.y = 0;
//           object.velocityY = 0;
//         } else if (object.y + object.height > this.height) {
//           object.jumping = false;
//           object.y = this.height - object.height;
//           object.velocityY = 0;
//         }
//       },

//       update: function () {
//         this.player.velocityY += this.gravity;
//         this.player.update();
//         this.player.velocityX *= this.friction;
//         this.player.velocityY *= this.friction;
//         this.collideObject(this.player);
//       }
//     }
//   }

//   update() {
//     this.world.update();
//   }
// }


// Game.Animator = class {
//   constructor(frameSet, delay, mode = 'loop') {
//     this.count = 0;
//     this.delay = delay >= 1 ? delay : 1;
//     this.frameSet = frameSet;
//     this.frameIndex = 0;
//     this.frameValue = frameSet[0];
//     this.mode = mode;
//   }
//   animate() {
//     switch (this.mode) {
//       case 'loop':
//         this.loop();
//         break;
//       case 'pause':
//         break;
//     }
//   }
//   changeFrameSet(frameSet, mode, delay = 10, frameIndex = 0) {
//     if (this.frameSet === frameSet) {
//       return;
//     }
//     this.count = 0;
//     this.delay = delay;
//     this.frameSet = frameSet;
//     this.frameIndex = frameIndex;
//     this.frameValue = this.frameValue;
//     this.mode = mode;
//   }
//   loop() {
//     this.count++;
//     while (this.count > this.delay) {
//       this.count -= this.delay;
//       this.frameIndex = this.frameIndex < this.frameSet.length - 1 ? this.frameIndex + 1 : 0;
//       this.frameValue = this.frameSet[this.frameIndex];
//     }
//   }
// }


// Game.Frame = class {
//   constructor(x, y, width, height, offsetX = 0, offsetY = 0) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.offsetX = offsetX;
//     this.offsetY = offsetY;
//   }
// }

// Game.Object = class {
//   constructor(x, y, width, height) {
//     this.height = height;
//     this.width = width;
//     this.x = x;
//     this.y = y;
//   }

//   collideObject() {
//     if (this.right() < object.left() ||
//       this.bottom() < object.top() ||
//       this.left() > object.right() ||
//       this.top > object.bottom()) {
//       return false;
//     }
//     return true;
//   }

//   collideObjectCenter() {
//     let centerX = object.centerX();
//     let centerY = object.centerY();

//     if (centerX < this.left() || centerX > this.right() ||
//       centerY < this.top() || centerY > bottom()) {
//       return false;
//     }
//     return true;
//   }

//   get top() {
//     return this.y;
//   }
//   get bottom() {
//     return this.y + this.height;
//   }
//   get left() {
//     return this.x;
//   }
//   get right() {
//     return this.x + this.width
//   }
//   get centerX() {
//     return this.x + this.width * 0.5;
//   }
//   get centerY() {
//     return this.y + this.height * 0.5;
//   }

//   set top(y) {
//     this.y = y;
//   }
//   set bottom(y) {
//     this.y = y - this.height;
//   }
//   set left(x) {
//     this.x = x;
//   }
//   set right(x) {
//     this.x = x - this.width;
//   }
//   set centerX(x) {
//     this.x = x - this.width * 0.5;
//   }
//   set centerY(y) {
//     this.y = y - this.height * 0.5;
//   }
// }

// // Game.MovingObject = class {
// //   constructor(x, y, width, height, velocityMax = 12) {
// //     super(x, y, width, height);
// //     this.jumping = false;
// //     this.velocityMax = velocityMax;
// //     this.velocityX = 0;
// //     this.velocityY = 0;
// //     this.xOld = x;
// //     this.yOld = y;
// //   }
// //   get oldTop() {
// //     return this.yOld;
// //   }
// //   get oldBottom() {
// //     return this.yOld + this.height;
// //   }
// //   get oldLeft() {
// //     return this.xOld;
// //   }
// //   get oldRight() {
// //     return this.xOld + this.width;
// //   }
// //   get oldCenterX() {
// //     return this.xOld + this.width * 0.5;
// //   }
// //   get oldCenterY() {
// //     return this.yOld + this.height * 0.5;
// //   }

// //   set oldTop(y) {
// //     this.yOld = y;
// //   }
// //   set oldBottom(y) {
// //     this.yOld = y - this.height;
// //   }
// //   set oldLeft(x) {
// //     this.xOld = x;
// //   }
// //   set oldRight(x) {
// //     this.xOld = x - this.width;
// //   }
// //   set oldCenterX(x) {
// //     this.xOld = x - this.width * 0.5;
// //   }
// //   set oldCenterY(y) {
// //     this.yOld = y - this.height * 0.5;
// //   }
// // }

// // Game.Ball = class {
// //   constructor(x, y, radius) {
// //     super()
// //   }

// // }

// // Game.Player = class {
// //   constructor(x, y) {
// //     this.colour = '#ff00ff';
// //     this.height = 16;
// //     this.jumping = true;
// //     this.velocityX = 0;
// //     this.velocityY = 0;
// //     this.width = 16;
// //     this.x = 100;
// //     this.y = 50;
// //   }
// //   jump() {
// //     if (!this.jumping) {
// //       this.colour = "#" + Math.floor(Math.random() * 16777216).toString(16);
// //       if (this.colour.length !== 7) {
// //         this.colour = this.colour.slice(0, 1) + '0' + this.colour.slice(1, 6);
// //       }
// //       this.jumping = true;
// //       this.velocityY -= 20;
// //     }
// //   }
// //   moveLeft() {
// //     this.velocityX -= 0.5;
// //   }
// //   moveRight() {
// //     this.velocityX += 0.5;
// //   }
// //   update() {
// //     this.x += this.velocityX;
// //     this.y += this.velocityY
// //   }
// // }
