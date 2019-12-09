'use strict';
/**
 * Renders after loading only!
 */
window.addEventListener('load', () => {
  const render = () => {
    display.renderColour(game.colour);
    display.render();
  }

  const update = () => {
    game.update();
  }

  /**
   * Handles user input.
   */
  const controller = new Controller();

  /**
   * Handles window resizing and the screen canvas display.
   */
  const display = new Display(document.querySelector('canvas'));

  /**
   * Holds our game logic.
   */
  const game = new Game();

  const engine = new Engine(1000 / 30, render, update);


  //////////////////////
  /// INITIALIZATION ///
  //////////////////////

  window.addEventListener('resize', display.handleResize.bind(display));
  window.addEventListener('keydown', controller.handleKeyDownUp.bind(controller));
  window.addEventListener('keyup', controller.handleKeyDownUp.bind(controller));

  display.resize();
  engine.start();

});