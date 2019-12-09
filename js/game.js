class Game {
  constructor() {
    this.colour = 'rgb(0,0,0)';
    this.colours = [0, 0, 0];
    this.shifts = [1, 1, 1];
  }

  update() {
    for (let index = 0; index < 3; index++) {

      let colour = this.colours[index];
      let shift = this.shifts[index];

      if (colour + shift > 255 || colour + shift < 0) {
        shift = (shift < 0) ? Math.floor(Math.random() * 2) + 1 : Math.floor(Math.random() * -2) - 1;
      }

      colour += shift;

      this.colours[index] = colour;
      this.shifts[index] = shift;
    }

    this.colour = `rgb(${this.colours[0]}, ${this.colours[1]}, ${this.colours[2]})`;
  }
}