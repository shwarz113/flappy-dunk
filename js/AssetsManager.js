class AssetsManager {
  constructor() {
    this.ball = undefined;
    this.innerHoop = undefined;
    this.outerHoop = undefined;
  }

  requestImage(url, cb) {
    let image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
      cb(image);
    }, { once: true });
  }
  // loadBall(afterBallLoad) {
  //   this.ball = new Image();
  //   this.ball.addEventListener('load', () => {
  //     afterBallLoad();
  //   }, { once: true });
  //   this.ball.src = 'images/ball.png';
  // }

  // loadHoop(afterInnerHoopLoad, afterOuterHoopLoad) {
  //   this.innerHoop = new Image();
  //   this.outerHoop = new Image();
  //   this.innerHoop.addEventListener('load', () => {
  //     afterInnerHoopLoad();
  //   }, { once: true });
  //   this.outerHoop.addEventListener('load', () => {
  //     afterOuterHoopLoad();
  //   }, { once: true });
  //   this.innerHoop.src = 'images/innerHoop.png';
  //   this.outerHoop.src = 'images/outerHoop.png';
  // }

}