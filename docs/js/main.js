'use strict';
/**
 * Renders after loading only!
 */
window.addEventListener('load', () => {

  const keyDownUp = (event) => {
    controller.keyDownUp(event.type, event.key);
  }

  const resize = () => {
    display.resize(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
      game.world.height / game.world.width
    );
    display.render();
  }

  const render = () => {
    // let frame = undefined;

    // display.fill(game.world.backgroundColor);

    display.drawObject(
      assetsManager.spritesheet,
      1,
      1,
      game.world.ball.x,
      game.world.ball.y,
      game.world.ball.radius * 2,
      game.world.ball.radius * 2
    );

    display.render();
  }

  const update = () => {
    if (controller.up.active) {
      game.world.ball.bounce();
      controller.up.active = false;
    }
    game.update();
    // return;
  }


  /**
   * Handles assets.
   */
  const assetsManager = new AssetsManager();

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
  display.buffer.imageSmoothingEnabled = false;

  assetsManager.requestImage('images/spritesheet.png', (image) => {
    assetsManager.spritesheet = image;
    resize();
    engine.start();
  });


  window.addEventListener('resize', resize);
  window.addEventListener('keydown', keyDownUp);
  window.addEventListener('keyup', keyDownUp);
});