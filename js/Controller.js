class Controller {
  constructor() {
    // this.down = new Controller.ButtonInput();
    this.left = new Controller.ButtonInput();
    this.right = new Controller.ButtonInput();
    this.up = new Controller.ButtonInput();
  }

  keyDownUp(type, key) {
    const down = type === 'keydown' ? true : false;

    switch (key) {
      case 'ArrowLeft':
        this.left.getInput(down);
        break;
      case 'ArrowRight':
        this.right.getInput(down);
        break;
      case 'ArrowUp':
        this.up.getInput(down);
    }
  }
  // handleKeyDownUp(event) {
  //   this.keyDownUp(event);
  // }
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