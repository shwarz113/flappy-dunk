class AssetsManager {
  constructor() {
    this.spritesheet = undefined;
  }

  requestImage(url, cb) {
    let image = new Image();
    image.addEventListener('load', () => {
      cb(image);
    }, { once: true });
    image.src = url;
  }
}