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

  /**
   * Fills the colour in the buffer canvas.
   * @param {String} colour - The colour to fill the context of buffer canvas
   */
  renderColour(colour) {
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
   * @param {Event} event - The resize event
   */
  resize(event) {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    this.context.canvas.height = height - 32;
    this.context.canvas.width = width - 32;

    this.render();
  }

  /**
   * Handles the resizing of the canvas.
   * @param {Event} event - The resize event
   */
  handleResize(event) {
    this.resize(event);
  }
}