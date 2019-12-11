/**
 * Class representing display.
 */
class Display {
  /**
   * Create a buffer canvas and the context from the canvas passed during instantiation
   * @param {HTMLElement} canvas - The canvas to draw on.
   */
  constructor(canvas) {
    this.buffer = document.createElement('canvas').getContext('2d');
    this.context = canvas.getContext('2d');
  }

  drawRectangle(x, y, width, height, colour) {
    this.buffer.fillStyle = colour;
    this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
  }

  fill(colour) {
    this.buffer.fillStyle = colour;
    this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);
  }

  /**
   * Fills the actual canvas with the buffer canvas.
   */
  render() {
    this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  /**
   * Handles the resizing of the canvas.
   */
  resize(width, height, heightWidthRatio) {
    if (height / width > heightWidthRatio) {
      this.context.canvas.height = width * heightWidthRatio;
      this.context.canvas.width = width;
    } else {
      this.context.canvas.height = height;
      this.context.canvas.width = height / heightWidthRatio;
    }
    this.context.imageSmoothingEnabled = false;
  }
}