class Controller {
  constructor() {
    // this.down = new Controller.ButtonInput();
    // this.left = new Controller.ButtonInput();
    // this.right = new Controller.ButtonInput();
    this.up = new Controller.ButtonInput();
  }

  keyDownUp(type, key) {
    const down = type === 'keydown' ? true : false;
    if (key = 'ArrowUp') {
      this.up.getInput(down);
    }
  }
}

Controller.ButtonInput = class {
  constructor() {
    this.active = this.down = false;
  }
  getInput(down) {
    if (this.down !== down) {
      this.active = down;
    }
    this.down = down;
  }
};