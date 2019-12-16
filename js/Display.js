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

  drawObject(image, sourceX, sourceY, destinationX, destinationY, width, height) {
    this.buffer.drawImage(
      image,
      sourceX,
      sourceY,
      width,
      height,
      Math.round(destinationX),
      Math.round(destinationY),
      width,
      height
    );
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

  /**
   * Fills the actual canvas with the buffer canvas.
   */
  render() {
    this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);
  }
}