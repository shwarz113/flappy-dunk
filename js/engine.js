class Engine {
  constructor(timeStep,update,render) {
    this.accumulatedTime = 0; // Amount of time since last update.
    this.animationFrameRequest = undefined; // reference to the AFR.
  }
}