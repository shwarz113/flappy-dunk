class Engine {
  constructor(timeStep, update, render) {
    this.accumulatedTime = 0; // Amount of time since last update.
    this.animationFrameRequest = undefined; // Reference to the AFR.
    this.time = undefined; // The most recent timestamp of loop execution.
    this.timeStep = timeStep  // FPS, 1000/30 = 30 FPS

    this.updated = false; // Whether or not the update function has been called since last cycle.

    this.update = update; // Update function
    this.render = render; // Render function
    // console.log(this.update);
  }

  run(timeStamp) {
    this.accumulatedTime += timeStamp - this.time;
    this.time = timeStamp;

    // For too slow devices.
    if (this.accumulatedTime >= this.timeStep * 3) {
      this.accumulatedTime = this.timeStep;
    }

    // Update when screen is ready and requestAnimationFrame calls the run function.
    while (this.accumulatedTime >= this.timeStep) {
      this.accumulatedTime -= this.timeStep;
      this.update(timeStamp);
      this.updated = true; // Redraw if game is updated!
    }

    // Only draw when the game has updated!
    if (this.updated) {
      this.updated = false;
      this.render(timeStamp);
    }

    this.animationFrameRequest = window.requestAnimationFrame(this.handleRun.bind(this));
  }

  handleRun(timeStep) {
    this.run(timeStep);
  }

  start() {
    this.accumulatedTime = this.timeStep;
    this.time = window.performance.now();
    this.animationFrameRequest = window.requestAnimationFrame(this.handleRun.bind(this));
  }

  stop() {
    window.cancelAnimationFrame(this.animationFrameRequest);
  }
}