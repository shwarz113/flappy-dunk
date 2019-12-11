'use strict';
/**
 * Renders after loading only!
 */
window.addEventListener('load', () => {
  // const render = () => {
  //   display.renderColour(game.colour);
  //   display.render();
  // }

  const keyDownUp = (event) => {
    controller.keyDownUp(event.type, event.key);
  }

  const resize = () => {
    display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
    display.render();
  }

  const render = () => {
    display.fill(game.world.backgroundColor);
    display.drawRectangle(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.colour);
    display.render();
  }
  // const update = () => {
  //   game.update();
  // }
  const update = () => {
    if (controller.left.active) {
      game.world.player.moveLeft();
    }
    if (controller.right.active) {
      game.world.player.moveRight();
    }
    if (controller.up.active) {
      game.world.player.jump();
      controller.up.active = false;
    }
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

  /**
   * Handles the rendering and update on certain animation frame.
   */
  const engine = new Engine(1000 / FPS, render, update);


  //////////////////////
  /// INITIALIZATION ///
  //////////////////////

  display.buffer.canvas.height = game.world.height;
  display.buffer.canvas.width = game.world.width;

  window.addEventListener('resize', resize);
  window.addEventListener('keydown', keyDownUp);
  window.addEventListener('keyup', keyDownUp);

  resize();
  engine.start();

});